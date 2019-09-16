// package: trialblaze.api.contracts.command.v1
// file: src/api/command/v1/contract.proto

var src_api_command_v1_contract_pb = require("../../../../src/api/command/v1/contract_pb");
var src_api_message_contract_v1_contract_pb = require("../../../../src/api/message/contract/v1/contract_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Contract = (function () {
  function Contract() {}
  Contract.serviceName = "trialblaze.api.contracts.command.v1.Contract";
  return Contract;
}());

Contract.GetAllContracts = {
  methodName: "GetAllContracts",
  service: Contract,
  requestStream: false,
  responseStream: true,
  requestType: src_api_message_contract_v1_contract_pb.GetAllContractsRequest,
  responseType: src_api_message_contract_v1_contract_pb.GetAllContractsResponse
};

Contract.GetStudiesContracts = {
  methodName: "GetStudiesContracts",
  service: Contract,
  requestStream: false,
  responseStream: true,
  requestType: src_api_message_contract_v1_contract_pb.GetStudiesContractsRequest,
  responseType: src_api_message_contract_v1_contract_pb.GetStudiesContractsResponse
};

Contract.GetSitesContracts = {
  methodName: "GetSitesContracts",
  service: Contract,
  requestStream: false,
  responseStream: true,
  requestType: src_api_message_contract_v1_contract_pb.GetSitesContractsRequest,
  responseType: src_api_message_contract_v1_contract_pb.GetSitesContractsResponse
};

Contract.GetContractsByStudyId = {
  methodName: "GetContractsByStudyId",
  service: Contract,
  requestStream: false,
  responseStream: true,
  requestType: src_api_message_contract_v1_contract_pb.GetContractsByStudyIdRequest,
  responseType: src_api_message_contract_v1_contract_pb.GetContractsByStudyIdResponse
};

Contract.GetContractsByCreator = {
  methodName: "GetContractsByCreator",
  service: Contract,
  requestStream: false,
  responseStream: true,
  requestType: src_api_message_contract_v1_contract_pb.GetContractsByCreatorRequest,
  responseType: src_api_message_contract_v1_contract_pb.GetContractsByCreatorResponse
};

Contract.GetContractMeta = {
  methodName: "GetContractMeta",
  service: Contract,
  requestStream: false,
  responseStream: false,
  requestType: src_api_message_contract_v1_contract_pb.GetContractMetaRequest,
  responseType: src_api_message_contract_v1_contract_pb.GetContractMetaResponse
};

Contract.GetContractHistoryMeta = {
  methodName: "GetContractHistoryMeta",
  service: Contract,
  requestStream: false,
  responseStream: true,
  requestType: src_api_message_contract_v1_contract_pb.GetContractHistoryMetaRequest,
  responseType: src_api_message_contract_v1_contract_pb.GetContractHistoryMetaResponse
};

Contract.GetContractSIBVisits = {
  methodName: "GetContractSIBVisits",
  service: Contract,
  requestStream: false,
  responseStream: true,
  requestType: src_api_message_contract_v1_contract_pb.GetContractSIBVisitsRequest,
  responseType: src_api_message_contract_v1_contract_pb.GetContractSIBVisitsResponse
};

Contract.GetContractSIBVisitHistories = {
  methodName: "GetContractSIBVisitHistories",
  service: Contract,
  requestStream: false,
  responseStream: true,
  requestType: src_api_message_contract_v1_contract_pb.GetContractSIBVisitHistoriesRequest,
  responseType: src_api_message_contract_v1_contract_pb.GetContractSIBVisitHistoriesResponse
};

Contract.UpdateContractSIBVisits = {
  methodName: "UpdateContractSIBVisits",
  service: Contract,
  requestStream: true,
  responseStream: true,
  requestType: src_api_message_contract_v1_contract_pb.UpdateContractSIBVisitsRequest,
  responseType: src_api_message_contract_v1_contract_pb.UpdateContractSIBVisitsResponse
};

Contract.GetContractSIBVisitProcedures = {
  methodName: "GetContractSIBVisitProcedures",
  service: Contract,
  requestStream: false,
  responseStream: true,
  requestType: src_api_message_contract_v1_contract_pb.GetContractSIBVisitProceduresRequest,
  responseType: src_api_message_contract_v1_contract_pb.GetContractSIBVisitProceduresResponse
};

Contract.GetContractSIBVisitProcedureHistories = {
  methodName: "GetContractSIBVisitProcedureHistories",
  service: Contract,
  requestStream: false,
  responseStream: true,
  requestType: src_api_message_contract_v1_contract_pb.GetContractSIBVisitProcedureHistoriesRequest,
  responseType: src_api_message_contract_v1_contract_pb.GetContractSIBVisitProcedureHistoriesResponse
};

Contract.UpdateContractSIBVisitProcedure = {
  methodName: "UpdateContractSIBVisitProcedure",
  service: Contract,
  requestStream: true,
  responseStream: true,
  requestType: src_api_message_contract_v1_contract_pb.UpdateContractSIBVisitProcedureRequest,
  responseType: src_api_message_contract_v1_contract_pb.UpdateContractSIBVisitProcedureResponse
};

Contract.GetContractSIBMeta = {
  methodName: "GetContractSIBMeta",
  service: Contract,
  requestStream: false,
  responseStream: false,
  requestType: src_api_message_contract_v1_contract_pb.GetContractSIBMetaRequest,
  responseType: src_api_message_contract_v1_contract_pb.GetContractSIBMetaResponse
};

Contract.GetContractSIBMetaHistories = {
  methodName: "GetContractSIBMetaHistories",
  service: Contract,
  requestStream: false,
  responseStream: true,
  requestType: src_api_message_contract_v1_contract_pb.GetContractSIBMetaHistoriesRequest,
  responseType: src_api_message_contract_v1_contract_pb.GetContractSIBMetaHistoriesResponse
};

Contract.UpdateContractSIBName = {
  methodName: "UpdateContractSIBName",
  service: Contract,
  requestStream: false,
  responseStream: false,
  requestType: src_api_message_contract_v1_contract_pb.UpdateContractSIBNameRequest,
  responseType: src_api_message_contract_v1_contract_pb.UpdateContractSIBNameResponse
};

Contract.GetContractTermsContent = {
  methodName: "GetContractTermsContent",
  service: Contract,
  requestStream: false,
  responseStream: true,
  requestType: src_api_message_contract_v1_contract_pb.GetContractTermsContentRequest,
  responseType: src_api_message_contract_v1_contract_pb.GetContractTermsContentResponse
};

Contract.GetContractTermsMeta = {
  methodName: "GetContractTermsMeta",
  service: Contract,
  requestStream: false,
  responseStream: false,
  requestType: src_api_message_contract_v1_contract_pb.GetContractTermsMetaRequest,
  responseType: src_api_message_contract_v1_contract_pb.GetContractTermsMetaResponse
};

Contract.GetContractTermsHistories = {
  methodName: "GetContractTermsHistories",
  service: Contract,
  requestStream: false,
  responseStream: true,
  requestType: src_api_message_contract_v1_contract_pb.GetContractTermsHistoriesRequest,
  responseType: src_api_message_contract_v1_contract_pb.GetContractTermsHistoriesResponse
};

Contract.GetContractTermsHistory = {
  methodName: "GetContractTermsHistory",
  service: Contract,
  requestStream: false,
  responseStream: true,
  requestType: src_api_message_contract_v1_contract_pb.GetContractTermsHistoryRequest,
  responseType: src_api_message_contract_v1_contract_pb.GetContractTermsHistoryResponse
};

Contract.GetAllTermsTemplate = {
  methodName: "GetAllTermsTemplate",
  service: Contract,
  requestStream: false,
  responseStream: true,
  requestType: src_api_message_contract_v1_contract_pb.GetAllTermsTemplateRequest,
  responseType: src_api_message_contract_v1_contract_pb.GetAllTermsTemplateResponse
};

Contract.GetTermsTemplateContent = {
  methodName: "GetTermsTemplateContent",
  service: Contract,
  requestStream: false,
  responseStream: true,
  requestType: src_api_message_contract_v1_contract_pb.GetTermsTemplateContentRequest,
  responseType: src_api_message_contract_v1_contract_pb.GetTermsTemplateContentResponse
};

Contract.GetTermsTemplateHistories = {
  methodName: "GetTermsTemplateHistories",
  service: Contract,
  requestStream: false,
  responseStream: true,
  requestType: src_api_message_contract_v1_contract_pb.GetTermsTemplateHistoriesRequest,
  responseType: src_api_message_contract_v1_contract_pb.GetTermsTemplateHistoriesResponse
};

Contract.GetTermsTemplateHistory = {
  methodName: "GetTermsTemplateHistory",
  service: Contract,
  requestStream: false,
  responseStream: true,
  requestType: src_api_message_contract_v1_contract_pb.GetTermsTemplateHistoryRequest,
  responseType: src_api_message_contract_v1_contract_pb.GetTermsTemplateHistoryResponse
};

Contract.CreateNewContract = {
  methodName: "CreateNewContract",
  service: Contract,
  requestStream: false,
  responseStream: false,
  requestType: src_api_message_contract_v1_contract_pb.CreateNewContractRequest,
  responseType: src_api_message_contract_v1_contract_pb.CreateNewContractResponse
};

Contract.CreateNewTermsTemplate = {
  methodName: "CreateNewTermsTemplate",
  service: Contract,
  requestStream: true,
  responseStream: false,
  requestType: src_api_message_contract_v1_contract_pb.CreateNewTermsTemplateRequest,
  responseType: src_api_message_contract_v1_contract_pb.CreateNewTermsTemplateResponse
};

Contract.UpdateTermsTemplateContent = {
  methodName: "UpdateTermsTemplateContent",
  service: Contract,
  requestStream: true,
  responseStream: false,
  requestType: src_api_message_contract_v1_contract_pb.UpdateTermsTemplateContentRequest,
  responseType: src_api_message_contract_v1_contract_pb.UpdateTermsTemplateContentResponse
};

Contract.UpdateTermsTemplate = {
  methodName: "UpdateTermsTemplate",
  service: Contract,
  requestStream: false,
  responseStream: false,
  requestType: src_api_message_contract_v1_contract_pb.UpdateTermsTemplateRequest,
  responseType: src_api_message_contract_v1_contract_pb.UpdateTermsTemplateResponse
};

Contract.UpdateContractTerms = {
  methodName: "UpdateContractTerms",
  service: Contract,
  requestStream: true,
  responseStream: false,
  requestType: src_api_message_contract_v1_contract_pb.UpdateContractTermsRequest,
  responseType: src_api_message_contract_v1_contract_pb.UpdateContractTermsResponse
};

Contract.UpdateContractMeta = {
  methodName: "UpdateContractMeta",
  service: Contract,
  requestStream: false,
  responseStream: false,
  requestType: src_api_message_contract_v1_contract_pb.UpdateContractMetaRequest,
  responseType: src_api_message_contract_v1_contract_pb.UpdateContractMetaResponse
};

Contract.StartReviewSib = {
  methodName: "StartReviewSib",
  service: Contract,
  requestStream: false,
  responseStream: false,
  requestType: src_api_message_contract_v1_contract_pb.StartReviewSibRequest,
  responseType: src_api_message_contract_v1_contract_pb.StartReviewSibResponse
};

Contract.CancelSibReview = {
  methodName: "CancelSibReview",
  service: Contract,
  requestStream: false,
  responseStream: false,
  requestType: src_api_message_contract_v1_contract_pb.CancelSibReviewRequest,
  responseType: src_api_message_contract_v1_contract_pb.CancelSibReviewResponse
};

Contract.PublishSib = {
  methodName: "PublishSib",
  service: Contract,
  requestStream: false,
  responseStream: false,
  requestType: src_api_message_contract_v1_contract_pb.PublishSibRequest,
  responseType: src_api_message_contract_v1_contract_pb.PublishSibResponse
};

Contract.StartReviewContract = {
  methodName: "StartReviewContract",
  service: Contract,
  requestStream: false,
  responseStream: false,
  requestType: src_api_message_contract_v1_contract_pb.StartReviewContractRequest,
  responseType: src_api_message_contract_v1_contract_pb.StartReviewContractResponse
};

Contract.CancelContractReview = {
  methodName: "CancelContractReview",
  service: Contract,
  requestStream: false,
  responseStream: false,
  requestType: src_api_message_contract_v1_contract_pb.CancelContractReviewRequest,
  responseType: src_api_message_contract_v1_contract_pb.CancelContractReviewResponse
};

Contract.PublishContract = {
  methodName: "PublishContract",
  service: Contract,
  requestStream: false,
  responseStream: false,
  requestType: src_api_message_contract_v1_contract_pb.PublishContractRequest,
  responseType: src_api_message_contract_v1_contract_pb.PublishContractResponse
};

Contract.StartSigningContract = {
  methodName: "StartSigningContract",
  service: Contract,
  requestStream: false,
  responseStream: false,
  requestType: src_api_message_contract_v1_contract_pb.StartSigningContractRequest,
  responseType: src_api_message_contract_v1_contract_pb.StartSigningContractResponse
};

Contract.GetContractSibMcibVisits = {
  methodName: "GetContractSibMcibVisits",
  service: Contract,
  requestStream: false,
  responseStream: true,
  requestType: src_api_message_contract_v1_contract_pb.GetContractSibMcibVisitsRequest,
  responseType: src_api_message_contract_v1_contract_pb.GetContractSibMcibVisitsResponse
};

Contract.GetContractSibMcibProcs = {
  methodName: "GetContractSibMcibProcs",
  service: Contract,
  requestStream: false,
  responseStream: true,
  requestType: src_api_message_contract_v1_contract_pb.GetContractSibMcibProcsRequest,
  responseType: src_api_message_contract_v1_contract_pb.GetContractSibMcibProcsResponse
};

Contract.CreateContractSib = {
  methodName: "CreateContractSib",
  service: Contract,
  requestStream: false,
  responseStream: false,
  requestType: src_api_message_contract_v1_contract_pb.CreateContractSibRequest,
  responseType: src_api_message_contract_v1_contract_pb.CreateContractSibResponse
};

Contract.GetAllSibsByContract = {
  methodName: "GetAllSibsByContract",
  service: Contract,
  requestStream: false,
  responseStream: true,
  requestType: src_api_message_contract_v1_contract_pb.GetAllSibsByContractRequest,
  responseType: src_api_message_contract_v1_contract_pb.GetAllSibsByContractResponse
};

exports.Contract = Contract;

function ContractClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ContractClient.prototype.getAllContracts = function getAllContracts(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Contract.GetAllContracts, {
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

ContractClient.prototype.getStudiesContracts = function getStudiesContracts(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Contract.GetStudiesContracts, {
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

ContractClient.prototype.getSitesContracts = function getSitesContracts(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Contract.GetSitesContracts, {
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

ContractClient.prototype.getContractsByStudyId = function getContractsByStudyId(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Contract.GetContractsByStudyId, {
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

ContractClient.prototype.getContractsByCreator = function getContractsByCreator(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Contract.GetContractsByCreator, {
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

ContractClient.prototype.getContractMeta = function getContractMeta(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Contract.GetContractMeta, {
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

ContractClient.prototype.getContractHistoryMeta = function getContractHistoryMeta(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Contract.GetContractHistoryMeta, {
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

ContractClient.prototype.getContractSIBVisits = function getContractSIBVisits(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Contract.GetContractSIBVisits, {
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

ContractClient.prototype.getContractSIBVisitHistories = function getContractSIBVisitHistories(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Contract.GetContractSIBVisitHistories, {
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

ContractClient.prototype.updateContractSIBVisits = function updateContractSIBVisits(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(Contract.UpdateContractSIBVisits, {
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

ContractClient.prototype.getContractSIBVisitProcedures = function getContractSIBVisitProcedures(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Contract.GetContractSIBVisitProcedures, {
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

ContractClient.prototype.getContractSIBVisitProcedureHistories = function getContractSIBVisitProcedureHistories(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Contract.GetContractSIBVisitProcedureHistories, {
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

ContractClient.prototype.updateContractSIBVisitProcedure = function updateContractSIBVisitProcedure(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(Contract.UpdateContractSIBVisitProcedure, {
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

ContractClient.prototype.getContractSIBMeta = function getContractSIBMeta(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Contract.GetContractSIBMeta, {
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

ContractClient.prototype.getContractSIBMetaHistories = function getContractSIBMetaHistories(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Contract.GetContractSIBMetaHistories, {
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

ContractClient.prototype.updateContractSIBName = function updateContractSIBName(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Contract.UpdateContractSIBName, {
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

ContractClient.prototype.getContractTermsContent = function getContractTermsContent(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Contract.GetContractTermsContent, {
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

ContractClient.prototype.getContractTermsMeta = function getContractTermsMeta(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Contract.GetContractTermsMeta, {
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

ContractClient.prototype.getContractTermsHistories = function getContractTermsHistories(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Contract.GetContractTermsHistories, {
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

ContractClient.prototype.getContractTermsHistory = function getContractTermsHistory(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Contract.GetContractTermsHistory, {
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

ContractClient.prototype.getAllTermsTemplate = function getAllTermsTemplate(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Contract.GetAllTermsTemplate, {
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

ContractClient.prototype.getTermsTemplateContent = function getTermsTemplateContent(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Contract.GetTermsTemplateContent, {
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

ContractClient.prototype.getTermsTemplateHistories = function getTermsTemplateHistories(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Contract.GetTermsTemplateHistories, {
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

ContractClient.prototype.getTermsTemplateHistory = function getTermsTemplateHistory(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Contract.GetTermsTemplateHistory, {
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

ContractClient.prototype.createNewContract = function createNewContract(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Contract.CreateNewContract, {
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

ContractClient.prototype.createNewTermsTemplate = function createNewTermsTemplate(metadata) {
  var listeners = {
    end: [],
    status: []
  };
  var client = grpc.client(Contract.CreateNewTermsTemplate, {
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
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      if (!client.started) {
        client.start(metadata);
      }
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

ContractClient.prototype.updateTermsTemplateContent = function updateTermsTemplateContent(metadata) {
  var listeners = {
    end: [],
    status: []
  };
  var client = grpc.client(Contract.UpdateTermsTemplateContent, {
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
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      if (!client.started) {
        client.start(metadata);
      }
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

ContractClient.prototype.updateTermsTemplate = function updateTermsTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Contract.UpdateTermsTemplate, {
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

ContractClient.prototype.updateContractTerms = function updateContractTerms(metadata) {
  var listeners = {
    end: [],
    status: []
  };
  var client = grpc.client(Contract.UpdateContractTerms, {
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
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      if (!client.started) {
        client.start(metadata);
      }
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

ContractClient.prototype.updateContractMeta = function updateContractMeta(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Contract.UpdateContractMeta, {
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

ContractClient.prototype.startReviewSib = function startReviewSib(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Contract.StartReviewSib, {
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

ContractClient.prototype.cancelSibReview = function cancelSibReview(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Contract.CancelSibReview, {
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

ContractClient.prototype.publishSib = function publishSib(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Contract.PublishSib, {
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

ContractClient.prototype.startReviewContract = function startReviewContract(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Contract.StartReviewContract, {
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

ContractClient.prototype.cancelContractReview = function cancelContractReview(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Contract.CancelContractReview, {
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

ContractClient.prototype.publishContract = function publishContract(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Contract.PublishContract, {
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

ContractClient.prototype.startSigningContract = function startSigningContract(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Contract.StartSigningContract, {
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

ContractClient.prototype.getContractSibMcibVisits = function getContractSibMcibVisits(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Contract.GetContractSibMcibVisits, {
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

ContractClient.prototype.getContractSibMcibProcs = function getContractSibMcibProcs(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Contract.GetContractSibMcibProcs, {
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

ContractClient.prototype.createContractSib = function createContractSib(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Contract.CreateContractSib, {
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

ContractClient.prototype.getAllSibsByContract = function getAllSibsByContract(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Contract.GetAllSibsByContract, {
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

exports.ContractClient = ContractClient;

