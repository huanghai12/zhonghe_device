// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var common_pb = require('./common_pb.js');
var mission_pb = require('./mission_pb.js');

function serialize_Yikun_Api_Common_ActionList(arg) {
  if (!(arg instanceof common_pb.ActionList)) {
    throw new Error('Expected argument of type Yikun.Api.Common.ActionList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Yikun_Api_Common_ActionList(buffer_arg) {
  return common_pb.ActionList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Yikun_Api_Common_Backup(arg) {
  if (!(arg instanceof common_pb.Backup)) {
    throw new Error('Expected argument of type Yikun.Api.Common.Backup');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Yikun_Api_Common_Backup(buffer_arg) {
  return common_pb.Backup.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Yikun_Api_Common_BackupsList(arg) {
  if (!(arg instanceof common_pb.BackupsList)) {
    throw new Error('Expected argument of type Yikun.Api.Common.BackupsList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Yikun_Api_Common_BackupsList(buffer_arg) {
  return common_pb.BackupsList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Yikun_Api_Common_CommandFeedback(arg) {
  if (!(arg instanceof common_pb.CommandFeedback)) {
    throw new Error('Expected argument of type Yikun.Api.Common.CommandFeedback');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Yikun_Api_Common_CommandFeedback(buffer_arg) {
  return common_pb.CommandFeedback.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Yikun_Api_Common_DeviceList(arg) {
  if (!(arg instanceof common_pb.DeviceList)) {
    throw new Error('Expected argument of type Yikun.Api.Common.DeviceList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Yikun_Api_Common_DeviceList(buffer_arg) {
  return common_pb.DeviceList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Yikun_Api_Common_DiagnosticArray(arg) {
  if (!(arg instanceof common_pb.DiagnosticArray)) {
    throw new Error('Expected argument of type Yikun.Api.Common.DiagnosticArray');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Yikun_Api_Common_DiagnosticArray(buffer_arg) {
  return common_pb.DiagnosticArray.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Yikun_Api_Common_Dock(arg) {
  if (!(arg instanceof common_pb.Dock)) {
    throw new Error('Expected argument of type Yikun.Api.Common.Dock');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Yikun_Api_Common_Dock(buffer_arg) {
  return common_pb.Dock.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Yikun_Api_Common_Empty(arg) {
  if (!(arg instanceof common_pb.Empty)) {
    throw new Error('Expected argument of type Yikun.Api.Common.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Yikun_Api_Common_Empty(buffer_arg) {
  return common_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Yikun_Api_Common_ImgLocation(arg) {
  if (!(arg instanceof common_pb.ImgLocation)) {
    throw new Error('Expected argument of type Yikun.Api.Common.ImgLocation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Yikun_Api_Common_ImgLocation(buffer_arg) {
  return common_pb.ImgLocation.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Yikun_Api_Common_Lane(arg) {
  if (!(arg instanceof common_pb.Lane)) {
    throw new Error('Expected argument of type Yikun.Api.Common.Lane');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Yikun_Api_Common_Lane(buffer_arg) {
  return common_pb.Lane.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Yikun_Api_Common_LaserScan(arg) {
  if (!(arg instanceof common_pb.LaserScan)) {
    throw new Error('Expected argument of type Yikun.Api.Common.LaserScan');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Yikun_Api_Common_LaserScan(buffer_arg) {
  return common_pb.LaserScan.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Yikun_Api_Common_MapList(arg) {
  if (!(arg instanceof common_pb.MapList)) {
    throw new Error('Expected argument of type Yikun.Api.Common.MapList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Yikun_Api_Common_MapList(buffer_arg) {
  return common_pb.MapList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Yikun_Api_Common_ModbusStatus(arg) {
  if (!(arg instanceof common_pb.ModbusStatus)) {
    throw new Error('Expected argument of type Yikun.Api.Common.ModbusStatus');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Yikun_Api_Common_ModbusStatus(buffer_arg) {
  return common_pb.ModbusStatus.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Yikun_Api_Common_NetDevice(arg) {
  if (!(arg instanceof common_pb.NetDevice)) {
    throw new Error('Expected argument of type Yikun.Api.Common.NetDevice');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Yikun_Api_Common_NetDevice(buffer_arg) {
  return common_pb.NetDevice.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Yikun_Api_Common_NetworkConfiguration(arg) {
  if (!(arg instanceof common_pb.NetworkConfiguration)) {
    throw new Error('Expected argument of type Yikun.Api.Common.NetworkConfiguration');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Yikun_Api_Common_NetworkConfiguration(buffer_arg) {
  return common_pb.NetworkConfiguration.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Yikun_Api_Common_PTZCommand(arg) {
  if (!(arg instanceof common_pb.PTZCommand)) {
    throw new Error('Expected argument of type Yikun.Api.Common.PTZCommand');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Yikun_Api_Common_PTZCommand(buffer_arg) {
  return common_pb.PTZCommand.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Yikun_Api_Common_PeopleMeasurement(arg) {
  if (!(arg instanceof common_pb.PeopleMeasurement)) {
    throw new Error('Expected argument of type Yikun.Api.Common.PeopleMeasurement');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Yikun_Api_Common_PeopleMeasurement(buffer_arg) {
  return common_pb.PeopleMeasurement.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Yikun_Api_Common_PointCloudXY(arg) {
  if (!(arg instanceof common_pb.PointCloudXY)) {
    throw new Error('Expected argument of type Yikun.Api.Common.PointCloudXY');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Yikun_Api_Common_PointCloudXY(buffer_arg) {
  return common_pb.PointCloudXY.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Yikun_Api_Common_Pose(arg) {
  if (!(arg instanceof common_pb.Pose)) {
    throw new Error('Expected argument of type Yikun.Api.Common.Pose');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Yikun_Api_Common_Pose(buffer_arg) {
  return common_pb.Pose.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Yikun_Api_Common_PoseRequest(arg) {
  if (!(arg instanceof common_pb.PoseRequest)) {
    throw new Error('Expected argument of type Yikun.Api.Common.PoseRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Yikun_Api_Common_PoseRequest(buffer_arg) {
  return common_pb.PoseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Yikun_Api_Common_PositionList(arg) {
  if (!(arg instanceof common_pb.PositionList)) {
    throw new Error('Expected argument of type Yikun.Api.Common.PositionList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Yikun_Api_Common_PositionList(buffer_arg) {
  return common_pb.PositionList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Yikun_Api_Common_ProtoBool(arg) {
  if (!(arg instanceof common_pb.ProtoBool)) {
    throw new Error('Expected argument of type Yikun.Api.Common.ProtoBool');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Yikun_Api_Common_ProtoBool(buffer_arg) {
  return common_pb.ProtoBool.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Yikun_Api_Common_ProtoInt(arg) {
  if (!(arg instanceof common_pb.ProtoInt)) {
    throw new Error('Expected argument of type Yikun.Api.Common.ProtoInt');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Yikun_Api_Common_ProtoInt(buffer_arg) {
  return common_pb.ProtoInt.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Yikun_Api_Common_ProtoMap(arg) {
  if (!(arg instanceof common_pb.ProtoMap)) {
    throw new Error('Expected argument of type Yikun.Api.Common.ProtoMap');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Yikun_Api_Common_ProtoMap(buffer_arg) {
  return common_pb.ProtoMap.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Yikun_Api_Common_ProtoString(arg) {
  if (!(arg instanceof common_pb.ProtoString)) {
    throw new Error('Expected argument of type Yikun.Api.Common.ProtoString');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Yikun_Api_Common_ProtoString(buffer_arg) {
  return common_pb.ProtoString.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Yikun_Api_Common_RobotConfig(arg) {
  if (!(arg instanceof common_pb.RobotConfig)) {
    throw new Error('Expected argument of type Yikun.Api.Common.RobotConfig');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Yikun_Api_Common_RobotConfig(buffer_arg) {
  return common_pb.RobotConfig.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Yikun_Api_Common_RobotInfo(arg) {
  if (!(arg instanceof common_pb.RobotInfo)) {
    throw new Error('Expected argument of type Yikun.Api.Common.RobotInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Yikun_Api_Common_RobotInfo(buffer_arg) {
  return common_pb.RobotInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Yikun_Api_Common_RobotState(arg) {
  if (!(arg instanceof common_pb.RobotState)) {
    throw new Error('Expected argument of type Yikun.Api.Common.RobotState');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Yikun_Api_Common_RobotState(buffer_arg) {
  return common_pb.RobotState.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Yikun_Api_Common_SaveMap(arg) {
  if (!(arg instanceof common_pb.SaveMap)) {
    throw new Error('Expected argument of type Yikun.Api.Common.SaveMap');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Yikun_Api_Common_SaveMap(buffer_arg) {
  return common_pb.SaveMap.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Yikun_Api_Common_SoundCommand(arg) {
  if (!(arg instanceof common_pb.SoundCommand)) {
    throw new Error('Expected argument of type Yikun.Api.Common.SoundCommand');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Yikun_Api_Common_SoundCommand(buffer_arg) {
  return common_pb.SoundCommand.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Yikun_Api_Common_VelocityCommand(arg) {
  if (!(arg instanceof common_pb.VelocityCommand)) {
    throw new Error('Expected argument of type Yikun.Api.Common.VelocityCommand');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Yikun_Api_Common_VelocityCommand(buffer_arg) {
  return common_pb.VelocityCommand.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Yikun_Api_Common_WaypointRequest(arg) {
  if (!(arg instanceof common_pb.WaypointRequest)) {
    throw new Error('Expected argument of type Yikun.Api.Common.WaypointRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Yikun_Api_Common_WaypointRequest(buffer_arg) {
  return common_pb.WaypointRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Yikun_Api_Common_WiFiConnectionList(arg) {
  if (!(arg instanceof common_pb.WiFiConnectionList)) {
    throw new Error('Expected argument of type Yikun.Api.Common.WiFiConnectionList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Yikun_Api_Common_WiFiConnectionList(buffer_arg) {
  return common_pb.WiFiConnectionList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Yikun_Api_Common_WiFiNetworkList(arg) {
  if (!(arg instanceof common_pb.WiFiNetworkList)) {
    throw new Error('Expected argument of type Yikun.Api.Common.WiFiNetworkList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Yikun_Api_Common_WiFiNetworkList(buffer_arg) {
  return common_pb.WiFiNetworkList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Yikun_Api_Common_WiFiNetworkSecurity(arg) {
  if (!(arg instanceof common_pb.WiFiNetworkSecurity)) {
    throw new Error('Expected argument of type Yikun.Api.Common.WiFiNetworkSecurity');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Yikun_Api_Common_WiFiNetworkSecurity(buffer_arg) {
  return common_pb.WiFiNetworkSecurity.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Yikun_Api_Mission_KnownPositionRequest(arg) {
  if (!(arg instanceof mission_pb.KnownPositionRequest)) {
    throw new Error('Expected argument of type Yikun.Api.Mission.KnownPositionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Yikun_Api_Mission_KnownPositionRequest(buffer_arg) {
  return mission_pb.KnownPositionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Yikun_Api_Mission_MissionFeedback(arg) {
  if (!(arg instanceof mission_pb.MissionFeedback)) {
    throw new Error('Expected argument of type Yikun.Api.Mission.MissionFeedback');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Yikun_Api_Mission_MissionFeedback(buffer_arg) {
  return mission_pb.MissionFeedback.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Yikun_Api_Mission_MissionIdentifier(arg) {
  if (!(arg instanceof mission_pb.MissionIdentifier)) {
    throw new Error('Expected argument of type Yikun.Api.Mission.MissionIdentifier');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Yikun_Api_Mission_MissionIdentifier(buffer_arg) {
  return mission_pb.MissionIdentifier.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Yikun_Api_Mission_MissionLogCommand(arg) {
  if (!(arg instanceof mission_pb.MissionLogCommand)) {
    throw new Error('Expected argument of type Yikun.Api.Mission.MissionLogCommand');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Yikun_Api_Mission_MissionLogCommand(buffer_arg) {
  return mission_pb.MissionLogCommand.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Yikun_Api_Mission_MissionLogFeedback(arg) {
  if (!(arg instanceof mission_pb.MissionLogFeedback)) {
    throw new Error('Expected argument of type Yikun.Api.Mission.MissionLogFeedback');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Yikun_Api_Mission_MissionLogFeedback(buffer_arg) {
  return mission_pb.MissionLogFeedback.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Yikun_Api_Mission_PositionRequest(arg) {
  if (!(arg instanceof mission_pb.PositionRequest)) {
    throw new Error('Expected argument of type Yikun.Api.Mission.PositionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Yikun_Api_Mission_PositionRequest(buffer_arg) {
  return mission_pb.PositionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Yikun_Api_Mission_RelativeMoveRequest(arg) {
  if (!(arg instanceof mission_pb.RelativeMoveRequest)) {
    throw new Error('Expected argument of type Yikun.Api.Mission.RelativeMoveRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Yikun_Api_Mission_RelativeMoveRequest(buffer_arg) {
  return mission_pb.RelativeMoveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Yikun_Api_Mission_SetDORequest(arg) {
  if (!(arg instanceof mission_pb.SetDORequest)) {
    throw new Error('Expected argument of type Yikun.Api.Mission.SetDORequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Yikun_Api_Mission_SetDORequest(buffer_arg) {
  return mission_pb.SetDORequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Yikun_Api_Mission_SwitchMapRequest(arg) {
  if (!(arg instanceof mission_pb.SwitchMapRequest)) {
    throw new Error('Expected argument of type Yikun.Api.Mission.SwitchMapRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Yikun_Api_Mission_SwitchMapRequest(buffer_arg) {
  return mission_pb.SwitchMapRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Yikun_Api_Mission_URCommand(arg) {
  if (!(arg instanceof mission_pb.URCommand)) {
    throw new Error('Expected argument of type Yikun.Api.Mission.URCommand');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Yikun_Api_Mission_URCommand(buffer_arg) {
  return mission_pb.URCommand.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Yikun_Api_Mission_WaitDIRequest(arg) {
  if (!(arg instanceof mission_pb.WaitDIRequest)) {
    throw new Error('Expected argument of type Yikun.Api.Mission.WaitDIRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Yikun_Api_Mission_WaitDIRequest(buffer_arg) {
  return mission_pb.WaitDIRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var RpcService = exports.RpcService = {
  // Check
  // @return Common.StateEnum
  checkCommunication: {
    path: '/Yikun.Api.ServiceRpc.Rpc/CheckCommunication',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.ProtoString,
    responseType: common_pb.ProtoString,
    requestSerialize: serialize_Yikun_Api_Common_ProtoString,
    requestDeserialize: deserialize_Yikun_Api_Common_ProtoString,
    responseSerialize: serialize_Yikun_Api_Common_ProtoString,
    responseDeserialize: deserialize_Yikun_Api_Common_ProtoString,
  },
  // @RPC_ID=0
  // Get map
  getCurrentMap: {
    path: '/Yikun.Api.ServiceRpc.Rpc/GetCurrentMap',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.Empty,
    responseType: common_pb.ProtoMap,
    requestSerialize: serialize_Yikun_Api_Common_Empty,
    requestDeserialize: deserialize_Yikun_Api_Common_Empty,
    responseSerialize: serialize_Yikun_Api_Common_ProtoMap,
    responseDeserialize: deserialize_Yikun_Api_Common_ProtoMap,
  },
  // @RPC_ID=1
  // Get robot pose
  getRobotPose: {
    path: '/Yikun.Api.ServiceRpc.Rpc/GetRobotPose',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.Empty,
    responseType: common_pb.Pose,
    requestSerialize: serialize_Yikun_Api_Common_Empty,
    requestDeserialize: deserialize_Yikun_Api_Common_Empty,
    responseSerialize: serialize_Yikun_Api_Common_Pose,
    responseDeserialize: deserialize_Yikun_Api_Common_Pose,
  },
  // @RPC_ID=2
  // Make map
  // @return Common.StateEnum
  makeMap: {
    path: '/Yikun.Api.ServiceRpc.Rpc/MakeMap',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.Empty,
    responseType: common_pb.CommandFeedback,
    requestSerialize: serialize_Yikun_Api_Common_Empty,
    requestDeserialize: deserialize_Yikun_Api_Common_Empty,
    responseSerialize: serialize_Yikun_Api_Common_CommandFeedback,
    responseDeserialize: deserialize_Yikun_Api_Common_CommandFeedback,
  },
  // @RPC_ID=3
  // Exit make map
  // @return Common.StateEnum
  makeMapExit: {
    path: '/Yikun.Api.ServiceRpc.Rpc/MakeMapExit',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.SaveMap,
    responseType: common_pb.CommandFeedback,
    requestSerialize: serialize_Yikun_Api_Common_SaveMap,
    requestDeserialize: deserialize_Yikun_Api_Common_SaveMap,
    responseSerialize: serialize_Yikun_Api_Common_CommandFeedback,
    responseDeserialize: deserialize_Yikun_Api_Common_CommandFeedback,
  },
  // @RPC_ID=4
  // Get robot info
  getRobotInfo: {
    path: '/Yikun.Api.ServiceRpc.Rpc/GetRobotInfo',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.Empty,
    responseType: common_pb.RobotInfo,
    requestSerialize: serialize_Yikun_Api_Common_Empty,
    requestDeserialize: deserialize_Yikun_Api_Common_Empty,
    responseSerialize: serialize_Yikun_Api_Common_RobotInfo,
    responseDeserialize: deserialize_Yikun_Api_Common_RobotInfo,
  },
  // @RPC_ID=5
  // Set network configuration
  // @return current configuration
  setNetworkConfiguration: {
    path: '/Yikun.Api.ServiceRpc.Rpc/SetNetworkConfiguration',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.NetworkConfiguration,
    responseType: common_pb.NetworkConfiguration,
    requestSerialize: serialize_Yikun_Api_Common_NetworkConfiguration,
    requestDeserialize: deserialize_Yikun_Api_Common_NetworkConfiguration,
    responseSerialize: serialize_Yikun_Api_Common_NetworkConfiguration,
    responseDeserialize: deserialize_Yikun_Api_Common_NetworkConfiguration,
  },
  // @RPC_ID=6
  // Get network configuration
  // @input network device
  // @return current device configuration
  getNetworkConfiguration: {
    path: '/Yikun.Api.ServiceRpc.Rpc/GetNetworkConfiguration',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.NetworkConfiguration,
    responseType: common_pb.NetworkConfiguration,
    requestSerialize: serialize_Yikun_Api_Common_NetworkConfiguration,
    requestDeserialize: deserialize_Yikun_Api_Common_NetworkConfiguration,
    responseSerialize: serialize_Yikun_Api_Common_NetworkConfiguration,
    responseDeserialize: deserialize_Yikun_Api_Common_NetworkConfiguration,
  },
  // @RPC_ID=7
  // Robot state
  getRobotState: {
    path: '/Yikun.Api.ServiceRpc.Rpc/GetRobotState',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.Empty,
    responseType: common_pb.RobotState,
    requestSerialize: serialize_Yikun_Api_Common_Empty,
    requestDeserialize: deserialize_Yikun_Api_Common_Empty,
    responseSerialize: serialize_Yikun_Api_Common_RobotState,
    responseDeserialize: deserialize_Yikun_Api_Common_RobotState,
  },
  // @RPC_ID=8
  // Auto charge
  autoCharge: {
    path: '/Yikun.Api.ServiceRpc.Rpc/AutoCharge',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.Empty,
    responseType: common_pb.Empty,
    requestSerialize: serialize_Yikun_Api_Common_Empty,
    requestDeserialize: deserialize_Yikun_Api_Common_Empty,
    responseSerialize: serialize_Yikun_Api_Common_Empty,
    responseDeserialize: deserialize_Yikun_Api_Common_Empty,
  },
  // @RPC_ID=9
  // Manual charge
  // @return Common.StateEnum
  manualCharge: {
    path: '/Yikun.Api.ServiceRpc.Rpc/ManualCharge',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.Dock,
    responseType: common_pb.CommandFeedback,
    requestSerialize: serialize_Yikun_Api_Common_Dock,
    requestDeserialize: deserialize_Yikun_Api_Common_Dock,
    responseSerialize: serialize_Yikun_Api_Common_CommandFeedback,
    responseDeserialize: deserialize_Yikun_Api_Common_CommandFeedback,
  },
  // @RPC_ID=10
  // Move to position
  // @return Common.StateEnum
  moveToPosition: {
    path: '/Yikun.Api.ServiceRpc.Rpc/MoveToPosition',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.PoseRequest,
    responseType: common_pb.CommandFeedback,
    requestSerialize: serialize_Yikun_Api_Common_PoseRequest,
    requestDeserialize: deserialize_Yikun_Api_Common_PoseRequest,
    responseSerialize: serialize_Yikun_Api_Common_CommandFeedback,
    responseDeserialize: deserialize_Yikun_Api_Common_CommandFeedback,
  },
  // @RPC_ID=11
  // Set waypoint
  // @return Common.StateEnum
  setWaypoint: {
    path: '/Yikun.Api.ServiceRpc.Rpc/SetWaypoint',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.WaypointRequest,
    responseType: common_pb.CommandFeedback,
    requestSerialize: serialize_Yikun_Api_Common_WaypointRequest,
    requestDeserialize: deserialize_Yikun_Api_Common_WaypointRequest,
    responseSerialize: serialize_Yikun_Api_Common_CommandFeedback,
    responseDeserialize: deserialize_Yikun_Api_Common_CommandFeedback,
  },
  // @RPC_ID=12
  // Callup
  // @return Common.StateEnum
  callUp: {
    path: '/Yikun.Api.ServiceRpc.Rpc/CallUp',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.Empty,
    responseType: common_pb.CommandFeedback,
    requestSerialize: serialize_Yikun_Api_Common_Empty,
    requestDeserialize: deserialize_Yikun_Api_Common_Empty,
    responseSerialize: serialize_Yikun_Api_Common_CommandFeedback,
    responseDeserialize: deserialize_Yikun_Api_Common_CommandFeedback,
  },
  // @RPC_ID=13
  // Nav pause
  // @return Common.StateEnum
  navPause: {
    path: '/Yikun.Api.ServiceRpc.Rpc/NavPause',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.Empty,
    responseType: common_pb.CommandFeedback,
    requestSerialize: serialize_Yikun_Api_Common_Empty,
    requestDeserialize: deserialize_Yikun_Api_Common_Empty,
    responseSerialize: serialize_Yikun_Api_Common_CommandFeedback,
    responseDeserialize: deserialize_Yikun_Api_Common_CommandFeedback,
  },
  // @RPC_ID=14
  // Nav cancel
  // @return Common.StateEnum
  navCancel: {
    path: '/Yikun.Api.ServiceRpc.Rpc/NavCancel',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.Empty,
    responseType: common_pb.CommandFeedback,
    requestSerialize: serialize_Yikun_Api_Common_Empty,
    requestDeserialize: deserialize_Yikun_Api_Common_Empty,
    responseSerialize: serialize_Yikun_Api_Common_CommandFeedback,
    responseDeserialize: deserialize_Yikun_Api_Common_CommandFeedback,
  },
  // @RPC_ID=15
  // Nav start
  // @return Common.StateEnum
  navWakeUp: {
    path: '/Yikun.Api.ServiceRpc.Rpc/NavWakeUp',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.Empty,
    responseType: common_pb.CommandFeedback,
    requestSerialize: serialize_Yikun_Api_Common_Empty,
    requestDeserialize: deserialize_Yikun_Api_Common_Empty,
    responseSerialize: serialize_Yikun_Api_Common_CommandFeedback,
    responseDeserialize: deserialize_Yikun_Api_Common_CommandFeedback,
  },
  // @RPC_ID=16
  // Follow start
  // @return Common.StateEnum
  followStart: {
    path: '/Yikun.Api.ServiceRpc.Rpc/FollowStart',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.Empty,
    responseType: common_pb.CommandFeedback,
    requestSerialize: serialize_Yikun_Api_Common_Empty,
    requestDeserialize: deserialize_Yikun_Api_Common_Empty,
    responseSerialize: serialize_Yikun_Api_Common_CommandFeedback,
    responseDeserialize: deserialize_Yikun_Api_Common_CommandFeedback,
  },
  // @RPC_ID=17
  // Follow stop
  // @return Common.StateEnum
  followStop: {
    path: '/Yikun.Api.ServiceRpc.Rpc/FollowStop',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.Empty,
    responseType: common_pb.CommandFeedback,
    requestSerialize: serialize_Yikun_Api_Common_Empty,
    requestDeserialize: deserialize_Yikun_Api_Common_Empty,
    responseSerialize: serialize_Yikun_Api_Common_CommandFeedback,
    responseDeserialize: deserialize_Yikun_Api_Common_CommandFeedback,
  },
  // @RPC_ID=18
  // Twist (velocity command)
  // @return Common.StateEnum
  twist: {
    path: '/Yikun.Api.ServiceRpc.Rpc/Twist',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.VelocityCommand,
    responseType: common_pb.CommandFeedback,
    requestSerialize: serialize_Yikun_Api_Common_VelocityCommand,
    requestDeserialize: deserialize_Yikun_Api_Common_VelocityCommand,
    responseSerialize: serialize_Yikun_Api_Common_CommandFeedback,
    responseDeserialize: deserialize_Yikun_Api_Common_CommandFeedback,
  },
  // @RPC_ID=19
  // Ipv4
  getIpv4Address: {
    path: '/Yikun.Api.ServiceRpc.Rpc/GetIpv4Address',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.NetDevice,
    responseType: common_pb.ProtoString,
    requestSerialize: serialize_Yikun_Api_Common_NetDevice,
    requestDeserialize: deserialize_Yikun_Api_Common_NetDevice,
    responseSerialize: serialize_Yikun_Api_Common_ProtoString,
    responseDeserialize: deserialize_Yikun_Api_Common_ProtoString,
  },
  // @RPC_ID=20
  // Get navigation map
  getNavMap: {
    path: '/Yikun.Api.ServiceRpc.Rpc/GetNavMap',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.ProtoInt,
    responseType: common_pb.ProtoMap,
    requestSerialize: serialize_Yikun_Api_Common_ProtoInt,
    requestDeserialize: deserialize_Yikun_Api_Common_ProtoInt,
    responseSerialize: serialize_Yikun_Api_Common_ProtoMap,
    responseDeserialize: deserialize_Yikun_Api_Common_ProtoMap,
  },
  // @RPC_ID=21
  // Get navigation status
  // @return Common.StateEnum
  getNavStatus: {
    path: '/Yikun.Api.ServiceRpc.Rpc/GetNavStatus',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.Empty,
    responseType: common_pb.CommandFeedback,
    requestSerialize: serialize_Yikun_Api_Common_Empty,
    requestDeserialize: deserialize_Yikun_Api_Common_Empty,
    responseSerialize: serialize_Yikun_Api_Common_CommandFeedback,
    responseDeserialize: deserialize_Yikun_Api_Common_CommandFeedback,
  },
  // RPC_ID=22
  // Dignostics
  getDiagnosticArray: {
    path: '/Yikun.Api.ServiceRpc.Rpc/GetDiagnosticArray',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.Empty,
    responseType: common_pb.DiagnosticArray,
    requestSerialize: serialize_Yikun_Api_Common_Empty,
    requestDeserialize: deserialize_Yikun_Api_Common_Empty,
    responseSerialize: serialize_Yikun_Api_Common_DiagnosticArray,
    responseDeserialize: deserialize_Yikun_Api_Common_DiagnosticArray,
  },
  // RPC_ID=23
  // Backups list
  getBackupsList: {
    path: '/Yikun.Api.ServiceRpc.Rpc/GetBackupsList',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.Empty,
    responseType: common_pb.BackupsList,
    requestSerialize: serialize_Yikun_Api_Common_Empty,
    requestDeserialize: deserialize_Yikun_Api_Common_Empty,
    responseSerialize: serialize_Yikun_Api_Common_BackupsList,
    responseDeserialize: deserialize_Yikun_Api_Common_BackupsList,
  },
  // RPC_ID=24
  // Restore software
  // @return Common.StateEnum
  softwareRestore: {
    path: '/Yikun.Api.ServiceRpc.Rpc/SoftwareRestore',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.Backup,
    responseType: common_pb.CommandFeedback,
    requestSerialize: serialize_Yikun_Api_Common_Backup,
    requestDeserialize: deserialize_Yikun_Api_Common_Backup,
    responseSerialize: serialize_Yikun_Api_Common_CommandFeedback,
    responseDeserialize: deserialize_Yikun_Api_Common_CommandFeedback,
  },
  // RPC_ID=25
  // Software version
  softwareVersion: {
    path: '/Yikun.Api.ServiceRpc.Rpc/SoftwareVersion',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.Empty,
    responseType: common_pb.ProtoString,
    requestSerialize: serialize_Yikun_Api_Common_Empty,
    requestDeserialize: deserialize_Yikun_Api_Common_Empty,
    responseSerialize: serialize_Yikun_Api_Common_ProtoString,
    responseDeserialize: deserialize_Yikun_Api_Common_ProtoString,
  },
  // RPC_ID=26
  // Upgrade
  // @return Common.StateEnum
  softwareUpgrade: {
    path: '/Yikun.Api.ServiceRpc.Rpc/SoftwareUpgrade',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.Empty,
    responseType: common_pb.CommandFeedback,
    requestSerialize: serialize_Yikun_Api_Common_Empty,
    requestDeserialize: deserialize_Yikun_Api_Common_Empty,
    responseSerialize: serialize_Yikun_Api_Common_CommandFeedback,
    responseDeserialize: deserialize_Yikun_Api_Common_CommandFeedback,
  },
  // RPC_ID=27
  // People
  getPeopleMeasurement: {
    path: '/Yikun.Api.ServiceRpc.Rpc/GetPeopleMeasurement',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.Empty,
    responseType: common_pb.PeopleMeasurement,
    requestSerialize: serialize_Yikun_Api_Common_Empty,
    requestDeserialize: deserialize_Yikun_Api_Common_Empty,
    responseSerialize: serialize_Yikun_Api_Common_PeopleMeasurement,
    responseDeserialize: deserialize_Yikun_Api_Common_PeopleMeasurement,
  },
  // RPC_ID=28
  // Set pose
  // @return Common.StateEnum
  setRobotPose: {
    path: '/Yikun.Api.ServiceRpc.Rpc/SetRobotPose',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.Pose,
    responseType: common_pb.CommandFeedback,
    requestSerialize: serialize_Yikun_Api_Common_Pose,
    requestDeserialize: deserialize_Yikun_Api_Common_Pose,
    responseSerialize: serialize_Yikun_Api_Common_CommandFeedback,
    responseDeserialize: deserialize_Yikun_Api_Common_CommandFeedback,
  },
  // RPC_ID=29
  // Interaction interrupt
  // @return Common.StateEnum
  interactionCancel: {
    path: '/Yikun.Api.ServiceRpc.Rpc/InteractionCancel',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.Empty,
    responseType: common_pb.CommandFeedback,
    requestSerialize: serialize_Yikun_Api_Common_Empty,
    requestDeserialize: deserialize_Yikun_Api_Common_Empty,
    responseSerialize: serialize_Yikun_Api_Common_CommandFeedback,
    responseDeserialize: deserialize_Yikun_Api_Common_CommandFeedback,
  },
  // RPC_ID=30
  // Move To Known Position
  moveToKnownPosition: {
    path: '/Yikun.Api.ServiceRpc.Rpc/MoveToKnownPosition',
    requestStream: false,
    responseStream: false,
    requestType: mission_pb.KnownPositionRequest,
    responseType: mission_pb.MissionFeedback,
    requestSerialize: serialize_Yikun_Api_Mission_KnownPositionRequest,
    requestDeserialize: deserialize_Yikun_Api_Mission_KnownPositionRequest,
    responseSerialize: serialize_Yikun_Api_Mission_MissionFeedback,
    responseDeserialize: deserialize_Yikun_Api_Mission_MissionFeedback,
  },
  // @RPC_ID=31
  // Move To Position
  moveToPositionMission: {
    path: '/Yikun.Api.ServiceRpc.Rpc/MoveToPositionMission',
    requestStream: false,
    responseStream: false,
    requestType: mission_pb.PositionRequest,
    responseType: mission_pb.MissionFeedback,
    requestSerialize: serialize_Yikun_Api_Mission_PositionRequest,
    requestDeserialize: deserialize_Yikun_Api_Mission_PositionRequest,
    responseSerialize: serialize_Yikun_Api_Mission_MissionFeedback,
    responseDeserialize: deserialize_Yikun_Api_Mission_MissionFeedback,
  },
  // @RPC_ID=32
  // Relative Move
  relativeMove: {
    path: '/Yikun.Api.ServiceRpc.Rpc/RelativeMove',
    requestStream: false,
    responseStream: false,
    requestType: mission_pb.RelativeMoveRequest,
    responseType: mission_pb.MissionFeedback,
    requestSerialize: serialize_Yikun_Api_Mission_RelativeMoveRequest,
    requestDeserialize: deserialize_Yikun_Api_Mission_RelativeMoveRequest,
    responseSerialize: serialize_Yikun_Api_Mission_MissionFeedback,
    responseDeserialize: deserialize_Yikun_Api_Mission_MissionFeedback,
  },
  // @RPC_ID=33
  // Relative move cancel
  // @return Common.StateEnum
  relativeMoveCancel: {
    path: '/Yikun.Api.ServiceRpc.Rpc/RelativeMoveCancel',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.Empty,
    responseType: common_pb.CommandFeedback,
    requestSerialize: serialize_Yikun_Api_Common_Empty,
    requestDeserialize: deserialize_Yikun_Api_Common_Empty,
    responseSerialize: serialize_Yikun_Api_Common_CommandFeedback,
    responseDeserialize: deserialize_Yikun_Api_Common_CommandFeedback,
  },
  // RPC_ID=34
  // Switch Map (External)
  switchMap: {
    path: '/Yikun.Api.ServiceRpc.Rpc/SwitchMap',
    requestStream: false,
    responseStream: false,
    requestType: mission_pb.SwitchMapRequest,
    responseType: mission_pb.MissionFeedback,
    requestSerialize: serialize_Yikun_Api_Mission_SwitchMapRequest,
    requestDeserialize: deserialize_Yikun_Api_Mission_SwitchMapRequest,
    responseSerialize: serialize_Yikun_Api_Mission_MissionFeedback,
    responseDeserialize: deserialize_Yikun_Api_Mission_MissionFeedback,
  },
  // @RPC_ID=35
  // Run UR program
  runURProgram: {
    path: '/Yikun.Api.ServiceRpc.Rpc/RunURProgram',
    requestStream: false,
    responseStream: false,
    requestType: mission_pb.URCommand,
    responseType: mission_pb.MissionFeedback,
    requestSerialize: serialize_Yikun_Api_Mission_URCommand,
    requestDeserialize: deserialize_Yikun_Api_Mission_URCommand,
    responseSerialize: serialize_Yikun_Api_Mission_MissionFeedback,
    responseDeserialize: deserialize_Yikun_Api_Mission_MissionFeedback,
  },
  // @RPC_ID=36
  // Load missionlist
  loadMission: {
    path: '/Yikun.Api.ServiceRpc.Rpc/LoadMission',
    requestStream: false,
    responseStream: false,
    requestType: mission_pb.MissionIdentifier,
    responseType: mission_pb.MissionFeedback,
    requestSerialize: serialize_Yikun_Api_Mission_MissionIdentifier,
    requestDeserialize: deserialize_Yikun_Api_Mission_MissionIdentifier,
    responseSerialize: serialize_Yikun_Api_Mission_MissionFeedback,
    responseDeserialize: deserialize_Yikun_Api_Mission_MissionFeedback,
  },
  // @RPC_ID=37
  // Abort missionlist
  abortMission: {
    path: '/Yikun.Api.ServiceRpc.Rpc/AbortMission',
    requestStream: false,
    responseStream: false,
    requestType: mission_pb.MissionIdentifier,
    responseType: mission_pb.MissionFeedback,
    requestSerialize: serialize_Yikun_Api_Mission_MissionIdentifier,
    requestDeserialize: deserialize_Yikun_Api_Mission_MissionIdentifier,
    responseSerialize: serialize_Yikun_Api_Mission_MissionFeedback,
    responseDeserialize: deserialize_Yikun_Api_Mission_MissionFeedback,
  },
  // @RPC_ID=38
  // Get mission log
  getMissionLog: {
    path: '/Yikun.Api.ServiceRpc.Rpc/GetMissionLog',
    requestStream: false,
    responseStream: false,
    requestType: mission_pb.MissionLogCommand,
    responseType: mission_pb.MissionLogFeedback,
    requestSerialize: serialize_Yikun_Api_Mission_MissionLogCommand,
    requestDeserialize: deserialize_Yikun_Api_Mission_MissionLogCommand,
    responseSerialize: serialize_Yikun_Api_Mission_MissionLogFeedback,
    responseDeserialize: deserialize_Yikun_Api_Mission_MissionLogFeedback,
  },
  // @RPC_ID=39
  // Play Sound
  // @return Common.StateEnum
  playSound: {
    path: '/Yikun.Api.ServiceRpc.Rpc/PlaySound',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.SoundCommand,
    responseType: common_pb.CommandFeedback,
    requestSerialize: serialize_Yikun_Api_Common_SoundCommand,
    requestDeserialize: deserialize_Yikun_Api_Common_SoundCommand,
    responseSerialize: serialize_Yikun_Api_Common_CommandFeedback,
    responseDeserialize: deserialize_Yikun_Api_Common_CommandFeedback,
  },
  // @RPC_ID=40
  // DI
  waitForDI: {
    path: '/Yikun.Api.ServiceRpc.Rpc/WaitForDI',
    requestStream: false,
    responseStream: false,
    requestType: mission_pb.WaitDIRequest,
    responseType: mission_pb.MissionFeedback,
    requestSerialize: serialize_Yikun_Api_Mission_WaitDIRequest,
    requestDeserialize: deserialize_Yikun_Api_Mission_WaitDIRequest,
    responseSerialize: serialize_Yikun_Api_Mission_MissionFeedback,
    responseDeserialize: deserialize_Yikun_Api_Mission_MissionFeedback,
  },
  // @RPC_ID=41
  // DO
  setDO: {
    path: '/Yikun.Api.ServiceRpc.Rpc/SetDO',
    requestStream: false,
    responseStream: false,
    requestType: mission_pb.SetDORequest,
    responseType: mission_pb.MissionFeedback,
    requestSerialize: serialize_Yikun_Api_Mission_SetDORequest,
    requestDeserialize: deserialize_Yikun_Api_Mission_SetDORequest,
    responseSerialize: serialize_Yikun_Api_Mission_MissionFeedback,
    responseDeserialize: deserialize_Yikun_Api_Mission_MissionFeedback,
  },
  // @RPC_ID=42
  // Position list
  getPositionList: {
    path: '/Yikun.Api.ServiceRpc.Rpc/GetPositionList',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.Empty,
    responseType: common_pb.PositionList,
    requestSerialize: serialize_Yikun_Api_Common_Empty,
    requestDeserialize: deserialize_Yikun_Api_Common_Empty,
    responseSerialize: serialize_Yikun_Api_Common_PositionList,
    responseDeserialize: deserialize_Yikun_Api_Common_PositionList,
  },
  // RPC_ID=43
  // Map list
  getMapList: {
    path: '/Yikun.Api.ServiceRpc.Rpc/GetMapList',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.Empty,
    responseType: common_pb.MapList,
    requestSerialize: serialize_Yikun_Api_Common_Empty,
    requestDeserialize: deserialize_Yikun_Api_Common_Empty,
    responseSerialize: serialize_Yikun_Api_Common_MapList,
    responseDeserialize: deserialize_Yikun_Api_Common_MapList,
  },
  // RPC_ID=44
  // Action list
  getActionList: {
    path: '/Yikun.Api.ServiceRpc.Rpc/GetActionList',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.Empty,
    responseType: common_pb.ActionList,
    requestSerialize: serialize_Yikun_Api_Common_Empty,
    requestDeserialize: deserialize_Yikun_Api_Common_Empty,
    responseSerialize: serialize_Yikun_Api_Common_ActionList,
    responseDeserialize: deserialize_Yikun_Api_Common_ActionList,
  },
  // RPC_ID=45
  // Device list
  getDeviceList: {
    path: '/Yikun.Api.ServiceRpc.Rpc/GetDeviceList',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.Empty,
    responseType: common_pb.DeviceList,
    requestSerialize: serialize_Yikun_Api_Common_Empty,
    requestDeserialize: deserialize_Yikun_Api_Common_Empty,
    responseSerialize: serialize_Yikun_Api_Common_DeviceList,
    responseDeserialize: deserialize_Yikun_Api_Common_DeviceList,
  },
  // RPC_ID=46
  // Switch map for web
  // @return Common.StateEnum
  switchMapWeb: {
    path: '/Yikun.Api.ServiceRpc.Rpc/SwitchMapWeb',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.ProtoInt,
    responseType: common_pb.CommandFeedback,
    requestSerialize: serialize_Yikun_Api_Common_ProtoInt,
    requestDeserialize: deserialize_Yikun_Api_Common_ProtoInt,
    responseSerialize: serialize_Yikun_Api_Common_CommandFeedback,
    responseDeserialize: deserialize_Yikun_Api_Common_CommandFeedback,
  },
  // RPC_ID=47
  // Laser scan
  getLaserScan: {
    path: '/Yikun.Api.ServiceRpc.Rpc/GetLaserScan',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.Empty,
    responseType: common_pb.LaserScan,
    requestSerialize: serialize_Yikun_Api_Common_Empty,
    requestDeserialize: deserialize_Yikun_Api_Common_Empty,
    responseSerialize: serialize_Yikun_Api_Common_LaserScan,
    responseDeserialize: deserialize_Yikun_Api_Common_LaserScan,
  },
  // RPC_ID=48
  // Laser scan to point cloud, global frame is map.
  getLaserPointCloud: {
    path: '/Yikun.Api.ServiceRpc.Rpc/GetLaserPointCloud',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.Empty,
    responseType: common_pb.PointCloudXY,
    requestSerialize: serialize_Yikun_Api_Common_Empty,
    requestDeserialize: deserialize_Yikun_Api_Common_Empty,
    responseSerialize: serialize_Yikun_Api_Common_PointCloudXY,
    responseDeserialize: deserialize_Yikun_Api_Common_PointCloudXY,
  },
  // RPC_ID=49
  // PlaySound Exit
  // @return Common.StateEnum
  stopCurrentSound: {
    path: '/Yikun.Api.ServiceRpc.Rpc/StopCurrentSound',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.Empty,
    responseType: common_pb.CommandFeedback,
    requestSerialize: serialize_Yikun_Api_Common_Empty,
    requestDeserialize: deserialize_Yikun_Api_Common_Empty,
    responseSerialize: serialize_Yikun_Api_Common_CommandFeedback,
    responseDeserialize: deserialize_Yikun_Api_Common_CommandFeedback,
  },
  // RPC_ID=50
  // Get list of available connections (if it's connected)
  getWiFiConnections: {
    path: '/Yikun.Api.ServiceRpc.Rpc/GetWiFiConnections',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.Empty,
    responseType: common_pb.WiFiConnectionList,
    requestSerialize: serialize_Yikun_Api_Common_Empty,
    requestDeserialize: deserialize_Yikun_Api_Common_Empty,
    responseSerialize: serialize_Yikun_Api_Common_WiFiConnectionList,
    responseDeserialize: deserialize_Yikun_Api_Common_WiFiConnectionList,
  },
  // RPC_ID=51
  // NAME,SSID,CHAN,SIGNAL,DEVICE,ACTIVE,IN-USE
  getWiFiList: {
    path: '/Yikun.Api.ServiceRpc.Rpc/GetWiFiList',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.Empty,
    responseType: common_pb.WiFiNetworkList,
    requestSerialize: serialize_Yikun_Api_Common_Empty,
    requestDeserialize: deserialize_Yikun_Api_Common_Empty,
    responseSerialize: serialize_Yikun_Api_Common_WiFiNetworkList,
    responseDeserialize: deserialize_Yikun_Api_Common_WiFiNetworkList,
  },
  // RPC_ID=52
  // Cleanup networks, if UUID is empty, cleanup all of the connections except current connection
  // @input UUID
  // @return Common.StateEnum
  cleanupNetworks: {
    path: '/Yikun.Api.ServiceRpc.Rpc/CleanupNetworks',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.ProtoString,
    responseType: common_pb.CommandFeedback,
    requestSerialize: serialize_Yikun_Api_Common_ProtoString,
    requestDeserialize: deserialize_Yikun_Api_Common_ProtoString,
    responseSerialize: serialize_Yikun_Api_Common_CommandFeedback,
    responseDeserialize: deserialize_Yikun_Api_Common_CommandFeedback,
  },
  // RPC_ID=53
  // @return output
  networkConnect: {
    path: '/Yikun.Api.ServiceRpc.Rpc/NetworkConnect',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.WiFiNetworkSecurity,
    responseType: common_pb.ProtoString,
    requestSerialize: serialize_Yikun_Api_Common_WiFiNetworkSecurity,
    requestDeserialize: deserialize_Yikun_Api_Common_WiFiNetworkSecurity,
    responseSerialize: serialize_Yikun_Api_Common_ProtoString,
    responseDeserialize: deserialize_Yikun_Api_Common_ProtoString,
  },
  // RPC_ID=54
  // Collision Detection
  // @input Lane
  // @return true (if it's collision) or false (if it's free)
  checkCollision: {
    path: '/Yikun.Api.ServiceRpc.Rpc/CheckCollision',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.Lane,
    responseType: common_pb.ProtoBool,
    requestSerialize: serialize_Yikun_Api_Common_Lane,
    requestDeserialize: deserialize_Yikun_Api_Common_Lane,
    responseSerialize: serialize_Yikun_Api_Common_ProtoBool,
    responseDeserialize: deserialize_Yikun_Api_Common_ProtoBool,
  },
  // RPC_ID=55
  // Trajectory generator
  // @input Waypoint
  // @output Trajectory
  trajectoryGen: {
    path: '/Yikun.Api.ServiceRpc.Rpc/TrajectoryGen',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.PointCloudXY,
    responseType: common_pb.Lane,
    requestSerialize: serialize_Yikun_Api_Common_PointCloudXY,
    requestDeserialize: deserialize_Yikun_Api_Common_PointCloudXY,
    responseSerialize: serialize_Yikun_Api_Common_Lane,
    responseDeserialize: deserialize_Yikun_Api_Common_Lane,
  },
  // RPC_ID=56
  // Stop
  eStop: {
    path: '/Yikun.Api.ServiceRpc.Rpc/EStop',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.Empty,
    responseType: common_pb.CommandFeedback,
    requestSerialize: serialize_Yikun_Api_Common_Empty,
    requestDeserialize: deserialize_Yikun_Api_Common_Empty,
    responseSerialize: serialize_Yikun_Api_Common_CommandFeedback,
    responseDeserialize: deserialize_Yikun_Api_Common_CommandFeedback,
  },
  // RPC_ID=57
  // Get Current Global Plan
  getGlobalPlanVIZ: {
    path: '/Yikun.Api.ServiceRpc.Rpc/GetGlobalPlanVIZ',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.Empty,
    responseType: common_pb.Lane,
    requestSerialize: serialize_Yikun_Api_Common_Empty,
    requestDeserialize: deserialize_Yikun_Api_Common_Empty,
    responseSerialize: serialize_Yikun_Api_Common_Lane,
    responseDeserialize: deserialize_Yikun_Api_Common_Lane,
  },
  // RPC_ID=58
  // Robot Config
  setRobotConfig: {
    path: '/Yikun.Api.ServiceRpc.Rpc/SetRobotConfig',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.RobotConfig,
    responseType: common_pb.RobotConfig,
    requestSerialize: serialize_Yikun_Api_Common_RobotConfig,
    requestDeserialize: deserialize_Yikun_Api_Common_RobotConfig,
    responseSerialize: serialize_Yikun_Api_Common_RobotConfig,
    responseDeserialize: deserialize_Yikun_Api_Common_RobotConfig,
  },
  // RPC_ID=59
  // hkvision ptz camera
  // SetPreset
  // @input preset num.
  setPreset: {
    path: '/Yikun.Api.ServiceRpc.Rpc/SetPreset',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.ProtoInt,
    responseType: common_pb.CommandFeedback,
    requestSerialize: serialize_Yikun_Api_Common_ProtoInt,
    requestDeserialize: deserialize_Yikun_Api_Common_ProtoInt,
    responseSerialize: serialize_Yikun_Api_Common_CommandFeedback,
    responseDeserialize: deserialize_Yikun_Api_Common_CommandFeedback,
  },
  // RPC_ID=60
  // MoveToPreset
  // @input preset num.
  moveToPreset: {
    path: '/Yikun.Api.ServiceRpc.Rpc/MoveToPreset',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.ProtoInt,
    responseType: common_pb.CommandFeedback,
    requestSerialize: serialize_Yikun_Api_Common_ProtoInt,
    requestDeserialize: deserialize_Yikun_Api_Common_ProtoInt,
    responseSerialize: serialize_Yikun_Api_Common_CommandFeedback,
    responseDeserialize: deserialize_Yikun_Api_Common_CommandFeedback,
  },
  // RPC_ID=61
  // ptz location
  pTZLocation: {
    path: '/Yikun.Api.ServiceRpc.Rpc/PTZLocation',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.ImgLocation,
    responseType: common_pb.CommandFeedback,
    requestSerialize: serialize_Yikun_Api_Common_ImgLocation,
    requestDeserialize: deserialize_Yikun_Api_Common_ImgLocation,
    responseSerialize: serialize_Yikun_Api_Common_CommandFeedback,
    responseDeserialize: deserialize_Yikun_Api_Common_CommandFeedback,
  },
  // RPC_ID=62
  // ptz control
  pTZControl: {
    path: '/Yikun.Api.ServiceRpc.Rpc/PTZControl',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.PTZCommand,
    responseType: common_pb.CommandFeedback,
    requestSerialize: serialize_Yikun_Api_Common_PTZCommand,
    requestDeserialize: deserialize_Yikun_Api_Common_PTZCommand,
    responseSerialize: serialize_Yikun_Api_Common_CommandFeedback,
    responseDeserialize: deserialize_Yikun_Api_Common_CommandFeedback,
  },
  // RPC_ID=63
  // Modbus IO status
  getModbusStatus: {
    path: '/Yikun.Api.ServiceRpc.Rpc/GetModbusStatus',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.Empty,
    responseType: common_pb.ModbusStatus,
    requestSerialize: serialize_Yikun_Api_Common_Empty,
    requestDeserialize: deserialize_Yikun_Api_Common_Empty,
    responseSerialize: serialize_Yikun_Api_Common_ModbusStatus,
    responseDeserialize: deserialize_Yikun_Api_Common_ModbusStatus,
  },
  // RPC_ID=64
  // external DO8
  setDOEx: {
    path: '/Yikun.Api.ServiceRpc.Rpc/SetDOEx',
    requestStream: false,
    responseStream: false,
    requestType: mission_pb.SetDORequest,
    responseType: mission_pb.MissionFeedback,
    requestSerialize: serialize_Yikun_Api_Mission_SetDORequest,
    requestDeserialize: deserialize_Yikun_Api_Mission_SetDORequest,
    responseSerialize: serialize_Yikun_Api_Mission_MissionFeedback,
    responseDeserialize: deserialize_Yikun_Api_Mission_MissionFeedback,
  },
  // @RPC_ID=65
};

exports.RpcClient = grpc.makeGenericClientConstructor(RpcService);
