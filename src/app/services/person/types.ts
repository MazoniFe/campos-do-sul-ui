import { IApartmentMinimal } from "../apartment/types";
import { ResponseMetadata } from "../rest-call/types";

export interface IInsertPerson {
    cpf: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    birthDate: string;
}

export interface IUpdatePerson {
    id: number;
    cpf: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    birthDate: string;
}

export interface IPerson {
    id: number;
    cpf: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    birthDate: string;
    createdAt: string;
}

export interface IPersonDetailed {
    id: number;
    cpf: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    birthDate: string;
    createdAt: string;
    apartmentAsResident: IApartmentMinimal[];
    apartmentAsVisitor: IApartmentMinimal[];
}


export interface IPersonResponseMetaData extends ResponseMetadata {
    content: IPerson[];
}

export interface IPersonDetailedResponseMetaData extends ResponseMetadata {
    content: IPersonDetailed[];
}