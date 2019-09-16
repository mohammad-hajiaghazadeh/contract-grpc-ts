// package: trialblaze.api.contracts.message.contract.v1
// file: src/api/message/contract/v1/contract.proto

import * as jspb from "google-protobuf";
import * as src_api_message_v1_common_pb from "../../../../../src/api/message/v1/common_pb";

export class ContractOrder extends jspb.Message {
  getColumn(): OrderColumnsMap[keyof OrderColumnsMap];
  setColumn(value: OrderColumnsMap[keyof OrderColumnsMap]): void;

  getIsdesc(): boolean;
  setIsdesc(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContractOrder.AsObject;
  static toObject(includeInstance: boolean, msg: ContractOrder): ContractOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContractOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContractOrder;
  static deserializeBinaryFromReader(message: ContractOrder, reader: jspb.BinaryReader): ContractOrder;
}

export namespace ContractOrder {
  export type AsObject = {
    column: OrderColumnsMap[keyof OrderColumnsMap],
    isdesc: boolean,
  }
}

export class ContractFilter extends jspb.Message {
  getColumn(): FilterColumnsMap[keyof FilterColumnsMap];
  setColumn(value: FilterColumnsMap[keyof FilterColumnsMap]): void;

  getValue(): string;
  setValue(value: string): void;

  getOperation(): src_api_message_v1_common_pb.FilterOperationMap[keyof src_api_message_v1_common_pb.FilterOperationMap];
  setOperation(value: src_api_message_v1_common_pb.FilterOperationMap[keyof src_api_message_v1_common_pb.FilterOperationMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContractFilter.AsObject;
  static toObject(includeInstance: boolean, msg: ContractFilter): ContractFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContractFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContractFilter;
  static deserializeBinaryFromReader(message: ContractFilter, reader: jspb.BinaryReader): ContractFilter;
}

export namespace ContractFilter {
  export type AsObject = {
    column: FilterColumnsMap[keyof FilterColumnsMap],
    value: string,
    operation: src_api_message_v1_common_pb.FilterOperationMap[keyof src_api_message_v1_common_pb.FilterOperationMap],
  }
}

export class TermsTemplateOrder extends jspb.Message {
  getColumn(): OrderColumnsMap[keyof OrderColumnsMap];
  setColumn(value: OrderColumnsMap[keyof OrderColumnsMap]): void;

  getIsdesc(): boolean;
  setIsdesc(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TermsTemplateOrder.AsObject;
  static toObject(includeInstance: boolean, msg: TermsTemplateOrder): TermsTemplateOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TermsTemplateOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TermsTemplateOrder;
  static deserializeBinaryFromReader(message: TermsTemplateOrder, reader: jspb.BinaryReader): TermsTemplateOrder;
}

export namespace TermsTemplateOrder {
  export type AsObject = {
    column: OrderColumnsMap[keyof OrderColumnsMap],
    isdesc: boolean,
  }
}

export class TermsTemplateFilter extends jspb.Message {
  getColumn(): FilterColumnsMap[keyof FilterColumnsMap];
  setColumn(value: FilterColumnsMap[keyof FilterColumnsMap]): void;

  getValue(): string;
  setValue(value: string): void;

  getOperation(): src_api_message_v1_common_pb.FilterOperationMap[keyof src_api_message_v1_common_pb.FilterOperationMap];
  setOperation(value: src_api_message_v1_common_pb.FilterOperationMap[keyof src_api_message_v1_common_pb.FilterOperationMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TermsTemplateFilter.AsObject;
  static toObject(includeInstance: boolean, msg: TermsTemplateFilter): TermsTemplateFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TermsTemplateFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TermsTemplateFilter;
  static deserializeBinaryFromReader(message: TermsTemplateFilter, reader: jspb.BinaryReader): TermsTemplateFilter;
}

export namespace TermsTemplateFilter {
  export type AsObject = {
    column: FilterColumnsMap[keyof FilterColumnsMap],
    value: string,
    operation: src_api_message_v1_common_pb.FilterOperationMap[keyof src_api_message_v1_common_pb.FilterOperationMap],
  }
}

export class SibOrder extends jspb.Message {
  getColumn(): OrderColumnsMap[keyof OrderColumnsMap];
  setColumn(value: OrderColumnsMap[keyof OrderColumnsMap]): void;

  getIsdesc(): boolean;
  setIsdesc(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SibOrder.AsObject;
  static toObject(includeInstance: boolean, msg: SibOrder): SibOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SibOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SibOrder;
  static deserializeBinaryFromReader(message: SibOrder, reader: jspb.BinaryReader): SibOrder;
}

export namespace SibOrder {
  export type AsObject = {
    column: OrderColumnsMap[keyof OrderColumnsMap],
    isdesc: boolean,
  }
}

export class SibFilter extends jspb.Message {
  getColumn(): FilterColumnsMap[keyof FilterColumnsMap];
  setColumn(value: FilterColumnsMap[keyof FilterColumnsMap]): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SibFilter.AsObject;
  static toObject(includeInstance: boolean, msg: SibFilter): SibFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SibFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SibFilter;
  static deserializeBinaryFromReader(message: SibFilter, reader: jspb.BinaryReader): SibFilter;
}

export namespace SibFilter {
  export type AsObject = {
    column: FilterColumnsMap[keyof FilterColumnsMap],
    value: string,
  }
}

export class SitePayeeRef extends jspb.Message {
  hasPayeeid(): boolean;
  clearPayeeid(): void;
  getPayeeid(): src_api_message_v1_common_pb.UUID | undefined;
  setPayeeid(value?: src_api_message_v1_common_pb.UUID): void;

  getPayeename(): string;
  setPayeename(value: string): void;

  hasSiteid(): boolean;
  clearSiteid(): void;
  getSiteid(): src_api_message_v1_common_pb.UUID | undefined;
  setSiteid(value?: src_api_message_v1_common_pb.UUID): void;

  getSitename(): string;
  setSitename(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SitePayeeRef.AsObject;
  static toObject(includeInstance: boolean, msg: SitePayeeRef): SitePayeeRef.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SitePayeeRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SitePayeeRef;
  static deserializeBinaryFromReader(message: SitePayeeRef, reader: jspb.BinaryReader): SitePayeeRef;
}

export namespace SitePayeeRef {
  export type AsObject = {
    payeeid?: src_api_message_v1_common_pb.UUID.AsObject,
    payeename: string,
    siteid?: src_api_message_v1_common_pb.UUID.AsObject,
    sitename: string,
  }
}

export class SibMeta extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): src_api_message_v1_common_pb.UUID | undefined;
  setId(value?: src_api_message_v1_common_pb.UUID): void;

  hasContractid(): boolean;
  clearContractid(): void;
  getContractid(): src_api_message_v1_common_pb.UUID | undefined;
  setContractid(value?: src_api_message_v1_common_pb.UUID): void;

  hasMcibid(): boolean;
  clearMcibid(): void;
  getMcibid(): src_api_message_v1_common_pb.UUID | undefined;
  setMcibid(value?: src_api_message_v1_common_pb.UUID): void;

  hasCountry(): boolean;
  clearCountry(): void;
  getCountry(): src_api_message_v1_common_pb.CountryRef | undefined;
  setCountry(value?: src_api_message_v1_common_pb.CountryRef): void;

  hasCurrency(): boolean;
  clearCurrency(): void;
  getCurrency(): src_api_message_v1_common_pb.CurrencyRef | undefined;
  setCurrency(value?: src_api_message_v1_common_pb.CurrencyRef): void;

  getName(): string;
  setName(value: string): void;

  getStatus(): src_api_message_v1_common_pb.StatusMap[keyof src_api_message_v1_common_pb.StatusMap];
  setStatus(value: src_api_message_v1_common_pb.StatusMap[keyof src_api_message_v1_common_pb.StatusMap]): void;

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
  toObject(includeInstance?: boolean): SibMeta.AsObject;
  static toObject(includeInstance: boolean, msg: SibMeta): SibMeta.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SibMeta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SibMeta;
  static deserializeBinaryFromReader(message: SibMeta, reader: jspb.BinaryReader): SibMeta;
}

export namespace SibMeta {
  export type AsObject = {
    id?: src_api_message_v1_common_pb.UUID.AsObject,
    contractid?: src_api_message_v1_common_pb.UUID.AsObject,
    mcibid?: src_api_message_v1_common_pb.UUID.AsObject,
    country?: src_api_message_v1_common_pb.CountryRef.AsObject,
    currency?: src_api_message_v1_common_pb.CurrencyRef.AsObject,
    name: string,
    status: src_api_message_v1_common_pb.StatusMap[keyof src_api_message_v1_common_pb.StatusMap],
    updatedon: Uint8Array | string,
    updatedby?: src_api_message_v1_common_pb.UserRef.AsObject,
    trial?: src_api_message_v1_common_pb.StudyRef.AsObject,
  }
}

export class SibMetaHistory extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  hasSibid(): boolean;
  clearSibid(): void;
  getSibid(): src_api_message_v1_common_pb.UUID | undefined;
  setSibid(value?: src_api_message_v1_common_pb.UUID): void;

  hasTrial(): boolean;
  clearTrial(): void;
  getTrial(): src_api_message_v1_common_pb.StudyRef | undefined;
  setTrial(value?: src_api_message_v1_common_pb.StudyRef): void;

  getStatus(): src_api_message_v1_common_pb.StatusMap[keyof src_api_message_v1_common_pb.StatusMap];
  setStatus(value: src_api_message_v1_common_pb.StatusMap[keyof src_api_message_v1_common_pb.StatusMap]): void;

  getName(): string;
  setName(value: string): void;

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
  toObject(includeInstance?: boolean): SibMetaHistory.AsObject;
  static toObject(includeInstance: boolean, msg: SibMetaHistory): SibMetaHistory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SibMetaHistory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SibMetaHistory;
  static deserializeBinaryFromReader(message: SibMetaHistory, reader: jspb.BinaryReader): SibMetaHistory;
}

export namespace SibMetaHistory {
  export type AsObject = {
    id: number,
    sibid?: src_api_message_v1_common_pb.UUID.AsObject,
    trial?: src_api_message_v1_common_pb.StudyRef.AsObject,
    status: src_api_message_v1_common_pb.StatusMap[keyof src_api_message_v1_common_pb.StatusMap],
    name: string,
    action: string,
    actiondate: Uint8Array | string,
    updatedby?: src_api_message_v1_common_pb.UserRef.AsObject,
  }
}

export class TermsTemplate extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): src_api_message_v1_common_pb.UUID | undefined;
  setId(value?: src_api_message_v1_common_pb.UUID): void;

  getName(): string;
  setName(value: string): void;

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
  toObject(includeInstance?: boolean): TermsTemplate.AsObject;
  static toObject(includeInstance: boolean, msg: TermsTemplate): TermsTemplate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TermsTemplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TermsTemplate;
  static deserializeBinaryFromReader(message: TermsTemplate, reader: jspb.BinaryReader): TermsTemplate;
}

export namespace TermsTemplate {
  export type AsObject = {
    id?: src_api_message_v1_common_pb.UUID.AsObject,
    name: string,
    updatedon: Uint8Array | string,
    updatedby?: src_api_message_v1_common_pb.UserRef.AsObject,
    trial?: src_api_message_v1_common_pb.StudyRef.AsObject,
  }
}

export class TermsTemplateHistory extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  hasTermstemplateid(): boolean;
  clearTermstemplateid(): void;
  getTermstemplateid(): src_api_message_v1_common_pb.UUID | undefined;
  setTermstemplateid(value?: src_api_message_v1_common_pb.UUID): void;

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
  toObject(includeInstance?: boolean): TermsTemplateHistory.AsObject;
  static toObject(includeInstance: boolean, msg: TermsTemplateHistory): TermsTemplateHistory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TermsTemplateHistory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TermsTemplateHistory;
  static deserializeBinaryFromReader(message: TermsTemplateHistory, reader: jspb.BinaryReader): TermsTemplateHistory;
}

export namespace TermsTemplateHistory {
  export type AsObject = {
    id: number,
    name: string,
    termstemplateid?: src_api_message_v1_common_pb.UUID.AsObject,
    action: string,
    actiondate: Uint8Array | string,
    updatedby?: src_api_message_v1_common_pb.UserRef.AsObject,
    trial?: src_api_message_v1_common_pb.StudyRef.AsObject,
  }
}

export class TermsContent extends jspb.Message {
  getContent(): Uint8Array | string;
  getContent_asU8(): Uint8Array;
  getContent_asB64(): string;
  setContent(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TermsContent.AsObject;
  static toObject(includeInstance: boolean, msg: TermsContent): TermsContent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TermsContent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TermsContent;
  static deserializeBinaryFromReader(message: TermsContent, reader: jspb.BinaryReader): TermsContent;
}

export namespace TermsContent {
  export type AsObject = {
    content: Uint8Array | string,
  }
}

export class ContractMeta extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): src_api_message_v1_common_pb.UUID | undefined;
  setId(value?: src_api_message_v1_common_pb.UUID): void;

  getStatus(): src_api_message_v1_common_pb.StatusMap[keyof src_api_message_v1_common_pb.StatusMap];
  setStatus(value: src_api_message_v1_common_pb.StatusMap[keyof src_api_message_v1_common_pb.StatusMap]): void;

  getName(): string;
  setName(value: string): void;

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

  hasSitepayee(): boolean;
  clearSitepayee(): void;
  getSitepayee(): SitePayeeRef | undefined;
  setSitepayee(value?: SitePayeeRef): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContractMeta.AsObject;
  static toObject(includeInstance: boolean, msg: ContractMeta): ContractMeta.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContractMeta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContractMeta;
  static deserializeBinaryFromReader(message: ContractMeta, reader: jspb.BinaryReader): ContractMeta;
}

export namespace ContractMeta {
  export type AsObject = {
    id?: src_api_message_v1_common_pb.UUID.AsObject,
    status: src_api_message_v1_common_pb.StatusMap[keyof src_api_message_v1_common_pb.StatusMap],
    name: string,
    effectivefrom: Uint8Array | string,
    effectiveto: Uint8Array | string,
    updatedon: Uint8Array | string,
    updatedby?: src_api_message_v1_common_pb.UserRef.AsObject,
    trial?: src_api_message_v1_common_pb.StudyRef.AsObject,
    sitepayee?: SitePayeeRef.AsObject,
  }
}

export class ContractHistory extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  hasContractid(): boolean;
  clearContractid(): void;
  getContractid(): src_api_message_v1_common_pb.UUID | undefined;
  setContractid(value?: src_api_message_v1_common_pb.UUID): void;

  getStatus(): src_api_message_v1_common_pb.StatusMap[keyof src_api_message_v1_common_pb.StatusMap];
  setStatus(value: src_api_message_v1_common_pb.StatusMap[keyof src_api_message_v1_common_pb.StatusMap]): void;

  getName(): string;
  setName(value: string): void;

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

  hasTrial(): boolean;
  clearTrial(): void;
  getTrial(): src_api_message_v1_common_pb.StudyRef | undefined;
  setTrial(value?: src_api_message_v1_common_pb.StudyRef): void;

  hasUpdatedby(): boolean;
  clearUpdatedby(): void;
  getUpdatedby(): src_api_message_v1_common_pb.UserRef | undefined;
  setUpdatedby(value?: src_api_message_v1_common_pb.UserRef): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContractHistory.AsObject;
  static toObject(includeInstance: boolean, msg: ContractHistory): ContractHistory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContractHistory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContractHistory;
  static deserializeBinaryFromReader(message: ContractHistory, reader: jspb.BinaryReader): ContractHistory;
}

export namespace ContractHistory {
  export type AsObject = {
    id: number,
    contractid?: src_api_message_v1_common_pb.UUID.AsObject,
    status: src_api_message_v1_common_pb.StatusMap[keyof src_api_message_v1_common_pb.StatusMap],
    name: string,
    effectivefrom: Uint8Array | string,
    effectiveto: Uint8Array | string,
    action: string,
    actiondate: Uint8Array | string,
    trial?: src_api_message_v1_common_pb.StudyRef.AsObject,
    updatedby?: src_api_message_v1_common_pb.UserRef.AsObject,
  }
}

export class ContractTerms extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): src_api_message_v1_common_pb.UUID | undefined;
  setId(value?: src_api_message_v1_common_pb.UUID): void;

  hasContractid(): boolean;
  clearContractid(): void;
  getContractid(): src_api_message_v1_common_pb.UUID | undefined;
  setContractid(value?: src_api_message_v1_common_pb.UUID): void;

  hasTermstemplateid(): boolean;
  clearTermstemplateid(): void;
  getTermstemplateid(): src_api_message_v1_common_pb.UUID | undefined;
  setTermstemplateid(value?: src_api_message_v1_common_pb.UUID): void;

  getUpdatedon(): Uint8Array | string;
  getUpdatedon_asU8(): Uint8Array;
  getUpdatedon_asB64(): string;
  setUpdatedon(value: Uint8Array | string): void;

  hasUpdatedby(): boolean;
  clearUpdatedby(): void;
  getUpdatedby(): src_api_message_v1_common_pb.UserRef | undefined;
  setUpdatedby(value?: src_api_message_v1_common_pb.UserRef): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContractTerms.AsObject;
  static toObject(includeInstance: boolean, msg: ContractTerms): ContractTerms.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContractTerms, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContractTerms;
  static deserializeBinaryFromReader(message: ContractTerms, reader: jspb.BinaryReader): ContractTerms;
}

export namespace ContractTerms {
  export type AsObject = {
    id?: src_api_message_v1_common_pb.UUID.AsObject,
    contractid?: src_api_message_v1_common_pb.UUID.AsObject,
    termstemplateid?: src_api_message_v1_common_pb.UUID.AsObject,
    updatedon: Uint8Array | string,
    updatedby?: src_api_message_v1_common_pb.UserRef.AsObject,
  }
}

export class ContractTermsHistory extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  hasTermsid(): boolean;
  clearTermsid(): void;
  getTermsid(): src_api_message_v1_common_pb.UUID | undefined;
  setTermsid(value?: src_api_message_v1_common_pb.UUID): void;

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
  toObject(includeInstance?: boolean): ContractTermsHistory.AsObject;
  static toObject(includeInstance: boolean, msg: ContractTermsHistory): ContractTermsHistory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContractTermsHistory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContractTermsHistory;
  static deserializeBinaryFromReader(message: ContractTermsHistory, reader: jspb.BinaryReader): ContractTermsHistory;
}

export namespace ContractTermsHistory {
  export type AsObject = {
    id: number,
    termsid?: src_api_message_v1_common_pb.UUID.AsObject,
    action: string,
    actiondate: Uint8Array | string,
    updatedby?: src_api_message_v1_common_pb.UserRef.AsObject,
  }
}

export class ProcedurePrice extends jspb.Message {
  hasSibid(): boolean;
  clearSibid(): void;
  getSibid(): src_api_message_v1_common_pb.UUID | undefined;
  setSibid(value?: src_api_message_v1_common_pb.UUID): void;

  hasVpdid(): boolean;
  clearVpdid(): void;
  getVpdid(): src_api_message_v1_common_pb.UUID | undefined;
  setVpdid(value?: src_api_message_v1_common_pb.UUID): void;

  getPrice(): number;
  setPrice(value: number): void;

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

  hasVdid(): boolean;
  clearVdid(): void;
  getVdid(): src_api_message_v1_common_pb.UUID | undefined;
  setVdid(value?: src_api_message_v1_common_pb.UUID): void;

  getProcedureoid(): string;
  setProcedureoid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcedurePrice.AsObject;
  static toObject(includeInstance: boolean, msg: ProcedurePrice): ProcedurePrice.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcedurePrice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcedurePrice;
  static deserializeBinaryFromReader(message: ProcedurePrice, reader: jspb.BinaryReader): ProcedurePrice;
}

export namespace ProcedurePrice {
  export type AsObject = {
    sibid?: src_api_message_v1_common_pb.UUID.AsObject,
    vpdid?: src_api_message_v1_common_pb.UUID.AsObject,
    price: number,
    updatedon: Uint8Array | string,
    updatedby?: src_api_message_v1_common_pb.UserRef.AsObject,
    trial?: src_api_message_v1_common_pb.StudyRef.AsObject,
    vdid?: src_api_message_v1_common_pb.UUID.AsObject,
    procedureoid: string,
  }
}

export class ProcedurePriceHistory extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  hasSibid(): boolean;
  clearSibid(): void;
  getSibid(): src_api_message_v1_common_pb.UUID | undefined;
  setSibid(value?: src_api_message_v1_common_pb.UUID): void;

  hasVpdid(): boolean;
  clearVpdid(): void;
  getVpdid(): src_api_message_v1_common_pb.UUID | undefined;
  setVpdid(value?: src_api_message_v1_common_pb.UUID): void;

  getPrice(): number;
  setPrice(value: number): void;

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
  toObject(includeInstance?: boolean): ProcedurePriceHistory.AsObject;
  static toObject(includeInstance: boolean, msg: ProcedurePriceHistory): ProcedurePriceHistory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcedurePriceHistory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcedurePriceHistory;
  static deserializeBinaryFromReader(message: ProcedurePriceHistory, reader: jspb.BinaryReader): ProcedurePriceHistory;
}

export namespace ProcedurePriceHistory {
  export type AsObject = {
    id: number,
    sibid?: src_api_message_v1_common_pb.UUID.AsObject,
    vpdid?: src_api_message_v1_common_pb.UUID.AsObject,
    price: number,
    action: string,
    actiondate: Uint8Array | string,
    updatedby?: src_api_message_v1_common_pb.UserRef.AsObject,
    trial?: src_api_message_v1_common_pb.StudyRef.AsObject,
  }
}

export class SibMcibProc extends jspb.Message {
  hasVpdid(): boolean;
  clearVpdid(): void;
  getVpdid(): src_api_message_v1_common_pb.UUID | undefined;
  setVpdid(value?: src_api_message_v1_common_pb.UUID): void;

  hasVdid(): boolean;
  clearVdid(): void;
  getVdid(): src_api_message_v1_common_pb.UUID | undefined;
  setVdid(value?: src_api_message_v1_common_pb.UUID): void;

  getTrialid(): string;
  setTrialid(value: string): void;

  getProcoid(): string;
  setProcoid(value: string): void;

  hasMcibid(): boolean;
  clearMcibid(): void;
  getMcibid(): src_api_message_v1_common_pb.UUID | undefined;
  setMcibid(value?: src_api_message_v1_common_pb.UUID): void;

  getPricemin(): number;
  setPricemin(value: number): void;

  getPricemax(): number;
  setPricemax(value: number): void;

  hasSibid(): boolean;
  clearSibid(): void;
  getSibid(): src_api_message_v1_common_pb.UUID | undefined;
  setSibid(value?: src_api_message_v1_common_pb.UUID): void;

  getPrice(): number;
  setPrice(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SibMcibProc.AsObject;
  static toObject(includeInstance: boolean, msg: SibMcibProc): SibMcibProc.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SibMcibProc, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SibMcibProc;
  static deserializeBinaryFromReader(message: SibMcibProc, reader: jspb.BinaryReader): SibMcibProc;
}

export namespace SibMcibProc {
  export type AsObject = {
    vpdid?: src_api_message_v1_common_pb.UUID.AsObject,
    vdid?: src_api_message_v1_common_pb.UUID.AsObject,
    trialid: string,
    procoid: string,
    mcibid?: src_api_message_v1_common_pb.UUID.AsObject,
    pricemin: number,
    pricemax: number,
    sibid?: src_api_message_v1_common_pb.UUID.AsObject,
    price: number,
  }
}

export class VisitPrice extends jspb.Message {
  hasSibid(): boolean;
  clearSibid(): void;
  getSibid(): src_api_message_v1_common_pb.UUID | undefined;
  setSibid(value?: src_api_message_v1_common_pb.UUID): void;

  hasVdid(): boolean;
  clearVdid(): void;
  getVdid(): src_api_message_v1_common_pb.UUID | undefined;
  setVdid(value?: src_api_message_v1_common_pb.UUID): void;

  getPrice(): number;
  setPrice(value: number): void;

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

  getVisitdefid(): string;
  setVisitdefid(value: string): void;

  getStudyid(): string;
  setStudyid(value: string): void;

  getMdvid(): string;
  setMdvid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VisitPrice.AsObject;
  static toObject(includeInstance: boolean, msg: VisitPrice): VisitPrice.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VisitPrice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VisitPrice;
  static deserializeBinaryFromReader(message: VisitPrice, reader: jspb.BinaryReader): VisitPrice;
}

export namespace VisitPrice {
  export type AsObject = {
    sibid?: src_api_message_v1_common_pb.UUID.AsObject,
    vdid?: src_api_message_v1_common_pb.UUID.AsObject,
    price: number,
    updatedon: Uint8Array | string,
    updatedby?: src_api_message_v1_common_pb.UserRef.AsObject,
    trial?: src_api_message_v1_common_pb.StudyRef.AsObject,
    visitdefid: string,
    studyid: string,
    mdvid: string,
  }
}

export class VisitPriceHistory extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  hasSibid(): boolean;
  clearSibid(): void;
  getSibid(): src_api_message_v1_common_pb.UUID | undefined;
  setSibid(value?: src_api_message_v1_common_pb.UUID): void;

  hasVdid(): boolean;
  clearVdid(): void;
  getVdid(): src_api_message_v1_common_pb.UUID | undefined;
  setVdid(value?: src_api_message_v1_common_pb.UUID): void;

  getPrice(): number;
  setPrice(value: number): void;

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
  toObject(includeInstance?: boolean): VisitPriceHistory.AsObject;
  static toObject(includeInstance: boolean, msg: VisitPriceHistory): VisitPriceHistory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VisitPriceHistory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VisitPriceHistory;
  static deserializeBinaryFromReader(message: VisitPriceHistory, reader: jspb.BinaryReader): VisitPriceHistory;
}

export namespace VisitPriceHistory {
  export type AsObject = {
    id: number,
    sibid?: src_api_message_v1_common_pb.UUID.AsObject,
    vdid?: src_api_message_v1_common_pb.UUID.AsObject,
    price: number,
    action: string,
    actiondate: Uint8Array | string,
    updatedby?: src_api_message_v1_common_pb.UserRef.AsObject,
    trial?: src_api_message_v1_common_pb.StudyRef.AsObject,
  }
}

export class SibMcibVisit extends jspb.Message {
  hasVdid(): boolean;
  clearVdid(): void;
  getVdid(): src_api_message_v1_common_pb.UUID | undefined;
  setVdid(value?: src_api_message_v1_common_pb.UUID): void;

  getTrialid(): string;
  setTrialid(value: string): void;

  getVisitoid(): string;
  setVisitoid(value: string): void;

  hasMcibid(): boolean;
  clearMcibid(): void;
  getMcibid(): src_api_message_v1_common_pb.UUID | undefined;
  setMcibid(value?: src_api_message_v1_common_pb.UUID): void;

  getPricemin(): number;
  setPricemin(value: number): void;

  getPricemax(): number;
  setPricemax(value: number): void;

  hasSibid(): boolean;
  clearSibid(): void;
  getSibid(): src_api_message_v1_common_pb.UUID | undefined;
  setSibid(value?: src_api_message_v1_common_pb.UUID): void;

  getPrice(): number;
  setPrice(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SibMcibVisit.AsObject;
  static toObject(includeInstance: boolean, msg: SibMcibVisit): SibMcibVisit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SibMcibVisit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SibMcibVisit;
  static deserializeBinaryFromReader(message: SibMcibVisit, reader: jspb.BinaryReader): SibMcibVisit;
}

export namespace SibMcibVisit {
  export type AsObject = {
    vdid?: src_api_message_v1_common_pb.UUID.AsObject,
    trialid: string,
    visitoid: string,
    mcibid?: src_api_message_v1_common_pb.UUID.AsObject,
    pricemin: number,
    pricemax: number,
    sibid?: src_api_message_v1_common_pb.UUID.AsObject,
    price: number,
  }
}

export class PublishedSib extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): src_api_message_v1_common_pb.UUID | undefined;
  setId(value?: src_api_message_v1_common_pb.UUID): void;

  hasContractid(): boolean;
  clearContractid(): void;
  getContractid(): src_api_message_v1_common_pb.UUID | undefined;
  setContractid(value?: src_api_message_v1_common_pb.UUID): void;

  hasMcibid(): boolean;
  clearMcibid(): void;
  getMcibid(): src_api_message_v1_common_pb.UUID | undefined;
  setMcibid(value?: src_api_message_v1_common_pb.UUID): void;

  hasSibid(): boolean;
  clearSibid(): void;
  getSibid(): src_api_message_v1_common_pb.UUID | undefined;
  setSibid(value?: src_api_message_v1_common_pb.UUID): void;

  getName(): string;
  setName(value: string): void;

  getUpdatedon(): Uint8Array | string;
  getUpdatedon_asU8(): Uint8Array;
  getUpdatedon_asB64(): string;
  setUpdatedon(value: Uint8Array | string): void;

  hasUpdatedby(): boolean;
  clearUpdatedby(): void;
  getUpdatedby(): src_api_message_v1_common_pb.UserRef | undefined;
  setUpdatedby(value?: src_api_message_v1_common_pb.UserRef): void;

  getVisitprices(): Uint8Array | string;
  getVisitprices_asU8(): Uint8Array;
  getVisitprices_asB64(): string;
  setVisitprices(value: Uint8Array | string): void;

  getTimeorder(): number;
  setTimeorder(value: number): void;

  hasTrial(): boolean;
  clearTrial(): void;
  getTrial(): src_api_message_v1_common_pb.StudyRef | undefined;
  setTrial(value?: src_api_message_v1_common_pb.StudyRef): void;

  hasCountry(): boolean;
  clearCountry(): void;
  getCountry(): src_api_message_v1_common_pb.CountryRef | undefined;
  setCountry(value?: src_api_message_v1_common_pb.CountryRef): void;

  hasCurrency(): boolean;
  clearCurrency(): void;
  getCurrency(): src_api_message_v1_common_pb.CurrencyRef | undefined;
  setCurrency(value?: src_api_message_v1_common_pb.CurrencyRef): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishedSib.AsObject;
  static toObject(includeInstance: boolean, msg: PublishedSib): PublishedSib.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublishedSib, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishedSib;
  static deserializeBinaryFromReader(message: PublishedSib, reader: jspb.BinaryReader): PublishedSib;
}

export namespace PublishedSib {
  export type AsObject = {
    id?: src_api_message_v1_common_pb.UUID.AsObject,
    contractid?: src_api_message_v1_common_pb.UUID.AsObject,
    mcibid?: src_api_message_v1_common_pb.UUID.AsObject,
    sibid?: src_api_message_v1_common_pb.UUID.AsObject,
    name: string,
    updatedon: Uint8Array | string,
    updatedby?: src_api_message_v1_common_pb.UserRef.AsObject,
    visitprices: Uint8Array | string,
    timeorder: number,
    trial?: src_api_message_v1_common_pb.StudyRef.AsObject,
    country?: src_api_message_v1_common_pb.CountryRef.AsObject,
    currency?: src_api_message_v1_common_pb.CurrencyRef.AsObject,
  }
}

export class PublishedContract extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): src_api_message_v1_common_pb.UUID | undefined;
  setId(value?: src_api_message_v1_common_pb.UUID): void;

  hasContractid(): boolean;
  clearContractid(): void;
  getContractid(): src_api_message_v1_common_pb.UUID | undefined;
  setContractid(value?: src_api_message_v1_common_pb.UUID): void;

  getName(): string;
  setName(value: string): void;

  getTimeorder(): number;
  setTimeorder(value: number): void;

  getEffectivefrom(): Uint8Array | string;
  getEffectivefrom_asU8(): Uint8Array;
  getEffectivefrom_asB64(): string;
  setEffectivefrom(value: Uint8Array | string): void;

  getEffectiveto(): Uint8Array | string;
  getEffectiveto_asU8(): Uint8Array;
  getEffectiveto_asB64(): string;
  setEffectiveto(value: Uint8Array | string): void;

  hasPayee(): boolean;
  clearPayee(): void;
  getPayee(): SitePayeeRef | undefined;
  setPayee(value?: SitePayeeRef): void;

  hasUpdatedby(): boolean;
  clearUpdatedby(): void;
  getUpdatedby(): src_api_message_v1_common_pb.UserRef | undefined;
  setUpdatedby(value?: src_api_message_v1_common_pb.UserRef): void;

  hasTrial(): boolean;
  clearTrial(): void;
  getTrial(): src_api_message_v1_common_pb.StudyRef | undefined;
  setTrial(value?: src_api_message_v1_common_pb.StudyRef): void;

  getUpdatedon(): Uint8Array | string;
  getUpdatedon_asU8(): Uint8Array;
  getUpdatedon_asB64(): string;
  setUpdatedon(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishedContract.AsObject;
  static toObject(includeInstance: boolean, msg: PublishedContract): PublishedContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublishedContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishedContract;
  static deserializeBinaryFromReader(message: PublishedContract, reader: jspb.BinaryReader): PublishedContract;
}

export namespace PublishedContract {
  export type AsObject = {
    id?: src_api_message_v1_common_pb.UUID.AsObject,
    contractid?: src_api_message_v1_common_pb.UUID.AsObject,
    name: string,
    timeorder: number,
    effectivefrom: Uint8Array | string,
    effectiveto: Uint8Array | string,
    payee?: SitePayeeRef.AsObject,
    updatedby?: src_api_message_v1_common_pb.UserRef.AsObject,
    trial?: src_api_message_v1_common_pb.StudyRef.AsObject,
    updatedon: Uint8Array | string,
  }
}

export class PublishedContractToS extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): src_api_message_v1_common_pb.UUID | undefined;
  setId(value?: src_api_message_v1_common_pb.UUID): void;

  hasPublishedcontractid(): boolean;
  clearPublishedcontractid(): void;
  getPublishedcontractid(): src_api_message_v1_common_pb.UUID | undefined;
  setPublishedcontractid(value?: src_api_message_v1_common_pb.UUID): void;

  hasTermstemplateid(): boolean;
  clearTermstemplateid(): void;
  getTermstemplateid(): src_api_message_v1_common_pb.UUID | undefined;
  setTermstemplateid(value?: src_api_message_v1_common_pb.UUID): void;

  hasContracttosid(): boolean;
  clearContracttosid(): void;
  getContracttosid(): src_api_message_v1_common_pb.UUID | undefined;
  setContracttosid(value?: src_api_message_v1_common_pb.UUID): void;

  hasUpdatedby(): boolean;
  clearUpdatedby(): void;
  getUpdatedby(): src_api_message_v1_common_pb.UserRef | undefined;
  setUpdatedby(value?: src_api_message_v1_common_pb.UserRef): void;

  getUrl(): string;
  setUrl(value: string): void;

  getTimeorder(): number;
  setTimeorder(value: number): void;

  getUpdatedon(): Uint8Array | string;
  getUpdatedon_asU8(): Uint8Array;
  getUpdatedon_asB64(): string;
  setUpdatedon(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishedContractToS.AsObject;
  static toObject(includeInstance: boolean, msg: PublishedContractToS): PublishedContractToS.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublishedContractToS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishedContractToS;
  static deserializeBinaryFromReader(message: PublishedContractToS, reader: jspb.BinaryReader): PublishedContractToS;
}

export namespace PublishedContractToS {
  export type AsObject = {
    id?: src_api_message_v1_common_pb.UUID.AsObject,
    publishedcontractid?: src_api_message_v1_common_pb.UUID.AsObject,
    termstemplateid?: src_api_message_v1_common_pb.UUID.AsObject,
    contracttosid?: src_api_message_v1_common_pb.UUID.AsObject,
    updatedby?: src_api_message_v1_common_pb.UserRef.AsObject,
    url: string,
    timeorder: number,
    updatedon: Uint8Array | string,
  }
}

export class GetAllContractsRequest extends jspb.Message {
  hasPage(): boolean;
  clearPage(): void;
  getPage(): src_api_message_v1_common_pb.Pagination | undefined;
  setPage(value?: src_api_message_v1_common_pb.Pagination): void;

  hasOrderby(): boolean;
  clearOrderby(): void;
  getOrderby(): ContractOrder | undefined;
  setOrderby(value?: ContractOrder): void;

  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): ContractFilter | undefined;
  setFilter(value?: ContractFilter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllContractsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllContractsRequest): GetAllContractsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllContractsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllContractsRequest;
  static deserializeBinaryFromReader(message: GetAllContractsRequest, reader: jspb.BinaryReader): GetAllContractsRequest;
}

export namespace GetAllContractsRequest {
  export type AsObject = {
    page?: src_api_message_v1_common_pb.Pagination.AsObject,
    orderby?: ContractOrder.AsObject,
    filter?: ContractFilter.AsObject,
  }
}

export class GetAllContractsResponse extends jspb.Message {
  hasContract(): boolean;
  clearContract(): void;
  getContract(): ContractMeta | undefined;
  setContract(value?: ContractMeta): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllContractsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllContractsResponse): GetAllContractsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllContractsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllContractsResponse;
  static deserializeBinaryFromReader(message: GetAllContractsResponse, reader: jspb.BinaryReader): GetAllContractsResponse;
}

export namespace GetAllContractsResponse {
  export type AsObject = {
    contract?: ContractMeta.AsObject,
  }
}

export class GetStudiesContractsRequest extends jspb.Message {
  clearTrialidList(): void;
  getTrialidList(): Array<string>;
  setTrialidList(value: Array<string>): void;
  addTrialid(value: string, index?: number): string;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): src_api_message_v1_common_pb.Pagination | undefined;
  setPage(value?: src_api_message_v1_common_pb.Pagination): void;

  hasOrderby(): boolean;
  clearOrderby(): void;
  getOrderby(): ContractOrder | undefined;
  setOrderby(value?: ContractOrder): void;

  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): ContractFilter | undefined;
  setFilter(value?: ContractFilter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStudiesContractsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetStudiesContractsRequest): GetStudiesContractsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetStudiesContractsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStudiesContractsRequest;
  static deserializeBinaryFromReader(message: GetStudiesContractsRequest, reader: jspb.BinaryReader): GetStudiesContractsRequest;
}

export namespace GetStudiesContractsRequest {
  export type AsObject = {
    trialidList: Array<string>,
    page?: src_api_message_v1_common_pb.Pagination.AsObject,
    orderby?: ContractOrder.AsObject,
    filter?: ContractFilter.AsObject,
  }
}

export class GetStudiesContractsResponse extends jspb.Message {
  hasContract(): boolean;
  clearContract(): void;
  getContract(): ContractMeta | undefined;
  setContract(value?: ContractMeta): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStudiesContractsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetStudiesContractsResponse): GetStudiesContractsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetStudiesContractsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStudiesContractsResponse;
  static deserializeBinaryFromReader(message: GetStudiesContractsResponse, reader: jspb.BinaryReader): GetStudiesContractsResponse;
}

export namespace GetStudiesContractsResponse {
  export type AsObject = {
    contract?: ContractMeta.AsObject,
  }
}

export class GetSitesContractsRequest extends jspb.Message {
  clearSiteidList(): void;
  getSiteidList(): Array<src_api_message_v1_common_pb.UUID>;
  setSiteidList(value: Array<src_api_message_v1_common_pb.UUID>): void;
  addSiteid(value?: src_api_message_v1_common_pb.UUID, index?: number): src_api_message_v1_common_pb.UUID;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): src_api_message_v1_common_pb.Pagination | undefined;
  setPage(value?: src_api_message_v1_common_pb.Pagination): void;

  hasOrderby(): boolean;
  clearOrderby(): void;
  getOrderby(): ContractOrder | undefined;
  setOrderby(value?: ContractOrder): void;

  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): ContractFilter | undefined;
  setFilter(value?: ContractFilter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSitesContractsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSitesContractsRequest): GetSitesContractsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSitesContractsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSitesContractsRequest;
  static deserializeBinaryFromReader(message: GetSitesContractsRequest, reader: jspb.BinaryReader): GetSitesContractsRequest;
}

export namespace GetSitesContractsRequest {
  export type AsObject = {
    siteidList: Array<src_api_message_v1_common_pb.UUID.AsObject>,
    page?: src_api_message_v1_common_pb.Pagination.AsObject,
    orderby?: ContractOrder.AsObject,
    filter?: ContractFilter.AsObject,
  }
}

export class GetSitesContractsResponse extends jspb.Message {
  hasContract(): boolean;
  clearContract(): void;
  getContract(): ContractMeta | undefined;
  setContract(value?: ContractMeta): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSitesContractsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSitesContractsResponse): GetSitesContractsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSitesContractsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSitesContractsResponse;
  static deserializeBinaryFromReader(message: GetSitesContractsResponse, reader: jspb.BinaryReader): GetSitesContractsResponse;
}

export namespace GetSitesContractsResponse {
  export type AsObject = {
    contract?: ContractMeta.AsObject,
  }
}

export class GetContractsByStudyIdRequest extends jspb.Message {
  getTrialid(): string;
  setTrialid(value: string): void;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): src_api_message_v1_common_pb.Pagination | undefined;
  setPage(value?: src_api_message_v1_common_pb.Pagination): void;

  hasOrderby(): boolean;
  clearOrderby(): void;
  getOrderby(): ContractOrder | undefined;
  setOrderby(value?: ContractOrder): void;

  clearFilterList(): void;
  getFilterList(): Array<ContractFilter>;
  setFilterList(value: Array<ContractFilter>): void;
  addFilter(value?: ContractFilter, index?: number): ContractFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContractsByStudyIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetContractsByStudyIdRequest): GetContractsByStudyIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContractsByStudyIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContractsByStudyIdRequest;
  static deserializeBinaryFromReader(message: GetContractsByStudyIdRequest, reader: jspb.BinaryReader): GetContractsByStudyIdRequest;
}

export namespace GetContractsByStudyIdRequest {
  export type AsObject = {
    trialid: string,
    page?: src_api_message_v1_common_pb.Pagination.AsObject,
    orderby?: ContractOrder.AsObject,
    filterList: Array<ContractFilter.AsObject>,
  }
}

export class GetContractsByStudyIdResponse extends jspb.Message {
  hasContract(): boolean;
  clearContract(): void;
  getContract(): ContractMeta | undefined;
  setContract(value?: ContractMeta): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContractsByStudyIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetContractsByStudyIdResponse): GetContractsByStudyIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContractsByStudyIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContractsByStudyIdResponse;
  static deserializeBinaryFromReader(message: GetContractsByStudyIdResponse, reader: jspb.BinaryReader): GetContractsByStudyIdResponse;
}

export namespace GetContractsByStudyIdResponse {
  export type AsObject = {
    contract?: ContractMeta.AsObject,
  }
}

export class GetContractsByCreatorRequest extends jspb.Message {
  hasUserid(): boolean;
  clearUserid(): void;
  getUserid(): src_api_message_v1_common_pb.UUID | undefined;
  setUserid(value?: src_api_message_v1_common_pb.UUID): void;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): src_api_message_v1_common_pb.Pagination | undefined;
  setPage(value?: src_api_message_v1_common_pb.Pagination): void;

  hasOrderby(): boolean;
  clearOrderby(): void;
  getOrderby(): ContractOrder | undefined;
  setOrderby(value?: ContractOrder): void;

  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): ContractFilter | undefined;
  setFilter(value?: ContractFilter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContractsByCreatorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetContractsByCreatorRequest): GetContractsByCreatorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContractsByCreatorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContractsByCreatorRequest;
  static deserializeBinaryFromReader(message: GetContractsByCreatorRequest, reader: jspb.BinaryReader): GetContractsByCreatorRequest;
}

export namespace GetContractsByCreatorRequest {
  export type AsObject = {
    userid?: src_api_message_v1_common_pb.UUID.AsObject,
    page?: src_api_message_v1_common_pb.Pagination.AsObject,
    orderby?: ContractOrder.AsObject,
    filter?: ContractFilter.AsObject,
  }
}

export class GetContractsByCreatorResponse extends jspb.Message {
  hasContract(): boolean;
  clearContract(): void;
  getContract(): ContractMeta | undefined;
  setContract(value?: ContractMeta): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContractsByCreatorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetContractsByCreatorResponse): GetContractsByCreatorResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContractsByCreatorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContractsByCreatorResponse;
  static deserializeBinaryFromReader(message: GetContractsByCreatorResponse, reader: jspb.BinaryReader): GetContractsByCreatorResponse;
}

export namespace GetContractsByCreatorResponse {
  export type AsObject = {
    contract?: ContractMeta.AsObject,
  }
}

export class GetContractMetaRequest extends jspb.Message {
  hasContractid(): boolean;
  clearContractid(): void;
  getContractid(): src_api_message_v1_common_pb.UUID | undefined;
  setContractid(value?: src_api_message_v1_common_pb.UUID): void;

  getTrialid(): string;
  setTrialid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContractMetaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetContractMetaRequest): GetContractMetaRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContractMetaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContractMetaRequest;
  static deserializeBinaryFromReader(message: GetContractMetaRequest, reader: jspb.BinaryReader): GetContractMetaRequest;
}

export namespace GetContractMetaRequest {
  export type AsObject = {
    contractid?: src_api_message_v1_common_pb.UUID.AsObject,
    trialid: string,
  }
}

export class GetContractMetaResponse extends jspb.Message {
  hasContract(): boolean;
  clearContract(): void;
  getContract(): ContractMeta | undefined;
  setContract(value?: ContractMeta): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContractMetaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetContractMetaResponse): GetContractMetaResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContractMetaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContractMetaResponse;
  static deserializeBinaryFromReader(message: GetContractMetaResponse, reader: jspb.BinaryReader): GetContractMetaResponse;
}

export namespace GetContractMetaResponse {
  export type AsObject = {
    contract?: ContractMeta.AsObject,
  }
}

export class GetContractHistoryMetaRequest extends jspb.Message {
  hasContractid(): boolean;
  clearContractid(): void;
  getContractid(): src_api_message_v1_common_pb.UUID | undefined;
  setContractid(value?: src_api_message_v1_common_pb.UUID): void;

  getTrialid(): string;
  setTrialid(value: string): void;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): src_api_message_v1_common_pb.Pagination | undefined;
  setPage(value?: src_api_message_v1_common_pb.Pagination): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContractHistoryMetaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetContractHistoryMetaRequest): GetContractHistoryMetaRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContractHistoryMetaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContractHistoryMetaRequest;
  static deserializeBinaryFromReader(message: GetContractHistoryMetaRequest, reader: jspb.BinaryReader): GetContractHistoryMetaRequest;
}

export namespace GetContractHistoryMetaRequest {
  export type AsObject = {
    contractid?: src_api_message_v1_common_pb.UUID.AsObject,
    trialid: string,
    page?: src_api_message_v1_common_pb.Pagination.AsObject,
  }
}

export class GetContractHistoryMetaResponse extends jspb.Message {
  hasContracthistory(): boolean;
  clearContracthistory(): void;
  getContracthistory(): ContractHistory | undefined;
  setContracthistory(value?: ContractHistory): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContractHistoryMetaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetContractHistoryMetaResponse): GetContractHistoryMetaResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContractHistoryMetaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContractHistoryMetaResponse;
  static deserializeBinaryFromReader(message: GetContractHistoryMetaResponse, reader: jspb.BinaryReader): GetContractHistoryMetaResponse;
}

export namespace GetContractHistoryMetaResponse {
  export type AsObject = {
    contracthistory?: ContractHistory.AsObject,
  }
}

export class GetContractSIBVisitsRequest extends jspb.Message {
  hasSibid(): boolean;
  clearSibid(): void;
  getSibid(): src_api_message_v1_common_pb.UUID | undefined;
  setSibid(value?: src_api_message_v1_common_pb.UUID): void;

  getTrialid(): string;
  setTrialid(value: string): void;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): src_api_message_v1_common_pb.Pagination | undefined;
  setPage(value?: src_api_message_v1_common_pb.Pagination): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContractSIBVisitsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetContractSIBVisitsRequest): GetContractSIBVisitsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContractSIBVisitsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContractSIBVisitsRequest;
  static deserializeBinaryFromReader(message: GetContractSIBVisitsRequest, reader: jspb.BinaryReader): GetContractSIBVisitsRequest;
}

export namespace GetContractSIBVisitsRequest {
  export type AsObject = {
    sibid?: src_api_message_v1_common_pb.UUID.AsObject,
    trialid: string,
    page?: src_api_message_v1_common_pb.Pagination.AsObject,
  }
}

export class GetContractSIBVisitsResponse extends jspb.Message {
  hasVisitprices(): boolean;
  clearVisitprices(): void;
  getVisitprices(): VisitPrice | undefined;
  setVisitprices(value?: VisitPrice): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContractSIBVisitsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetContractSIBVisitsResponse): GetContractSIBVisitsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContractSIBVisitsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContractSIBVisitsResponse;
  static deserializeBinaryFromReader(message: GetContractSIBVisitsResponse, reader: jspb.BinaryReader): GetContractSIBVisitsResponse;
}

export namespace GetContractSIBVisitsResponse {
  export type AsObject = {
    visitprices?: VisitPrice.AsObject,
  }
}

export class GetContractSIBVisitHistoriesRequest extends jspb.Message {
  hasSibid(): boolean;
  clearSibid(): void;
  getSibid(): src_api_message_v1_common_pb.UUID | undefined;
  setSibid(value?: src_api_message_v1_common_pb.UUID): void;

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
  toObject(includeInstance?: boolean): GetContractSIBVisitHistoriesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetContractSIBVisitHistoriesRequest): GetContractSIBVisitHistoriesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContractSIBVisitHistoriesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContractSIBVisitHistoriesRequest;
  static deserializeBinaryFromReader(message: GetContractSIBVisitHistoriesRequest, reader: jspb.BinaryReader): GetContractSIBVisitHistoriesRequest;
}

export namespace GetContractSIBVisitHistoriesRequest {
  export type AsObject = {
    sibid?: src_api_message_v1_common_pb.UUID.AsObject,
    vdid?: src_api_message_v1_common_pb.UUID.AsObject,
    trialid: string,
    page?: src_api_message_v1_common_pb.Pagination.AsObject,
  }
}

export class GetContractSIBVisitHistoriesResponse extends jspb.Message {
  hasVisitpricehistory(): boolean;
  clearVisitpricehistory(): void;
  getVisitpricehistory(): VisitPriceHistory | undefined;
  setVisitpricehistory(value?: VisitPriceHistory): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContractSIBVisitHistoriesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetContractSIBVisitHistoriesResponse): GetContractSIBVisitHistoriesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContractSIBVisitHistoriesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContractSIBVisitHistoriesResponse;
  static deserializeBinaryFromReader(message: GetContractSIBVisitHistoriesResponse, reader: jspb.BinaryReader): GetContractSIBVisitHistoriesResponse;
}

export namespace GetContractSIBVisitHistoriesResponse {
  export type AsObject = {
    visitpricehistory?: VisitPriceHistory.AsObject,
  }
}

export class UpdateContractSIBVisitsRequest extends jspb.Message {
  hasNewvisitprice(): boolean;
  clearNewvisitprice(): void;
  getNewvisitprice(): VisitPrice | undefined;
  setNewvisitprice(value?: VisitPrice): void;

  hasMcibid(): boolean;
  clearMcibid(): void;
  getMcibid(): src_api_message_v1_common_pb.UUID | undefined;
  setMcibid(value?: src_api_message_v1_common_pb.UUID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateContractSIBVisitsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateContractSIBVisitsRequest): UpdateContractSIBVisitsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateContractSIBVisitsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateContractSIBVisitsRequest;
  static deserializeBinaryFromReader(message: UpdateContractSIBVisitsRequest, reader: jspb.BinaryReader): UpdateContractSIBVisitsRequest;
}

export namespace UpdateContractSIBVisitsRequest {
  export type AsObject = {
    newvisitprice?: VisitPrice.AsObject,
    mcibid?: src_api_message_v1_common_pb.UUID.AsObject,
  }
}

export class UpdateContractSIBVisitsResponse extends jspb.Message {
  hasNewvisitprice(): boolean;
  clearNewvisitprice(): void;
  getNewvisitprice(): VisitPrice | undefined;
  setNewvisitprice(value?: VisitPrice): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateContractSIBVisitsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateContractSIBVisitsResponse): UpdateContractSIBVisitsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateContractSIBVisitsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateContractSIBVisitsResponse;
  static deserializeBinaryFromReader(message: UpdateContractSIBVisitsResponse, reader: jspb.BinaryReader): UpdateContractSIBVisitsResponse;
}

export namespace UpdateContractSIBVisitsResponse {
  export type AsObject = {
    newvisitprice?: VisitPrice.AsObject,
  }
}

export class GetContractSIBVisitProceduresRequest extends jspb.Message {
  hasSibid(): boolean;
  clearSibid(): void;
  getSibid(): src_api_message_v1_common_pb.UUID | undefined;
  setSibid(value?: src_api_message_v1_common_pb.UUID): void;

  hasVdid(): boolean;
  clearVdid(): void;
  getVdid(): src_api_message_v1_common_pb.UUID | undefined;
  setVdid(value?: src_api_message_v1_common_pb.UUID): void;

  getTrialid(): string;
  setTrialid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContractSIBVisitProceduresRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetContractSIBVisitProceduresRequest): GetContractSIBVisitProceduresRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContractSIBVisitProceduresRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContractSIBVisitProceduresRequest;
  static deserializeBinaryFromReader(message: GetContractSIBVisitProceduresRequest, reader: jspb.BinaryReader): GetContractSIBVisitProceduresRequest;
}

export namespace GetContractSIBVisitProceduresRequest {
  export type AsObject = {
    sibid?: src_api_message_v1_common_pb.UUID.AsObject,
    vdid?: src_api_message_v1_common_pb.UUID.AsObject,
    trialid: string,
  }
}

export class GetContractSIBVisitProceduresResponse extends jspb.Message {
  hasProcedureprices(): boolean;
  clearProcedureprices(): void;
  getProcedureprices(): ProcedurePrice | undefined;
  setProcedureprices(value?: ProcedurePrice): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContractSIBVisitProceduresResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetContractSIBVisitProceduresResponse): GetContractSIBVisitProceduresResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContractSIBVisitProceduresResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContractSIBVisitProceduresResponse;
  static deserializeBinaryFromReader(message: GetContractSIBVisitProceduresResponse, reader: jspb.BinaryReader): GetContractSIBVisitProceduresResponse;
}

export namespace GetContractSIBVisitProceduresResponse {
  export type AsObject = {
    procedureprices?: ProcedurePrice.AsObject,
  }
}

export class GetContractSIBVisitProcedureHistoriesRequest extends jspb.Message {
  hasSibid(): boolean;
  clearSibid(): void;
  getSibid(): src_api_message_v1_common_pb.UUID | undefined;
  setSibid(value?: src_api_message_v1_common_pb.UUID): void;

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
  toObject(includeInstance?: boolean): GetContractSIBVisitProcedureHistoriesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetContractSIBVisitProcedureHistoriesRequest): GetContractSIBVisitProcedureHistoriesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContractSIBVisitProcedureHistoriesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContractSIBVisitProcedureHistoriesRequest;
  static deserializeBinaryFromReader(message: GetContractSIBVisitProcedureHistoriesRequest, reader: jspb.BinaryReader): GetContractSIBVisitProcedureHistoriesRequest;
}

export namespace GetContractSIBVisitProcedureHistoriesRequest {
  export type AsObject = {
    sibid?: src_api_message_v1_common_pb.UUID.AsObject,
    vpdid?: src_api_message_v1_common_pb.UUID.AsObject,
    trialid: string,
    page?: src_api_message_v1_common_pb.Pagination.AsObject,
  }
}

export class GetContractSIBVisitProcedureHistoriesResponse extends jspb.Message {
  hasProcedurepricehistories(): boolean;
  clearProcedurepricehistories(): void;
  getProcedurepricehistories(): ProcedurePriceHistory | undefined;
  setProcedurepricehistories(value?: ProcedurePriceHistory): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContractSIBVisitProcedureHistoriesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetContractSIBVisitProcedureHistoriesResponse): GetContractSIBVisitProcedureHistoriesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContractSIBVisitProcedureHistoriesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContractSIBVisitProcedureHistoriesResponse;
  static deserializeBinaryFromReader(message: GetContractSIBVisitProcedureHistoriesResponse, reader: jspb.BinaryReader): GetContractSIBVisitProcedureHistoriesResponse;
}

export namespace GetContractSIBVisitProcedureHistoriesResponse {
  export type AsObject = {
    procedurepricehistories?: ProcedurePriceHistory.AsObject,
  }
}

export class UpdateContractSIBVisitProcedureRequest extends jspb.Message {
  hasProcedureprice(): boolean;
  clearProcedureprice(): void;
  getProcedureprice(): ProcedurePrice | undefined;
  setProcedureprice(value?: ProcedurePrice): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateContractSIBVisitProcedureRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateContractSIBVisitProcedureRequest): UpdateContractSIBVisitProcedureRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateContractSIBVisitProcedureRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateContractSIBVisitProcedureRequest;
  static deserializeBinaryFromReader(message: UpdateContractSIBVisitProcedureRequest, reader: jspb.BinaryReader): UpdateContractSIBVisitProcedureRequest;
}

export namespace UpdateContractSIBVisitProcedureRequest {
  export type AsObject = {
    procedureprice?: ProcedurePrice.AsObject,
  }
}

export class UpdateContractSIBVisitProcedureResponse extends jspb.Message {
  hasNewprocedure(): boolean;
  clearNewprocedure(): void;
  getNewprocedure(): ProcedurePrice | undefined;
  setNewprocedure(value?: ProcedurePrice): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateContractSIBVisitProcedureResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateContractSIBVisitProcedureResponse): UpdateContractSIBVisitProcedureResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateContractSIBVisitProcedureResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateContractSIBVisitProcedureResponse;
  static deserializeBinaryFromReader(message: UpdateContractSIBVisitProcedureResponse, reader: jspb.BinaryReader): UpdateContractSIBVisitProcedureResponse;
}

export namespace UpdateContractSIBVisitProcedureResponse {
  export type AsObject = {
    newprocedure?: ProcedurePrice.AsObject,
  }
}

export class GetContractSIBMetaRequest extends jspb.Message {
  hasContractid(): boolean;
  clearContractid(): void;
  getContractid(): src_api_message_v1_common_pb.UUID | undefined;
  setContractid(value?: src_api_message_v1_common_pb.UUID): void;

  hasSibid(): boolean;
  clearSibid(): void;
  getSibid(): src_api_message_v1_common_pb.UUID | undefined;
  setSibid(value?: src_api_message_v1_common_pb.UUID): void;

  getTrialid(): string;
  setTrialid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContractSIBMetaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetContractSIBMetaRequest): GetContractSIBMetaRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContractSIBMetaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContractSIBMetaRequest;
  static deserializeBinaryFromReader(message: GetContractSIBMetaRequest, reader: jspb.BinaryReader): GetContractSIBMetaRequest;
}

export namespace GetContractSIBMetaRequest {
  export type AsObject = {
    contractid?: src_api_message_v1_common_pb.UUID.AsObject,
    sibid?: src_api_message_v1_common_pb.UUID.AsObject,
    trialid: string,
  }
}

export class GetContractSIBMetaResponse extends jspb.Message {
  hasSib(): boolean;
  clearSib(): void;
  getSib(): SibMeta | undefined;
  setSib(value?: SibMeta): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContractSIBMetaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetContractSIBMetaResponse): GetContractSIBMetaResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContractSIBMetaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContractSIBMetaResponse;
  static deserializeBinaryFromReader(message: GetContractSIBMetaResponse, reader: jspb.BinaryReader): GetContractSIBMetaResponse;
}

export namespace GetContractSIBMetaResponse {
  export type AsObject = {
    sib?: SibMeta.AsObject,
  }
}

export class GetContractSIBMetaHistoriesRequest extends jspb.Message {
  hasSibid(): boolean;
  clearSibid(): void;
  getSibid(): src_api_message_v1_common_pb.UUID | undefined;
  setSibid(value?: src_api_message_v1_common_pb.UUID): void;

  getTrialid(): string;
  setTrialid(value: string): void;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): src_api_message_v1_common_pb.Pagination | undefined;
  setPage(value?: src_api_message_v1_common_pb.Pagination): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContractSIBMetaHistoriesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetContractSIBMetaHistoriesRequest): GetContractSIBMetaHistoriesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContractSIBMetaHistoriesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContractSIBMetaHistoriesRequest;
  static deserializeBinaryFromReader(message: GetContractSIBMetaHistoriesRequest, reader: jspb.BinaryReader): GetContractSIBMetaHistoriesRequest;
}

export namespace GetContractSIBMetaHistoriesRequest {
  export type AsObject = {
    sibid?: src_api_message_v1_common_pb.UUID.AsObject,
    trialid: string,
    page?: src_api_message_v1_common_pb.Pagination.AsObject,
  }
}

export class GetContractSIBMetaHistoriesResponse extends jspb.Message {
  hasSibmetahistory(): boolean;
  clearSibmetahistory(): void;
  getSibmetahistory(): SibMetaHistory | undefined;
  setSibmetahistory(value?: SibMetaHistory): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContractSIBMetaHistoriesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetContractSIBMetaHistoriesResponse): GetContractSIBMetaHistoriesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContractSIBMetaHistoriesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContractSIBMetaHistoriesResponse;
  static deserializeBinaryFromReader(message: GetContractSIBMetaHistoriesResponse, reader: jspb.BinaryReader): GetContractSIBMetaHistoriesResponse;
}

export namespace GetContractSIBMetaHistoriesResponse {
  export type AsObject = {
    sibmetahistory?: SibMetaHistory.AsObject,
  }
}

export class UpdateContractSIBNameRequest extends jspb.Message {
  hasContractid(): boolean;
  clearContractid(): void;
  getContractid(): src_api_message_v1_common_pb.UUID | undefined;
  setContractid(value?: src_api_message_v1_common_pb.UUID): void;

  hasSibid(): boolean;
  clearSibid(): void;
  getSibid(): src_api_message_v1_common_pb.UUID | undefined;
  setSibid(value?: src_api_message_v1_common_pb.UUID): void;

  getName(): string;
  setName(value: string): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): src_api_message_v1_common_pb.UserRef | undefined;
  setUser(value?: src_api_message_v1_common_pb.UserRef): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateContractSIBNameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateContractSIBNameRequest): UpdateContractSIBNameRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateContractSIBNameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateContractSIBNameRequest;
  static deserializeBinaryFromReader(message: UpdateContractSIBNameRequest, reader: jspb.BinaryReader): UpdateContractSIBNameRequest;
}

export namespace UpdateContractSIBNameRequest {
  export type AsObject = {
    contractid?: src_api_message_v1_common_pb.UUID.AsObject,
    sibid?: src_api_message_v1_common_pb.UUID.AsObject,
    name: string,
    user?: src_api_message_v1_common_pb.UserRef.AsObject,
  }
}

export class UpdateContractSIBNameResponse extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateContractSIBNameResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateContractSIBNameResponse): UpdateContractSIBNameResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateContractSIBNameResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateContractSIBNameResponse;
  static deserializeBinaryFromReader(message: UpdateContractSIBNameResponse, reader: jspb.BinaryReader): UpdateContractSIBNameResponse;
}

export namespace UpdateContractSIBNameResponse {
  export type AsObject = {
    name: string,
  }
}

export class GetContractTermsContentRequest extends jspb.Message {
  hasContractid(): boolean;
  clearContractid(): void;
  getContractid(): src_api_message_v1_common_pb.UUID | undefined;
  setContractid(value?: src_api_message_v1_common_pb.UUID): void;

  hasContracttermsid(): boolean;
  clearContracttermsid(): void;
  getContracttermsid(): src_api_message_v1_common_pb.UUID | undefined;
  setContracttermsid(value?: src_api_message_v1_common_pb.UUID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContractTermsContentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetContractTermsContentRequest): GetContractTermsContentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContractTermsContentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContractTermsContentRequest;
  static deserializeBinaryFromReader(message: GetContractTermsContentRequest, reader: jspb.BinaryReader): GetContractTermsContentRequest;
}

export namespace GetContractTermsContentRequest {
  export type AsObject = {
    contractid?: src_api_message_v1_common_pb.UUID.AsObject,
    contracttermsid?: src_api_message_v1_common_pb.UUID.AsObject,
  }
}

export class GetContractTermsContentResponse extends jspb.Message {
  hasContent(): boolean;
  clearContent(): void;
  getContent(): TermsContent | undefined;
  setContent(value?: TermsContent): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContractTermsContentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetContractTermsContentResponse): GetContractTermsContentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContractTermsContentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContractTermsContentResponse;
  static deserializeBinaryFromReader(message: GetContractTermsContentResponse, reader: jspb.BinaryReader): GetContractTermsContentResponse;
}

export namespace GetContractTermsContentResponse {
  export type AsObject = {
    content?: TermsContent.AsObject,
  }
}

export class GetContractTermsMetaRequest extends jspb.Message {
  hasContractid(): boolean;
  clearContractid(): void;
  getContractid(): src_api_message_v1_common_pb.UUID | undefined;
  setContractid(value?: src_api_message_v1_common_pb.UUID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContractTermsMetaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetContractTermsMetaRequest): GetContractTermsMetaRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContractTermsMetaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContractTermsMetaRequest;
  static deserializeBinaryFromReader(message: GetContractTermsMetaRequest, reader: jspb.BinaryReader): GetContractTermsMetaRequest;
}

export namespace GetContractTermsMetaRequest {
  export type AsObject = {
    contractid?: src_api_message_v1_common_pb.UUID.AsObject,
  }
}

export class GetContractTermsMetaResponse extends jspb.Message {
  hasContractterms(): boolean;
  clearContractterms(): void;
  getContractterms(): ContractTerms | undefined;
  setContractterms(value?: ContractTerms): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContractTermsMetaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetContractTermsMetaResponse): GetContractTermsMetaResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContractTermsMetaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContractTermsMetaResponse;
  static deserializeBinaryFromReader(message: GetContractTermsMetaResponse, reader: jspb.BinaryReader): GetContractTermsMetaResponse;
}

export namespace GetContractTermsMetaResponse {
  export type AsObject = {
    contractterms?: ContractTerms.AsObject,
  }
}

export class GetContractTermsHistoriesRequest extends jspb.Message {
  hasTermsid(): boolean;
  clearTermsid(): void;
  getTermsid(): src_api_message_v1_common_pb.UUID | undefined;
  setTermsid(value?: src_api_message_v1_common_pb.UUID): void;

  getTrialid(): string;
  setTrialid(value: string): void;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): src_api_message_v1_common_pb.Pagination | undefined;
  setPage(value?: src_api_message_v1_common_pb.Pagination): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContractTermsHistoriesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetContractTermsHistoriesRequest): GetContractTermsHistoriesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContractTermsHistoriesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContractTermsHistoriesRequest;
  static deserializeBinaryFromReader(message: GetContractTermsHistoriesRequest, reader: jspb.BinaryReader): GetContractTermsHistoriesRequest;
}

export namespace GetContractTermsHistoriesRequest {
  export type AsObject = {
    termsid?: src_api_message_v1_common_pb.UUID.AsObject,
    trialid: string,
    page?: src_api_message_v1_common_pb.Pagination.AsObject,
  }
}

export class GetContractTermsHistoriesResponse extends jspb.Message {
  hasContracttermshistories(): boolean;
  clearContracttermshistories(): void;
  getContracttermshistories(): ContractTermsHistory | undefined;
  setContracttermshistories(value?: ContractTermsHistory): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContractTermsHistoriesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetContractTermsHistoriesResponse): GetContractTermsHistoriesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContractTermsHistoriesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContractTermsHistoriesResponse;
  static deserializeBinaryFromReader(message: GetContractTermsHistoriesResponse, reader: jspb.BinaryReader): GetContractTermsHistoriesResponse;
}

export namespace GetContractTermsHistoriesResponse {
  export type AsObject = {
    contracttermshistories?: ContractTermsHistory.AsObject,
  }
}

export class GetContractTermsHistoryRequest extends jspb.Message {
  getContracttermshistoryid(): number;
  setContracttermshistoryid(value: number): void;

  hasContracttermsid(): boolean;
  clearContracttermsid(): void;
  getContracttermsid(): src_api_message_v1_common_pb.UUID | undefined;
  setContracttermsid(value?: src_api_message_v1_common_pb.UUID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContractTermsHistoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetContractTermsHistoryRequest): GetContractTermsHistoryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContractTermsHistoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContractTermsHistoryRequest;
  static deserializeBinaryFromReader(message: GetContractTermsHistoryRequest, reader: jspb.BinaryReader): GetContractTermsHistoryRequest;
}

export namespace GetContractTermsHistoryRequest {
  export type AsObject = {
    contracttermshistoryid: number,
    contracttermsid?: src_api_message_v1_common_pb.UUID.AsObject,
  }
}

export class GetContractTermsHistoryResponse extends jspb.Message {
  hasContent(): boolean;
  clearContent(): void;
  getContent(): TermsContent | undefined;
  setContent(value?: TermsContent): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContractTermsHistoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetContractTermsHistoryResponse): GetContractTermsHistoryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContractTermsHistoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContractTermsHistoryResponse;
  static deserializeBinaryFromReader(message: GetContractTermsHistoryResponse, reader: jspb.BinaryReader): GetContractTermsHistoryResponse;
}

export namespace GetContractTermsHistoryResponse {
  export type AsObject = {
    content?: TermsContent.AsObject,
  }
}

export class GetAllTermsTemplateRequest extends jspb.Message {
  getTrialid(): string;
  setTrialid(value: string): void;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): src_api_message_v1_common_pb.Pagination | undefined;
  setPage(value?: src_api_message_v1_common_pb.Pagination): void;

  hasOrderby(): boolean;
  clearOrderby(): void;
  getOrderby(): TermsTemplateOrder | undefined;
  setOrderby(value?: TermsTemplateOrder): void;

  clearFilterList(): void;
  getFilterList(): Array<TermsTemplateFilter>;
  setFilterList(value: Array<TermsTemplateFilter>): void;
  addFilter(value?: TermsTemplateFilter, index?: number): TermsTemplateFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllTermsTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllTermsTemplateRequest): GetAllTermsTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllTermsTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllTermsTemplateRequest;
  static deserializeBinaryFromReader(message: GetAllTermsTemplateRequest, reader: jspb.BinaryReader): GetAllTermsTemplateRequest;
}

export namespace GetAllTermsTemplateRequest {
  export type AsObject = {
    trialid: string,
    page?: src_api_message_v1_common_pb.Pagination.AsObject,
    orderby?: TermsTemplateOrder.AsObject,
    filterList: Array<TermsTemplateFilter.AsObject>,
  }
}

export class GetAllTermsTemplateResponse extends jspb.Message {
  hasTermstemplates(): boolean;
  clearTermstemplates(): void;
  getTermstemplates(): TermsTemplate | undefined;
  setTermstemplates(value?: TermsTemplate): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllTermsTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllTermsTemplateResponse): GetAllTermsTemplateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllTermsTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllTermsTemplateResponse;
  static deserializeBinaryFromReader(message: GetAllTermsTemplateResponse, reader: jspb.BinaryReader): GetAllTermsTemplateResponse;
}

export namespace GetAllTermsTemplateResponse {
  export type AsObject = {
    termstemplates?: TermsTemplate.AsObject,
  }
}

export class GetTermsTemplateContentRequest extends jspb.Message {
  getTrialid(): string;
  setTrialid(value: string): void;

  hasTermsid(): boolean;
  clearTermsid(): void;
  getTermsid(): src_api_message_v1_common_pb.UUID | undefined;
  setTermsid(value?: src_api_message_v1_common_pb.UUID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTermsTemplateContentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTermsTemplateContentRequest): GetTermsTemplateContentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTermsTemplateContentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTermsTemplateContentRequest;
  static deserializeBinaryFromReader(message: GetTermsTemplateContentRequest, reader: jspb.BinaryReader): GetTermsTemplateContentRequest;
}

export namespace GetTermsTemplateContentRequest {
  export type AsObject = {
    trialid: string,
    termsid?: src_api_message_v1_common_pb.UUID.AsObject,
  }
}

export class GetTermsTemplateContentResponse extends jspb.Message {
  hasContent(): boolean;
  clearContent(): void;
  getContent(): TermsContent | undefined;
  setContent(value?: TermsContent): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTermsTemplateContentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTermsTemplateContentResponse): GetTermsTemplateContentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTermsTemplateContentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTermsTemplateContentResponse;
  static deserializeBinaryFromReader(message: GetTermsTemplateContentResponse, reader: jspb.BinaryReader): GetTermsTemplateContentResponse;
}

export namespace GetTermsTemplateContentResponse {
  export type AsObject = {
    content?: TermsContent.AsObject,
  }
}

export class GetTermsTemplateHistoriesRequest extends jspb.Message {
  getTrialid(): string;
  setTrialid(value: string): void;

  hasTermsid(): boolean;
  clearTermsid(): void;
  getTermsid(): src_api_message_v1_common_pb.UUID | undefined;
  setTermsid(value?: src_api_message_v1_common_pb.UUID): void;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): src_api_message_v1_common_pb.Pagination | undefined;
  setPage(value?: src_api_message_v1_common_pb.Pagination): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTermsTemplateHistoriesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTermsTemplateHistoriesRequest): GetTermsTemplateHistoriesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTermsTemplateHistoriesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTermsTemplateHistoriesRequest;
  static deserializeBinaryFromReader(message: GetTermsTemplateHistoriesRequest, reader: jspb.BinaryReader): GetTermsTemplateHistoriesRequest;
}

export namespace GetTermsTemplateHistoriesRequest {
  export type AsObject = {
    trialid: string,
    termsid?: src_api_message_v1_common_pb.UUID.AsObject,
    page?: src_api_message_v1_common_pb.Pagination.AsObject,
  }
}

export class GetTermsTemplateHistoriesResponse extends jspb.Message {
  hasTermstemplatehistories(): boolean;
  clearTermstemplatehistories(): void;
  getTermstemplatehistories(): TermsTemplateHistory | undefined;
  setTermstemplatehistories(value?: TermsTemplateHistory): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTermsTemplateHistoriesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTermsTemplateHistoriesResponse): GetTermsTemplateHistoriesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTermsTemplateHistoriesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTermsTemplateHistoriesResponse;
  static deserializeBinaryFromReader(message: GetTermsTemplateHistoriesResponse, reader: jspb.BinaryReader): GetTermsTemplateHistoriesResponse;
}

export namespace GetTermsTemplateHistoriesResponse {
  export type AsObject = {
    termstemplatehistories?: TermsTemplateHistory.AsObject,
  }
}

export class GetTermsTemplateHistoryRequest extends jspb.Message {
  getTrialid(): string;
  setTrialid(value: string): void;

  getTermstemplatehistoryid(): number;
  setTermstemplatehistoryid(value: number): void;

  hasTermstemplateid(): boolean;
  clearTermstemplateid(): void;
  getTermstemplateid(): src_api_message_v1_common_pb.UUID | undefined;
  setTermstemplateid(value?: src_api_message_v1_common_pb.UUID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTermsTemplateHistoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTermsTemplateHistoryRequest): GetTermsTemplateHistoryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTermsTemplateHistoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTermsTemplateHistoryRequest;
  static deserializeBinaryFromReader(message: GetTermsTemplateHistoryRequest, reader: jspb.BinaryReader): GetTermsTemplateHistoryRequest;
}

export namespace GetTermsTemplateHistoryRequest {
  export type AsObject = {
    trialid: string,
    termstemplatehistoryid: number,
    termstemplateid?: src_api_message_v1_common_pb.UUID.AsObject,
  }
}

export class GetTermsTemplateHistoryResponse extends jspb.Message {
  hasContent(): boolean;
  clearContent(): void;
  getContent(): TermsContent | undefined;
  setContent(value?: TermsContent): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTermsTemplateHistoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTermsTemplateHistoryResponse): GetTermsTemplateHistoryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTermsTemplateHistoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTermsTemplateHistoryResponse;
  static deserializeBinaryFromReader(message: GetTermsTemplateHistoryResponse, reader: jspb.BinaryReader): GetTermsTemplateHistoryResponse;
}

export namespace GetTermsTemplateHistoryResponse {
  export type AsObject = {
    content?: TermsContent.AsObject,
  }
}

export class CreateNewContractRequest extends jspb.Message {
  hasContract(): boolean;
  clearContract(): void;
  getContract(): ContractMeta | undefined;
  setContract(value?: ContractMeta): void;

  hasMcibid(): boolean;
  clearMcibid(): void;
  getMcibid(): src_api_message_v1_common_pb.UUID | undefined;
  setMcibid(value?: src_api_message_v1_common_pb.UUID): void;

  hasTermstemplateid(): boolean;
  clearTermstemplateid(): void;
  getTermstemplateid(): src_api_message_v1_common_pb.UUID | undefined;
  setTermstemplateid(value?: src_api_message_v1_common_pb.UUID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNewContractRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNewContractRequest): CreateNewContractRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateNewContractRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNewContractRequest;
  static deserializeBinaryFromReader(message: CreateNewContractRequest, reader: jspb.BinaryReader): CreateNewContractRequest;
}

export namespace CreateNewContractRequest {
  export type AsObject = {
    contract?: ContractMeta.AsObject,
    mcibid?: src_api_message_v1_common_pb.UUID.AsObject,
    termstemplateid?: src_api_message_v1_common_pb.UUID.AsObject,
  }
}

export class CreateNewContractResponse extends jspb.Message {
  hasNewcontract(): boolean;
  clearNewcontract(): void;
  getNewcontract(): ContractMeta | undefined;
  setNewcontract(value?: ContractMeta): void;

  hasContractid(): boolean;
  clearContractid(): void;
  getContractid(): src_api_message_v1_common_pb.UUID | undefined;
  setContractid(value?: src_api_message_v1_common_pb.UUID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNewContractResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNewContractResponse): CreateNewContractResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateNewContractResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNewContractResponse;
  static deserializeBinaryFromReader(message: CreateNewContractResponse, reader: jspb.BinaryReader): CreateNewContractResponse;
}

export namespace CreateNewContractResponse {
  export type AsObject = {
    newcontract?: ContractMeta.AsObject,
    contractid?: src_api_message_v1_common_pb.UUID.AsObject,
  }
}

export class CreateNewTermsTemplateRequest extends jspb.Message {
  hasContent(): boolean;
  clearContent(): void;
  getContent(): TermsContent | undefined;
  setContent(value?: TermsContent): void;

  getName(): string;
  setName(value: string): void;

  hasTrial(): boolean;
  clearTrial(): void;
  getTrial(): src_api_message_v1_common_pb.StudyRef | undefined;
  setTrial(value?: src_api_message_v1_common_pb.StudyRef): void;

  hasUpdatedby(): boolean;
  clearUpdatedby(): void;
  getUpdatedby(): src_api_message_v1_common_pb.UserRef | undefined;
  setUpdatedby(value?: src_api_message_v1_common_pb.UserRef): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNewTermsTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNewTermsTemplateRequest): CreateNewTermsTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateNewTermsTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNewTermsTemplateRequest;
  static deserializeBinaryFromReader(message: CreateNewTermsTemplateRequest, reader: jspb.BinaryReader): CreateNewTermsTemplateRequest;
}

export namespace CreateNewTermsTemplateRequest {
  export type AsObject = {
    content?: TermsContent.AsObject,
    name: string,
    trial?: src_api_message_v1_common_pb.StudyRef.AsObject,
    updatedby?: src_api_message_v1_common_pb.UserRef.AsObject,
  }
}

export class CreateNewTermsTemplateResponse extends jspb.Message {
  hasNewtermstemplate(): boolean;
  clearNewtermstemplate(): void;
  getNewtermstemplate(): TermsTemplate | undefined;
  setNewtermstemplate(value?: TermsTemplate): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNewTermsTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNewTermsTemplateResponse): CreateNewTermsTemplateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateNewTermsTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNewTermsTemplateResponse;
  static deserializeBinaryFromReader(message: CreateNewTermsTemplateResponse, reader: jspb.BinaryReader): CreateNewTermsTemplateResponse;
}

export namespace CreateNewTermsTemplateResponse {
  export type AsObject = {
    newtermstemplate?: TermsTemplate.AsObject,
  }
}

export class UpdateTermsTemplateContentRequest extends jspb.Message {
  hasTemplateid(): boolean;
  clearTemplateid(): void;
  getTemplateid(): src_api_message_v1_common_pb.UUID | undefined;
  setTemplateid(value?: src_api_message_v1_common_pb.UUID): void;

  hasNewtermscontent(): boolean;
  clearNewtermscontent(): void;
  getNewtermscontent(): TermsContent | undefined;
  setNewtermscontent(value?: TermsContent): void;

  hasTrial(): boolean;
  clearTrial(): void;
  getTrial(): src_api_message_v1_common_pb.StudyRef | undefined;
  setTrial(value?: src_api_message_v1_common_pb.StudyRef): void;

  hasUpdatedby(): boolean;
  clearUpdatedby(): void;
  getUpdatedby(): src_api_message_v1_common_pb.UserRef | undefined;
  setUpdatedby(value?: src_api_message_v1_common_pb.UserRef): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTermsTemplateContentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTermsTemplateContentRequest): UpdateTermsTemplateContentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateTermsTemplateContentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTermsTemplateContentRequest;
  static deserializeBinaryFromReader(message: UpdateTermsTemplateContentRequest, reader: jspb.BinaryReader): UpdateTermsTemplateContentRequest;
}

export namespace UpdateTermsTemplateContentRequest {
  export type AsObject = {
    templateid?: src_api_message_v1_common_pb.UUID.AsObject,
    newtermscontent?: TermsContent.AsObject,
    trial?: src_api_message_v1_common_pb.StudyRef.AsObject,
    updatedby?: src_api_message_v1_common_pb.UserRef.AsObject,
  }
}

export class UpdateTermsTemplateContentResponse extends jspb.Message {
  hasNewtermstemplate(): boolean;
  clearNewtermstemplate(): void;
  getNewtermstemplate(): TermsTemplate | undefined;
  setNewtermstemplate(value?: TermsTemplate): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTermsTemplateContentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTermsTemplateContentResponse): UpdateTermsTemplateContentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateTermsTemplateContentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTermsTemplateContentResponse;
  static deserializeBinaryFromReader(message: UpdateTermsTemplateContentResponse, reader: jspb.BinaryReader): UpdateTermsTemplateContentResponse;
}

export namespace UpdateTermsTemplateContentResponse {
  export type AsObject = {
    newtermstemplate?: TermsTemplate.AsObject,
  }
}

export class UpdateTermsTemplateRequest extends jspb.Message {
  hasTemplateid(): boolean;
  clearTemplateid(): void;
  getTemplateid(): src_api_message_v1_common_pb.UUID | undefined;
  setTemplateid(value?: src_api_message_v1_common_pb.UUID): void;

  getName(): string;
  setName(value: string): void;

  hasTrial(): boolean;
  clearTrial(): void;
  getTrial(): src_api_message_v1_common_pb.StudyRef | undefined;
  setTrial(value?: src_api_message_v1_common_pb.StudyRef): void;

  hasUpdatedby(): boolean;
  clearUpdatedby(): void;
  getUpdatedby(): src_api_message_v1_common_pb.UserRef | undefined;
  setUpdatedby(value?: src_api_message_v1_common_pb.UserRef): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTermsTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTermsTemplateRequest): UpdateTermsTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateTermsTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTermsTemplateRequest;
  static deserializeBinaryFromReader(message: UpdateTermsTemplateRequest, reader: jspb.BinaryReader): UpdateTermsTemplateRequest;
}

export namespace UpdateTermsTemplateRequest {
  export type AsObject = {
    templateid?: src_api_message_v1_common_pb.UUID.AsObject,
    name: string,
    trial?: src_api_message_v1_common_pb.StudyRef.AsObject,
    updatedby?: src_api_message_v1_common_pb.UserRef.AsObject,
  }
}

export class UpdateTermsTemplateResponse extends jspb.Message {
  hasNewtermstemplate(): boolean;
  clearNewtermstemplate(): void;
  getNewtermstemplate(): TermsTemplate | undefined;
  setNewtermstemplate(value?: TermsTemplate): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTermsTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTermsTemplateResponse): UpdateTermsTemplateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateTermsTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTermsTemplateResponse;
  static deserializeBinaryFromReader(message: UpdateTermsTemplateResponse, reader: jspb.BinaryReader): UpdateTermsTemplateResponse;
}

export namespace UpdateTermsTemplateResponse {
  export type AsObject = {
    newtermstemplate?: TermsTemplate.AsObject,
  }
}

export class UpdateContractTermsRequest extends jspb.Message {
  hasContractid(): boolean;
  clearContractid(): void;
  getContractid(): src_api_message_v1_common_pb.UUID | undefined;
  setContractid(value?: src_api_message_v1_common_pb.UUID): void;

  hasContracttermsid(): boolean;
  clearContracttermsid(): void;
  getContracttermsid(): src_api_message_v1_common_pb.UUID | undefined;
  setContracttermsid(value?: src_api_message_v1_common_pb.UUID): void;

  hasNewterms(): boolean;
  clearNewterms(): void;
  getNewterms(): TermsContent | undefined;
  setNewterms(value?: TermsContent): void;

  hasUpdatedby(): boolean;
  clearUpdatedby(): void;
  getUpdatedby(): src_api_message_v1_common_pb.UserRef | undefined;
  setUpdatedby(value?: src_api_message_v1_common_pb.UserRef): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateContractTermsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateContractTermsRequest): UpdateContractTermsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateContractTermsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateContractTermsRequest;
  static deserializeBinaryFromReader(message: UpdateContractTermsRequest, reader: jspb.BinaryReader): UpdateContractTermsRequest;
}

export namespace UpdateContractTermsRequest {
  export type AsObject = {
    contractid?: src_api_message_v1_common_pb.UUID.AsObject,
    contracttermsid?: src_api_message_v1_common_pb.UUID.AsObject,
    newterms?: TermsContent.AsObject,
    updatedby?: src_api_message_v1_common_pb.UserRef.AsObject,
  }
}

export class UpdateContractTermsResponse extends jspb.Message {
  hasNewcontractterms(): boolean;
  clearNewcontractterms(): void;
  getNewcontractterms(): ContractTerms | undefined;
  setNewcontractterms(value?: ContractTerms): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateContractTermsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateContractTermsResponse): UpdateContractTermsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateContractTermsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateContractTermsResponse;
  static deserializeBinaryFromReader(message: UpdateContractTermsResponse, reader: jspb.BinaryReader): UpdateContractTermsResponse;
}

export namespace UpdateContractTermsResponse {
  export type AsObject = {
    newcontractterms?: ContractTerms.AsObject,
  }
}

export class UpdateContractMetaRequest extends jspb.Message {
  hasContractid(): boolean;
  clearContractid(): void;
  getContractid(): src_api_message_v1_common_pb.UUID | undefined;
  setContractid(value?: src_api_message_v1_common_pb.UUID): void;

  getName(): string;
  setName(value: string): void;

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
  toObject(includeInstance?: boolean): UpdateContractMetaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateContractMetaRequest): UpdateContractMetaRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateContractMetaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateContractMetaRequest;
  static deserializeBinaryFromReader(message: UpdateContractMetaRequest, reader: jspb.BinaryReader): UpdateContractMetaRequest;
}

export namespace UpdateContractMetaRequest {
  export type AsObject = {
    contractid?: src_api_message_v1_common_pb.UUID.AsObject,
    name: string,
    effectivefrom: Uint8Array | string,
    effectiveto: Uint8Array | string,
    updatedby?: src_api_message_v1_common_pb.UserRef.AsObject,
  }
}

export class UpdateContractMetaResponse extends jspb.Message {
  hasNewcontract(): boolean;
  clearNewcontract(): void;
  getNewcontract(): ContractMeta | undefined;
  setNewcontract(value?: ContractMeta): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateContractMetaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateContractMetaResponse): UpdateContractMetaResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateContractMetaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateContractMetaResponse;
  static deserializeBinaryFromReader(message: UpdateContractMetaResponse, reader: jspb.BinaryReader): UpdateContractMetaResponse;
}

export namespace UpdateContractMetaResponse {
  export type AsObject = {
    newcontract?: ContractMeta.AsObject,
  }
}

export class StartReviewSibRequest extends jspb.Message {
  hasSibid(): boolean;
  clearSibid(): void;
  getSibid(): src_api_message_v1_common_pb.UUID | undefined;
  setSibid(value?: src_api_message_v1_common_pb.UUID): void;

  hasContractid(): boolean;
  clearContractid(): void;
  getContractid(): src_api_message_v1_common_pb.UUID | undefined;
  setContractid(value?: src_api_message_v1_common_pb.UUID): void;

  getTrialid(): string;
  setTrialid(value: string): void;

  hasUpdatedby(): boolean;
  clearUpdatedby(): void;
  getUpdatedby(): src_api_message_v1_common_pb.UserRef | undefined;
  setUpdatedby(value?: src_api_message_v1_common_pb.UserRef): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartReviewSibRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartReviewSibRequest): StartReviewSibRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartReviewSibRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartReviewSibRequest;
  static deserializeBinaryFromReader(message: StartReviewSibRequest, reader: jspb.BinaryReader): StartReviewSibRequest;
}

export namespace StartReviewSibRequest {
  export type AsObject = {
    sibid?: src_api_message_v1_common_pb.UUID.AsObject,
    contractid?: src_api_message_v1_common_pb.UUID.AsObject,
    trialid: string,
    updatedby?: src_api_message_v1_common_pb.UserRef.AsObject,
  }
}

export class StartReviewSibResponse extends jspb.Message {
  hasSibid(): boolean;
  clearSibid(): void;
  getSibid(): src_api_message_v1_common_pb.UUID | undefined;
  setSibid(value?: src_api_message_v1_common_pb.UUID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartReviewSibResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StartReviewSibResponse): StartReviewSibResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartReviewSibResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartReviewSibResponse;
  static deserializeBinaryFromReader(message: StartReviewSibResponse, reader: jspb.BinaryReader): StartReviewSibResponse;
}

export namespace StartReviewSibResponse {
  export type AsObject = {
    sibid?: src_api_message_v1_common_pb.UUID.AsObject,
  }
}

export class CancelSibReviewRequest extends jspb.Message {
  hasSibid(): boolean;
  clearSibid(): void;
  getSibid(): src_api_message_v1_common_pb.UUID | undefined;
  setSibid(value?: src_api_message_v1_common_pb.UUID): void;

  hasContractid(): boolean;
  clearContractid(): void;
  getContractid(): src_api_message_v1_common_pb.UUID | undefined;
  setContractid(value?: src_api_message_v1_common_pb.UUID): void;

  getTrialid(): string;
  setTrialid(value: string): void;

  hasUpdatedby(): boolean;
  clearUpdatedby(): void;
  getUpdatedby(): src_api_message_v1_common_pb.UserRef | undefined;
  setUpdatedby(value?: src_api_message_v1_common_pb.UserRef): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelSibReviewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelSibReviewRequest): CancelSibReviewRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelSibReviewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelSibReviewRequest;
  static deserializeBinaryFromReader(message: CancelSibReviewRequest, reader: jspb.BinaryReader): CancelSibReviewRequest;
}

export namespace CancelSibReviewRequest {
  export type AsObject = {
    sibid?: src_api_message_v1_common_pb.UUID.AsObject,
    contractid?: src_api_message_v1_common_pb.UUID.AsObject,
    trialid: string,
    updatedby?: src_api_message_v1_common_pb.UserRef.AsObject,
  }
}

export class CancelSibReviewResponse extends jspb.Message {
  hasSibid(): boolean;
  clearSibid(): void;
  getSibid(): src_api_message_v1_common_pb.UUID | undefined;
  setSibid(value?: src_api_message_v1_common_pb.UUID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelSibReviewResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CancelSibReviewResponse): CancelSibReviewResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelSibReviewResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelSibReviewResponse;
  static deserializeBinaryFromReader(message: CancelSibReviewResponse, reader: jspb.BinaryReader): CancelSibReviewResponse;
}

export namespace CancelSibReviewResponse {
  export type AsObject = {
    sibid?: src_api_message_v1_common_pb.UUID.AsObject,
  }
}

export class PublishSibRequest extends jspb.Message {
  hasSibid(): boolean;
  clearSibid(): void;
  getSibid(): src_api_message_v1_common_pb.UUID | undefined;
  setSibid(value?: src_api_message_v1_common_pb.UUID): void;

  hasContractid(): boolean;
  clearContractid(): void;
  getContractid(): src_api_message_v1_common_pb.UUID | undefined;
  setContractid(value?: src_api_message_v1_common_pb.UUID): void;

  getTrialid(): string;
  setTrialid(value: string): void;

  hasUpdatedby(): boolean;
  clearUpdatedby(): void;
  getUpdatedby(): src_api_message_v1_common_pb.UserRef | undefined;
  setUpdatedby(value?: src_api_message_v1_common_pb.UserRef): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishSibRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PublishSibRequest): PublishSibRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublishSibRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishSibRequest;
  static deserializeBinaryFromReader(message: PublishSibRequest, reader: jspb.BinaryReader): PublishSibRequest;
}

export namespace PublishSibRequest {
  export type AsObject = {
    sibid?: src_api_message_v1_common_pb.UUID.AsObject,
    contractid?: src_api_message_v1_common_pb.UUID.AsObject,
    trialid: string,
    updatedby?: src_api_message_v1_common_pb.UserRef.AsObject,
  }
}

export class PublishSibResponse extends jspb.Message {
  hasSibid(): boolean;
  clearSibid(): void;
  getSibid(): src_api_message_v1_common_pb.UUID | undefined;
  setSibid(value?: src_api_message_v1_common_pb.UUID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishSibResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PublishSibResponse): PublishSibResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublishSibResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishSibResponse;
  static deserializeBinaryFromReader(message: PublishSibResponse, reader: jspb.BinaryReader): PublishSibResponse;
}

export namespace PublishSibResponse {
  export type AsObject = {
    sibid?: src_api_message_v1_common_pb.UUID.AsObject,
  }
}

export class StartReviewContractRequest extends jspb.Message {
  hasContractid(): boolean;
  clearContractid(): void;
  getContractid(): src_api_message_v1_common_pb.UUID | undefined;
  setContractid(value?: src_api_message_v1_common_pb.UUID): void;

  getTrialid(): string;
  setTrialid(value: string): void;

  hasUpdatedby(): boolean;
  clearUpdatedby(): void;
  getUpdatedby(): src_api_message_v1_common_pb.UserRef | undefined;
  setUpdatedby(value?: src_api_message_v1_common_pb.UserRef): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartReviewContractRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartReviewContractRequest): StartReviewContractRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartReviewContractRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartReviewContractRequest;
  static deserializeBinaryFromReader(message: StartReviewContractRequest, reader: jspb.BinaryReader): StartReviewContractRequest;
}

export namespace StartReviewContractRequest {
  export type AsObject = {
    contractid?: src_api_message_v1_common_pb.UUID.AsObject,
    trialid: string,
    updatedby?: src_api_message_v1_common_pb.UserRef.AsObject,
  }
}

export class StartReviewContractResponse extends jspb.Message {
  hasContractid(): boolean;
  clearContractid(): void;
  getContractid(): src_api_message_v1_common_pb.UUID | undefined;
  setContractid(value?: src_api_message_v1_common_pb.UUID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartReviewContractResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StartReviewContractResponse): StartReviewContractResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartReviewContractResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartReviewContractResponse;
  static deserializeBinaryFromReader(message: StartReviewContractResponse, reader: jspb.BinaryReader): StartReviewContractResponse;
}

export namespace StartReviewContractResponse {
  export type AsObject = {
    contractid?: src_api_message_v1_common_pb.UUID.AsObject,
  }
}

export class CancelContractReviewRequest extends jspb.Message {
  hasContractid(): boolean;
  clearContractid(): void;
  getContractid(): src_api_message_v1_common_pb.UUID | undefined;
  setContractid(value?: src_api_message_v1_common_pb.UUID): void;

  getTrialid(): string;
  setTrialid(value: string): void;

  hasUpdatedby(): boolean;
  clearUpdatedby(): void;
  getUpdatedby(): src_api_message_v1_common_pb.UserRef | undefined;
  setUpdatedby(value?: src_api_message_v1_common_pb.UserRef): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelContractReviewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelContractReviewRequest): CancelContractReviewRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelContractReviewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelContractReviewRequest;
  static deserializeBinaryFromReader(message: CancelContractReviewRequest, reader: jspb.BinaryReader): CancelContractReviewRequest;
}

export namespace CancelContractReviewRequest {
  export type AsObject = {
    contractid?: src_api_message_v1_common_pb.UUID.AsObject,
    trialid: string,
    updatedby?: src_api_message_v1_common_pb.UserRef.AsObject,
  }
}

export class CancelContractReviewResponse extends jspb.Message {
  hasContractid(): boolean;
  clearContractid(): void;
  getContractid(): src_api_message_v1_common_pb.UUID | undefined;
  setContractid(value?: src_api_message_v1_common_pb.UUID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelContractReviewResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CancelContractReviewResponse): CancelContractReviewResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelContractReviewResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelContractReviewResponse;
  static deserializeBinaryFromReader(message: CancelContractReviewResponse, reader: jspb.BinaryReader): CancelContractReviewResponse;
}

export namespace CancelContractReviewResponse {
  export type AsObject = {
    contractid?: src_api_message_v1_common_pb.UUID.AsObject,
  }
}

export class PublishContractRequest extends jspb.Message {
  hasContractid(): boolean;
  clearContractid(): void;
  getContractid(): src_api_message_v1_common_pb.UUID | undefined;
  setContractid(value?: src_api_message_v1_common_pb.UUID): void;

  getTrialid(): string;
  setTrialid(value: string): void;

  hasUpdatedby(): boolean;
  clearUpdatedby(): void;
  getUpdatedby(): src_api_message_v1_common_pb.UserRef | undefined;
  setUpdatedby(value?: src_api_message_v1_common_pb.UserRef): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishContractRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PublishContractRequest): PublishContractRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublishContractRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishContractRequest;
  static deserializeBinaryFromReader(message: PublishContractRequest, reader: jspb.BinaryReader): PublishContractRequest;
}

export namespace PublishContractRequest {
  export type AsObject = {
    contractid?: src_api_message_v1_common_pb.UUID.AsObject,
    trialid: string,
    updatedby?: src_api_message_v1_common_pb.UserRef.AsObject,
  }
}

export class PublishContractResponse extends jspb.Message {
  hasContractid(): boolean;
  clearContractid(): void;
  getContractid(): src_api_message_v1_common_pb.UUID | undefined;
  setContractid(value?: src_api_message_v1_common_pb.UUID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishContractResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PublishContractResponse): PublishContractResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublishContractResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishContractResponse;
  static deserializeBinaryFromReader(message: PublishContractResponse, reader: jspb.BinaryReader): PublishContractResponse;
}

export namespace PublishContractResponse {
  export type AsObject = {
    contractid?: src_api_message_v1_common_pb.UUID.AsObject,
  }
}

export class StartSigningContractRequest extends jspb.Message {
  hasContractid(): boolean;
  clearContractid(): void;
  getContractid(): src_api_message_v1_common_pb.UUID | undefined;
  setContractid(value?: src_api_message_v1_common_pb.UUID): void;

  getTrialid(): string;
  setTrialid(value: string): void;

  hasUpdatedby(): boolean;
  clearUpdatedby(): void;
  getUpdatedby(): src_api_message_v1_common_pb.UserRef | undefined;
  setUpdatedby(value?: src_api_message_v1_common_pb.UserRef): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartSigningContractRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartSigningContractRequest): StartSigningContractRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartSigningContractRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartSigningContractRequest;
  static deserializeBinaryFromReader(message: StartSigningContractRequest, reader: jspb.BinaryReader): StartSigningContractRequest;
}

export namespace StartSigningContractRequest {
  export type AsObject = {
    contractid?: src_api_message_v1_common_pb.UUID.AsObject,
    trialid: string,
    updatedby?: src_api_message_v1_common_pb.UserRef.AsObject,
  }
}

export class StartSigningContractResponse extends jspb.Message {
  hasContractid(): boolean;
  clearContractid(): void;
  getContractid(): src_api_message_v1_common_pb.UUID | undefined;
  setContractid(value?: src_api_message_v1_common_pb.UUID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartSigningContractResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StartSigningContractResponse): StartSigningContractResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartSigningContractResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartSigningContractResponse;
  static deserializeBinaryFromReader(message: StartSigningContractResponse, reader: jspb.BinaryReader): StartSigningContractResponse;
}

export namespace StartSigningContractResponse {
  export type AsObject = {
    contractid?: src_api_message_v1_common_pb.UUID.AsObject,
  }
}

export class GetContractSibMcibVisitsRequest extends jspb.Message {
  hasMcibid(): boolean;
  clearMcibid(): void;
  getMcibid(): src_api_message_v1_common_pb.UUID | undefined;
  setMcibid(value?: src_api_message_v1_common_pb.UUID): void;

  hasSibid(): boolean;
  clearSibid(): void;
  getSibid(): src_api_message_v1_common_pb.UUID | undefined;
  setSibid(value?: src_api_message_v1_common_pb.UUID): void;

  getTrialid(): string;
  setTrialid(value: string): void;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): src_api_message_v1_common_pb.Pagination | undefined;
  setPage(value?: src_api_message_v1_common_pb.Pagination): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContractSibMcibVisitsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetContractSibMcibVisitsRequest): GetContractSibMcibVisitsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContractSibMcibVisitsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContractSibMcibVisitsRequest;
  static deserializeBinaryFromReader(message: GetContractSibMcibVisitsRequest, reader: jspb.BinaryReader): GetContractSibMcibVisitsRequest;
}

export namespace GetContractSibMcibVisitsRequest {
  export type AsObject = {
    mcibid?: src_api_message_v1_common_pb.UUID.AsObject,
    sibid?: src_api_message_v1_common_pb.UUID.AsObject,
    trialid: string,
    page?: src_api_message_v1_common_pb.Pagination.AsObject,
  }
}

export class GetContractSibMcibVisitsResponse extends jspb.Message {
  hasVisit(): boolean;
  clearVisit(): void;
  getVisit(): SibMcibVisit | undefined;
  setVisit(value?: SibMcibVisit): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContractSibMcibVisitsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetContractSibMcibVisitsResponse): GetContractSibMcibVisitsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContractSibMcibVisitsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContractSibMcibVisitsResponse;
  static deserializeBinaryFromReader(message: GetContractSibMcibVisitsResponse, reader: jspb.BinaryReader): GetContractSibMcibVisitsResponse;
}

export namespace GetContractSibMcibVisitsResponse {
  export type AsObject = {
    visit?: SibMcibVisit.AsObject,
  }
}

export class GetContractSibMcibProcsRequest extends jspb.Message {
  hasMcibid(): boolean;
  clearMcibid(): void;
  getMcibid(): src_api_message_v1_common_pb.UUID | undefined;
  setMcibid(value?: src_api_message_v1_common_pb.UUID): void;

  hasSibid(): boolean;
  clearSibid(): void;
  getSibid(): src_api_message_v1_common_pb.UUID | undefined;
  setSibid(value?: src_api_message_v1_common_pb.UUID): void;

  hasVdid(): boolean;
  clearVdid(): void;
  getVdid(): src_api_message_v1_common_pb.UUID | undefined;
  setVdid(value?: src_api_message_v1_common_pb.UUID): void;

  getTrialid(): string;
  setTrialid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContractSibMcibProcsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetContractSibMcibProcsRequest): GetContractSibMcibProcsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContractSibMcibProcsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContractSibMcibProcsRequest;
  static deserializeBinaryFromReader(message: GetContractSibMcibProcsRequest, reader: jspb.BinaryReader): GetContractSibMcibProcsRequest;
}

export namespace GetContractSibMcibProcsRequest {
  export type AsObject = {
    mcibid?: src_api_message_v1_common_pb.UUID.AsObject,
    sibid?: src_api_message_v1_common_pb.UUID.AsObject,
    vdid?: src_api_message_v1_common_pb.UUID.AsObject,
    trialid: string,
  }
}

export class GetContractSibMcibProcsResponse extends jspb.Message {
  hasProc(): boolean;
  clearProc(): void;
  getProc(): SibMcibProc | undefined;
  setProc(value?: SibMcibProc): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContractSibMcibProcsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetContractSibMcibProcsResponse): GetContractSibMcibProcsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContractSibMcibProcsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContractSibMcibProcsResponse;
  static deserializeBinaryFromReader(message: GetContractSibMcibProcsResponse, reader: jspb.BinaryReader): GetContractSibMcibProcsResponse;
}

export namespace GetContractSibMcibProcsResponse {
  export type AsObject = {
    proc?: SibMcibProc.AsObject,
  }
}

export class CreateContractSibRequest extends jspb.Message {
  hasContractid(): boolean;
  clearContractid(): void;
  getContractid(): src_api_message_v1_common_pb.UUID | undefined;
  setContractid(value?: src_api_message_v1_common_pb.UUID): void;

  hasMcibid(): boolean;
  clearMcibid(): void;
  getMcibid(): src_api_message_v1_common_pb.UUID | undefined;
  setMcibid(value?: src_api_message_v1_common_pb.UUID): void;

  getName(): string;
  setName(value: string): void;

  hasUpdatedby(): boolean;
  clearUpdatedby(): void;
  getUpdatedby(): src_api_message_v1_common_pb.UserRef | undefined;
  setUpdatedby(value?: src_api_message_v1_common_pb.UserRef): void;

  getTrialid(): string;
  setTrialid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateContractSibRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateContractSibRequest): CreateContractSibRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateContractSibRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateContractSibRequest;
  static deserializeBinaryFromReader(message: CreateContractSibRequest, reader: jspb.BinaryReader): CreateContractSibRequest;
}

export namespace CreateContractSibRequest {
  export type AsObject = {
    contractid?: src_api_message_v1_common_pb.UUID.AsObject,
    mcibid?: src_api_message_v1_common_pb.UUID.AsObject,
    name: string,
    updatedby?: src_api_message_v1_common_pb.UserRef.AsObject,
    trialid: string,
  }
}

export class CreateContractSibResponse extends jspb.Message {
  hasNewsib(): boolean;
  clearNewsib(): void;
  getNewsib(): SibMeta | undefined;
  setNewsib(value?: SibMeta): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateContractSibResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateContractSibResponse): CreateContractSibResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateContractSibResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateContractSibResponse;
  static deserializeBinaryFromReader(message: CreateContractSibResponse, reader: jspb.BinaryReader): CreateContractSibResponse;
}

export namespace CreateContractSibResponse {
  export type AsObject = {
    newsib?: SibMeta.AsObject,
  }
}

export class GetAllSibsByContractRequest extends jspb.Message {
  hasContractid(): boolean;
  clearContractid(): void;
  getContractid(): src_api_message_v1_common_pb.UUID | undefined;
  setContractid(value?: src_api_message_v1_common_pb.UUID): void;

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

  hasOrderby(): boolean;
  clearOrderby(): void;
  getOrderby(): SibOrder | undefined;
  setOrderby(value?: SibOrder): void;

  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): SibFilter | undefined;
  setFilter(value?: SibFilter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllSibsByContractRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllSibsByContractRequest): GetAllSibsByContractRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllSibsByContractRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllSibsByContractRequest;
  static deserializeBinaryFromReader(message: GetAllSibsByContractRequest, reader: jspb.BinaryReader): GetAllSibsByContractRequest;
}

export namespace GetAllSibsByContractRequest {
  export type AsObject = {
    contractid?: src_api_message_v1_common_pb.UUID.AsObject,
    mcibid?: src_api_message_v1_common_pb.UUID.AsObject,
    trialid: string,
    page?: src_api_message_v1_common_pb.Pagination.AsObject,
    orderby?: SibOrder.AsObject,
    filter?: SibFilter.AsObject,
  }
}

export class GetAllSibsByContractResponse extends jspb.Message {
  hasSib(): boolean;
  clearSib(): void;
  getSib(): SibMeta | undefined;
  setSib(value?: SibMeta): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllSibsByContractResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllSibsByContractResponse): GetAllSibsByContractResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllSibsByContractResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllSibsByContractResponse;
  static deserializeBinaryFromReader(message: GetAllSibsByContractResponse, reader: jspb.BinaryReader): GetAllSibsByContractResponse;
}

export namespace GetAllSibsByContractResponse {
  export type AsObject = {
    sib?: SibMeta.AsObject,
  }
}

export interface OrderColumnsMap {
  STUDY_ORDER: 0;
  PAYEE_ORDER: 1;
  SITE_ORDER: 2;
  NAME_ORDER: 3;
  COUNTRY_ORDER: 4;
}

export const OrderColumns: OrderColumnsMap;

export interface FilterColumnsMap {
  NO_FILTER: 0;
  SITE_NAME_FILTER: 1;
  PAYEE_NAME_FILTER: 2;
  TRIAL_ALIAS_FILTER: 3;
  USERNAME_FILTER: 4;
  NAME_FILTER: 5;
}

export const FilterColumns: FilterColumnsMap;

