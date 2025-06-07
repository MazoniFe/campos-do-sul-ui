import { IGarageWithoutVehicle } from "../garage/types";
import { ResponseMetadata } from "../rest-call/types";

export enum IColor {
  BLACK,
  WHITE,
  SILVER,
  GRAY,
  RED,
  BLUE,
  GREEN,
  YELLOW,
  ORANGE,
  BROWN,
  GOLD,
  BEIGE,
  MAROON,
  NAVY,
  PURPLE,
  PINK,
  TURQUOISE
}

export enum IVehicleType {
    CAR,             // Carro
    MOTORCYCLE,      // Moto
    TRUCK,           // Caminhão
    BUS,             // Ônibus
    VAN,             // Van
    SUV,             // Utilitário esportivo
    PICKUP,          // Caminhonete
    BICYCLE,         // Bicicleta
    SCOOTER,         // Patinete ou motoneta
    TRACTOR,         // Trator (uso agrícola)
    ATV,             // Quadriciclo
    RV,              // Motorhome / Trailer
    TRAIN,           // Trem (em caso de sistema logístico)
    BOAT             // Barco (se incluir veículos aquáticos)
}

export interface IInsertVehicle {
    licensePlate: string;
    color: IColor;
    type: IVehicleType;
    garageIds: number[];
}

export interface IUpdateVehicle {
    id: number;
    licensePlate: string;
    color: IColor;
    type: IVehicleType;
    garageIds: number[];
}

export interface IVehicle {
    id: number;
    licensePlate: string;
    color: IColor;
    type: IVehicleType;
    garages: IGarageWithoutVehicle[];
}

export interface IVehicleResponseMetaData extends ResponseMetadata{
    content: IVehicle[];
}