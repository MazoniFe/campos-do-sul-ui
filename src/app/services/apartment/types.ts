import { IGarage } from "../garage/types";
import { IPerson } from "../person/types";
import { ResponseMetadata } from "../rest-call/types";
import { ITower } from "../tower/types";
import { IUser } from "../user/types";

export interface IApartment {
    id: number;
    number: number;
    garage: IGarage;
    owner: IUser;
    residents: IPerson[];
    visitors: IPerson[];
    tower: ITower;
    status: IApartmentStatus;
}

export type IApartmentStatus = 'AVAILABLE' | 'RENTED' | 'OCCUPIED' | 'MAINTENANCE' | 'RESERVED' | '';

export interface IApartmentToList {
    id: number;
    towerNumber: number | null;
    number: number | null;
    garage_number: number | null;
    status: IApartmentStatus;
    owner_name: string;
}


export interface IApartmentMinimal {
    id: number;
    number: number;
    garage: IGarage;
    owner: IUser;
    status: IApartmentStatus;
    tower: ITower;
}


export interface IApartmentResponseMetaData extends ResponseMetadata {
    content: IApartment[];
}

export interface IApartmentToListResponseMetaData extends ResponseMetadata {
    content: IApartmentToList[];
}