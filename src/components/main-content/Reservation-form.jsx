import React from "react";
import { Button, Box, TextField } from "@mui/material";

class ReservationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          date: '',
          name: '',
          license: '',
          phone: '',
        };
        this.commonTextFieldStyles = {
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'silver', // kolor ramki
      cursor:'pointer'
    },
    '&:hover fieldset': {
      borderColor: 'dimgray', // przy najechaniu
    },
    '&.Mui-focused fieldset': {
      borderColor: '#247bd2', // przy focusie (kliknięciu)
    },
  },
  '& .MuiInputLabel-root': {
    color: 'silver', // kolor labela
  },
  '& .MuiInputBase-input': {
    color: 'silver', // kolor tekstu w środku
    cursor: 'pointer'
  },
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
                <Box>
                <p className='reservation-info'>
                    Aby zarezerwować termin wypełnij ten krótki formularz. Dotyczy tylko osób z własną bronią i amunicją. Pamiętaj, aby przynajmniej jedna osoba z Waszej grupy miała uprawnienia prowadzącego strzelanie. Rezerwacja torów pomaga nam w utrzymaniu komfortu użytkowników i bezpieczeństwa strzelań.
                </p>
                </Box>
                <form className="application-form">
                <label htmlFor="date">Wybierz datę:</label>
                <input 
                name='date' 
                className='date-select' 
                type="date" 
                onChange={this.handleInputChange}
                />
                <TextField sx={this.commonTextFieldStyles} id="outlined-basic" label="Imię" variant="outlined" onChange={this.handleInputChange}/>
                <TextField sx={this.commonTextFieldStyles} id="outlined-basic" label="Telefon" variant="outlined" onChange={this.handleInputChange}/>
                <TextField sx={this.commonTextFieldStyles} id="outlined-basic" label="Nr Prowadzącego strzelanie" variant="outlined" onChange={this.handleInputChange}/>
                <TextField sx={this.commonTextFieldStyles} id="outlined-basic" label="Ilość osób" variant="outlined" onChange={this.handleInputChange}/>
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
                <Button variant="outlined" onClick={this.saveToServer}>Zgłoś</Button>
            </>
        )
      }
}

export default ReservationForm;