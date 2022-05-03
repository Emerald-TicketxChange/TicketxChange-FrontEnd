import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';
import { makeStyles } from '@material-ui/styles';
import { LabelImportant } from '@mui/icons-material';

export default function DirectionStack() {

const useStyles = makeStyles({
  button: {
    backgroundColor: '#2E3B55',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#2E3B55',
      color: '#fff',
  },
}})
    const [value, setValue] = React.useState(new Date('2022-05-03'));
     const classes = useStyles()
  return (
      
    <div>
        <br/>
      <Stack direction="row" spacing={2}>
        <TextField id="outlined-basic" label="From" variant="outlined" required/>
        <TextField id="outlined-basic" label="To" variant="outlined" required/>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
  <DatePicker
    label="Date of Travel"
    value={value}
    onChange={(newValue) => {
      setValue(newValue);
    }}
    renderInput={(params) => <TextField {...params} />}
  />
</LocalizationProvider>
        <Button className={classes.button} variant="contained" sx={{height:"35px"}}>Search Buses</Button>
      </Stack>
    </div>
  );
}
