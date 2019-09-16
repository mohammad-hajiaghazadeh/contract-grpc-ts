// package: trialblaze.api.contracts.command.v1
// file: src/api/command/v1/mcib.proto

var src_api_command_v1_mcib_pb = require("../../../../src/api/command/v1/mcib_pb");
var src_api_message_mcib_v1_mcib_pb = require("../../../../src/api/message/mcib/v1/mcib_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Mcib = (function () {
  function Mcib() {}
  Mcib.serviceName = "trialblaze.api.contracts.command.v1.Mcib";
  return Mcib;
}());

Mcib.GetMcibs = {
  methodName: "GetMcibs",
  service: Mcib,
  requestStream: false,
  responseStream: true,
  requestType: src_api_message_mcib_v1_mcib_pb.GetMcibsRequest,
  responseType: src_api_message_mcib_v1_mcib_pb.GetMcibsResponse
};

Mcib.GetMcibHistories = {
  methodName: "GetMcibHistories",
  service: Mcib,
  requestStream: false,
  responseStream: true,
  requestType: src_api_message_mcib_v1_mcib_pb.GetMcibHistoriesRequest,
  responseType: src_api_message_mcib_v1_mcib_pb.GetMcibHistoriesResponse
};

Mcib.CreateMcib = {
  methodName: "CreateMcib",
  service: Mcib,
  requestStream: false,
  responseStream: false,
  requestType: src_api_message_mcib_v1_mcib_pb.CreateMcibRequest,
  responseType: src_api_message_mcib_v1_mcib_pb.CreateMcibResponse
};

Mcib.UpdateMcib = {
  methodName: "UpdateMcib",
  service: Mcib,
  requestStream: false,
  responseStream: false,
  requestType: src_api_message_mcib_v1_mcib_pb.UpdateMcibRequest,
  responseType: src_api_message_mcib_v1_mcib_pb.UpdateMcibResponse
};

Mcib.GetVisitPriceRanges = {
  methodName: "GetVisitPriceRanges",
  service: Mcib,
  requestStream: false,
  responseStream: true,
  requestType: src_api_message_mcib_v1_mcib_pb.GetVisitPriceRangesRequest,
  responseType: src_api_message_mcib_v1_mcib_pb.GetVisitPriceRangesResponse
};

Mcib.GetVisitPriceRangeHistories = {
  methodName: "GetVisitPriceRangeHistories",
  service: Mcib,
  requestStream: false,
  responseStream: true,
  requestType: src_api_message_mcib_v1_mcib_pb.GetVisitPriceRangeHistoriesRequest,
  responseType: src_api_message_mcib_v1_mcib_pb.GetVisitPriceRangeHistoriesResponse
};

Mcib.UpdateVisitPriceRanges = {
  methodName: "UpdateVisitPriceRanges",
  service: Mcib,
  requestStream: true,
  responseStream: true,
  requestType: src_api_message_mcib_v1_mcib_pb.UpdateVisitPriceRangesRequest,
  responseType: src_api_message_mcib_v1_mcib_pb.UpdateVisitPriceRangesResponse
};

Mcib.GetVisitProcedurePriceRanges = {
  methodName: "GetVisitProcedurePriceRanges",
  service: Mcib,
  requestStream: false,
  responseStream: true,
  requestType: src_api_message_mcib_v1_mcib_pb.GetVisitProcedurePriceRangesRequest,
  responseType: src_api_message_mcib_v1_mcib_pb.GetVisitProcedurePriceRangesResponse
};

Mcib.GetVisitProcedurePriceRangeHistories = {
  methodName: "GetVisitProcedurePriceRangeHistories",
  service: Mcib,
  requestStream: false,
  responseStream: true,
  requestType: src_api_message_mcib_v1_mcib_pb.GetVisitProcedurePriceRangeHistoriesRequest,
  responseType: src_api_message_mcib_v1_mcib_pb.GetVisitProcedurePriceRangeHistoriesResponse
};

Mcib.UpdateVisitProcedurePriceRanges = {
  methodName: "UpdateVisitProcedurePriceRanges",
  service: Mcib,
  requestStream: true,
  responseStream: true,
  requestType: src_api_message_mcib_v1_mcib_pb.UpdateVisitProcedurePriceRangesRequest,
  responseType: src_api_message_mcib_v1_mcib_pb.UpdateVisitProcedurePriceRangesResponse
};

Mcib.StartReviewMcib = {
  methodName: "StartReviewMcib",
  service: Mcib,
  requestStream: false,
  responseStream: false,
  requestType: src_api_message_mcib_v1_mcib_pb.StartReviewMcibRequest,
  responseType: src_api_message_mcib_v1_mcib_pb.StartReviewMcibResponse
};

Mcib.CancelMcibReview = {
  methodName: "CancelMcibReview",
  service: Mcib,
  requestStream: false,
  responseStream: false,
  requestType: src_api_message_mcib_v1_mcib_pb.CancelMcibReviewRequest,
  responseType: src_api_message_mcib_v1_mcib_pb.CancelMcibReviewResponse
};

Mcib.PublishMcib = {
  methodName: "PublishMcib",
  service: Mcib,
  requestStream: false,
  responseStream: false,
  requestType: src_api_message_mcib_v1_mcib_pb.PublishMcibRequest,
  responseType: src_api_message_mcib_v1_mcib_pb.PublishMcibResponse
};

exports.Mcib = Mcib;

function McibClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

McibClient.prototype.getMcibs = function getMcibs(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Mcib.GetMcibs, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

McibClient.prototype.getMcibHistories = function getMcibHistories(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Mcib.GetMcibHistories, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

McibClient.prototype.createMcib = function createMcib(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Mcib.CreateMcib, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

McibClient.prototype.updateMcib = function updateMcib(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Mcib.UpdateMcib, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

McibClient.prototype.getVisitPriceRanges = function getVisitPriceRanges(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Mcib.GetVisitPriceRanges, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

McibClient.prototype.getVisitPriceRangeHistories = function getVisitPriceRangeHistories(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Mcib.GetVisitPriceRangeHistories, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

McibClient.prototype.updateVisitPriceRanges = function updateVisitPriceRanges(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(Mcib.UpdateVisitPriceRanges, {
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport
  });
  client.onEnd(function (status, statusMessage, trailers) {
    listeners.status.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners.end.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners = null;
  });
  client.onMessage(function (message) {
    listeners.data.forEach(function (handler) {
      handler(message);
    })
  });
  client.start(metadata);
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      client.send(requestMessage);
      return this;
    },
    end: function () {
      client.finishSend();
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

McibClient.prototype.getVisitProcedurePriceRanges = function getVisitProcedurePriceRanges(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Mcib.GetVisitProcedurePriceRanges, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

McibClient.prototype.getVisitProcedurePriceRangeHistories = function getVisitProcedurePriceRangeHistories(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Mcib.GetVisitProcedurePriceRangeHistories, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

McibClient.prototype.updateVisitProcedurePriceRanges = function updateVisitProcedurePriceRanges(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(Mcib.UpdateVisitProcedurePriceRanges, {
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport
  });
  client.onEnd(function (status, statusMessage, trailers) {
    listeners.status.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners.end.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners = null;
  });
  client.onMessage(function (message) {
    listeners.data.forEach(function (handler) {
      handler(message);
    })
  });
  client.start(metadata);
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      client.send(requestMessage);
      return this;
    },
    end: function () {
      client.finishSend();
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

McibClient.prototype.startReviewMcib = function startReviewMcib(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Mcib.StartReviewMcib, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

McibClient.prototype.cancelMcibReview = function cancelMcibReview(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Mcib.CancelMcibReview, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

McibClient.prototype.publishMcib = function publishMcib(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Mcib.PublishMcib, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.McibClient = McibClient;

