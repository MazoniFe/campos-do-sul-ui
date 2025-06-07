import { ResponseMetadata } from "../rest-call/types";


export interface IInsertProfile {
  name: string;
  features: number[];
}

export interface IUpdateProfile {
  id: number;
  name: string;
  features: number[];
}

export interface IProfile {
  id: number;
  name: string;
  features: number[];
  usersCount: number;
  color: string;
}

export interface IProfileResponseMetaData extends ResponseMetadata {
  content: IProfile[];
}