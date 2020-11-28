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
            square.classList.add(color);
        })
    });
}


//main

//create default 4x4 grid
drawGrid(16);
draw("drawn-black");

let reset = document.querySelector('#left-knob');
reset.addEventListener('click', () =>{
    let size = prompt('How many squares per side?');
    while(size > 100 || size < 0){
        size = prompt('Size cannot be greater than 100 or less than 0.'
        + ' please enter another size');
    }
    let knob = document.querySelector('#right-knob');
    knob.addEventListener('click', () => {
        let color = knob.getAttribute('data-color');
        if(color=='black'){
            knob.textContent = '';
            knob.appendChild(document.textContent('black'));
            knob.setAttribute('data-color', 'rainbow');
            knob.classList.remove('drawn-black');
            knob.classList.add('drawn-rainbow');
            draw('drawn-rainbow');
        } else {
            knob.textContent = '';
            knob.appendChild(document.textContent('rainbow'));
            knob.setAttribute('data-color', 'black');
            draw('drawn-black');
            knob.classList.remove('drawn-rainbow');
            knob.classList.add('drawn-black');
        }
    })
    
    drawGrid(size*size);
    draw("drawn-black");
})