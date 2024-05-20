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

const word = 'University of Lyon 1';
const highlightedWord = word.split('').map((letter, index) => {
    if (letter === ' ') {
        return ' '; // Preserve spaces as they are
    }
    return `<span class="highlight" style="animation-delay: ${index * 0.05}s">${letter}</span>`;
}).join('');

console.log(highlightedWord);


// Clear the p element
element.innerHTML = `<div id='beginning-sentence'>Hi, I'm Kenny.</div> A ${age} years old student in software engineering at the ${highlightedWord}.`;

// Calculate the total duration of the letter-highlight effect (in milliseconds)
const highlightDuration = word.length *  0.05 * 1000;

// Get the portfolio element
const portfolioElement = document.querySelector('#portfolio');

// Your portfolio title
const portfolioTitle = 'HERE MY PORTFOLIO :';

// Create a new h1 element for the portfolio title
const titleElement = document.createElement('h1');
portfolioElement.appendChild(titleElement);

// Your projects
const projects = [
    {
        name: '🇩🇪 🩻  Injuries Reporting Website',
        subTitle: 'April 2024 -> IN PROGRESS / Heilbronn GERMANY',
        description: 'A website that allows athletes to report their injuries during sports activities, in accordance with the recommendations of the Olympic Committee and GDPR, for research purposes and the needs of sports teams. ',
        url: '/project/injuries.html'
    },
    {
        name: '🏴󠁧󠁢󠁳󠁣󠁴󠁿󠁧󠁢󠁳󠁣󠁴🤖󠁿 Natural Language AI',
        subTitle: 'April 2023 -> June 2023 / Aberdeen SCOTLAND',
        description: 'An AI bot capable of having a natural conversation with a human being, thanks to pre-built models that have\n' +
            'been then fine-tuned and trained on custom datasets. All of that in Robert Gordon University’s research lab in Scotland.',
        url: '/project/AI.html'
    },
    {
        name: '󠁿👾🛜 Online Board Game',
        subTitle: 'February 2023 -> April 2023 / Bourg-en-Bresse FRANCE',
        description: 'As a team we programmed the \'Qwixx\' board game and developed an online playable version, featuring multiple rooms, support for as many players as desired, and a very intuitive user interface',
        url: '/project/qwixx.html'
    }
]

// Delay the start of the typewriter effect until after the letter-highlight effect
setTimeout(() => {
    // Call the typewriter function for the portfolio title
    typewriter(portfolioTitle, titleElement);

    // Call the typewriter function for each project
    projects.forEach((project, index) => {
        // Create a new div element for the project
        const projectElement = document.createElement('div');
        portfolioElement.appendChild(projectElement);

        // Create a new h2 element for the project title
        const titleElement = document.createElement('h2');

        // Create a new a element for the project title link
        const titleLink = document.createElement('a');
        titleLink.href = project.url; // Set the href attribute to the project's URL
        titleLink.textContent = project.name;
        titleLink.classList.add('project-title-link'); // Add a class for styling
        titleElement.appendChild(titleLink); // Append the link to the h2 element

        projectElement.appendChild(titleElement);

        // Create a new h3 element for the project sub-title
        const subTitleElement = document.createElement('h3');
        subTitleElement.textContent = project.subTitle;
        projectElement.appendChild(subTitleElement);

        // Create a new p element for the project description
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = project.description;
        projectElement.appendChild(descriptionElement);
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