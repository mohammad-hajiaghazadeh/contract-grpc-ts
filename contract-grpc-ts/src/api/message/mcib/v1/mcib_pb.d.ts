// package: trialblaze.api.contracts.message.mcib.v1
// file: src/api/message/mcib/v1/mcib.proto

import * as jspb from "google-protobuf";
import * as src_api_message_v1_common_pb from "../../../../../src/api/message/v1/common_pb";

export class Order extends jspb.Message {
  getColumn(): OrderColumnsMap[keyof OrderColumnsMap];
  setColumn(value: OrderColumnsMap[keyof OrderColumnsMap]): void;

  getIsdesc(): boolean;
  setIsdesc(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Order.AsObject;
  static toObject(includeInstance: boolean, msg: Order): Order.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Order, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Order;
  static deserializeBinaryFromReader(message: Order, reader: jspb.BinaryReader): Order;
}

export namespace Order {
  export type AsObject = {
    column: OrderColumnsMap[keyof OrderColumnsMap],
    isdesc: boolean,
  }
}

export class Filter extends jspb.Message {
  getColumn(): FilterColumnsMap[keyof FilterColumnsMap];
  setColumn(value: FilterColumnsMap[keyof FilterColumnsMap]): void;

  getValue(): string;
  setValue(value: string): void;

  getOperation(): src_api_message_v1_common_pb.FilterOperationMap[keyof src_api_message_v1_common_pb.FilterOperationMap];
  setOperation(value: src_api_message_v1_common_pb.FilterOperationMap[keyof src_api_message_v1_common_pb.FilterOperationMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Filter.AsObject;
  static toObject(includeInstance: boolean, msg: Filter): Filter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Filter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Filter;
  static deserializeBinaryFromReader(message: Filter, reader: jspb.BinaryReader): Filter;
}

export namespace Filter {
  export type AsObject = {
    column: FilterColumnsMap[keyof FilterColumnsMap],
    value: string,
    operation: src_api_message_v1_common_pb.FilterOperationMap[keyof src_api_message_v1_common_pb.FilterOperationMap],
  }
}

export class PriceRange extends jspb.Message {
  getPricemin(): number;
  setPricemin(value: number): void;

  getPricemax(): number;
  setPricemax(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PriceRange.AsObject;
  static toObject(includeInstance: boolean, msg: PriceRange): PriceRange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PriceRange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PriceRange;
  static deserializeBinaryFromReader(message: PriceRange, reader: jspb.BinaryReader): PriceRange;
}

export namespace PriceRange {
  export type AsObject = {
    pricemin: number,
    pricemax: number,
  }
}

export class Mcib extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): src_api_message_v1_common_pb.UUID | undefined;
  setId(value?: src_api_message_v1_common_pb.UUID): void;

  getName(): string;
  setName(value: string): void;

  hasCountry(): boolean;
  clearCountry(): void;
  getCountry(): src_api_message_v1_common_pb.CountryRef | undefined;
  setCountry(value?: src_api_message_v1_common_pb.CountryRef): void;

  hasCurrency(): boolean;
  clearCurrency(): void;
  getCurrency(): src_api_message_v1_common_pb.CurrencyRef | undefined;
  setCurrency(value?: src_api_message_v1_common_pb.CurrencyRef): void;

  getStatus(): src_api_message_v1_common_pb.StatusMap[keyof src_api_message_v1_common_pb.StatusMap];
  setStatus(value: src_api_message_v1_common_pb.StatusMap[keyof src_api_message_v1_common_pb.StatusMap]): void;

  getEffectivefrom(): Uint8Array | string;
  getEffectivefrom_asU8(): Uint8Array;
  getEffectivefrom_asB64(): string;
  setEffectivefrom(value: Uint8Array | string): void;

  getEffectiveto(): Uint8Array | string;
  getEffectiveto_asU8(): Uint8Array;
  getEffectiveto_asB64(): string;
  setEffectiveto(value: Uint8Array | string): void;

  getUpdatedon(): Uint8Array | string;
  getUpdatedon_asU8(): Uint8Array;
  getUpdatedon_asB64(): string;
  setUpdatedon(value: Uint8Array | string): void;

  hasUpdatedby(): boolean;
  clearUpdatedby(): void;
  getUpdatedby(): src_api_message_v1_common_pb.UserRef | undefined;
  setUpdatedby(value?: src_api_message_v1_common_pb.UserRef): void;

  hasTrial(): boolean;
  clearTrial(): void;
  getTrial(): src_api_message_v1_common_pb.StudyRef | undefined;
  setTrial(value?: src_api_message_v1_common_pb.StudyRef): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Mcib.AsObject;
  static toObject(includeInstance: boolean, msg: Mcib): Mcib.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Mcib, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Mcib;
  static deserializeBinaryFromReader(message: Mcib, reader: jspb.BinaryReader): Mcib;
}

export namespace Mcib {
  export type AsObject = {
    id?: src_api_message_v1_common_pb.UUID.AsObject,
    name: string,
    country?: src_api_message_v1_common_pb.CountryRef.AsObject,
    currency?: src_api_message_v1_common_pb.CurrencyRef.AsObject,
    status: src_api_message_v1_common_pb.StatusMap[keyof src_api_message_v1_common_pb.StatusMap],
    effectivefrom: Uint8Array | string,
    effectiveto: Uint8Array | string,
    updatedon: Uint8Array | string,
    updatedby?: src_api_message_v1_common_pb.UserRef.AsObject,
    trial?: src_api_message_v1_common_pb.StudyRef.AsObject,
  }
}

export class McibHistory extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  hasMcibid(): boolean;
  clearMcibid(): void;
  getMcibid(): src_api_message_v1_common_pb.UUID | undefined;
  setMcibid(value?: src_api_message_v1_common_pb.UUID): void;

  hasTrial(): boolean;
  clearTrial(): void;
  getTrial(): src_api_message_v1_common_pb.StudyRef | undefined;
  setTrial(value?: src_api_message_v1_common_pb.StudyRef): void;

  getStatus(): src_api_message_v1_common_pb.StatusMap[keyof src_api_message_v1_common_pb.StatusMap];
  setStatus(value: src_api_message_v1_common_pb.StatusMap[keyof src_api_message_v1_common_pb.StatusMap]): void;

  getEffectivefrom(): Uint8Array | string;
  getEffectivefrom_asU8(): Uint8Array;
  getEffectivefrom_asB64(): string;
  setEffectivefrom(value: Uint8Array | string): void;

  getEffectiveto(): Uint8Array | string;
  getEffectiveto_asU8(): Uint8Array;
  getEffectiveto_asB64(): string;
  setEffectiveto(value: Uint8Array | string): void;

  getAction(): string;
  setAction(value: string): void;

  getActiondate(): Uint8Array | string;
  getActiondate_asU8(): Uint8Array;
  getActiondate_asB64(): string;
  setActiondate(value: Uint8Array | string): void;

  hasUpdatedby(): boolean;
  clearUpdatedby(): void;
  getUpdatedby(): src_api_message_v1_common_pb.UserRef | undefined;
  setUpdatedby(value?: src_api_message_v1_common_pb.UserRef): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): McibHistory.AsObject;
  static toObject(includeInstance: boolean, msg: McibHistory): McibHistory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: McibHistory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): McibHistory;
  static deserializeBinaryFromReader(message: McibHistory, reader: jspb.BinaryReader): McibHistory;
}

export namespace McibHistory {
  export type AsObject = {
    id: number,
    mcibid?: src_api_message_v1_common_pb.UUID.AsObject,
    trial?: src_api_message_v1_common_pb.StudyRef.AsObject,
    status: src_api_message_v1_common_pb.StatusMap[keyof src_api_message_v1_common_pb.StatusMap],
    effectivefrom: Uint8Array | string,
    effectiveto: Uint8Array | string,
    action: string,
    actiondate: Uint8Array | string,
    updatedby?: src_api_message_v1_common_pb.UserRef.AsObject,
  }
}

export class VisitPriceRange extends jspb.Message {
  hasMcibid(): boolean;
  clearMcibid(): void;
  getMcibid(): src_api_message_v1_common_pb.UUID | undefined;
  setMcibid(value?: src_api_message_v1_common_pb.UUID): void;

  hasVdid(): boolean;
  clearVdid(): void;
  getVdid(): src_api_message_v1_common_pb.UUID | undefined;
  setVdid(value?: src_api_message_v1_common_pb.UUID): void;

  hasPricerange(): boolean;
  clearPricerange(): void;
  getPricerange(): PriceRange | undefined;
  setPricerange(value?: PriceRange): void;

  getUpdatedon(): Uint8Array | string;
  getUpdatedon_asU8(): Uint8Array;
  getUpdatedon_asB64(): string;
  setUpdatedon(value: Uint8Array | string): void;

  hasUpdatedby(): boolean;
  clearUpdatedby(): void;
  getUpdatedby(): src_api_message_v1_common_pb.UserRef | undefined;
  setUpdatedby(value?: src_api_message_v1_common_pb.UserRef): void;

  hasTrial(): boolean;
  clearTrial(): void;
  getTrial(): src_api_message_v1_common_pb.StudyRef | undefined;
  setTrial(value?: src_api_message_v1_common_pb.StudyRef): void;

  getVisitdefoid(): string;
  setVisitdefoid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VisitPriceRange.AsObject;
  static toObject(includeInstance: boolean, msg: VisitPriceRange): VisitPriceRange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VisitPriceRange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VisitPriceRange;
  static deserializeBinaryFromReader(message: VisitPriceRange, reader: jspb.BinaryReader): VisitPriceRange;
}

export namespace VisitPriceRange {
  export type AsObject = {
    mcibid?: src_api_message_v1_common_pb.UUID.AsObject,
    vdid?: src_api_message_v1_common_pb.UUID.AsObject,
    pricerange?: PriceRange.AsObject,
    updatedon: Uint8Array | string,
    updatedby?: src_api_message_v1_common_pb.UserRef.AsObject,
    trial?: src_api_message_v1_common_pb.StudyRef.AsObject,
    visitdefoid: string,
  }
}

export class VisitPriceRangeHistory extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  hasMcibid(): boolean;
  clearMcibid(): void;
  getMcibid(): src_api_message_v1_common_pb.UUID | undefined;
  setMcibid(value?: src_api_message_v1_common_pb.UUID): void;

  hasVdid(): boolean;
  clearVdid(): void;
  getVdid(): src_api_message_v1_common_pb.UUID | undefined;
  setVdid(value?: src_api_message_v1_common_pb.UUID): void;

  hasPricerange(): boolean;
  clearPricerange(): void;
  getPricerange(): PriceRange | undefined;
  setPricerange(value?: PriceRange): void;

  getAction(): string;
  setAction(value: string): void;

  getActiondate(): Uint8Array | string;
  getActiondate_asU8(): Uint8Array;
  getActiondate_asB64(): string;
  setActiondate(value: Uint8Array | string): void;

  hasUpdatedby(): boolean;
  clearUpdatedby(): void;
  getUpdatedby(): src_api_message_v1_common_pb.UserRef | undefined;
  setUpdatedby(value?: src_api_message_v1_common_pb.UserRef): void;

  hasTrial(): boolean;
  clearTrial(): void;
  getTrial(): src_api_message_v1_common_pb.StudyRef | undefined;
  setTrial(value?: src_api_message_v1_common_pb.StudyRef): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VisitPriceRangeHistory.AsObject;
  static toObject(includeInstance: boolean, msg: VisitPriceRangeHistory): VisitPriceRangeHistory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VisitPriceRangeHistory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VisitPriceRangeHistory;
  static deserializeBinaryFromReader(message: VisitPriceRangeHistory, reader: jspb.BinaryReader): VisitPriceRangeHistory;
}

export namespace VisitPriceRangeHistory {
  export type AsObject = {
    id: number,
    mcibid?: src_api_message_v1_common_pb.UUID.AsObject,
    vdid?: src_api_message_v1_common_pb.UUID.AsObject,
    pricerange?: PriceRange.AsObject,
    action: string,
    actiondate: Uint8Array | string,
    updatedby?: src_api_message_v1_common_pb.UserRef.AsObject,
    trial?: src_api_message_v1_common_pb.StudyRef.AsObject,
  }
}

export class ProcedurePriceRange extends jspb.Message {
  hasMcibid(): boolean;
  clearMcibid(): void;
  getMcibid(): src_api_message_v1_common_pb.UUID | undefined;
  setMcibid(value?: src_api_message_v1_common_pb.UUID): void;

  hasVpdid(): boolean;
  clearVpdid(): void;
  getVpdid(): src_api_message_v1_common_pb.UUID | undefined;
  setVpdid(value?: src_api_message_v1_common_pb.UUID): void;

  hasPricerange(): boolean;
  clearPricerange(): void;
  getPricerange(): PriceRange | undefined;
  setPricerange(value?: PriceRange): void;

  getUpdatedon(): Uint8Array | string;
  getUpdatedon_asU8(): Uint8Array;
  getUpdatedon_asB64(): string;
  setUpdatedon(value: Uint8Array | string): void;

  hasUpdatedby(): boolean;
  clearUpdatedby(): void;
  getUpdatedby(): src_api_message_v1_common_pb.UserRef | undefined;
  setUpdatedby(value?: src_api_message_v1_common_pb.UserRef): void;

  hasTrial(): boolean;
  clearTrial(): void;
  getTrial(): src_api_message_v1_common_pb.StudyRef | undefined;
  setTrial(value?: src_api_message_v1_common_pb.StudyRef): void;

  getProcedureoid(): string;
  setProcedureoid(value: string): void;

  hasVdid(): boolean;
  clearVdid(): void;
  getVdid(): src_api_message_v1_common_pb.UUID | undefined;
  setVdid(value?: src_api_message_v1_common_pb.UUID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcedurePriceRange.AsObject;
  static toObject(includeInstance: boolean, msg: ProcedurePriceRange): ProcedurePriceRange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcedurePriceRange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcedurePriceRange;
  static deserializeBinaryFromReader(message: ProcedurePriceRange, reader: jspb.BinaryReader): ProcedurePriceRange;
}

export namespace ProcedurePriceRange {
  export type AsObject = {
    mcibid?: src_api_message_v1_common_pb.UUID.AsObject,
    vpdid?: src_api_message_v1_common_pb.UUID.AsObject,
    pricerange?: PriceRange.AsObject,
    updatedon: Uint8Array | string,
    updatedby?: src_api_message_v1_common_pb.UserRef.AsObject,
    trial?: src_api_message_v1_common_pb.StudyRef.AsObject,
    procedureoid: string,
    vdid?: src_api_message_v1_common_pb.UUID.AsObject,
  }
}

export class ProcedurePriceRangeHistory extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  hasMcibid(): boolean;
  clearMcibid(): void;
  getMcibid(): src_api_message_v1_common_pb.UUID | undefined;
  setMcibid(value?: src_api_message_v1_common_pb.UUID): void;

  hasVpdid(): boolean;
  clearVpdid(): void;
  getVpdid(): src_api_message_v1_common_pb.UUID | undefined;
  setVpdid(value?: src_api_message_v1_common_pb.UUID): void;

  hasPricerange(): boolean;
  clearPricerange(): void;
  getPricerange(): PriceRange | undefined;
  setPricerange(value?: PriceRange): void;

  getAction(): string;
  setAction(value: string): void;

  getActiondate(): Uint8Array | string;
  getActiondate_asU8(): Uint8Array;
  getActiondate_asB64(): string;
  setActiondate(value: Uint8Array | string): void;

  hasUpdatedby(): boolean;
  clearUpdatedby(): void;
  getUpdatedby(): src_api_message_v1_common_pb.UserRef | undefined;
  setUpdatedby(value?: src_api_message_v1_common_pb.UserRef): void;

  hasTrial(): boolean;
  clearTrial(): void;
  getTrial(): src_api_message_v1_common_pb.StudyRef | undefined;
  setTrial(value?: src_api_message_v1_common_pb.StudyRef): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcedurePriceRangeHistory.AsObject;
  static toObject(includeInstance: boolean, msg: ProcedurePriceRangeHistory): ProcedurePriceRangeHistory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcedurePriceRangeHistory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcedurePriceRangeHistory;
  static deserializeBinaryFromReader(message: ProcedurePriceRangeHistory, reader: jspb.BinaryReader): ProcedurePriceRangeHistory;
}

export namespace ProcedurePriceRangeHistory {
  export type AsObject = {
    id: number,
    mcibid?: src_api_message_v1_common_pb.UUID.AsObject,
    vpdid?: src_api_message_v1_common_pb.UUID.AsObject,
    pricerange?: PriceRange.AsObject,
    action: string,
    actiondate: Uint8Array | string,
    updatedby?: src_api_message_v1_common_pb.UserRef.AsObject,
    trial?: src_api_message_v1_common_pb.StudyRef.AsObject,
  }
}

export class GetMcibsRequest extends jspb.Message {
  getTrialid(): string;
  setTrialid(value: string): void;

  hasOrderby(): boolean;
  clearOrderby(): void;
  getOrderby(): Order | undefined;
  setOrderby(value?: Order): void;

  clearFilterList(): void;
  getFilterList(): Array<Filter>;
  setFilterList(value: Array<Filter>): void;
  addFilter(value?: Filter, index?: number): Filter;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): src_api_message_v1_common_pb.Pagination | undefined;
  setPage(value?: src_api_message_v1_common_pb.Pagination): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMcibsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMcibsRequest): GetMcibsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMcibsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMcibsRequest;
  static deserializeBinaryFromReader(message: GetMcibsRequest, reader: jspb.BinaryReader): GetMcibsRequest;
}

export namespace GetMcibsRequest {
  export type AsObject = {
    trialid: string,
    orderby?: Order.AsObject,
    filterList: Array<Filter.AsObject>,
    page?: src_api_message_v1_common_pb.Pagination.AsObject,
  }
}

export class GetMcibsResponse extends jspb.Message {
  hasMcib(): boolean;
  clearMcib(): void;
  getMcib(): Mcib | undefined;
  setMcib(value?: Mcib): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMcibsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMcibsResponse): GetMcibsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMcibsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMcibsResponse;
  static deserializeBinaryFromReader(message: GetMcibsResponse, reader: jspb.BinaryReader): GetMcibsResponse;
}

export namespace GetMcibsResponse {
  export type AsObject = {
    mcib?: Mcib.AsObject,
  }
}

export class GetMcibHistoriesRequest extends jspb.Message {
  hasMcibid(): boolean;
  clearMcibid(): void;
  getMcibid(): src_api_message_v1_common_pb.UUID | undefined;
  setMcibid(value?: src_api_message_v1_common_pb.UUID): void;

  getTrialid(): string;
  setTrialid(value: string): void;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): src_api_message_v1_common_pb.Pagination | undefined;
  setPage(value?: src_api_message_v1_common_pb.Pagination): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMcibHistoriesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMcibHistoriesRequest): GetMcibHistoriesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMcibHistoriesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMcibHistoriesRequest;
  static deserializeBinaryFromReader(message: GetMcibHistoriesRequest, reader: jspb.BinaryReader): GetMcibHistoriesRequest;
}

export namespace GetMcibHistoriesRequest {
  export type AsObject = {
    mcibid?: src_api_message_v1_common_pb.UUID.AsObject,
    trialid: string,
    page?: src_api_message_v1_common_pb.Pagination.AsObject,
  }
}

export class GetMcibHistoriesResponse extends jspb.Message {
  hasMcibhistory(): boolean;
  clearMcibhistory(): void;
  getMcibhistory(): McibHistory | undefined;
  setMcibhistory(value?: McibHistory): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMcibHistoriesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMcibHistoriesResponse): GetMcibHistoriesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMcibHistoriesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMcibHistoriesResponse;
  static deserializeBinaryFromReader(message: GetMcibHistoriesResponse, reader: jspb.BinaryReader): GetMcibHistoriesResponse;
}

export namespace GetMcibHistoriesResponse {
  export type AsObject = {
    mcibhistory?: McibHistory.AsObject,
  }
}

export class CreateMcibRequest extends jspb.Message {
  hasMcib(): boolean;
  clearMcib(): void;
  getMcib(): Mcib | undefined;
  setMcib(value?: Mcib): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMcibRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMcibRequest): CreateMcibRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateMcibRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMcibRequest;
  static deserializeBinaryFromReader(message: CreateMcibRequest, reader: jspb.BinaryReader): CreateMcibRequest;
}

export namespace CreateMcibRequest {
  export type AsObject = {
    mcib?: Mcib.AsObject,
  }
}

export class CreateMcibResponse extends jspb.Message {
  hasMcibid(): boolean;
  clearMcibid(): void;
  getMcibid(): src_api_message_v1_common_pb.UUID | undefined;
  setMcibid(value?: src_api_message_v1_common_pb.UUID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMcibResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMcibResponse): CreateMcibResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateMcibResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMcibResponse;
  static deserializeBinaryFromReader(message: CreateMcibResponse, reader: jspb.BinaryReader): CreateMcibResponse;
}

export namespace CreateMcibResponse {
  export type AsObject = {
    mcibid?: src_api_message_v1_common_pb.UUID.AsObject,
  }
}

export class UpdateMcibRequest extends jspb.Message {
  hasMcibid(): boolean;
  clearMcibid(): void;
  getMcibid(): src_api_message_v1_common_pb.UUID | undefined;
  setMcibid(value?: src_api_message_v1_common_pb.UUID): void;

  getTrialid(): string;
  setTrialid(value: string): void;

  getEffectivefrom(): Uint8Array | string;
  getEffectivefrom_asU8(): Uint8Array;
  getEffectivefrom_asB64(): string;
  setEffectivefrom(value: Uint8Array | string): void;

  getEffectiveto(): Uint8Array | string;
  getEffectiveto_asU8(): Uint8Array;
  getEffectiveto_asB64(): string;
  setEffectiveto(value: Uint8Array | string): void;

  hasUpdatedby(): boolean;
  clearUpdatedby(): void;
  getUpdatedby(): src_api_message_v1_common_pb.UserRef | undefined;
  setUpdatedby(value?: src_api_message_v1_common_pb.UserRef): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMcibRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMcibRequest): UpdateMcibRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateMcibRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMcibRequest;
  static deserializeBinaryFromReader(message: UpdateMcibRequest, reader: jspb.BinaryReader): UpdateMcibRequest;
}

export namespace UpdateMcibRequest {
  export type AsObject = {
    mcibid?: src_api_message_v1_common_pb.UUID.AsObject,
    trialid: string,
    effectivefrom: Uint8Array | string,
    effectiveto: Uint8Array | string,
    updatedby?: src_api_message_v1_common_pb.UserRef.AsObject,
  }
}

export class UpdateMcibResponse extends jspb.Message {
  hasUpdatedmcib(): boolean;
  clearUpdatedmcib(): void;
  getUpdatedmcib(): Mcib | undefined;
  setUpdatedmcib(value?: Mcib): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMcibResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMcibResponse): UpdateMcibResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateMcibResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMcibResponse;
  static deserializeBinaryFromReader(message: UpdateMcibResponse, reader: jspb.BinaryReader): UpdateMcibResponse;
}

export namespace UpdateMcibResponse {
  export type AsObject = {
    updatedmcib?: Mcib.AsObject,
  }
}

export class GetVisitPriceRangesRequest extends jspb.Message {
  hasMcibid(): boolean;
  clearMcibid(): void;
  getMcibid(): src_api_message_v1_common_pb.UUID | undefined;
  setMcibid(value?: src_api_message_v1_common_pb.UUID): void;

  getTrialid(): string;
  setTrialid(value: string): void;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): src_api_message_v1_common_pb.Pagination | undefined;
  setPage(value?: src_api_message_v1_common_pb.Pagination): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVisitPriceRangesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVisitPriceRangesRequest): GetVisitPriceRangesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVisitPriceRangesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVisitPriceRangesRequest;
  static deserializeBinaryFromReader(message: GetVisitPriceRangesRequest, reader: jspb.BinaryReader): GetVisitPriceRangesRequest;
}

export namespace GetVisitPriceRangesRequest {
  export type AsObject = {
    mcibid?: src_api_message_v1_common_pb.UUID.AsObject,
    trialid: string,
    page?: src_api_message_v1_common_pb.Pagination.AsObject,
  }
}

export class GetVisitPriceRangesResponse extends jspb.Message {
  hasVisitpricerange(): boolean;
  clearVisitpricerange(): void;
  getVisitpricerange(): VisitPriceRange | undefined;
  setVisitpricerange(value?: VisitPriceRange): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVisitPriceRangesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetVisitPriceRangesResponse): GetVisitPriceRangesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVisitPriceRangesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVisitPriceRangesResponse;
  static deserializeBinaryFromReader(message: GetVisitPriceRangesResponse, reader: jspb.BinaryReader): GetVisitPriceRangesResponse;
}

export namespace GetVisitPriceRangesResponse {
  export type AsObject = {
    visitpricerange?: VisitPriceRange.AsObject,
  }
}

export class GetVisitPriceRangeHistoriesRequest extends jspb.Message {
  hasMcibid(): boolean;
  clearMcibid(): void;
  getMcibid(): src_api_message_v1_common_pb.UUID | undefined;
  setMcibid(value?: src_api_message_v1_common_pb.UUID): void;

  hasVdid(): boolean;
  clearVdid(): void;
  getVdid(): src_api_message_v1_common_pb.UUID | undefined;
  setVdid(value?: src_api_message_v1_common_pb.UUID): void;

  getTrialid(): string;
  setTrialid(value: string): void;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): src_api_message_v1_common_pb.Pagination | undefined;
  setPage(value?: src_api_message_v1_common_pb.Pagination): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVisitPriceRangeHistoriesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVisitPriceRangeHistoriesRequest): GetVisitPriceRangeHistoriesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVisitPriceRangeHistoriesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVisitPriceRangeHistoriesRequest;
  static deserializeBinaryFromReader(message: GetVisitPriceRangeHistoriesRequest, reader: jspb.BinaryReader): GetVisitPriceRangeHistoriesRequest;
}

export namespace GetVisitPriceRangeHistoriesRequest {
  export type AsObject = {
    mcibid?: src_api_message_v1_common_pb.UUID.AsObject,
    vdid?: src_api_message_v1_common_pb.UUID.AsObject,
    trialid: string,
    page?: src_api_message_v1_common_pb.Pagination.AsObject,
  }
}

export class GetVisitPriceRangeHistoriesResponse extends jspb.Message {
  hasVisitpricerangehistory(): boolean;
  clearVisitpricerangehistory(): void;
  getVisitpricerangehistory(): VisitPriceRangeHistory | undefined;
  setVisitpricerangehistory(value?: VisitPriceRangeHistory): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVisitPriceRangeHistoriesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetVisitPriceRangeHistoriesResponse): GetVisitPriceRangeHistoriesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVisitPriceRangeHistoriesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVisitPriceRangeHistoriesResponse;
  static deserializeBinaryFromReader(message: GetVisitPriceRangeHistoriesResponse, reader: jspb.BinaryReader): GetVisitPriceRangeHistoriesResponse;
}

export namespace GetVisitPriceRangeHistoriesResponse {
  export type AsObject = {
    visitpricerangehistory?: VisitPriceRangeHistory.AsObject,
  }
}

export class UpdateVisitPriceRangesRequest extends jspb.Message {
  hasNewvisitpricerange(): boolean;
  clearNewvisitpricerange(): void;
  getNewvisitpricerange(): VisitPriceRange | undefined;
  setNewvisitpricerange(value?: VisitPriceRange): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVisitPriceRangesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVisitPriceRangesRequest): UpdateVisitPriceRangesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateVisitPriceRangesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVisitPriceRangesRequest;
  static deserializeBinaryFromReader(message: UpdateVisitPriceRangesRequest, reader: jspb.BinaryReader): UpdateVisitPriceRangesRequest;
}

export namespace UpdateVisitPriceRangesRequest {
  export type AsObject = {
    newvisitpricerange?: VisitPriceRange.AsObject,
  }
}

export class UpdateVisitPriceRangesResponse extends jspb.Message {
  hasNewvisitpricerange(): boolean;
  clearNewvisitpricerange(): void;
  getNewvisitpricerange(): VisitPriceRange | undefined;
  setNewvisitpricerange(value?: VisitPriceRange): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVisitPriceRangesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVisitPriceRangesResponse): UpdateVisitPriceRangesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateVisitPriceRangesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVisitPriceRangesResponse;
  static deserializeBinaryFromReader(message: UpdateVisitPriceRangesResponse, reader: jspb.BinaryReader): UpdateVisitPriceRangesResponse;
}

export namespace UpdateVisitPriceRangesResponse {
  export type AsObject = {
    newvisitpricerange?: VisitPriceRange.AsObject,
  }
}

export class GetVisitProcedurePriceRangesRequest extends jspb.Message {
  hasMcibid(): boolean;
  clearMcibid(): void;
  getMcibid(): src_api_message_v1_common_pb.UUID | undefined;
  setMcibid(value?: src_api_message_v1_common_pb.UUID): void;

  hasVdid(): boolean;
  clearVdid(): void;
  getVdid(): src_api_message_v1_common_pb.UUID | undefined;
  setVdid(value?: src_api_message_v1_common_pb.UUID): void;

  getTrialid(): string;
  setTrialid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVisitProcedurePriceRangesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVisitProcedurePriceRangesRequest): GetVisitProcedurePriceRangesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVisitProcedurePriceRangesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVisitProcedurePriceRangesRequest;
  static deserializeBinaryFromReader(message: GetVisitProcedurePriceRangesRequest, reader: jspb.BinaryReader): GetVisitProcedurePriceRangesRequest;
}

export namespace GetVisitProcedurePriceRangesRequest {
  export type AsObject = {
    mcibid?: src_api_message_v1_common_pb.UUID.AsObject,
    vdid?: src_api_message_v1_common_pb.UUID.AsObject,
    trialid: string,
  }
}

export class GetVisitProcedurePriceRangesResponse extends jspb.Message {
  hasNewprocedurepricerange(): boolean;
  clearNewprocedurepricerange(): void;
  getNewprocedurepricerange(): ProcedurePriceRange | undefined;
  setNewprocedurepricerange(value?: ProcedurePriceRange): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVisitProcedurePriceRangesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetVisitProcedurePriceRangesResponse): GetVisitProcedurePriceRangesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVisitProcedurePriceRangesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVisitProcedurePriceRangesResponse;
  static deserializeBinaryFromReader(message: GetVisitProcedurePriceRangesResponse, reader: jspb.BinaryReader): GetVisitProcedurePriceRangesResponse;
}

export namespace GetVisitProcedurePriceRangesResponse {
  export type AsObject = {
    newprocedurepricerange?: ProcedurePriceRange.AsObject,
  }
}

export class GetVisitProcedurePriceRangeHistoriesRequest extends jspb.Message {
  hasMcibid(): boolean;
  clearMcibid(): void;
  getMcibid(): src_api_message_v1_common_pb.UUID | undefined;
  setMcibid(value?: src_api_message_v1_common_pb.UUID): void;

  hasVpdid(): boolean;
  clearVpdid(): void;
  getVpdid(): src_api_message_v1_common_pb.UUID | undefined;
  setVpdid(value?: src_api_message_v1_common_pb.UUID): void;

  getTrialid(): string;
  setTrialid(value: string): void;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): src_api_message_v1_common_pb.Pagination | undefined;
  setPage(value?: src_api_message_v1_common_pb.Pagination): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVisitProcedurePriceRangeHistoriesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVisitProcedurePriceRangeHistoriesRequest): GetVisitProcedurePriceRangeHistoriesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVisitProcedurePriceRangeHistoriesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVisitProcedurePriceRangeHistoriesRequest;
  static deserializeBinaryFromReader(message: GetVisitProcedurePriceRangeHistoriesRequest, reader: jspb.BinaryReader): GetVisitProcedurePriceRangeHistoriesRequest;
}

export namespace GetVisitProcedurePriceRangeHistoriesRequest {
  export type AsObject = {
    mcibid?: src_api_message_v1_common_pb.UUID.AsObject,
    vpdid?: src_api_message_v1_common_pb.UUID.AsObject,
    trialid: string,
    page?: src_api_message_v1_common_pb.Pagination.AsObject,
  }
}

export class GetVisitProcedurePriceRangeHistoriesResponse extends jspb.Message {
  hasProcedurepricerangehistory(): boolean;
  clearProcedurepricerangehistory(): void;
  getProcedurepricerangehistory(): ProcedurePriceRangeHistory | undefined;
  setProcedurepricerangehistory(value?: ProcedurePriceRangeHistory): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVisitProcedurePriceRangeHistoriesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetVisitProcedurePriceRangeHistoriesResponse): GetVisitProcedurePriceRangeHistoriesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVisitProcedurePriceRangeHistoriesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVisitProcedurePriceRangeHistoriesResponse;
  static deserializeBinaryFromReader(message: GetVisitProcedurePriceRangeHistoriesResponse, reader: jspb.BinaryReader): GetVisitProcedurePriceRangeHistoriesResponse;
}

export namespace GetVisitProcedurePriceRangeHistoriesResponse {
  export type AsObject = {
    procedurepricerangehistory?: ProcedurePriceRangeHistory.AsObject,
  }
}

export class UpdateVisitProcedurePriceRangesRequest extends jspb.Message {
  hasNewprocedurepricerange(): boolean;
  clearNewprocedurepricerange(): void;
  getNewprocedurepricerange(): ProcedurePriceRange | undefined;
  setNewprocedurepricerange(value?: ProcedurePriceRange): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVisitProcedurePriceRangesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVisitProcedurePriceRangesRequest): UpdateVisitProcedurePriceRangesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateVisitProcedurePriceRangesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVisitProcedurePriceRangesRequest;
  static deserializeBinaryFromReader(message: UpdateVisitProcedurePriceRangesRequest, reader: jspb.BinaryReader): UpdateVisitProcedurePriceRangesRequest;
}

export namespace UpdateVisitProcedurePriceRangesRequest {
  export type AsObject = {
    newprocedurepricerange?: ProcedurePriceRange.AsObject,
  }
}

export class UpdateVisitProcedurePriceRangesResponse extends jspb.Message {
  hasNewprocedurepricerange(): boolean;
  clearNewprocedurepricerange(): void;
  getNewprocedurepricerange(): ProcedurePriceRange | undefined;
  setNewprocedurepricerange(value?: ProcedurePriceRange): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVisitProcedurePriceRangesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVisitProcedurePriceRangesResponse): UpdateVisitProcedurePriceRangesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateVisitProcedurePriceRangesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVisitProcedurePriceRangesResponse;
  static deserializeBinaryFromReader(message: UpdateVisitProcedurePriceRangesResponse, reader: jspb.BinaryReader): UpdateVisitProcedurePriceRangesResponse;
}

export namespace UpdateVisitProcedurePriceRangesResponse {
  export type AsObject = {
    newprocedurepricerange?: ProcedurePriceRange.AsObject,
  }
}

export class StartReviewMcibRequest extends jspb.Message {
  hasMcibid(): boolean;
  clearMcibid(): void;
  getMcibid(): src_api_message_v1_common_pb.UUID | undefined;
  setMcibid(value?: src_api_message_v1_common_pb.UUID): void;

  getTrialid(): string;
  setTrialid(value: string): void;

  hasUpdatedby(): boolean;
  clearUpdatedby(): void;
  getUpdatedby(): src_api_message_v1_common_pb.UserRef | undefined;
  setUpdatedby(value?: src_api_message_v1_common_pb.UserRef): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartReviewMcibRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartReviewMcibRequest): StartReviewMcibRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartReviewMcibRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartReviewMcibRequest;
  static deserializeBinaryFromReader(message: StartReviewMcibRequest, reader: jspb.BinaryReader): StartReviewMcibRequest;
}

export namespace StartReviewMcibRequest {
  export type AsObject = {
    mcibid?: src_api_message_v1_common_pb.UUID.AsObject,
    trialid: string,
    updatedby?: src_api_message_v1_common_pb.UserRef.AsObject,
  }
}

export class StartReviewMcibResponse extends jspb.Message {
  hasMcibid(): boolean;
  clearMcibid(): void;
  getMcibid(): src_api_message_v1_common_pb.UUID | undefined;
  setMcibid(value?: src_api_message_v1_common_pb.UUID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartReviewMcibResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StartReviewMcibResponse): StartReviewMcibResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartReviewMcibResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartReviewMcibResponse;
  static deserializeBinaryFromReader(message: StartReviewMcibResponse, reader: jspb.BinaryReader): StartReviewMcibResponse;
}

export namespace StartReviewMcibResponse {
  export type AsObject = {
    mcibid?: src_api_message_v1_common_pb.UUID.AsObject,
  }
}

export class CancelMcibReviewRequest extends jspb.Message {
  hasMcibid(): boolean;
  clearMcibid(): void;
  getMcibid(): src_api_message_v1_common_pb.UUID | undefined;
  setMcibid(value?: src_api_message_v1_common_pb.UUID): void;

  getTrialid(): string;
  setTrialid(value: string): void;

  hasUpdatedby(): boolean;
  clearUpdatedby(): void;
  getUpdatedby(): src_api_message_v1_common_pb.UserRef | undefined;
  setUpdatedby(value?: src_api_message_v1_common_pb.UserRef): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelMcibReviewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelMcibReviewRequest): CancelMcibReviewRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelMcibReviewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelMcibReviewRequest;
  static deserializeBinaryFromReader(message: CancelMcibReviewRequest, reader: jspb.BinaryReader): CancelMcibReviewRequest;
}

export namespace CancelMcibReviewRequest {
  export type AsObject = {
    mcibid?: src_api_message_v1_common_pb.UUID.AsObject,
    trialid: string,
    updatedby?: src_api_message_v1_common_pb.UserRef.AsObject,
  }
}

export class CancelMcibReviewResponse extends jspb.Message {
  hasMcibid(): boolean;
  clearMcibid(): void;
  getMcibid(): src_api_message_v1_common_pb.UUID | undefined;
  setMcibid(value?: src_api_message_v1_common_pb.UUID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelMcibReviewResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CancelMcibReviewResponse): CancelMcibReviewResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelMcibReviewResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelMcibReviewResponse;
  static deserializeBinaryFromReader(message: CancelMcibReviewResponse, reader: jspb.BinaryReader): CancelMcibReviewResponse;
}

export namespace CancelMcibReviewResponse {
  export type AsObject = {
    mcibid?: src_api_message_v1_common_pb.UUID.AsObject,
  }
}

export class PublishMcibRequest extends jspb.Message {
  hasMcibid(): boolean;
  clearMcibid(): void;
  getMcibid(): src_api_message_v1_common_pb.UUID | undefined;
  setMcibid(value?: src_api_message_v1_common_pb.UUID): void;

  getTrialid(): string;
  setTrialid(value: string): void;

  hasUpdatedby(): boolean;
  clearUpdatedby(): void;
  getUpdatedby(): src_api_message_v1_common_pb.UserRef | undefined;
  setUpdatedby(value?: src_api_message_v1_common_pb.UserRef): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishMcibRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PublishMcibRequest): PublishMcibRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublishMcibRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishMcibRequest;
  static deserializeBinaryFromReader(message: PublishMcibRequest, reader: jspb.BinaryReader): PublishMcibRequest;
}

export namespace PublishMcibRequest {
  export type AsObject = {
    mcibid?: src_api_message_v1_common_pb.UUID.AsObject,
    trialid: string,
    updatedby?: src_api_message_v1_common_pb.UserRef.AsObject,
  }
}

export class PublishMcibResponse extends jspb.Message {
  hasMcibid(): boolean;
  clearMcibid(): void;
  getMcibid(): src_api_message_v1_common_pb.UUID | undefined;
  setMcibid(value?: src_api_message_v1_common_pb.UUID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishMcibResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PublishMcibResponse): PublishMcibResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublishMcibResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishMcibResponse;
  static deserializeBinaryFromReader(message: PublishMcibResponse, reader: jspb.BinaryReader): PublishMcibResponse;
}

export namespace PublishMcibResponse {
  export type AsObject = {
    mcibid?: src_api_message_v1_common_pb.UUID.AsObject,
  }
}

export interface OrderColumnsMap {
  TRIAL: 0;
  NAME: 1;
  TIME: 2;
  COUNTRY: 3;
  CURRENCY: 4;
}

export const OrderColumns: OrderColumnsMap;

export interface FilterColumnsMap {
  NO_FILTER: 0;
  TRIAL_ALIAS: 1;
  MCIB_NAME: 2;
  USERNAME: 3;
  USER_ID: 4;
  COUNTRY_ID: 5;
  CURRENCY_ID: 6;
  STATUS: 7;
  MCIB_ID: 8;
}

export const FilterColumns: FilterColumnsMap;

