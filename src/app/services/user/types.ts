import { IInsertPerson, IPerson } from "../person/types";
import { IProfile } from "../profile/types";
import { ResponseMetadata } from "../rest-call/types";

export interface IInsertUser {
    person: IInsertPerson;
    password: string;
    profileId: number;
}

export interface IUpdateUser {
    id: number;
    person: IInsertPerson;
    password: string;
    profileId: number;
}

export interface IUser {
    id: number;
    person: IPerson;
    profile: IProfile;
}

export interface IUserResponseMetaData extends ResponseMetadata{
    content: IUser[];
}