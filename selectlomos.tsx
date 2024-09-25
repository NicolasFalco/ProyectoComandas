import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface SelectLomosProps {
  setLomos: (value: string) => void;
  setCantidadLomos: (value: string) => void;
}

const SelectLomos: React.FC<SelectLomosProps> = ({ setLomos, setCantidadLomos }) => {
  const [lomos, setLomosState] = React.useState('');
  const [cantidadlomos, setCantidadLomosState] = React.useState('');

  const handleLomosChange = (event: SelectChangeEvent) => {
    const value = event.target.value;
    setLomosState(value);
    setLomos(value); // Pasar el valor seleccionado a App
  };

  const handleCantidadLomosChange = (event: SelectChangeEvent) => {
    const value = event.target.value;
    setCantidadLomosState(value);
    setCantidadLomos(value); // Pasar el valor seleccionado a App
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Lomos</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={lomos}
          label="Lomos"
          onChange={handleLomosChange}
        >
          
          <MenuItem value="Completo">Completo</MenuItem>
          <MenuItem value="Roma">Roma</MenuItem>
          <MenuItem value="Gran Roma">Gran Roma</MenuItem>
        </Select>
        <FormHelperText>Selecciona la variedad de lomos</FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={cantidadlomos}
          onChange={handleCantidadLomosChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value=""><em>0</em></MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
        </Select>
        <FormHelperText>Selecciona la cantidad</FormHelperText>
      </FormControl>
    </div>
  );
};

export default SelectLomos;