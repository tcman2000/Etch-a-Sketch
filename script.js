//functions

//Create drawing squares
function drawGrid(size){
const canvas = document.getElementById('canvas');
canvas.textContent = '';
    for(let i = 0; i < size; i++){
        let square = document.createElement('div');
        square.setAttribute('id', i);
        square.setAttribute('class', 'square');
        canvas.appendChild(square);
    }
    canvas.style.gridTemplateColumns = `repeat(${Math.sqrt(size)}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${Math.sqrt(size)}, 1fr)`;
}

//allows each square to be drawn on
function draw(color){
    console.log(color);
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.setAttribute('class', '');
            square.classList.add('square');
            if(color=='black'){
                square.style.backgroundColor = 'grey';
                square.classList.add('black');
            } else {
                console.log(Math.floor(Math.random*255));
                square.style.backgroundColor = 'rgb(' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ')';
                square.classList.add('rainbow');
            }
        })
    });
}

//randomly generates

//main

//create default 4x4 grid
drawGrid(16);
draw("black");

//EventListener for left knob to reset the grid.
let reset = document.querySelector('#left-knob');
reset.addEventListener('click', () =>{
    let size = prompt('How many squares per side?');
    while(size > 100 || size < 0){
        size = prompt('Size cannot be greater than 100 or less than 0.'
        + ' please enter another size');
    }
    drawGrid(size*size);
    draw("black");
    let knob = document.getElementById('right-knob');
    knob.textContent = 'rainbow';
})

//EventListener for right knob to alternate between rainbow and black
let knob = document.querySelector('#right-knob');
knob.addEventListener('click', () => {
    let color = knob.getAttribute('data-color');
    if(color=='black'){
        knob.textContent = '';
        knob.appendChild(document.createTextNode('black'));
        knob.setAttribute('data-color', 'rainbow');
        knob.classList.remove('black');
        knob.classList.add('rainbow');
        draw('rainbow');
    } else {
        knob.textContent = '';
        knob.appendChild(document.createTextNode('rainbow'));
        knob.setAttribute('data-color', 'black');
        knob.classList.remove('rainbow');
        knob.classList.add('black');
        draw('black');
    }
})