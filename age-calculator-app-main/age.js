document.getElementById("date").addEventListener("change", function() { // Listen for changes to the "date" input field
  event.preventDefault(); // Prevent the default behavior of submitting the form and reloading the page
  var day = document.getElementById("date").elements.namedItem("day").value; // Get the value of the "day" input field
  var month = document.getElementById("date").elements.namedItem("month").value; // Get the value of the "month" input field
  var year = document.getElementById("date").elements.namedItem("year").value; // Get the value of the "year" input field
  console.log(day); // Log the "day" value to the console
  console.log(month); // Log the "month" value to the console
  console.log(year); // Log the "year" value to the console
  if (day != '' || month || '' || year != ''){ // Check if any of the input fields are empty
      document.getElementById('submit-age').click(); // Click the "submit-age" button if any input fields are not empty
  }
  var result = `${year}-${month}-${day}` // Create a date string in the format "YYYY-MM-DD"
  console.log(result); // Log the date string to the console
  var date_result = parseDateString(result); // Parse the date string and create a Date object
  var age = calculateAge(date_result); // Calculate the age based on the parsed date

  console.log(typeof date_result); // Log the type of the date_result variable to the console
  if (typeof age === 'object' && age !== null) { // Check if the age is an object and not null
    // Get the HTML elements using their ids
    var yearsElement = document.getElementById("years");
    var monthsElement = document.getElementById("months");
    var daysElement = document.getElementById("days");

    // Example values to replace the placeholders
    var years = age.years;
    var months = age.months;
    var days = age.days;

    // Modify the content of the elements with actual values
    animateNumberChange(yearsElement, years); // Animate the "years" element to the calculated age in years
    animateNumberChange(monthsElement, months); // Animate the "months" element to the calculated age in months
    animateNumberChange(daysElement, days); // Animate the "days" element to the calculated age in days
  } else {
    console.log(age); // Log the age to the console
    alert(age); // Show an alert with the age if it is not an object or is null
  }
  
}, false);