let display = document.querySelector('#answer');
let numbers = document.querySelectorAll('.num');
let add = document.querySelector('#add');
let subtract = document.querySelector('#subtract');
let multiply = document.querySelector('#multiply');
let divide = document.querySelector('#divide');

display.textContent = '';

numbers.forEach(number => {
    number.addEventListener('click', ()=>{
        let value = parseInt(number.textContent);
        display.textContent += value;
    });
});

add.addEventListener('click', ()=>{
    display.textContent += '+';
})
subtract.addEventListener('click', ()=>{
    display.textContent += '-';
})
multiply.addEventListener('click', ()=>{
    display.textContent += '*';
})
divide.addEventListener('click', ()=>{
    display.textContent += '/';
})