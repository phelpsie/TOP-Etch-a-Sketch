//Variable Assignment
GRIDSIDE = 500;

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