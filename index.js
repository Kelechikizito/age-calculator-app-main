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

function updateDateDisplay(el, num) {
    let step = 50;
    num > 25 && (step = 35);
    num > 50 && (step = 25);
    num > 75 && (step = 20);
    num > 100 && (step = 10);
    num > 200 && (step = 1);

    let n = 0;
    if (num === 0) {
        el.text(n);
    } else {
        let interval = setInterval(() => {
            n = n + 1;
            if (n === num) {
                clearInterval(interval);
            }
            el.text(n);
        }, step);
    }
}

function futureDate(ageYearr, ageMonthh, ageDayy) {
    let x = Math.sign(ageYearr);
    let y = Math.sign(ageMonthh);
    let z = Math.sign(ageDayy);
 
    if (x === -1 || y === -1 || z === -1) {
         dayErrorMsg.css('display', 'inline-block')
         dayErrorMsg.text('Date must be in the past');
         inputs.addClass('invalid');
         labels.css('color', 'hsl(0, 100%, 67%)');
    } else {
         updateDateDisplay(yearNumber, ageYearr);
         updateDateDisplay(monthNumber, ageMonthh);
         updateDateDisplay(dayNumber, ageDayy);
    }
 }
 

function ageCalculator() {
    const currentDate = new Date();
    const year = Number(yearInput.val());
    const month = Number(monthInput.val());
    const day = Number(dayInput.val());

    let ageYear = currentDate.getFullYear() - year;
    let ageMonth = currentDate.getMonth() + 1 - month;
    let ageDay = currentDate.getDate() - day;

    if (currentDate.getMonth() + 1 < month || (currentDate.getMonth() + 1 === month && currentDate.getDate() < day)) {
        ageYear--;
        ageMonth = currentDate.getMonth() + 1 + 12 - month;
    }

    if (currentDate.getDate() < day) {
        ageMonth--;
        const prevMonthDays = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        ageDay = prevMonthDays + currentDate.getDate() - day;
    }

    futureDate(ageYear, ageMonth, ageDay);
   
}


  

button.click(function (e) { 

    if (!form[0].checkValidity()) {
        validateForm();
        e.preventDefault();
    } else {

        if (isValidDate(Number(yearInput.val()), Number(monthInput.val()), Number(dayInput.val())) === false) {
            validateForm();
            dayErrorMsg.css('display', 'inline-block')
            dayErrorMsg.text('Must be a valid date');
            inputs.addClass('invalid');
            labels.css('color', 'hsl(0, 100%, 67%)');
            e.preventDefault();
        } else {
            validateForm();
            ageCalculator();
            e.preventDefault();

            
        }

    }



    
});