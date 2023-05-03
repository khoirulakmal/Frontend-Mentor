import { useState } from "react";

export default function Form(){
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [errorDay, setErrorDay] = useState('');
  const [errorMonth, setErrorMonth] = useState('');
  const [errorYear, setErrorYear] = useState('');


  const birthday = day + month + year

  function handleInputDay(e){
    setDay(e.target.value);
  }
  function handleInputMonth(e){
    setMonth(e.target.value);
  }
  function handleInputYear(e){
    setYear(e.target.value);
  }
  function handleSubmit(e){
    e.preventDefault();
    setErrorDay(birthday)
    setErrorMonth(birthday)
    setErrorYear(birthday)
  }
    return(
<form className="date" onSubmit={handleSubmit}>
  <label htmlFor="day">DAY</label>
  <label htmlFor="month">MONTH</label>
  <label htmlFor="year">YEAR</label>
  <input type="number" id="day" name="day" placeholder="DD" min={1} max={31} required value={day} onChange={handleInputDay} />
  <input type="number" id="month" name="month" placeholder="MM" min={1} max={12} required value={month} onChange={handleInputMonth} />
  <input type="number" id="year" name="year" placeholder="YYYY" min={1900} max={2022} required value={year} onChange={handleInputYear} />
  <input type="submit" id="formSubmit"></input>
  <p>{errorDay}</p>
  <p>{errorMonth}</p>
  <p>{errorYear}</p>
</form>
    )
}