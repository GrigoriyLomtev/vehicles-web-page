import React, { useEffect, useState } from 'react';
import VehicleCard from '../VehicleCard/VehicleCard';
import { Box, Button, useTheme } from '@mui/material';
import { grey } from '@mui/material/colors';
import { VehicleApiClient } from '../../clients/VehicleApiClient';
import { VehicleObject } from '../../types/types';

function VehiclesGrid() {
  const [vehiclesList, setVehiclesList] = useState<VehicleObject[]>([
    {
      id: 0,
      name: '',
      model: '',
      year: 0,
      color: '',
      price: 0,
      latitude: 0,
      longitude: 0,
    },
  ]);

  const [isFetch, setIsFetch] = useState(false);
  const [isSort, setIsSort] = useState(false);

  const sortOnYear = () => {
    console.log(vehiclesList);
    isSort ? setIsSort(false) : setIsSort(true);
    setVehiclesList(
      vehiclesList.sort(function (a, b) {
        return a.year - b.year;
      }),
    );
    console.log(vehiclesList);
  };

  const sortOnPrice = () => {
    console.log(vehiclesList);
    isSort ? setIsSort(false) : setIsSort(true);
    setVehiclesList(
      vehiclesList.sort(function (a, b) {
        return a.price - b.price;
      }),
    );
    console.log(vehiclesList);
  };

  useEffect(() => {
    const fetchMedia = async () => {
      const clientVehicles = new VehicleApiClient();
      const vehicles = await clientVehicles.getAllVehicles();
      setVehiclesList(vehicles);
      console.log('useeff, fetch');
    };
    if (!isFetch) {
      fetchMedia();
      setIsFetch(true);
    }
  }, [vehiclesList, setVehiclesList]);

  return (
    <Box sx={{ overflow: 'hidden', bgcolor: grey[300] }}>
      <Box sx={{ width: '350px', display: 'flex', justifyContent: 'space-between', margin: '20px auto 0' }}>
        <Button variant="contained" onClick={() => sortOnYear()}>
          sort on year
        </Button>
        <Button variant="contained" onClick={() => sortOnPrice()}>
          sort on price
        </Button>
      </Box>
      <Box
        sx={{
          width: `100vw`,
          minHeight: '100vh',
          padding: '40px 50px',
          bgcolor: grey[300],
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr ',
          '@media (max-width:1560px)': {
            gridTemplateColumns: '1fr 1fr 1fr ',
            padding: '20px 50px',
          },
        }}
      >
        {vehiclesList.map(({ color, id, latitude, longitude, model, name, price, year }) => (
          <VehicleCard
            key={id}
            id={id}
            name={name}
            model={model}
            year={year}
            color={color}
            price={price}
            latitude={latitude}
            longitude={longitude}
          />
        ))}
      </Box>
    </Box>
  );
}

export default VehiclesGrid;
