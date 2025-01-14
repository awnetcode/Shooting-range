import React from "react";

class ReservationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          date: '',
          name: '',
          license: '',
          phone: ''
        };
    }

    handleInputChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }

      saveToServer = async () => {
        try {
          const response = await fetch('http://localhost:5000/save', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
          });
    
          if (response.ok) {
            alert('Zgłoszenie zostało zarejestrowane!');
          } else {
            alert('Coś poszło nie tak. Spróbuj ponownie później.');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('Na tę chwilę mamy problem techniczny i rejestracja jest niemożliwa. Zawsze możesz zadzwonić');
        }
      }

      render(){
        return(
            <>
                <h1>Rezerwacja:</h1>
                <p className='reservation-info'>
                    Aby zarezerwować termin wypełnij ten krótki formularz. Dotyczy tylko osób z własną bronią i amunicją. Pamiętaj, aby przynajmniej jedna osoba z Waszej grupy miała uprawnienia prowadzącego strzelanie. Rezerwacja torów pomaga nam w utrzymaniu komfortu użytkowników i bezpieczeństwa strzelań.
                </p>
                <form className="application-form">
                <label htmlFor="date">Wybierz datę:</label>
                <input 
                name='date' 
                className='date-select' 
                type="date" 
                onChange={this.handleInputChange}
                />
                <label htmlFor="name">Imię:</label>
                <input 
                type="text" 
                name='name' 
                className='text-input'
                onChange={this.handleInputChange}
                />
                <label htmlFor="license">Nr Prowadzącego Strzelanie:</label>
                <input 
                type="text" 
                name='license' 
                className='text-input'
                onChange={this.handleInputChange}
                />
                <label htmlFor="phone">Telefon:</label>
                <input 
                type="text" 
                name='phone' 
                className='text-input'
                onChange={this.handleInputChange}
                />
                </form>
                <button className='form-button' type='submit' onClick={this.saveToServer}>Zgłoś na Policję!</button> 
            </>
        )
      }
}

export default ReservationForm;