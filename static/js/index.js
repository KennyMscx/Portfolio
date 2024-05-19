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

// Get the p element
const element = document.querySelector('#Infos p');

// Split the word into an array of letters, wrap each letter in a span, and join the array back into a string
const word = 'Lyon 1';
const highlightedWord = word.split('').map((letter, index) => `<span class="highlight" style="animation-delay: ${index * 0.2}s">${letter}</span>`).join('');

// Clear the p element
element.innerHTML = `<div id='beginning-sentence'>Hi, I'm Kenny.</div> A ${age} years old student in software engineering at the University of ${highlightedWord}.`;

// Calculate the total duration of the letter-highlight effect (in milliseconds)
const highlightDuration = word.length * 0.2 * 1000;

// Get the portfolio element
const portfolioElement = document.querySelector('#portfolio');

// Your portfolio title
const portfolioTitle = 'Here my Portfolio:';

// Create a new h1 element for the portfolio title
const titleElement = document.createElement('h1');
portfolioElement.appendChild(titleElement);

// Your projects
const projects = ['Project 1', 'Project 2', 'Project 3']; // Replace with your actual projects

// Delay the start of the typewriter effect until after the letter-highlight effect
setTimeout(() => {
    // Call the typewriter function for the portfolio title
    typewriter(portfolioTitle, titleElement);

    // Call the typewriter function for each project
    projects.forEach((project, index) => {
        // Create a new h2 element for the project title
        const projectElement = document.createElement('h2');
        portfolioElement.appendChild(projectElement);

        // Call the typewriter function for the project title
        setTimeout(() => {
            typewriter(project, projectElement);
        }, (portfolioTitle.length + index * project.length) * 100); // Adjust the start time as needed
    });
}, highlightDuration);

// Your typewriter function
function typewriter(text, element) {
    let i = 0;
    const intervalId = setInterval(() => {
        if (i < text.length) {
            // Remove the highlight class from the previous letter
            const previousLetter = element.querySelector('.highlight-typewriter');
            if (previousLetter) {
                previousLetter.classList.remove('highlight-typewriter');
            }

            // Add the new letter with the highlight class
            const letterElement = document.createElement('span');
            letterElement.textContent = text.charAt(i);
            if (text.charAt(i) !== '\n') {
                letterElement.classList.add('highlight-typewriter');
            }
            element.appendChild(letterElement);

            i++;
        } else {
            const previousLetter = element.querySelector('.highlight-typewriter');
            if (previousLetter) {
                previousLetter.classList.remove('highlight-typewriter');
            }
            clearInterval(intervalId);
        }
    }, 75); // Adjust the delay as needed
}