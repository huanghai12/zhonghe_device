var common_messages = require('./common_pb');
var service_messages = require('./service_pb');
var services = require('./service_grpc_pb');

var grpc = require('@grpc/grpc-js');

function main() {
  var client = new services.RpcClient('192.168.99.30:50053',
                                          grpc.credentials.createInsecure());
  var request = new common_messages.ProtoInt();
  var id = 233;
  request.setData(id);
  client.switchMapWeb(request, function(err, response) {
    console.log('output:', response);
  });
}

main();
