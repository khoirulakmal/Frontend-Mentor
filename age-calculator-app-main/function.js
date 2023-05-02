function parseDateString(dateString) {
    // Function to check if number adheres YYYY-MM-DD format with regular expression
    // Regular expression pattern for "YYYY-MM-DD" format
    const pattern = /^\d{4}-\d{1,2}-\d{1,2}$/;

    // Test the input string against the pattern
    if (pattern.test(dateString)) {
      return dateString;
    } else {
      return "Invalid Date";
    }
  }


  function calculateAge(birthdate) {
    if (typeof birthdate !== 'string') {
      return "Invalid input. Birthdate must be a string in the format 'YYYY-MM-DD' or 'YYYY-MM-D'.";
    }
  
    const currentDate = new Date();
    const [year, month, day] = birthdate.split('-').map(Number);
    const birthdateObj = new Date(year, month - 1, day); // Subtract 1 from month to match JavaScript's month range (0-11)
  
    // Check if birthdate is a valid date
    if (isNaN(birthdateObj.getTime())) {
      return "Invalid birthdate. Please provide a valid date in the format 'YYYY-MM-DD' or 'YYYY-MM-D'.";
    }
  
    // Check if birthdate is in the future
    if (birthdateObj > currentDate) {
      return "Invalid birthdate. Birthdate cannot be in the future.";
    }
  
    // Check if month is more than 12
    if (month > 12) {
      return "Invalid birthdate. Month must be between 1 and 12.";
    }
  
    // Check if day is more than 31
    if (day > 31) {
      return "Invalid birthdate. Day must be between 1 and 31.";
    }

    // Check if day is more than the number of days in the given month
    const daysInCurrentMonth = daysInMonth(month - 1, year); // Subtract 1 from month to match JavaScript's month range (0-11)
    if (day > daysInCurrentMonth) {
        return "Invalid birthdate. Day must be between 1 and " + daysInCurrentMonth + " for the given month.";
    }
  
    // Check if year is less than 1900 or in the future
    const currentYear = currentDate.getFullYear();
    if (year < 1900 || year > currentYear) {
      return "Invalid birthdate. Year must be between 1900 and the current year.";
    }
  
    // Calculate the age in years
    const ageYears = currentDate.getFullYear() - birthdateObj.getFullYear();
  
    // Calculate the age in months
    let ageMonths = currentDate.getMonth() - birthdateObj.getMonth();
    if (ageMonths < 0 || (ageMonths === 0 && currentDate.getDate() < birthdateObj.getDate())) {
      // If the current month is earlier than the birthdate month,
      // or if the months are the same but the current day is earlier than the birthdate day,
      // subtract 1 from the age in months
      ageMonths += 12;
    }
  
    // Calculate the age in days
    let ageDays = currentDate.getDate() - birthdateObj.getDate();
    if (ageDays < 0) {
      // If the current day is earlier than the birthdate day,
      // subtract 1 from the age in days
      ageDays += daysInMonth(currentDate.getMonth(), currentDate.getFullYear());
      ageMonths--;
    }
  
    return {
      years: ageYears,
      months: ageMonths,
      days: ageDays
    };
  }
  
  // Helper function to check if a year is a leap year
  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }
  
  // Helper function to get the number of days in a month for a given year
  function daysInMonth(month, year) {
    const daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month === 1 && isLeapYear(year)) {
      return 29; // February in a leap year has 29 days
    } else {
      return daysPerMonth[month];
    }
  }
  
// Function to animate the number change
function animateNumberChange(element, newValue) {
    let oldValue = element.textContent.trim();
    
    // Detect initial value and set it to 0 if it's not a valid number
    if (oldValue === '--') {
      oldValue = '0';
    }
    
    oldValue = parseFloat(oldValue); // Parse as float
    const increment = Math.ceil((newValue - oldValue) / 120); // Increment for each frame of the animation
    const duration = 1000; // Duration of the animation in milliseconds
    let startTime = null; // Start time of the animation
  
    function updateNumber(timestamp) {
      if (!startTime) {
        startTime = timestamp; // Set the start time if it's not already set
      }
      const progress = (timestamp - startTime) / duration; // Calculate the progress of the animation
      const currentValue = Number(element.textContent.trim());
      if (progress < 1) {
        // Calculate the interpolated value based on the progress
        const interpolatedValue = Math.round(oldValue + (newValue - oldValue) * progress);
        element.textContent = String(interpolatedValue);
        requestAnimationFrame(updateNumber); // Call updateNumber again on the next frame
      } else {
        element.textContent = String(newValue);
      }
    }
  
    if (oldValue !== newValue) {
      requestAnimationFrame(updateNumber); // Start the animation only if the old and new values are different
    }
  }
  