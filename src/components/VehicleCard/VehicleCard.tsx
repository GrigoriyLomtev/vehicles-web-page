import { Box, Card, CardContent, Typography, useTheme } from '@mui/material';
import React from 'react';
import { VehicleObject } from '../../types/types';

const parameterStyle = { m: '5px 10px' };

interface IVehicleCard {
  id: number;
  name: string;
  model: string;
  year: number;
  color: string;
  price: number;
  latitude: number;
  longitude: number;
}

function VehicleCard({ color, id, latitude, longitude, model, name, price, year }: IVehicleCard) {
  return (
    <Card
      sx={{
        height: '278px',
        // width: '280px',
        minWidth: '280px',
        display: 'flex',
        justifyContent: 'center',
        // flex: '1 1 0',
        // flexDirection: 'column',
        m: '15px auto',
      }}
    >
      <CardContent>
        <Typography sx={parameterStyle}>id: {id}</Typography>
        <Typography sx={parameterStyle}>name: {name}</Typography>
        <Typography sx={parameterStyle}>model: {model}</Typography>
        <Typography sx={parameterStyle}>price: {price}</Typography>
        <Typography sx={parameterStyle}>year: {year}</Typography>
        <Typography sx={parameterStyle}>color: {color}</Typography>
        <Typography sx={parameterStyle}>latitude: {latitude}</Typography>
        <Typography sx={parameterStyle}>longitude: {longitude}</Typography>
      </CardContent>
    </Card>
  );
}

export default VehicleCard;
