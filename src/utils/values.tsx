import { ColumnProps } from 'primereact/column';
import dayjs from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/es';
dayjs.extend(LocalizedFormat);
import React from 'react';

export const parkingTimes = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8];

// Media hora: Gratis
// Una hora: 50 pesos
// Una hora y media: 100 pesos.
// Dos horas: 150 pesos.
// Dos horas y media: 200 pesos.
// Tres horas: 250 pesos.
// Tres horas y media: 300 pesos.
// Cuatro horas: 1000 pesos.
// Cinco horas: 2000 pesos.
// Seis horas: 3000 pesos.
// Siete horas: 4000 pesos.
// Ocho horas: 5000 pesos (Se saca el vehículo)
export const parkingFees = {
  '0.5': 0,
  '1': 50,
  '1.5': 100,
  '2': 150,
  '2.5': 200,
  '3': 250,
  '3.5': 300,
  '4': 1000,
  '5': 2000,
  '6': 3000,
  '7': 4000,
  '8': 5000
};

export const columns: ColumnProps[] = [
  { field: 'id', header: 'ID' },
  {
    field: 'parkedAt',
    header: 'Parked At',
    body: (car) => <> {dayjs(car.parkedAt).format('l LT')}</>
  },
  {
    field: 'leavingAt',
    header: 'Leaving At',
    body: (car) => <> {dayjs(car.leavingAt).format('l LT')}</>
  },
  { field: 'impounded', header: 'Impounded', body: (car) => <>{car.impounded ? 'Yes' : 'No'}</> },
  {
    field: 'parkingFee',
    header: 'Parking Fee',
    body: (car) => (
      <>
        {car.parkingFee.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD'
        })}
      </>
    )
  }
];
