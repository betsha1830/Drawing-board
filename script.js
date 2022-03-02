// Create a square div board

/* 
 * 
 * Iterate through numSquare and create a div and append to each other. 
 *  
 * 
 */

let drawingBoard = document.querySelector('.drawing-board');
let r = 0;
let g = 0;
let b = 0;
let rainbowColor = '';
console.log(rainbowColor)
let blackAndWhiteInput = document.querySelector('.black-and-white').checked;
let rainbowInput = document.querySelector('.rainbow').checked;

blackAndWhiteInput.to

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

drawSquare(num.value); //Default 16

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
        square.addEventListener('mouseover', () => { //drawing after size update
            r = Math.round((Math.random()) * 100 + 1);
            g = Math.round((Math.random()) * 100 + 1);
            b = Math.round((Math.random()) * 100 + 1);
            rainbowColor = `background-color: rgb(${r}, ${g}, ${b})`;
            if (blackAndWhiteInput == true) {
                square.style.cssText = `background-color: black`;
            }
            else if (rainbowInput == true) {
                square.style.cssText = `${rainbowColor}`;
            }
        });
    });
});

squares.forEach(square => {
    square.addEventListener('mouseover', () => { //drawing for the default size
        r = Math.round((Math.random()) * 100 + 1);
        g = Math.round((Math.random()) * 100 + 1);
        b = Math.round((Math.random()) * 100 + 1);
        rainbowColor = `background-color: rgb(${r}, ${g}, ${b})`;
        if (blackAndWhiteInput == true) {
            square.style.cssText = `background-color: black`;
        }
        else if (rainbowInput == true) {
           square.style.cssText = `${rainbowColor}`;
       }
    });
});



