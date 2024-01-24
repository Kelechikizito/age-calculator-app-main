const button = $('button');
const form = $('form');


const dayInput = $('#day');
const monthInput = $('#month');
const yearInput = $('#year');


const yearNumber = $('.year-number');
const monthNumber = $('.month-number');
const dayNumber = $('.day-number');


const dayErrorMsg = $('.day-error');
const monthErrorMsg = $('.month-error');
const yearErrorMsg = $('.year-error');


const dayLabel = $('label[for="day"]');
const monthLabel = $('label[for="month"]');
const yearLabel = $('label[for="year"]');


const data = new Date();


function validateDay() {
    const dayValue = dayInput.val();

    if (dayValue === '') {
        dayErrorMsg.css('display', 'inline-block');
        dayInput.addClass('invalid');
        dayErrorMsg.text('This field is required');
        dayLabel.css('color', 'hsl(0, 100%, 67%)');
    } else {
        if (isNaN(dayValue) || dayValue < 1 || dayValue > 31) {
            dayInput[0].validity.valid = false;
            dayErrorMsg.css('display', 'inline-block')
            dayErrorMsg.text('Must be a valid day');
            dayInput.addClass('invalid');
            dayLabel.css('color', 'hsl(0, 100%, 67%)');
        } else {
            dayInput[0].validity.valid = true;
            dayErrorMsg.css('display', 'none');
            dayInput.removeClass('invalid');
            dayLabel.css('color', 'rgb(113, 111, 111)');
        }
    }

}


function validateMonth() {
    const monthValue = monthInput.val();

    if (monthValue === '') {
        monthErrorMsg.css('display', 'inline-block');
        monthInput.addClass('invalid');
        monthErrorMsg.text('This field is required');
        monthLabel.css('color', 'hsl(0, 100%, 67%)');
    } else {
        if (monthValue > 12) {
            monthInput[0].validity.valid = false;
            monthErrorMsg.css('display', 'inline-block')
            monthErrorMsg.text('Must be a valid month');
            monthInput.addClass('invalid');
            monthLabel.css('color', 'hsl(0, 100%, 67%)');
        } else {
            monthInput[0].validity.valid = true;
            monthErrorMsg.css('display', 'none');
            monthInput.removeClass('invalid');
            monthLabel.css('color', 'rgb(113, 111, 111)');
         }
    }
}

function validateYear() {
    let isYearValid = yearInput[0].validity.valid;
    const yearValue = yearInput.val();

    if (yearValue === '') {
        yearErrorMsg.css('display', 'inline-block');
        yearInput.addClass('invalid');
        yearErrorMsg.text('This field is required');
        yearLabel.css('color', 'hsl(0, 100%, 67%)');
    } else {
        if (yearValue > data.getFullYear()) {
            yearInput[0].validity.valid = false;
            yearErrorMsg.css('display', 'inline-block')
            yearErrorMsg.text('Must be in the past');
            yearInput.addClass('invalid');
            yearLabel.css('color', 'hsl(0, 100%, 67%)');
        } else {
            yearInput[0].validity.valid = true;
            yearErrorMsg.css('display', 'none');
            yearInput.removeClass('invalid');
            yearLabel.css('color', 'rgb(113, 111, 111)');
        }
    }
}



function validateForm() {
    validateDay();
    validateMonth();
    validateYear();
}

button.click(function (e) { 

    if (!form[0].checkValidity()) {
        validateForm();
        e.preventDefault();
    }



    
});