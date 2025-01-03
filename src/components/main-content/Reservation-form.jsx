
const ReservationForm = () =>{

    return(
        <>
            <h1>Rezerwacja:</h1>
            <p className='reservation-info'>
                Aby zarezerwować termin wypełnij ten krótki formularz. Dotyczy tylko osób z własną bronią i amunicją. Pamiętaj, aby przynajmniej jedna osoba z Waszej grupy miała uprawnienia prowadzącego strzelanie. Rezerwacja torów pomaga nam w utrzymaniu komfortu użytkowników i bezpieczeństwa strzelań.
            </p>
            <form className="application-form" action="./Form-action.jsx">
            <label htmlFor="date">Wybierz datę:</label>
            <input name='date' className='date-select' type="date" />
            <label htmlFor="name">Imię:</label>
            <input type="text" name='name' className='text-input'/>
            <label htmlFor="license">Nr Prowadzącego Strzelanie:</label>
            <input type="text" name='license' className='text-input'/>
            <label htmlFor="phone">Telefon:</label>
            <input type="text" name='phone' className='text-input'/>
            </form>
            <button className='form-button' type='submit'>Zgłoś na Policję!</button> 
        </>
    )
}

export default ReservationForm;