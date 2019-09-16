// package: trialblaze.api.contracts.command.v1
// file: src/api/command/v1/contract.proto

import * as src_api_command_v1_contract_pb from "../../../../src/api/command/v1/contract_pb";
import * as src_api_message_contract_v1_contract_pb from "../../../../src/api/message/contract/v1/contract_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ContractGetAllContracts = {
  readonly methodName: string;
  readonly service: typeof Contract;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof src_api_message_contract_v1_contract_pb.GetAllContractsRequest;
  readonly responseType: typeof src_api_message_contract_v1_contract_pb.GetAllContractsResponse;
};

type ContractGetStudiesContracts = {
  readonly methodName: string;
  readonly service: typeof Contract;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof src_api_message_contract_v1_contract_pb.GetStudiesContractsRequest;
  readonly responseType: typeof src_api_message_contract_v1_contract_pb.GetStudiesContractsResponse;
};

type ContractGetSitesContracts = {
  readonly methodName: string;
  readonly service: typeof Contract;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof src_api_message_contract_v1_contract_pb.GetSitesContractsRequest;
  readonly responseType: typeof src_api_message_contract_v1_contract_pb.GetSitesContractsResponse;
};

type ContractGetContractsByStudyId = {
  readonly methodName: string;
  readonly service: typeof Contract;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof src_api_message_contract_v1_contract_pb.GetContractsByStudyIdRequest;
  readonly responseType: typeof src_api_message_contract_v1_contract_pb.GetContractsByStudyIdResponse;
};

type ContractGetContractsByCreator = {
  readonly methodName: string;
  readonly service: typeof Contract;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof src_api_message_contract_v1_contract_pb.GetContractsByCreatorRequest;
  readonly responseType: typeof src_api_message_contract_v1_contract_pb.GetContractsByCreatorResponse;
};

type ContractGetContractMeta = {
  readonly methodName: string;
  readonly service: typeof Contract;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_api_message_contract_v1_contract_pb.GetContractMetaRequest;
  readonly responseType: typeof src_api_message_contract_v1_contract_pb.GetContractMetaResponse;
};

type ContractGetContractHistoryMeta = {
  readonly methodName: string;
  readonly service: typeof Contract;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof src_api_message_contract_v1_contract_pb.GetContractHistoryMetaRequest;
  readonly responseType: typeof src_api_message_contract_v1_contract_pb.GetContractHistoryMetaResponse;
};

type ContractGetContractSIBVisits = {
  readonly methodName: string;
  readonly service: typeof Contract;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof src_api_message_contract_v1_contract_pb.GetContractSIBVisitsRequest;
  readonly responseType: typeof src_api_message_contract_v1_contract_pb.GetContractSIBVisitsResponse;
};

type ContractGetContractSIBVisitHistories = {
  readonly methodName: string;
  readonly service: typeof Contract;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof src_api_message_contract_v1_contract_pb.GetContractSIBVisitHistoriesRequest;
  readonly responseType: typeof src_api_message_contract_v1_contract_pb.GetContractSIBVisitHistoriesResponse;
};

type ContractUpdateContractSIBVisits = {
  readonly methodName: string;
  readonly service: typeof Contract;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof src_api_message_contract_v1_contract_pb.UpdateContractSIBVisitsRequest;
  readonly responseType: typeof src_api_message_contract_v1_contract_pb.UpdateContractSIBVisitsResponse;
};

type ContractGetContractSIBVisitProcedures = {
  readonly methodName: string;
  readonly service: typeof Contract;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof src_api_message_contract_v1_contract_pb.GetContractSIBVisitProceduresRequest;
  readonly responseType: typeof src_api_message_contract_v1_contract_pb.GetContractSIBVisitProceduresResponse;
};

type ContractGetContractSIBVisitProcedureHistories = {
  readonly methodName: string;
  readonly service: typeof Contract;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof src_api_message_contract_v1_contract_pb.GetContractSIBVisitProcedureHistoriesRequest;
  readonly responseType: typeof src_api_message_contract_v1_contract_pb.GetContractSIBVisitProcedureHistoriesResponse;
};

type ContractUpdateContractSIBVisitProcedure = {
  readonly methodName: string;
  readonly service: typeof Contract;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof src_api_message_contract_v1_contract_pb.UpdateContractSIBVisitProcedureRequest;
  readonly responseType: typeof src_api_message_contract_v1_contract_pb.UpdateContractSIBVisitProcedureResponse;
};

type ContractGetContractSIBMeta = {
  readonly methodName: string;
  readonly service: typeof Contract;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_api_message_contract_v1_contract_pb.GetContractSIBMetaRequest;
  readonly responseType: typeof src_api_message_contract_v1_contract_pb.GetContractSIBMetaResponse;
};

type ContractGetContractSIBMetaHistories = {
  readonly methodName: string;
  readonly service: typeof Contract;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof src_api_message_contract_v1_contract_pb.GetContractSIBMetaHistoriesRequest;
  readonly responseType: typeof src_api_message_contract_v1_contract_pb.GetContractSIBMetaHistoriesResponse;
};

type ContractUpdateContractSIBName = {
  readonly methodName: string;
  readonly service: typeof Contract;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_api_message_contract_v1_contract_pb.UpdateContractSIBNameRequest;
  readonly responseType: typeof src_api_message_contract_v1_contract_pb.UpdateContractSIBNameResponse;
};

type ContractGetContractTermsContent = {
  readonly methodName: string;
  readonly service: typeof Contract;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof src_api_message_contract_v1_contract_pb.GetContractTermsContentRequest;
  readonly responseType: typeof src_api_message_contract_v1_contract_pb.GetContractTermsContentResponse;
};

type ContractGetContractTermsMeta = {
  readonly methodName: string;
  readonly service: typeof Contract;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_api_message_contract_v1_contract_pb.GetContractTermsMetaRequest;
  readonly responseType: typeof src_api_message_contract_v1_contract_pb.GetContractTermsMetaResponse;
};

type ContractGetContractTermsHistories = {
  readonly methodName: string;
  readonly service: typeof Contract;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof src_api_message_contract_v1_contract_pb.GetContractTermsHistoriesRequest;
  readonly responseType: typeof src_api_message_contract_v1_contract_pb.GetContractTermsHistoriesResponse;
};

type ContractGetContractTermsHistory = {
  readonly methodName: string;
  readonly service: typeof Contract;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof src_api_message_contract_v1_contract_pb.GetContractTermsHistoryRequest;
  readonly responseType: typeof src_api_message_contract_v1_contract_pb.GetContractTermsHistoryResponse;
};

type ContractGetAllTermsTemplate = {
  readonly methodName: string;
  readonly service: typeof Contract;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof src_api_message_contract_v1_contract_pb.GetAllTermsTemplateRequest;
  readonly responseType: typeof src_api_message_contract_v1_contract_pb.GetAllTermsTemplateResponse;
};

type ContractGetTermsTemplateContent = {
  readonly methodName: string;
  readonly service: typeof Contract;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof src_api_message_contract_v1_contract_pb.GetTermsTemplateContentRequest;
  readonly responseType: typeof src_api_message_contract_v1_contract_pb.GetTermsTemplateContentResponse;
};

type ContractGetTermsTemplateHistories = {
  readonly methodName: string;
  readonly service: typeof Contract;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof src_api_message_contract_v1_contract_pb.GetTermsTemplateHistoriesRequest;
  readonly responseType: typeof src_api_message_contract_v1_contract_pb.GetTermsTemplateHistoriesResponse;
};

type ContractGetTermsTemplateHistory = {
  readonly methodName: string;
  readonly service: typeof Contract;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof src_api_message_contract_v1_contract_pb.GetTermsTemplateHistoryRequest;
  readonly responseType: typeof src_api_message_contract_v1_contract_pb.GetTermsTemplateHistoryResponse;
};

type ContractCreateNewContract = {
  readonly methodName: string;
  readonly service: typeof Contract;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_api_message_contract_v1_contract_pb.CreateNewContractRequest;
  readonly responseType: typeof src_api_message_contract_v1_contract_pb.CreateNewContractResponse;
};

type ContractCreateNewTermsTemplate = {
  readonly methodName: string;
  readonly service: typeof Contract;
  readonly requestStream: true;
  readonly responseStream: false;
  readonly requestType: typeof src_api_message_contract_v1_contract_pb.CreateNewTermsTemplateRequest;
  readonly responseType: typeof src_api_message_contract_v1_contract_pb.CreateNewTermsTemplateResponse;
};

type ContractUpdateTermsTemplateContent = {
  readonly methodName: string;
  readonly service: typeof Contract;
  readonly requestStream: true;
  readonly responseStream: false;
  readonly requestType: typeof src_api_message_contract_v1_contract_pb.UpdateTermsTemplateContentRequest;
  readonly responseType: typeof src_api_message_contract_v1_contract_pb.UpdateTermsTemplateContentResponse;
};

type ContractUpdateTermsTemplate = {
  readonly methodName: string;
  readonly service: typeof Contract;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_api_message_contract_v1_contract_pb.UpdateTermsTemplateRequest;
  readonly responseType: typeof src_api_message_contract_v1_contract_pb.UpdateTermsTemplateResponse;
};

type ContractUpdateContractTerms = {
  readonly methodName: string;
  readonly service: typeof Contract;
  readonly requestStream: true;
  readonly responseStream: false;
  readonly requestType: typeof src_api_message_contract_v1_contract_pb.UpdateContractTermsRequest;
  readonly responseType: typeof src_api_message_contract_v1_contract_pb.UpdateContractTermsResponse;
};

type ContractUpdateContractMeta = {
  readonly methodName: string;
  readonly service: typeof Contract;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_api_message_contract_v1_contract_pb.UpdateContractMetaRequest;
  readonly responseType: typeof src_api_message_contract_v1_contract_pb.UpdateContractMetaResponse;
};

type ContractStartReviewSib = {
  readonly methodName: string;
  readonly service: typeof Contract;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_api_message_contract_v1_contract_pb.StartReviewSibRequest;
  readonly responseType: typeof src_api_message_contract_v1_contract_pb.StartReviewSibResponse;
};

type ContractCancelSibReview = {
  readonly methodName: string;
  readonly service: typeof Contract;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_api_message_contract_v1_contract_pb.CancelSibReviewRequest;
  readonly responseType: typeof src_api_message_contract_v1_contract_pb.CancelSibReviewResponse;
};

type ContractPublishSib = {
  readonly methodName: string;
  readonly service: typeof Contract;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_api_message_contract_v1_contract_pb.PublishSibRequest;
  readonly responseType: typeof src_api_message_contract_v1_contract_pb.PublishSibResponse;
};

type ContractStartReviewContract = {
  readonly methodName: string;
  readonly service: typeof Contract;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_api_message_contract_v1_contract_pb.StartReviewContractRequest;
  readonly responseType: typeof src_api_message_contract_v1_contract_pb.StartReviewContractResponse;
};

type ContractCancelContractReview = {
  readonly methodName: string;
  readonly service: typeof Contract;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_api_message_contract_v1_contract_pb.CancelContractReviewRequest;
  readonly responseType: typeof src_api_message_contract_v1_contract_pb.CancelContractReviewResponse;
};

type ContractPublishContract = {
  readonly methodName: string;
  readonly service: typeof Contract;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_api_message_contract_v1_contract_pb.PublishContractRequest;
  readonly responseType: typeof src_api_message_contract_v1_contract_pb.PublishContractResponse;
};

type ContractStartSigningContract = {
  readonly methodName: string;
  readonly service: typeof Contract;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_api_message_contract_v1_contract_pb.StartSigningContractRequest;
  readonly responseType: typeof src_api_message_contract_v1_contract_pb.StartSigningContractResponse;
};

type ContractGetContractSibMcibVisits = {
  readonly methodName: string;
  readonly service: typeof Contract;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof src_api_message_contract_v1_contract_pb.GetContractSibMcibVisitsRequest;
  readonly responseType: typeof src_api_message_contract_v1_contract_pb.GetContractSibMcibVisitsResponse;
};

type ContractGetContractSibMcibProcs = {
  readonly methodName: string;
  readonly service: typeof Contract;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof src_api_message_contract_v1_contract_pb.GetContractSibMcibProcsRequest;
  readonly responseType: typeof src_api_message_contract_v1_contract_pb.GetContractSibMcibProcsResponse;
};

type ContractCreateContractSib = {
  readonly methodName: string;
  readonly service: typeof Contract;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_api_message_contract_v1_contract_pb.CreateContractSibRequest;
  readonly responseType: typeof src_api_message_contract_v1_contract_pb.CreateContractSibResponse;
};

type ContractGetAllSibsByContract = {
  readonly methodName: string;
  readonly service: typeof Contract;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof src_api_message_contract_v1_contract_pb.GetAllSibsByContractRequest;
  readonly responseType: typeof src_api_message_contract_v1_contract_pb.GetAllSibsByContractResponse;
};

export class Contract {
  static readonly serviceName: string;
  static readonly GetAllContracts: ContractGetAllContracts;
  static readonly GetStudiesContracts: ContractGetStudiesContracts;
  static readonly GetSitesContracts: ContractGetSitesContracts;
  static readonly GetContractsByStudyId: ContractGetContractsByStudyId;
  static readonly GetContractsByCreator: ContractGetContractsByCreator;
  static readonly GetContractMeta: ContractGetContractMeta;
  static readonly GetContractHistoryMeta: ContractGetContractHistoryMeta;
  static readonly GetContractSIBVisits: ContractGetContractSIBVisits;
  static readonly GetContractSIBVisitHistories: ContractGetContractSIBVisitHistories;
  static readonly UpdateContractSIBVisits: ContractUpdateContractSIBVisits;
  static readonly GetContractSIBVisitProcedures: ContractGetContractSIBVisitProcedures;
  static readonly GetContractSIBVisitProcedureHistories: ContractGetContractSIBVisitProcedureHistories;
  static readonly UpdateContractSIBVisitProcedure: ContractUpdateContractSIBVisitProcedure;
  static readonly GetContractSIBMeta: ContractGetContractSIBMeta;
  static readonly GetContractSIBMetaHistories: ContractGetContractSIBMetaHistories;
  static readonly UpdateContractSIBName: ContractUpdateContractSIBName;
  static readonly GetContractTermsContent: ContractGetContractTermsContent;
  static readonly GetContractTermsMeta: ContractGetContractTermsMeta;
  static readonly GetContractTermsHistories: ContractGetContractTermsHistories;
  static readonly GetContractTermsHistory: ContractGetContractTermsHistory;
  static readonly GetAllTermsTemplate: ContractGetAllTermsTemplate;
  static readonly GetTermsTemplateContent: ContractGetTermsTemplateContent;
  static readonly GetTermsTemplateHistories: ContractGetTermsTemplateHistories;
  static readonly GetTermsTemplateHistory: ContractGetTermsTemplateHistory;
  static readonly CreateNewContract: ContractCreateNewContract;
  static readonly CreateNewTermsTemplate: ContractCreateNewTermsTemplate;
  static readonly UpdateTermsTemplateContent: ContractUpdateTermsTemplateContent;
  static readonly UpdateTermsTemplate: ContractUpdateTermsTemplate;
  static readonly UpdateContractTerms: ContractUpdateContractTerms;
  static readonly UpdateContractMeta: ContractUpdateContractMeta;
  static readonly StartReviewSib: ContractStartReviewSib;
  static readonly CancelSibReview: ContractCancelSibReview;
  static readonly PublishSib: ContractPublishSib;
  static readonly StartReviewContract: ContractStartReviewContract;
  static readonly CancelContractReview: ContractCancelContractReview;
  static readonly PublishContract: ContractPublishContract;
  static readonly StartSigningContract: ContractStartSigningContract;
  static readonly GetContractSibMcibVisits: ContractGetContractSibMcibVisits;
  static readonly GetContractSibMcibProcs: ContractGetContractSibMcibProcs;
  static readonly CreateContractSib: ContractCreateContractSib;
  static readonly GetAllSibsByContract: ContractGetAllSibsByContract;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class ContractClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getAllContracts(requestMessage: src_api_message_contract_v1_contract_pb.GetAllContractsRequest, metadata?: grpc.Metadata): ResponseStream<src_api_message_contract_v1_contract_pb.GetAllContractsResponse>;
  getStudiesContracts(requestMessage: src_api_message_contract_v1_contract_pb.GetStudiesContractsRequest, metadata?: grpc.Metadata): ResponseStream<src_api_message_contract_v1_contract_pb.GetStudiesContractsResponse>;
  getSitesContracts(requestMessage: src_api_message_contract_v1_contract_pb.GetSitesContractsRequest, metadata?: grpc.Metadata): ResponseStream<src_api_message_contract_v1_contract_pb.GetSitesContractsResponse>;
  getContractsByStudyId(requestMessage: src_api_message_contract_v1_contract_pb.GetContractsByStudyIdRequest, metadata?: grpc.Metadata): ResponseStream<src_api_message_contract_v1_contract_pb.GetContractsByStudyIdResponse>;
  getContractsByCreator(requestMessage: src_api_message_contract_v1_contract_pb.GetContractsByCreatorRequest, metadata?: grpc.Metadata): ResponseStream<src_api_message_contract_v1_contract_pb.GetContractsByCreatorResponse>;
  getContractMeta(
    requestMessage: src_api_message_contract_v1_contract_pb.GetContractMetaRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_api_message_contract_v1_contract_pb.GetContractMetaResponse|null) => void
  ): UnaryResponse;
  getContractMeta(
    requestMessage: src_api_message_contract_v1_contract_pb.GetContractMetaRequest,
    callback: (error: ServiceError|null, responseMessage: src_api_message_contract_v1_contract_pb.GetContractMetaResponse|null) => void
  ): UnaryResponse;
  getContractHistoryMeta(requestMessage: src_api_message_contract_v1_contract_pb.GetContractHistoryMetaRequest, metadata?: grpc.Metadata): ResponseStream<src_api_message_contract_v1_contract_pb.GetContractHistoryMetaResponse>;
  getContractSIBVisits(requestMessage: src_api_message_contract_v1_contract_pb.GetContractSIBVisitsRequest, metadata?: grpc.Metadata): ResponseStream<src_api_message_contract_v1_contract_pb.GetContractSIBVisitsResponse>;
  getContractSIBVisitHistories(requestMessage: src_api_message_contract_v1_contract_pb.GetContractSIBVisitHistoriesRequest, metadata?: grpc.Metadata): ResponseStream<src_api_message_contract_v1_contract_pb.GetContractSIBVisitHistoriesResponse>;
  updateContractSIBVisits(metadata?: grpc.Metadata): BidirectionalStream<src_api_message_contract_v1_contract_pb.UpdateContractSIBVisitsRequest, src_api_message_contract_v1_contract_pb.UpdateContractSIBVisitsResponse>;
  getContractSIBVisitProcedures(requestMessage: src_api_message_contract_v1_contract_pb.GetContractSIBVisitProceduresRequest, metadata?: grpc.Metadata): ResponseStream<src_api_message_contract_v1_contract_pb.GetContractSIBVisitProceduresResponse>;
  getContractSIBVisitProcedureHistories(requestMessage: src_api_message_contract_v1_contract_pb.GetContractSIBVisitProcedureHistoriesRequest, metadata?: grpc.Metadata): ResponseStream<src_api_message_contract_v1_contract_pb.GetContractSIBVisitProcedureHistoriesResponse>;
  updateContractSIBVisitProcedure(metadata?: grpc.Metadata): BidirectionalStream<src_api_message_contract_v1_contract_pb.UpdateContractSIBVisitProcedureRequest, src_api_message_contract_v1_contract_pb.UpdateContractSIBVisitProcedureResponse>;
  getContractSIBMeta(
    requestMessage: src_api_message_contract_v1_contract_pb.GetContractSIBMetaRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_api_message_contract_v1_contract_pb.GetContractSIBMetaResponse|null) => void
  ): UnaryResponse;
  getContractSIBMeta(
    requestMessage: src_api_message_contract_v1_contract_pb.GetContractSIBMetaRequest,
    callback: (error: ServiceError|null, responseMessage: src_api_message_contract_v1_contract_pb.GetContractSIBMetaResponse|null) => void
  ): UnaryResponse;
  getContractSIBMetaHistories(requestMessage: src_api_message_contract_v1_contract_pb.GetContractSIBMetaHistoriesRequest, metadata?: grpc.Metadata): ResponseStream<src_api_message_contract_v1_contract_pb.GetContractSIBMetaHistoriesResponse>;
  updateContractSIBName(
    requestMessage: src_api_message_contract_v1_contract_pb.UpdateContractSIBNameRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_api_message_contract_v1_contract_pb.UpdateContractSIBNameResponse|null) => void
  ): UnaryResponse;
  updateContractSIBName(
    requestMessage: src_api_message_contract_v1_contract_pb.UpdateContractSIBNameRequest,
    callback: (error: ServiceError|null, responseMessage: src_api_message_contract_v1_contract_pb.UpdateContractSIBNameResponse|null) => void
  ): UnaryResponse;
  getContractTermsContent(requestMessage: src_api_message_contract_v1_contract_pb.GetContractTermsContentRequest, metadata?: grpc.Metadata): ResponseStream<src_api_message_contract_v1_contract_pb.GetContractTermsContentResponse>;
  getContractTermsMeta(
    requestMessage: src_api_message_contract_v1_contract_pb.GetContractTermsMetaRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_api_message_contract_v1_contract_pb.GetContractTermsMetaResponse|null) => void
  ): UnaryResponse;
  getContractTermsMeta(
    requestMessage: src_api_message_contract_v1_contract_pb.GetContractTermsMetaRequest,
    callback: (error: ServiceError|null, responseMessage: src_api_message_contract_v1_contract_pb.GetContractTermsMetaResponse|null) => void
  ): UnaryResponse;
  getContractTermsHistories(requestMessage: src_api_message_contract_v1_contract_pb.GetContractTermsHistoriesRequest, metadata?: grpc.Metadata): ResponseStream<src_api_message_contract_v1_contract_pb.GetContractTermsHistoriesResponse>;
  getContractTermsHistory(requestMessage: src_api_message_contract_v1_contract_pb.GetContractTermsHistoryRequest, metadata?: grpc.Metadata): ResponseStream<src_api_message_contract_v1_contract_pb.GetContractTermsHistoryResponse>;
  getAllTermsTemplate(requestMessage: src_api_message_contract_v1_contract_pb.GetAllTermsTemplateRequest, metadata?: grpc.Metadata): ResponseStream<src_api_message_contract_v1_contract_pb.GetAllTermsTemplateResponse>;
  getTermsTemplateContent(requestMessage: src_api_message_contract_v1_contract_pb.GetTermsTemplateContentRequest, metadata?: grpc.Metadata): ResponseStream<src_api_message_contract_v1_contract_pb.GetTermsTemplateContentResponse>;
  getTermsTemplateHistories(requestMessage: src_api_message_contract_v1_contract_pb.GetTermsTemplateHistoriesRequest, metadata?: grpc.Metadata): ResponseStream<src_api_message_contract_v1_contract_pb.GetTermsTemplateHistoriesResponse>;
  getTermsTemplateHistory(requestMessage: src_api_message_contract_v1_contract_pb.GetTermsTemplateHistoryRequest, metadata?: grpc.Metadata): ResponseStream<src_api_message_contract_v1_contract_pb.GetTermsTemplateHistoryResponse>;
  createNewContract(
    requestMessage: src_api_message_contract_v1_contract_pb.CreateNewContractRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_api_message_contract_v1_contract_pb.CreateNewContractResponse|null) => void
  ): UnaryResponse;
  createNewContract(
    requestMessage: src_api_message_contract_v1_contract_pb.CreateNewContractRequest,
    callback: (error: ServiceError|null, responseMessage: src_api_message_contract_v1_contract_pb.CreateNewContractResponse|null) => void
  ): UnaryResponse;
  createNewTermsTemplate(metadata?: grpc.Metadata): RequestStream<src_api_message_contract_v1_contract_pb.CreateNewTermsTemplateRequest>;
  updateTermsTemplateContent(metadata?: grpc.Metadata): RequestStream<src_api_message_contract_v1_contract_pb.UpdateTermsTemplateContentRequest>;
  updateTermsTemplate(
    requestMessage: src_api_message_contract_v1_contract_pb.UpdateTermsTemplateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_api_message_contract_v1_contract_pb.UpdateTermsTemplateResponse|null) => void
  ): UnaryResponse;
  updateTermsTemplate(
    requestMessage: src_api_message_contract_v1_contract_pb.UpdateTermsTemplateRequest,
    callback: (error: ServiceError|null, responseMessage: src_api_message_contract_v1_contract_pb.UpdateTermsTemplateResponse|null) => void
  ): UnaryResponse;
  updateContractTerms(metadata?: grpc.Metadata): RequestStream<src_api_message_contract_v1_contract_pb.UpdateContractTermsRequest>;
  updateContractMeta(
    requestMessage: src_api_message_contract_v1_contract_pb.UpdateContractMetaRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_api_message_contract_v1_contract_pb.UpdateContractMetaResponse|null) => void
  ): UnaryResponse;
  updateContractMeta(
    requestMessage: src_api_message_contract_v1_contract_pb.UpdateContractMetaRequest,
    callback: (error: ServiceError|null, responseMessage: src_api_message_contract_v1_contract_pb.UpdateContractMetaResponse|null) => void
  ): UnaryResponse;
  startReviewSib(
    requestMessage: src_api_message_contract_v1_contract_pb.StartReviewSibRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_api_message_contract_v1_contract_pb.StartReviewSibResponse|null) => void
  ): UnaryResponse;
  startReviewSib(
    requestMessage: src_api_message_contract_v1_contract_pb.StartReviewSibRequest,
    callback: (error: ServiceError|null, responseMessage: src_api_message_contract_v1_contract_pb.StartReviewSibResponse|null) => void
  ): UnaryResponse;
  cancelSibReview(
    requestMessage: src_api_message_contract_v1_contract_pb.CancelSibReviewRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_api_message_contract_v1_contract_pb.CancelSibReviewResponse|null) => void
  ): UnaryResponse;
  cancelSibReview(
    requestMessage: src_api_message_contract_v1_contract_pb.CancelSibReviewRequest,
    callback: (error: ServiceError|null, responseMessage: src_api_message_contract_v1_contract_pb.CancelSibReviewResponse|null) => void
  ): UnaryResponse;
  publishSib(
    requestMessage: src_api_message_contract_v1_contract_pb.PublishSibRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_api_message_contract_v1_contract_pb.PublishSibResponse|null) => void
  ): UnaryResponse;
  publishSib(
    requestMessage: src_api_message_contract_v1_contract_pb.PublishSibRequest,
    callback: (error: ServiceError|null, responseMessage: src_api_message_contract_v1_contract_pb.PublishSibResponse|null) => void
  ): UnaryResponse;
  startReviewContract(
    requestMessage: src_api_message_contract_v1_contract_pb.StartReviewContractRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_api_message_contract_v1_contract_pb.StartReviewContractResponse|null) => void
  ): UnaryResponse;
  startReviewContract(
    requestMessage: src_api_message_contract_v1_contract_pb.StartReviewContractRequest,
    callback: (error: ServiceError|null, responseMessage: src_api_message_contract_v1_contract_pb.StartReviewContractResponse|null) => void
  ): UnaryResponse;
  cancelContractReview(
    requestMessage: src_api_message_contract_v1_contract_pb.CancelContractReviewRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_api_message_contract_v1_contract_pb.CancelContractReviewResponse|null) => void
  ): UnaryResponse;
  cancelContractReview(
    requestMessage: src_api_message_contract_v1_contract_pb.CancelContractReviewRequest,
    callback: (error: ServiceError|null, responseMessage: src_api_message_contract_v1_contract_pb.CancelContractReviewResponse|null) => void
  ): UnaryResponse;
  publishContract(
    requestMessage: src_api_message_contract_v1_contract_pb.PublishContractRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_api_message_contract_v1_contract_pb.PublishContractResponse|null) => void
  ): UnaryResponse;
  publishContract(
    requestMessage: src_api_message_contract_v1_contract_pb.PublishContractRequest,
    callback: (error: ServiceError|null, responseMessage: src_api_message_contract_v1_contract_pb.PublishContractResponse|null) => void
  ): UnaryResponse;
  startSigningContract(
    requestMessage: src_api_message_contract_v1_contract_pb.StartSigningContractRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_api_message_contract_v1_contract_pb.StartSigningContractResponse|null) => void
  ): UnaryResponse;
  startSigningContract(
    requestMessage: src_api_message_contract_v1_contract_pb.StartSigningContractRequest,
    callback: (error: ServiceError|null, responseMessage: src_api_message_contract_v1_contract_pb.StartSigningContractResponse|null) => void
  ): UnaryResponse;
  getContractSibMcibVisits(requestMessage: src_api_message_contract_v1_contract_pb.GetContractSibMcibVisitsRequest, metadata?: grpc.Metadata): ResponseStream<src_api_message_contract_v1_contract_pb.GetContractSibMcibVisitsResponse>;
  getContractSibMcibProcs(requestMessage: src_api_message_contract_v1_contract_pb.GetContractSibMcibProcsRequest, metadata?: grpc.Metadata): ResponseStream<src_api_message_contract_v1_contract_pb.GetContractSibMcibProcsResponse>;
  createContractSib(
    requestMessage: src_api_message_contract_v1_contract_pb.CreateContractSibRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_api_message_contract_v1_contract_pb.CreateContractSibResponse|null) => void
  ): UnaryResponse;
  createContractSib(
    requestMessage: src_api_message_contract_v1_contract_pb.CreateContractSibRequest,
    callback: (error: ServiceError|null, responseMessage: src_api_message_contract_v1_contract_pb.CreateContractSibResponse|null) => void
  ): UnaryResponse;
  getAllSibsByContract(requestMessage: src_api_message_contract_v1_contract_pb.GetAllSibsByContractRequest, metadata?: grpc.Metadata): ResponseStream<src_api_message_contract_v1_contract_pb.GetAllSibsByContractResponse>;
}

