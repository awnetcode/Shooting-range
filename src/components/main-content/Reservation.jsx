import './styles/reservation.css';

import { useState } from 'react';

import ReservationForm from './Reservation-form';
import ReservationCalendar from './Reservation-calendar';

const Reservation = () =>{

    const [isActive, setActive] = useState('book');
    const [buttonActive, setButtonActive] = useState(true);
    let content;

    switch(isActive){
        case 'book':
            content = <ReservationForm />
            break;
        case 'check':
            content = <ReservationCalendar />
            break;

        default: content = <ReservationForm />
        break;
    };

    return(
        <>
        <div className="reservation-nav">
            <span  
            onClick={() => {setActive('book'), setButtonActive(!buttonActive)}}
            className={buttonActive == true && isActive == 'book' ? "nav-button" : "nav-button-active"}
                >Zarezerwuj</span>
            <span
              onClick={() => {setActive('check'), setButtonActive(!buttonActive)}}
              className={buttonActive == true && isActive == 'check' ? "nav-button" : "nav-button-active"}
                >Zobacz</span>
        </div>
        <div className="form-area"> 
            {content}     
        </div>
        </>
    )
}

export default Reservation;