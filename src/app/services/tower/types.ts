import { ResponseMetadata } from "../rest-call/types";

export interface ITower {
  id: number;
  number: number;
}

export interface ITowerResponseMetaData extends ResponseMetadata{
    content: ITower[];
}