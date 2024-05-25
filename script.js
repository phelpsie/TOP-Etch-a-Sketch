let GRIDSIDE = 500;

//DOM Nodes
let buttonContainer = document.createElement('div');
buttonContainer.classList.add('buttonContainer');
const buttonContainerSelector = document.querySelector('.buttonContainer');
document.body.prepend(buttonContainer);

let rnbwButton = document.createElement('button');
rnbwButton.classList.add('rnbwButton');
rnbwButton.classList.add('button');
const rnbwButtonSelector = document.querySelector('.rnbwButton');
rnbwButton.textContent = 'Rainbow Button';
buttonContainer.appendChild(rnbwButton);

let shaderButton = document.createElement('button');
shaderButton.classList.add('shaderButton');
shaderButton.classList.add('button');
const shaderButtonSelector = document.querySelector('.shaderButton');
shaderButton.textContent = 'Shader';
buttonContainer.appendChild(shaderButton);

let button = document.createElement('button');
button.classList.add('button');
const clearButtonSelector = document.querySelector('.button');
button.textContent = 'Resize the Grid!';
buttonContainer.appendChild(button);

//Selectors
let container = document.querySelector(".container");

//Toggles
rnbwToggle = false;
shaderToggle = false;

//Event Listeners
button.addEventListener('click', () => {
    rnbwToggle = false;
    shaderToggle = false;
    removeGrid();
    createGrid();
})

rnbwButton.addEventListener('click', () => {
    rnbwToggle = true;
    shaderToggle = false;
});

shaderButton.addEventListener('click', () => {
    shaderToggle = true;
    rnbwToggle = false;
});

//Functions 
function createGrid() {
let squaresPerSide = prompt('Enter a number of gridsquares per side', '2-100');
let numOfSquares = squaresPerSide ** 2;
for (let i = 0; i < numOfSquares; i++) {
    let div = document.createElement('div');
    div.classList.add('div');
    div.style.height = div.style.width = `${(GRIDSIDE / squaresPerSide) - 2}px`;
    container.appendChild(div);
    div.addEventListener("mouseover", setBackgroundColor);
};
};

createGrid();

function removeGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function setBackgroundColor(){
    if (rnbwToggle === true) {
        this.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        this.style.opacity = 1;
    } else if (shaderToggle === true) {
        this.style.backgroundColor = "black";
        this.style.opacity = Number(this.style.opacity) + 0.1;
    } else {
        this.style.backgroundColor = "black";
    }
}





