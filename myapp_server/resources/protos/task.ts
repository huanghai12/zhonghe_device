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
  estop: (callback) => {
    const request = new common.Empty();
    client.EStop(request, function (response) {
      if (response) {
        callback(response);
      } else {
        callback(null);
      }
    });
  },
  StopQRCodePath: (callback) => {
    const request = new common.Empty();
    client.StopQRCodePath(request, function (err, response) {
      if (response) {
        callback(response);
      } else {
        callback(null);
      }
    });
  },
  RunQRCodePath: (req, callback) => {
    const request = new common.QRCodePath();
    // request
    // string key        = 1;
    // uint32 task_id    = 2;
    // repeated QRCode code = 3;
    request.setKey(req.key);
    request.setTask_id(req.task_id);
    client.RunQRCodePath(request, function (err, response) {
      if (response) {
        callback(response);
      } else {
        callback(null);
      }
    });
  },
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
  }
};
export default Tasks;
