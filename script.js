//Variable Assignment
GRIDSIDE = 500;

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

    function setBackgroundColor() {
        this.style.backgroundColor = "black";
    }