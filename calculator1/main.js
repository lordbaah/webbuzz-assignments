// selecting elements
const buttons = document.querySelectorAll('.btn');
const displayscreen = document.querySelector('.screen');
const clearbtn = document.querySelector('.clear-btn');
const equalbtn = document.querySelector('.equal-btn');
const percentagebtn = document.querySelector('.percentagebtn');

// initial number to display on screen
displayscreen.textContent = '0';

// adding eventlistener to buttons
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // storing display screen text in a variable
        let displaytext = button.value;
        console.log(displaytext);

        // Check if the current text on the screen is "0"
        if (displayscreen.textContent === '0') {
            displayscreen.textContent = displaytext; // Replace "0" with the new number
        } else{
            displayscreen.textContent += displaytext;
        }
    });
});

// adding eventlistener to clear screen and replace "0"
clearbtn.addEventListener('click', () => {
    displayscreen.textContent = '0';
});


// creating function to calculate
const calculate = () => {
    try {
        // Get the expression from the screen and evaluate it
        const expression = displayscreen.textContent;
        const result = eval(expression);

        // Display the result on the screen
        displayscreen.textContent = result;
    } catch (error) {
        const errorpop =  document.querySelector('.error-message');

        // error message if wrong format is entered
        errorpop.classList.add('active');
        setTimeout(() => {
            errorpop.classList.remove('active');
        }, 2000)
    }
}


// Event listener for percentage button
const calculatepercentage = () => {
    // Get the current number on the screen and calculate its percentage
    const number = parseFloat(displayscreen.textContent);
    const percentage = number / 100;

    // Display the percentage on the screen
    displayscreen.textContent = percentage;
};

// Event listener for calculate button
equalbtn.addEventListener('click', calculate);

// Event listener for percentage button
percentagebtn.addEventListener('click', calculatepercentage);