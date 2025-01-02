import { useState, useEffect } from 'react';

const ReservationCalendar = () => {
  const [daysInMonth, setDaysInMonth] = useState([]);
  const [startingDay, setStartingDay] = useState(0); // 0 - Monday, 1 - Tuesday, etc.

  useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth(); // 0 - January, 11 - December

    // Ustal liczbę dni w miesiącu
    const totalDays = new Date(year, month + 1, 0).getDate();

    // Ustal dzień tygodnia, w którym zaczyna się miesiąc
    const firstDay = new Date(year, month, 1).getDay(); // 0 - Sunday, 1 - Monday, etc.
    
    // Dopasowanie dnia tygodnia, aby zaczynało się od poniedziałku
    setStartingDay(firstDay === 0 ? 6 : firstDay - 1);

    // Wygeneruj tablicę dni w miesiącu
    const daysArray = [];
    for (let i = 1; i <= totalDays; i++) {
      daysArray.push(i);
    }

    setDaysInMonth(daysArray);
  }, []);

  return (
    <>
      <div className="calendar">
        <div className="calendar-header">
          <div className="day-of-week">Pn.</div>
          <div className="day-of-week">Wt.</div>
          <div className="day-of-week">Śr.</div>
          <div className="day-of-week">Czw.</div>
          <div className="day-of-week">Pt.</div>
          <div className="day-of-week">Sob.</div>
          <div className="day-of-week">Nie</div>
        </div>
        <div className="calendar-days">
          {/* Wstawienie pustych dni przed pierwszym dniem miesiąca */}
          {Array.from({ length: startingDay }).map((_, index) => (
            <div key={`empty-${index}`} className="calendar-day"></div>
          ))}

          {/* Wstawienie dni miesiąca */}
          {daysInMonth.map(day => (
            <div key={day} className="calendar-day">
              {day}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ReservationCalendar;
