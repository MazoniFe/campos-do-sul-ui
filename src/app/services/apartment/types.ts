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
}

export interface IApartmentMinimal {
    id: number;
    number: number;
    garage: IGarage;
    owner: IUser;
    tower: ITower;
}


export interface IApartmentResponseMetaData extends ResponseMetadata {
    content: IApartment[];
}