let drawingBoard = document.querySelector('.drawing-board');

// Create a square div board

/* 
 * By default create a 16 x 16 div
 * 
 * How? Iterate through numSquare and create a div and append to each other. 
 *  
 * 
 */

function drawSquare (numSquare) { //numSquare is the size of the square matrix.(numSquare=16 means it will create a 16x16 square)
    
    for (let i = 1; i <= numSquare; i++) {
        let square = document.createElement(`div`);
        square.classList.add(`square`);
        square.classList.add(i);
        for (let i = 1; i <= numSquare; i++) {
            let squareSquare = document.createElement(`div`);
            squareSquare.classList.add(`square-square`);
            squareSquare.classList.add(i);
            square.appendChild(squareSquare);
        }
        
        drawingBoard.appendChild(square);
    }

}

let num = document.getElementsByTagName(`input`);
num.value = `16`;
let numOfSquare = num.value;
drawSquare(numOfSquare);

let squares = document.querySelectorAll(`.square-square`);
squares.forEach(square => {
    square.addEventListener(`mouseover`, () => {
       square.style.cssStyle = `background-color: black`;
    })
})