# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![](./Screenshot(80).png)
![](./Screenshot(82).png)


### Links

- Solution URL: [Github Repository](https://github.com/Kelechikizito/age-calculator-app-main)
- Live Site URL: [Github Pages](https://kelechikizito.github.io/age-calculator-app-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Jquery](https://jquery.com/) - JS library


### What I learned

I learned the following:
- JS `Date()` Constructor
- JS `setinterval()` Function


```js

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

```

```js

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

```


### Continued development


### Useful resources

- [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date) - This helped me to understand the `Date()` Constructor. I really liked this pattern and will use it going forward.
- [Frontend mentor Solution](https://www.frontendmentor.io/solutions/age-calculator-app-solution--F2cfPcSRS) - This solution helped me underatand the Javascript animation.
- [ChatGPT](https://chat.openai.com/) - This helped me understand the age calculator logic.



## Author

- Website - [Github](https://github.com/kelechikizito)
- Frontend Mentor - [@Kelechikizito](https://www.frontendmentor.io/profile/Kelechikizito)
- Twitter - [@kelechiikizito](https://www.x.com/kelechiikizito)


## Acknowledgments

- [Frontend mentor Solution](https://www.frontendmentor.io/solutions/age-calculator-app-solution--F2cfPcSRS) - This solution helped me underatand the Javascript animation.