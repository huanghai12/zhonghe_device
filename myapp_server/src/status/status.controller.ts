import { Controller, Get } from '@nestjs/common';
import { StatusService } from './status.service';

@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}
  @Get('dev_list')
  async dev_list() {
    const data = await this.statusService.dev_list();
    let i = 0;
    while (i < data.length) {
      const element = data[i];
      let data2 = [];
      if (element.id == 1 || element.id == 2 || element.id == 3) {
        // 操作台\上\下机械臂
        data2 = await this.statusService.select_arm(element.id);
        const data3 = data2[0];
        const joint_1 = data3.joint_1.toFixed(2);
        const joint_2 = data3.joint_2.toFixed(2);
        const joint_3 = data3.joint_3.toFixed(2);
        const joint_4 = data3.joint_4.toFixed(2);
        const joint_5 = data3.joint_5.toFixed(2);
        const joint_6 = data3.joint_6.toFixed(2);
        data[i] = {
          ...element,
          name: element.description,
          arr1: [
            { id: 1, name: 'RRT', text: element.rrt },
            {
              id: 2,
              name: '状态',
              text: data3.status_name,
              status: data3.status,
            },
            { id: 3, name: '故障码', text: data3.error_code_name },
            {
              id: 4,
              name: '关节数据',
              text: `[${joint_1},${joint_2},${joint_3},${joint_4},${joint_5},${joint_6}]`,
            },
          ],
        };
      } else if (element.id == 4) {
        // 处理底盘电机控制器
        data2 = await this.statusService.select_motor(element.id);
        const data3 = data2[0];
        data[i] = {
          ...element,
          name: element.description,
          arr1: [
            { id: 1, name: '实时温度', text: data3.temp },
            { id: 2, name: '实时电压', text: data3.voltage },
            { id: 3, name: '实时电流', text: data3.current },
            { id: 4, name: '故障码(左)', text: data3.err_left_name },
            { id: 5, name: '故障码(右)', text: data3.err_right_name },
          ],
        };
      } else if (element.id == 5) {
        // 电池
        data2 = await this.statusService.select_battery(element.id);
        const data3 = data2[0];
        data[i] = {
          ...element,
          name: element.description,
          arr1: [
            { id: 1, name: '实时电压', text: data3.voltage },
            { id: 2, name: '实时电流', text: data3.current },
            { id: 3, name: '循环次数', text: data3.cycles },
            { id: 4, name: '保护状态', text: data3.error_code_name },
            { id: 5, name: 'MOS状态', text: data3.charge },
            { id: 6, name: 'SOC', text: data3.percent },
          ],
        };
      } else if (element.id == 6) {
        // 多线激光雷达
        data[i] = {
          id: element.id,
          name: '多线激光雷达',
          arr1: [
            { id: 1, name: '前RRT', text: element.rrt },
            { id: 2, name: '后RRT', text: data[i + 1].rrt },
          ],
        };
        data.splice(i + 1, 1);
      } else if (element.id == 8 || element.id == 9) {
        // DI DO模块
        
        // const data6 = await this.statusService.getModbus();
        // console.log("data6:",data6)
        data[i] = {
          ...element,
          name: element.description,
          arr1: [
            { id: 1, name: 'RRT', text: element.rrt },
            {
              id: 2,
              name: '',
              type: 'btn',
              arr2: [
                { id: 1, name: 'DI1', select: true },
                { id: 2, name: 'DI1' },
                { id: 3, name: 'DI1' },
                { id: 4, name: 'DI1' },
                { id: 5, name: 'DI1' },
                { id: 6, name: 'DI1' },
                { id: 7, name: 'DI1' },
                { id: 8, name: 'DI1' },
              ],
            },
          ],
        };
      } else if (element.id > 9 && element.id < 19) {
        // 双光谱摄像头、机械臂摄像头、相机
        data[i] = {
          ...element,
          name: element.description,
          arr1: [
            { id: 1, name: '状态', text: element.rrt == -1 ? '离线' : '在线' },
            { id: 2, name: 'RRT', text: element.rrt },
          ],
        };
        if (element.id == 11) {
          data.splice(i + 1, 5);
        }
      } else if (element.id == 19) {
        // 车载路由器
        data[i] = {
          ...element,
          name: 'MOXA路由器',
          arr1: [
            { id: 1, name: '车载', text: element.rrt },
            { id: 2, name: '总控', text: data[i + 1].rrt },
          ],
        };
        data.splice(i + 1, 1);
      } else if (element.id == 21) {
        data[i] = {
          id: element.id,
          name: '电脑主机',
          arr_type: 'list',
          arr1: [
            { id: 1, name: element.description, text: element.rrt },
            { id: 2, name: data[i + 1].description, text: data[i + 1].addr },
            { id: 3, name: data[i + 2].description, text: data[i + 2].addr },
            { id: 4, name: data[i + 3].description, text: data[i + 3].addr },
            { id: 5, name: data[i + 4].description, text: data[i + 4].addr },
          ],
        };
        data.splice(i + 1, 4);
      }
      i++;
    }
    // 小车状态 state = 1(唤醒)2(唤醒)3(空闲)
    const data4 = await this.statusService.select_roboot();
    const state_list = [
      {id: 1, name: '关闭'},
      {id: 2, name: '休眠'},
      {id: 3, name: '空闲'},
      {id: 4, name: '遥控'},
      {id: 5, name: '充电'},
      {id: 6, name: '建图'},
      {id: 7, name: '交互'},
      {id: 8, name: '更新'},
      {id: 9, name: '跟随'},
      {id: 10, name: '唤醒'},
      {id: 11, name: '停止跟随'},
      {id: 12, name: '紧急停止'},
      {id: 13, name: '切换地图'},
      {id: 16, name: '切换地图完成'},
      {id: 41, name: '正在导航到充电桩'},
      {id: 42, name: '正在寻找充电桩'},
      {id: 43, name: '正在对接充电桩'},
      {id: 44, name: '正在充电'},
      {id: 45, name: '充电错误'},
      {id: 51, name: '正在规划导航路径'},
      {id: 52, name: '正在导航'},
      {id: 53, name: '导航完成'},
      {id: 54, name: '导航错误'},
    ]
    const state = state_list.find(item => item.id == data4);
    // 小车位置
    const data5: any = await this.statusService.select_pos();
    data.push({
      id: 22,
      name: '小车',
      arr_type: '',
      arr1: [
        { id: 1, name: '位置', text: `${data5.X.toFixed(2)},${data5.Y.toFixed(2)}` },
        { id: 2, name: '状态', text: state.name },
        { id: 3, name: '线速度', text: data5.Lin },
        { id: 4, name: '角速度', text: data5.Ang },
      ],
    });
    
    return data;
  }
}
