#!/usr/bin/env bash

yarn install

PROTO_ROOT="contract-grpc-spec"
DIST_DIR="contract-grpc-ts"

for file in  $(find ./contract-grpc-spec -type f -name *.proto)
  do
      echo $file
      protoc --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts --js_out=import_style=commonjs,binary:$DIST_DIR --ts_out=service=grpc-web:$DIST_DIR --proto_path=$PROTO_ROOT -I . $file
  done
