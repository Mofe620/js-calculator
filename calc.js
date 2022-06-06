let root = document.querySelector(':root');
let display = document.querySelector('#answer');
let numbers = document.querySelectorAll('.num');
let point = document.querySelector('#point');
let add = document.querySelector('#add');
let subtract = document.querySelector('#subtract');
let multiply = document.querySelector('#multiply');
let divide = document.querySelector('#divide');
let del = document.querySelector('#delete');
let compute = document.querySelector('#equal');
let reset = document.querySelector('#reset');
display.style.opacity = 0;
display.textContent = 0;
numbers.forEach(number => {
    number.addEventListener('click', ()=>{
        display.style.opacity = 1;
        if (display.textContent == 0){
            display.textContent = "";
        }
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
point.addEventListener('click', ()=>{
    display.textContent += '.';
})
del.addEventListener('click', ()=>{
    let screenVal = display.textContent;
    let val = screenVal.slice(0, -1);
    if (val == "") {val = 0};
    display.textContent = val;
})
compute.addEventListener('click', ()=>{
    let result = eval(display.textContent);
    if (isNaN(result)){
        result = 0;
    }
    display.textContent = result;
})
reset.addEventListener('click', ()=>{
    display.textContent = 0;
})

// THEME SELECTOR
let t1 = document.getElementById('theme-one');
let t2 = document.getElementById('theme-two');
let t3 = document.getElementById('theme-three');

t1.addEventListener('click', ()=> {
    if (t1.checked = true) { themeOne(); }
})
t2.addEventListener('click', ()=> {
    if (t2.checked = true) { themeTwo(); }
})
t3.addEventListener('click', ()=> {
    if (t3.checked = true) { themeThree(); }
})

function themeOne() {
    root.style.setProperty('--body-bg', 'hsl(222, 26%, 31%)');
    root.style.setProperty('--keypad-bg', 'hsl(223, 31%, 20%)');
    root.style.setProperty('--screen-bg', 'hsl(224, 36%, 15%)');
    root.style.setProperty('--logo-text', '#fff');
    root.style.setProperty('--key-text', 'hsl(221, 14%, 31%)');
    root.style.setProperty('--key-blue', 'hsl(225, 21%, 49%)');
    root.style.setProperty('--key-blueshadow', 'hsl(224, 28%, 35%)');
    root.style.setProperty('--key-red', 'hsl(6, 63%, 50%)');
    root.style.setProperty('--key-redshadow', 'hsl(6, 70%, 34%)');
    root.style.setProperty('--key-grey', 'hsl(30, 25%, 89%)');
    root.style.setProperty('--key-greyshadow', 'hsl(28, 16%, 65%)');
    root.style.setProperty('--text-blue', 'hsl(221, 14%, 31%)');
    root.style.setProperty('--text-white', '#fff');
    root.style.setProperty('--toggle', 'hsl(6, 63%, 50%)');
}

function themeTwo() {
    root.style.setProperty('--body-bg', 'hsl(0, 0%, 90%)');
    root.style.setProperty('--keypad-bg', 'hsl(0, 5%, 81%)');
    root.style.setProperty('--screen-bg', 'hsl(0, 0%, 93%)');
    root.style.setProperty('--logo-text', 'hsl(221, 14%, 31%)');
    root.style.setProperty('--key-text', 'hsl(221, 14%, 31%)');
    root.style.setProperty('--key-blue', 'hsl(185, 42%, 37%)');
    root.style.setProperty('--key-blueshadow', 'hsl(185, 58%, 25%)');
    root.style.setProperty('--key-red', 'hsl(25, 98%, 40%)');
    root.style.setProperty('--key-redshadow', 'hsl(25, 99%, 27%)');
    root.style.setProperty('--key-grey', 'hsl(45, 7%, 89%)');
    root.style.setProperty('--key-greyshadow', 'hsl(35, 11%, 61%)');
    root.style.setProperty('--text-blue', 'hsl(60, 10%, 19%)');
    root.style.setProperty('--text-white', '#fff');
    root.style.setProperty('--toggle', 'hsl(25, 98%, 40%)');
}

function themeThree() {
    root.style.setProperty('--body-bg', 'hsl(268, 75%, 9%)');
    root.style.setProperty('--keypad-bg', 'hsl(268, 71%, 12%)');
    root.style.setProperty('--screen-bg', 'hsl(268, 71%, 12%)');
    root.style.setProperty('--logo-text', 'hsl(52, 100%, 62%)');
    root.style.setProperty('--key-text', 'hsl(52, 100%, 62%)');
    root.style.setProperty('--key-blue', 'hsl(281, 89%, 26%)');
    root.style.setProperty('--key-blueshadow', 'hsl(285, 91%, 52%)');
    root.style.setProperty('--key-red', 'hsl(176, 100%, 44%)');
    root.style.setProperty('--key-redshadow', 'hsl(177, 92%, 70%)');
    root.style.setProperty('--key-grey', 'hsl(268, 47%, 21%)');
    root.style.setProperty('--key-greyshadow', 'hsl(290, 70%, 36%)');
    root.style.setProperty('--text-blue', 'hsl(198, 20%, 13%)');
    root.style.setProperty('--text-white', '#fff');
    root.style.setProperty('--toggle', 'hsl(176, 100%, 44%)');
}