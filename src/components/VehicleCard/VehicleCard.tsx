import { Box, Button, Card, CardActions, CardContent, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { VehicleObject } from '../../types/types';

const parameterStyle = { m: '5px 10px' };
const changeableParameterStyle = { m: '0px 10px', padding: '5px 0' };
const inputStyle = { width: '100%', paddingRight: '10px' };
const buttonStyle = { m: '10px 5px', mt: 'auto' };

enum ChangeableKeys {
  name = 'name',
  model = 'model',
  price = 'price',
}

interface IVehicleCard {
  id: number;
  name: string;
  model: string;
  year: number;
  color: string;
  price: number;
  latitude: number;
  longitude: number;
  index: number;
  vehiclesList: VehicleObject[];
  setVehiclesList: (value: React.SetStateAction<VehicleObject[]>) => void;
}

function VehicleCard({
  color,
  id,
  latitude,
  longitude,
  model,
  name,
  price,
  year,
  index,
  vehiclesList,
  setVehiclesList,
}: IVehicleCard) {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = () => {
    isEdit ? setIsEdit(false) : setIsEdit(true);
  };

  const onChangeValue = (key: keyof typeof ChangeableKeys, value: string) => {
    const oldValue = vehiclesList[index];
    const newValue = { ...oldValue, [key]: value };
    const newArr = [...vehiclesList.slice(0, index), newValue, ...vehiclesList.slice(index + 1)];

    setVehiclesList(newArr);
    console.log(newArr);
  };

  const onClickDelete = (index: number) => {
    const newArr = [...vehiclesList];
    newArr.splice(index, 1);
    setVehiclesList(newArr);
  };

  return (
    <Card
      sx={{
        height: '346px',
        minWidth: '290px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        m: '15px auto',
      }}
    >
      <CardContent>
        <Typography sx={parameterStyle}>id: {id}</Typography>
        {isEdit ? (
          <Box sx={{ maxWidth: '250px' }}>
            <Box sx={{ display: 'flex' }}>
              <Typography sx={changeableParameterStyle}>name:</Typography>
              <TextField
                sx={inputStyle}
                variant="standard"
                value={name}
                onChange={(e) => onChangeValue(ChangeableKeys.name, e.target.value)}
              />
            </Box>
            <Box sx={{ display: 'flex' }}>
              <Typography sx={changeableParameterStyle}>model:</Typography>
              <TextField
                sx={inputStyle}
                variant="standard"
                value={model}
                onChange={(e) => onChangeValue(ChangeableKeys.model, e.target.value)}
              />
            </Box>
            <Box sx={{ display: 'flex' }}>
              <Typography sx={changeableParameterStyle}>price:</Typography>
              <TextField
                sx={inputStyle}
                variant="standard"
                value={price}
                onChange={(e) => onChangeValue(ChangeableKeys.price, e.target.value)}
              />
            </Box>
          </Box>
        ) : (
          <Box>
            <Typography sx={changeableParameterStyle}>name: {name}</Typography>
            <Typography sx={changeableParameterStyle}>model: {model}</Typography>
            <Typography sx={changeableParameterStyle}>price: {price}</Typography>
          </Box>
        )}
        <Typography sx={parameterStyle}>year: {year}</Typography>
        <Typography sx={parameterStyle}>color: {color}</Typography>
        <Typography sx={parameterStyle}>latitude: {latitude}</Typography>
        <Typography sx={parameterStyle}>longitude: {longitude}</Typography>
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0px 20px',
        }}
      >
        <Button variant="contained" size="medium" sx={buttonStyle} onClick={() => onClickEdit()}>
          Edit
        </Button>
        <Button variant="outlined" size="medium" sx={buttonStyle} onClick={() => onClickDelete(index)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default VehicleCard;
