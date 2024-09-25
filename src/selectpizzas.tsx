import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface SelectPizzasProps {
  setPizzas: (value: string) => void;
  setCantidadPizzas: (value: string) => void;
}

const SelectPizzas: React.FC<SelectPizzasProps> = ({ setPizzas, setCantidadPizzas }) => {
  const [pizzas, setPizzasState] = React.useState('');
  const [cantidadpizzas, setCantidadPizzasState] = React.useState('');

  const handlePizzasChange = (event: SelectChangeEvent) => {
    const value = event.target.value;
    setPizzasState(value);
    setPizzas(value); // Pasar el valor seleccionado a App
  };

  const handleCantidadPizzasChange = (event: SelectChangeEvent) => {
    const value = event.target.value;
    setCantidadPizzasState(value);
    setCantidadPizzas(value); // Pasar el valor seleccionado a App
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120, borderColor: 'white' }}>
        <InputLabel id="demo-simple-select-helper-label">Pizzas</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={pizzas}
          label="Pizzas"
          onChange={handlePizzasChange}
        >
          <MenuItem value="Muzarella">Muzarella</MenuItem>
          <MenuItem value="Argentina">Argentina</MenuItem>
          <MenuItem value="Mexicana">Mexicana</MenuItem>
          <MenuItem value="Calabresa">Calabresa</MenuItem>
        
        </Select>
        
        <FormHelperText>Selecciona la variedad de pizza</FormHelperText>
      
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={cantidadpizzas}
          onChange={handleCantidadPizzasChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value=""><em>1/2</em></MenuItem>
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

export default SelectPizzas;