let buttons = document.querySelectorAll(".button");
const display = document.querySelector("#display");

//change bg color on click
buttons.forEach(button => {
    button.addEventListener('mousedown', () => {
        button.style.opacity = "0.5";
    });
    button.addEventListener('mouseup', () => {
        button.style.opacity = "1";
    });
});

//AC button
let button_AC = document.querySelector("#button-AC");
button_AC.addEventListener('click', ()=>{
    const currentText = display.textContent;
    display.textContent = "";
});

//delete button
let del = document.querySelector("#button-delete");
del.addEventListener('click', ()=>{
    const currentText = display.textContent;
    display.textContent = currentText.slice(0, -1);
});
window.addEventListener('keydown', (event) => {
    if (event.key === "Backspace") {
        const display = document.getElementById('display');
        display.textContent = display.textContent.slice(0, -1);
    }
});


//display
let inners = document.querySelectorAll(".inner");
inners.forEach(item=>{
    item.addEventListener('click', ()=>{
        display.textContent += item.textContent;
        console.log(item.innerHTML);
    });
});

window.addEventListener('keydown', (event) => {
    const allowedKeys = ['0','1','2','3','4','5','6','7','8','9','+','-','*','/','%','.'];
    if (allowedKeys.includes(event.key)) {
        display.textContent += event.key;
    }
});

//equal
const buttonEquals = document.getElementById('button-equals');

buttonEquals.addEventListener('click', () => {
    try {
        display.textContent = eval(display.textContent);
    } catch (error) {
        display.textContent = 'Error';
    }
});
window.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        try {
            display.textContent = eval(display.textContent);
        } catch (error) {
            display.textContent = 'Error';
        }
    }
});

//percent
let percent = document.querySelector("#button-percent");
percent.addEventListener('click', ()=>{
    const current = display.textContent;
    display.textContent = (parseFloat(current) / 100).toString();
});


//toggle
const toggleBtn = document.getElementById("button-toggle");
const divCenter = document.getElementById("divcenter");

toggleBtn.addEventListener("click", () => {
  divCenter.classList.toggle("design1");
  divCenter.classList.toggle("design2");
});