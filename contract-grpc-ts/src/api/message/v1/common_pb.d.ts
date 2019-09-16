// package: trialblaze.api.contracts.message.v1
// file: src/api/message/v1/common.proto

import * as jspb from "google-protobuf";

export class UUID extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UUID.AsObject;
  static toObject(includeInstance: boolean, msg: UUID): UUID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UUID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UUID;
  static deserializeBinaryFromReader(message: UUID, reader: jspb.BinaryReader): UUID;
}

export namespace UUID {
  export type AsObject = {
    id: string,
  }
}

export class Pagination extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): void;

  getOffset(): number;
  setOffset(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Pagination.AsObject;
  static toObject(includeInstance: boolean, msg: Pagination): Pagination.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Pagination, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Pagination;
  static deserializeBinaryFromReader(message: Pagination, reader: jspb.BinaryReader): Pagination;
}

export namespace Pagination {
  export type AsObject = {
    limit: number,
    offset: number,
  }
}

export class UserRef extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  hasUserid(): boolean;
  clearUserid(): void;
  getUserid(): UUID | undefined;
  setUserid(value?: UUID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserRef.AsObject;
  static toObject(includeInstance: boolean, msg: UserRef): UserRef.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserRef;
  static deserializeBinaryFromReader(message: UserRef, reader: jspb.BinaryReader): UserRef;
}

export namespace UserRef {
  export type AsObject = {
    username: string,
    userid?: UUID.AsObject,
  }
}

export class StudyRef extends jspb.Message {
  getTrialid(): string;
  setTrialid(value: string): void;

  getTrialalias(): string;
  setTrialalias(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StudyRef.AsObject;
  static toObject(includeInstance: boolean, msg: StudyRef): StudyRef.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StudyRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StudyRef;
  static deserializeBinaryFromReader(message: StudyRef, reader: jspb.BinaryReader): StudyRef;
}

export namespace StudyRef {
  export type AsObject = {
    trialid: string,
    trialalias: string,
  }
}

export class CountryRef extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountryRef.AsObject;
  static toObject(includeInstance: boolean, msg: CountryRef): CountryRef.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CountryRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountryRef;
  static deserializeBinaryFromReader(message: CountryRef, reader: jspb.BinaryReader): CountryRef;
}

export namespace CountryRef {
  export type AsObject = {
    id: string,
    name: string,
  }
}

export class CurrencyRef extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurrencyRef.AsObject;
  static toObject(includeInstance: boolean, msg: CurrencyRef): CurrencyRef.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CurrencyRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurrencyRef;
  static deserializeBinaryFromReader(message: CurrencyRef, reader: jspb.BinaryReader): CurrencyRef;
}

export namespace CurrencyRef {
  export type AsObject = {
    id: string,
    name: string,
  }
}

export class WorkflowRef extends jspb.Message {
  hasObjectid(): boolean;
  clearObjectid(): void;
  getObjectid(): UUID | undefined;
  setObjectid(value?: UUID): void;

  hasWorkflowid(): boolean;
  clearWorkflowid(): void;
  getWorkflowid(): UUID | undefined;
  setWorkflowid(value?: UUID): void;

  getObjecttype(): ObjectTypeMap[keyof ObjectTypeMap];
  setObjecttype(value: ObjectTypeMap[keyof ObjectTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowRef.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowRef): WorkflowRef.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorkflowRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowRef;
  static deserializeBinaryFromReader(message: WorkflowRef, reader: jspb.BinaryReader): WorkflowRef;
}

export namespace WorkflowRef {
  export type AsObject = {
    objectid?: UUID.AsObject,
    workflowid?: UUID.AsObject,
    objecttype: ObjectTypeMap[keyof ObjectTypeMap],
  }
}

export interface FilterOperationMap {
  LIKE: 0;
  EQUAL: 1;
}

export const FilterOperation: FilterOperationMap;

export interface StatusMap {
  EDITING: 0;
  IN_REVIEW: 1;
  APPROVED: 2;
  REJECTED: 3;
  CANCELED: 4;
  SIGNED: 5;
  PUBLISHED: 6;
}

export const Status: StatusMap;

export interface ObjectTypeMap {
  MCIB: 0;
  SIB: 1;
  CONTRACT: 2;
}

export const ObjectType: ObjectTypeMap;

