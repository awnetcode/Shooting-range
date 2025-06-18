import './styles/reservation.css';

import { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';

import ReservationForm from './Reservation-form';
import ReservationCalendar from './Reservation-calendar';

const Reservation = () =>{

    const[value, setValue] = useState(0)


    let content;

    function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

    const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  switch(value){
    case 0:
        content = <ReservationForm/>;
        break;
    case 1:
        content = <ReservationCalendar/>
        break;
  }

    return(
        <>
        <Box>
         <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
         sx={{
            mb:'30px',
            color:'white'
        }}>
          <Tab label="rezerwacja" {...a11yProps(0)} sx={{color:'inherit'}}/>
          <Tab label="zobacz" {...a11yProps(1)} sx={{color:'inherit'}}/>
        </Tabs>
        <div className="form-area"> 
            {content}     
        </div>
        </Box>
        </>
    )
}

export default Reservation;