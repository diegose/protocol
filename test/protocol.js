var ProtoBuf = require("protobufjs");
var path = require('path');

var builder = ProtoBuf.loadProtoFile(path.join(__dirname, "../Index.proto"));

module.exports = builder.build("limitd");