import { useState } from "react";

export default function Form(){
  const [day, setDay] = useState('');

  function handleinput(e){
    setDay(e.target.value);
  }
    return(
<div className="date">
  <label htmlFor="day">DAY</label>
  <label htmlFor="month">MONTH</label>
  <label htmlFor="year">YEAR</label>
  <input type="number" id="day" name="day" placeholder="DD" min={1} max={31} required value={day} onChange={handleinput} />
  <input type="number" id="month" name="month" placeholder="MM" min={1} max={12} required />
  <input type="number" id="year" name="year" placeholder="YYYY" min={1900} max={2022} required />
  <p>{day}</p>
  <p></p>
  <p></p>
</div>
    )
}