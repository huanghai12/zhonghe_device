/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
// const common = require('./common_pb');
const common= require('./common_pb')
const RpcService = require('./service_grpc_pb');
const grpc = require('@grpc/grpc-js');
const client = new RpcService.RpcClient(
  '192.168.99.30:50053',
  grpc.credentials.createInsecure(),
);
 const Tasks = {
    //   获取机器人状态
  GetRobotState: () => {
    const request = new common.Empty();
    return new Promise((resolve, reject) => {
      client.getRobotState(request, (err, response) => {
          if(response){
              const state = response?.array[0];
              resolve(state);
          }else {
              reject(null)
          }
      })
    })
  },
  // 获取机器人位置
  RobotInfo: () => {
    const request = new common.Empty();
    return new Promise((resolve, reject) => {
      client.getRobotInfo(request,(err, response) => {
      
        if(response){
          const result: any = {};
          const Pose = response.getPose();
          const Vel = response.getVel();
          result.X = Pose.getX();
          result.Y = Pose.getY();
          result.Lin = Vel.getLin();
          result.Ang = Vel.getAng();
          resolve(result)
        }else{
          reject(err)
        }
      })
    })
  },
// 获取DI DO 模块
  GetModbus: () => {
    return new Promise ((resolve,reject) => {
    const request = new common.Empty();
      client.getModbusStatus(request,(err, response) => {
        if(response){
          resolve(response)
        }else{
          console.log(err)
          reject(null)
        }
      })
    })
  }
};
export default Tasks;
