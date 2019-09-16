// package: trialblaze.api.contracts.command.v1
// file: src/api/command/v1/mcib.proto

import * as src_api_command_v1_mcib_pb from "../../../../src/api/command/v1/mcib_pb";
import * as src_api_message_mcib_v1_mcib_pb from "../../../../src/api/message/mcib/v1/mcib_pb";
import {grpc} from "@improbable-eng/grpc-web";

type McibGetMcibs = {
  readonly methodName: string;
  readonly service: typeof Mcib;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof src_api_message_mcib_v1_mcib_pb.GetMcibsRequest;
  readonly responseType: typeof src_api_message_mcib_v1_mcib_pb.GetMcibsResponse;
};

type McibGetMcibHistories = {
  readonly methodName: string;
  readonly service: typeof Mcib;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof src_api_message_mcib_v1_mcib_pb.GetMcibHistoriesRequest;
  readonly responseType: typeof src_api_message_mcib_v1_mcib_pb.GetMcibHistoriesResponse;
};

type McibCreateMcib = {
  readonly methodName: string;
  readonly service: typeof Mcib;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_api_message_mcib_v1_mcib_pb.CreateMcibRequest;
  readonly responseType: typeof src_api_message_mcib_v1_mcib_pb.CreateMcibResponse;
};

type McibUpdateMcib = {
  readonly methodName: string;
  readonly service: typeof Mcib;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_api_message_mcib_v1_mcib_pb.UpdateMcibRequest;
  readonly responseType: typeof src_api_message_mcib_v1_mcib_pb.UpdateMcibResponse;
};

type McibGetVisitPriceRanges = {
  readonly methodName: string;
  readonly service: typeof Mcib;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof src_api_message_mcib_v1_mcib_pb.GetVisitPriceRangesRequest;
  readonly responseType: typeof src_api_message_mcib_v1_mcib_pb.GetVisitPriceRangesResponse;
};

type McibGetVisitPriceRangeHistories = {
  readonly methodName: string;
  readonly service: typeof Mcib;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof src_api_message_mcib_v1_mcib_pb.GetVisitPriceRangeHistoriesRequest;
  readonly responseType: typeof src_api_message_mcib_v1_mcib_pb.GetVisitPriceRangeHistoriesResponse;
};

type McibUpdateVisitPriceRanges = {
  readonly methodName: string;
  readonly service: typeof Mcib;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof src_api_message_mcib_v1_mcib_pb.UpdateVisitPriceRangesRequest;
  readonly responseType: typeof src_api_message_mcib_v1_mcib_pb.UpdateVisitPriceRangesResponse;
};

type McibGetVisitProcedurePriceRanges = {
  readonly methodName: string;
  readonly service: typeof Mcib;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof src_api_message_mcib_v1_mcib_pb.GetVisitProcedurePriceRangesRequest;
  readonly responseType: typeof src_api_message_mcib_v1_mcib_pb.GetVisitProcedurePriceRangesResponse;
};

type McibGetVisitProcedurePriceRangeHistories = {
  readonly methodName: string;
  readonly service: typeof Mcib;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof src_api_message_mcib_v1_mcib_pb.GetVisitProcedurePriceRangeHistoriesRequest;
  readonly responseType: typeof src_api_message_mcib_v1_mcib_pb.GetVisitProcedurePriceRangeHistoriesResponse;
};

type McibUpdateVisitProcedurePriceRanges = {
  readonly methodName: string;
  readonly service: typeof Mcib;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof src_api_message_mcib_v1_mcib_pb.UpdateVisitProcedurePriceRangesRequest;
  readonly responseType: typeof src_api_message_mcib_v1_mcib_pb.UpdateVisitProcedurePriceRangesResponse;
};

type McibStartReviewMcib = {
  readonly methodName: string;
  readonly service: typeof Mcib;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_api_message_mcib_v1_mcib_pb.StartReviewMcibRequest;
  readonly responseType: typeof src_api_message_mcib_v1_mcib_pb.StartReviewMcibResponse;
};

type McibCancelMcibReview = {
  readonly methodName: string;
  readonly service: typeof Mcib;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_api_message_mcib_v1_mcib_pb.CancelMcibReviewRequest;
  readonly responseType: typeof src_api_message_mcib_v1_mcib_pb.CancelMcibReviewResponse;
};

type McibPublishMcib = {
  readonly methodName: string;
  readonly service: typeof Mcib;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_api_message_mcib_v1_mcib_pb.PublishMcibRequest;
  readonly responseType: typeof src_api_message_mcib_v1_mcib_pb.PublishMcibResponse;
};

export class Mcib {
  static readonly serviceName: string;
  static readonly GetMcibs: McibGetMcibs;
  static readonly GetMcibHistories: McibGetMcibHistories;
  static readonly CreateMcib: McibCreateMcib;
  static readonly UpdateMcib: McibUpdateMcib;
  static readonly GetVisitPriceRanges: McibGetVisitPriceRanges;
  static readonly GetVisitPriceRangeHistories: McibGetVisitPriceRangeHistories;
  static readonly UpdateVisitPriceRanges: McibUpdateVisitPriceRanges;
  static readonly GetVisitProcedurePriceRanges: McibGetVisitProcedurePriceRanges;
  static readonly GetVisitProcedurePriceRangeHistories: McibGetVisitProcedurePriceRangeHistories;
  static readonly UpdateVisitProcedurePriceRanges: McibUpdateVisitProcedurePriceRanges;
  static readonly StartReviewMcib: McibStartReviewMcib;
  static readonly CancelMcibReview: McibCancelMcibReview;
  static readonly PublishMcib: McibPublishMcib;
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

export class McibClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getMcibs(requestMessage: src_api_message_mcib_v1_mcib_pb.GetMcibsRequest, metadata?: grpc.Metadata): ResponseStream<src_api_message_mcib_v1_mcib_pb.GetMcibsResponse>;
  getMcibHistories(requestMessage: src_api_message_mcib_v1_mcib_pb.GetMcibHistoriesRequest, metadata?: grpc.Metadata): ResponseStream<src_api_message_mcib_v1_mcib_pb.GetMcibHistoriesResponse>;
  createMcib(
    requestMessage: src_api_message_mcib_v1_mcib_pb.CreateMcibRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_api_message_mcib_v1_mcib_pb.CreateMcibResponse|null) => void
  ): UnaryResponse;
  createMcib(
    requestMessage: src_api_message_mcib_v1_mcib_pb.CreateMcibRequest,
    callback: (error: ServiceError|null, responseMessage: src_api_message_mcib_v1_mcib_pb.CreateMcibResponse|null) => void
  ): UnaryResponse;
  updateMcib(
    requestMessage: src_api_message_mcib_v1_mcib_pb.UpdateMcibRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_api_message_mcib_v1_mcib_pb.UpdateMcibResponse|null) => void
  ): UnaryResponse;
  updateMcib(
    requestMessage: src_api_message_mcib_v1_mcib_pb.UpdateMcibRequest,
    callback: (error: ServiceError|null, responseMessage: src_api_message_mcib_v1_mcib_pb.UpdateMcibResponse|null) => void
  ): UnaryResponse;
  getVisitPriceRanges(requestMessage: src_api_message_mcib_v1_mcib_pb.GetVisitPriceRangesRequest, metadata?: grpc.Metadata): ResponseStream<src_api_message_mcib_v1_mcib_pb.GetVisitPriceRangesResponse>;
  getVisitPriceRangeHistories(requestMessage: src_api_message_mcib_v1_mcib_pb.GetVisitPriceRangeHistoriesRequest, metadata?: grpc.Metadata): ResponseStream<src_api_message_mcib_v1_mcib_pb.GetVisitPriceRangeHistoriesResponse>;
  updateVisitPriceRanges(metadata?: grpc.Metadata): BidirectionalStream<src_api_message_mcib_v1_mcib_pb.UpdateVisitPriceRangesRequest, src_api_message_mcib_v1_mcib_pb.UpdateVisitPriceRangesResponse>;
  getVisitProcedurePriceRanges(requestMessage: src_api_message_mcib_v1_mcib_pb.GetVisitProcedurePriceRangesRequest, metadata?: grpc.Metadata): ResponseStream<src_api_message_mcib_v1_mcib_pb.GetVisitProcedurePriceRangesResponse>;
  getVisitProcedurePriceRangeHistories(requestMessage: src_api_message_mcib_v1_mcib_pb.GetVisitProcedurePriceRangeHistoriesRequest, metadata?: grpc.Metadata): ResponseStream<src_api_message_mcib_v1_mcib_pb.GetVisitProcedurePriceRangeHistoriesResponse>;
  updateVisitProcedurePriceRanges(metadata?: grpc.Metadata): BidirectionalStream<src_api_message_mcib_v1_mcib_pb.UpdateVisitProcedurePriceRangesRequest, src_api_message_mcib_v1_mcib_pb.UpdateVisitProcedurePriceRangesResponse>;
  startReviewMcib(
    requestMessage: src_api_message_mcib_v1_mcib_pb.StartReviewMcibRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_api_message_mcib_v1_mcib_pb.StartReviewMcibResponse|null) => void
  ): UnaryResponse;
  startReviewMcib(
    requestMessage: src_api_message_mcib_v1_mcib_pb.StartReviewMcibRequest,
    callback: (error: ServiceError|null, responseMessage: src_api_message_mcib_v1_mcib_pb.StartReviewMcibResponse|null) => void
  ): UnaryResponse;
  cancelMcibReview(
    requestMessage: src_api_message_mcib_v1_mcib_pb.CancelMcibReviewRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_api_message_mcib_v1_mcib_pb.CancelMcibReviewResponse|null) => void
  ): UnaryResponse;
  cancelMcibReview(
    requestMessage: src_api_message_mcib_v1_mcib_pb.CancelMcibReviewRequest,
    callback: (error: ServiceError|null, responseMessage: src_api_message_mcib_v1_mcib_pb.CancelMcibReviewResponse|null) => void
  ): UnaryResponse;
  publishMcib(
    requestMessage: src_api_message_mcib_v1_mcib_pb.PublishMcibRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_api_message_mcib_v1_mcib_pb.PublishMcibResponse|null) => void
  ): UnaryResponse;
  publishMcib(
    requestMessage: src_api_message_mcib_v1_mcib_pb.PublishMcibRequest,
    callback: (error: ServiceError|null, responseMessage: src_api_message_mcib_v1_mcib_pb.PublishMcibResponse|null) => void
  ): UnaryResponse;
}

