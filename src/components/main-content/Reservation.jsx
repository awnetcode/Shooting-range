import './styles/reservation.css';

import { useState } from 'react';

import ReservationForm from './Reservation-form';
import ReservationCalendar from './Reservation-calendar';

const Reservation = () =>{

    const [isActive, setActive] = useState('book');
    const [buttonActive, setButtonActive] = useState(false);
    let content;

    switch(isActive){
        case 'book':
            content = <ReservationForm />
            break;
        case 'check':
            content = <ReservationCalendar />
    }

    return(
        <>
        <div className="reservation-nav">
            <span  
            onClick={() => {setActive('book'), setButtonActive(true)}}
            className={buttonActive == true ? "nav-button" : "nav-button-active"}
                >Zarezerwuj</span>
            <span className="nav-button" onClick={
                () => {setActive('check'), setButtonActive(true)}
                }>Zobacz</span>
        </div>
        <div className="form-area">
            {content}     
        </div>
        </>
    )
}

export default Reservation;