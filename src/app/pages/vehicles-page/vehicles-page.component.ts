import { Component } from '@angular/core';
import { StatusCardComponent } from '../../components/simple-status-card/simple-status-card.component';

@Component({
  selector: 'app-vehicles-page',
  imports: [StatusCardComponent],
  templateUrl: './vehicles-page.component.html',
  styleUrl: './vehicles-page.component.css'
})
export class VehiclesPageComponent {
vehicles = [
  { id: 1, licensePlate: 'BCX3D73', owner: 'Felipe Mazoni', type: 'MOTORCYCLE', model: 'BMW G 310 GS', color: 'PRETA', apartment: 101, garage: 25 },
  { id: 2, licensePlate: 'IIQ9651', owner: 'Itamar Leandro', type: 'CAR', model: 'Honda Civic', color: 'PRATA', apartment: 105, garage: 12 },
  { id: 3, licensePlate: 'GYZ9F22', owner: 'Amanda Costa', type: 'CAR', model: 'Toyota Corolla', color: 'BRANCO', apartment: 202, garage: 8 },
  { id: 4, licensePlate: 'KLP8E87', owner: 'Bruno Lima', type: 'MOTORCYCLE', model: 'Yamaha MT-07', color: 'AZUL', apartment: 203, garage: 30 },
  { id: 5, licensePlate: 'MNO2B34', owner: 'Carla Souza', type: 'CAR', model: 'Chevrolet Onix', color: 'VERMELHO', apartment: 110, garage: 14 },
  { id: 6, licensePlate: 'TRF3D76', owner: 'Diego Martins', type: 'MOTORCYCLE', model: 'Kawasaki Ninja 400', color: 'VERDE', apartment: 304, garage: 31 },
  { id: 7, licensePlate: 'QWE9Z88', owner: 'Elisa Rocha', type: 'CAR', model: 'Volkswagen T-Cross', color: 'CINZA', apartment: 404, garage: 10 },
  { id: 8, licensePlate: 'XYP7F90', owner: 'Fábio Torres', type: 'MOTORCYCLE', model: 'Honda CB 500X', color: 'PRETA', apartment: 305, garage: 27 },
  { id: 9, licensePlate: 'JKL5H67', owner: 'Gustavo Almeida', type: 'CAR', model: 'Hyundai HB20', color: 'AZUL', apartment: 401, garage: 5 },
  { id: 10, licensePlate: 'ASD1C12', owner: 'Helena Dias', type: 'MOTORCYCLE', model: 'Suzuki GSX-S750', color: 'BRANCA', apartment: 104, garage: 18 },
  { id: 11, licensePlate: 'ZXC3D92', owner: 'Igor Nunes', type: 'CAR', model: 'Renault Kwid', color: 'LARANJA', apartment: 106, garage: 6 },
  { id: 12, licensePlate: 'VBN8M45', owner: 'Juliana Castro', type: 'MOTORCYCLE', model: 'Harley-Davidson Iron 883', color: 'PRETA', apartment: 501, garage: 32 },
  { id: 13, licensePlate: 'POI4L33', owner: 'Kleber Moraes', type: 'CAR', model: 'Fiat Argo', color: 'VERDE', apartment: 302, garage: 16 },
  { id: 14, licensePlate: 'WER7U21', owner: 'Laura Barros', type: 'MOTORCYCLE', model: 'Ducati Monster 797', color: 'VERMELHA', apartment: 306, garage: 33 },
  { id: 15, licensePlate: 'RTY6P99', owner: 'Marcos Vieira', type: 'CAR', model: 'Peugeot 208', color: 'AMARELO', apartment: 103, garage: 11 },
  { id: 16, licensePlate: 'BNM4X12', owner: 'Nathalia Pires', type: 'MOTORCYCLE', model: 'Honda XRE 300', color: 'CINZA', apartment: 204, garage: 26 },
  { id: 17, licensePlate: 'HJK8T43', owner: 'Otávio Cunha', type: 'CAR', model: 'Nissan Kicks', color: 'BRANCO', apartment: 402, garage: 7 },
  { id: 18, licensePlate: 'UYT3E65', owner: 'Patrícia Lima', type: 'MOTORCYCLE', model: 'Triumph Street Triple', color: 'AZUL', apartment: 205, garage: 34 },
  { id: 19, licensePlate: 'EDC1W11', owner: 'Rafael Gomes', type: 'CAR', model: 'Ford Ka', color: 'PRATA', apartment: 107, garage: 3 },
  { id: 20, licensePlate: 'LKO2J88', owner: 'Sofia Ribeiro', type: 'MOTORCYCLE', model: 'Haojue Chopper Road 150', color: 'PRETA', apartment: 207, garage: 29 }
];

}
