export default function Form(){
    return(
<form className="date" id="date" onsubmit="return false">
  <label htmlFor="day">DAY</label>
  <label htmlFor="month">MONTH</label>
  <label htmlFor="year">YEAR</label>
  <input type="number" id="day" name="day" placeholder="DD" min={1} max={31} required />
  <input type="number" id="month" name="month" placeholder="MM" min={1} max={12} required />
  <input type="number" id="year" name="year" placeholder="YYYY" min={1900} max={2022} required />
  <input type="submit" id="submit-age" />
</form>
    )
}