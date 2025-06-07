import { ResponseMetadata } from "../rest-call/types";
import { IVehicle } from "../vehicle/types";

export interface IInsertGarage {
    cpf: string;
    firstName: string;
    lastName: string;
    email: string;
    birthDate: string;
}

export interface IUpdateGarage {
    id: number;
    cpf: string;
    firstName: string;
    lastName: string;
    email: string;
    birthDate: string;
}

export interface IGarage {
    id: number;
    number: number;
    vehicles: IVehicle[];
}

export interface IGarageWithoutVehicle {
    id: number;
    number: number;
}

export interface IGarageResponseMetaData extends ResponseMetadata{
    content: IGarage[];
}