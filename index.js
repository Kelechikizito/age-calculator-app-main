const button = $('button');
const form = $('form');
const inputs = $('input');
const labels = $('label');

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
yearInput.attr('max', data.getFullYear());


function validateDay() {
    const isDayValMissing = dayInput[0].validity.valueMissing;
    const isDayToolong = dayInput[0].validity.rangeOverflow;

    if (isDayValMissing) {
        dayErrorMsg.css('display', 'inline-block');
        dayInput.addClass('invalid');
        dayErrorMsg.text('This field is required');
        dayLabel.css('color', 'hsl(0, 100%, 67%)');
    } else {
        dayErrorMsg.css('display', 'none');
        dayInput.removeClass('invalid');
        dayLabel.css('color', 'rgb(113, 111, 111)');
        if (isDayToolong) {
            dayErrorMsg.css('display', 'inline-block')
            dayErrorMsg.text('Must be a valid day');
            dayInput.addClass('invalid');
            dayLabel.css('color', 'hsl(0, 100%, 67%)');
        } else {
            dayErrorMsg.css('display', 'none');
            dayInput.removeClass('invalid');
            dayLabel.css('color', 'rgb(113, 111, 111)');
        }
    }
    

}

function validateMonth() {
    const isMonthValMissing = monthInput[0].validity.valueMissing;
    const isMonthToolong = monthInput[0].validity.rangeOverflow;

    if (isMonthValMissing) {
        monthErrorMsg.css('display', 'inline-block');
        monthInput.addClass('invalid');
        monthErrorMsg.text('This field is required');
        monthLabel.css('color', 'hsl(0, 100%, 67%)');
    } else {
        monthErrorMsg.css('display', 'none');
        monthInput.removeClass('invalid');
        monthLabel.css('color', 'rgb(113, 111, 111)');
        if (isMonthToolong) {
            monthErrorMsg.css('display', 'inline-block')
            monthErrorMsg.text('Must be a valid month');
            monthInput.addClass('invalid');
            monthLabel.css('color', 'hsl(0, 100%, 67%)');
        } else {
            monthErrorMsg.css('display', 'none');
            monthInput.removeClass('invalid');
            monthLabel.css('color', 'rgb(113, 111, 111)');
        }
    }
}

function validateYear() {   
    const isYearValMissing = yearInput[0].validity.valueMissing;
    const isYearToolong = yearInput[0].validity.rangeOverflow;

    
    if (isYearValMissing) {
        yearErrorMsg.css('display', 'inline-block');
        yearInput.addClass('invalid');
        yearErrorMsg.text('This field is required');
        yearLabel.css('color', 'hsl(0, 100%, 67%)');
    } else {
        yearErrorMsg.css('display', 'none');
        yearInput.removeClass('invalid');
        yearLabel.css('color', 'rgb(113, 111, 111)');
        if (isYearToolong) {
            yearErrorMsg.css('display', 'inline-block')
            yearErrorMsg.text('Must be in the past');
            yearInput.addClass('invalid');
            yearLabel.css('color', 'hsl(0, 100%, 67%)');
        } else {
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

function isValidDate(year, month, day) {

    const date = new Date(year, month - 1, day);
    return (
      date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day
    );
}

function ageCalculator() {
    
}
  

button.click(function (e) { 

    if (!form[0].checkValidity()) {
        validateForm();
        e.preventDefault();
    } else {

        if (isValidDate(Number(yearInput.val()), Number(monthInput.val()), Number(dayInput.val())) === false) {
            dayErrorMsg.css('display', 'inline-block')
            dayErrorMsg.text('Must be a valid date');
            inputs.addClass('invalid');
            labels.css('color', 'hsl(0, 100%, 67%)');
            e.preventDefault();
        } else {
            console.log('valid');
            
        }

    }



    
});