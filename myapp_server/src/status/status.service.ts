import { Injectable } from '@nestjs/common';
import { Dev_list } from './entity/status';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Tasks from 'resources/protos/task';


@Injectable()
export class StatusService {
  constructor(
    @InjectRepository(Dev_list)
    private dev_listRepository: Repository<Dev_list>,
  ) {}
  // 所有设备数据列表
  dev_list(): any {
    // console.log("task:",Tasks);
    const data = this.dev_listRepository.query(
      'select id,name,description,addr,rrt,uid from dev_lists',
    );
    return data;
  }
  // 查询（上/下/操控台）机械臂的数据
  select_arm(id: number) {
    const data = this.dev_listRepository.query(
      `select 
      A.status, A.joint_1,A.joint_2,A.joint_3,A.joint_4,A.joint_5,A.joint_6,A.error_code,
      B.name as status_name,C.name as error_code_name
      from runtime_info_fr as A 
      left join stat_types_fr as B ON A.status=B.id 
      left join err_types_fr as C ON A.error_code=C.id 
      where A.dev_id=${id} `,
    );
    return data;
  }
  // 底盘电机控制器
  select_motor(id: number) {
    const data = this.dev_listRepository.query(
      `select 
      A.temp,A.voltage,A.current,A.error_code_left,A.error_code_right,
      B.name as err_left_name,C.name as err_right_name
      from runtime_info_motor as A 
      left join err_types_motor as B ON A.error_code_left=B.id
      left join err_types_motor as C ON A.error_code_right=C.id
      where A.dev_id=${id}`,
    );
    return data;
  }
  // 查询电池信息
  select_battery(id: number) {
    const data = this.dev_listRepository.query(
      `select 
      A.voltage,A.current,A.capacity,A.cycles,A.error_code,A.charge,A.percent,
      B.name as error_code_name
      from runtime_info_battery as A 
      left join err_types_battery as B ON A.error_code=B.id 
      where A.dev_id=${id}`,
    );
    return data;
  }
  // 查询机器人状态
   async select_roboot() {
    return await Tasks.GetRobotState();
  }
  // 查询机器人的信息（位置）
  async select_pos(){
    return await Tasks.RobotInfo();
  }
}
