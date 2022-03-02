// Create a square div board

/* 
 * 
 * How? Iterate through numSquare and create a div and append to each other. 
 *  
 * 
 */

let drawingBoard = document.querySelector('.drawing-board');

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

let num = document.querySelector('.input');

drawSquare(num.value); //Defaul 16

let updateBtn = document.querySelector('button');
let draw = document.querySelector('.banner-and-drawing-board');
let squares = document.querySelectorAll(`.square-square`); // fetch individual squares that are drawn

updateBtn.addEventListener('click', () => {
    draw.removeChild(drawingBoard);
    drawingBoard = document.createElement('div');
    drawingBoard.classList.add('drawing-board');
    draw.appendChild(drawingBoard);
    drawSquare(num.value);
    squares = document.querySelectorAll('.square-square');
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
           square.style.cssText = `background-color: black`;
        });
    });
});

squares.forEach(square => {
    square.addEventListener('mouseover', () => {
       square.style.cssText = `background-color: black`;
    });
});



