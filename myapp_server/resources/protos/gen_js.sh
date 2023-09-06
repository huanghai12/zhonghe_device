#!/usr/bin bash

protoc --js_out=import_style=commonjs,binary:./ --plugin=protoc-gen-grpc=/usr/local/bin/grpc_node_plugin --grpc_out=./ common.proto service.proto mission.proto
