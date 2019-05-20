// document.addEventListener('DOMContentLoaded', function() {

const calBtn = document.querySelectorAll('span')
let display = document.querySelector('#screen');

calBtn.forEach(btn => {

    btn.addEventListener('click', function() {

        btn.id !== 'clear' ? display.textContent += btn.textContent : null;

        btn.id === 'clear' ? display.textContent = "" : null;

        if (btn.id === 'equals') {

            let operators = ['÷', 'x', '-', '+'];
            let newArray = [];

            operators.forEach(op => {

                if ((display.textContent).includes(op)) {

                    newArray = (display.textContent).split(op);
                    let firstInt = parseInt(newArray[0]);
                    let secondInt = parseInt(newArray[1]);

                    op === '÷' ? display.textContent = divide(firstInt, secondInt) : null;

                    op === 'x' ? display.textContent = multiply(firstInt, secondInt) : null;

                    op === '-' ? display.textContent = subract(firstInt, secondInt) : null;

                    op === '+' ? display.textContent = add(firstInt, secondInt) : null;

                    display.textContent === 'NaN' ? display.textContent = 'Error' : null;

                }

            })

        }

    })

})

const divide = (a, b) => isNaN(+a) || isNaN(+b) &&
    b === 0 || a === 0 ? 'Error' : a / b;

const multiply = (a, b) => a * b;

const subract = (a, b) => a - b;

const add = (a, b) => a + b;

// });