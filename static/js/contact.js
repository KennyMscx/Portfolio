// Your birthdate
const birthdate = new Date('2003-02-18');

// Get the current date
const currentDate = new Date();

// Calculate the difference in years
let age = currentDate.getFullYear() - birthdate.getFullYear();
const m = currentDate.getMonth() - birthdate.getMonth();

// If the current month is before the birth month, or if it's the birth month but the current day is before the birth day, subtract a year from the age
if (m < 0 || (m === 0 && currentDate.getDate() < birthdate.getDate())) {
    age--;
}

// Set the age in the HTML
document.getElementById('age').textContent = age;
