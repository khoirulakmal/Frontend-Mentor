document.getElementById("date").addEventListener("change", function() {
    event.preventDefault();
    var day = document.getElementById("date").elements.namedItem("day").value;
    var month = document.getElementById("date").elements.namedItem("month").value;
    var year = document.getElementById("date").elements.namedItem("year").value;
    console.log(day);
    console.log(month);
    console.log(year);
    if (day != '' || month || '' || year != ''){
        document.getElementById('submit-age').click();
    }
    var result = `${year}-${month}-${day}`
    console.log(result);  
    var date_result = parseDateString(result); 
    var age = calculateAge(date_result);
    console.log(typeof date_result);
    if (typeof age === 'object' && age !== null) {
      // Get the HTML elements using their ids
      var yearsElement = document.getElementById("years");
      var monthsElement = document.getElementById("months");
      var daysElement = document.getElementById("days");

      // Example values to replace the placeholders
      var years = age.years;
      var months = age.months;
      var days = age.days;

      // Modify the content of the elements with actual values
      animateNumberChange(yearsElement, years); // Animate years to 25
      animateNumberChange(monthsElement, months); // Animate months to 8
      animateNumberChange(daysElement, days); // Animate days to 16
    } else {
      console.log(age);
      alert(age);
    }
    
  }, false);

//   get number 
//   convert number to date Format
//   compare date to now 
//   output the age 


