const container = document.querySelector("#container");
const graybtn = document.querySelector('#grayScale');
const rainbowbtn = document.querySelector('#rainbow');
const blackbtn = document.querySelector('#black');
const eraserbtn = document.querySelector('#eraser');
const customColorbtn = document.querySelector('#customColor');
const clearbtn = document.querySelector('#clear');
const resetbtn = document.querySelector('#reset');

function createGrid(num) {
    for(i = 1; i <= num; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (j=1; j<=num; j++) {
            const column = document.createElement('div');
            column.classList.add('column');
            row.appendChild(column);
            column.style.width = ((720/num)-2) + 'px';
            column.style.height = ((720/num)-2) + 'px';
            column.style.border = '1px solid lightblue';
        }
        container.appendChild(row);
    }
}
createGrid(16)

function grayColor() {
    const columns = document.querySelectorAll('.column');
    graybtn.addEventListener('click', () => {
        columns.forEach(column => column.addEventListener('mouseover',() => {
            let Rgray = Math.floor(Math.random() * 255);
            column.style.background = `rgb(${Rgray}, ${Rgray}, ${Rgray})`
        }))
    })
}
grayColor()

function blackColor() {
    const columns = document.querySelectorAll('.column');
    blackbtn.addEventListener('click', () => {
        columns.forEach(column => column.addEventListener('mouseover',() => {
            column.style.background = 'black';
        }))
    })
}
blackColor()

function eraser() {
    const columns = document.querySelectorAll('.column');
    eraserbtn.addEventListener('click', () => {
        columns.forEach(column => column.addEventListener('mouseover',() => {
            column.style.background = 'white';
        }))
    })
}
eraser()

function rainbow() {
    const columns = document.querySelectorAll('.column');
    rainbowbtn.addEventListener('click', () => {
        columns.forEach(column => column.addEventListener('mouseover',() => {
            let R = Math.floor(Math.random() * 255);
            let G = Math.floor(Math.random() * 255);
            let B = Math.floor(Math.random() * 255);
            column.style.background = `rgb(${R}, ${G}, ${B})`;
        }))
    })
}
rainbow()

function reset() {
    resetbtn.addEventListener('click', () => {
        let size = prompt("Enter the size of the grid");
        if (size == 'null' || size < 1 || size > 100) {
            woosh()
            createGrid(16)
            alert("Invalid input, enter between 1 and 100. Giving you a 16 x 16 default grid.");
            grayColor()
            blackColor()
            eraser()
            rainbow()
        }
        else {
            woosh()
            createGrid(size)
            grayColor()
            blackColor()
            eraser()
            rainbow()
        }
    })
}
reset()

function clear() {
    clearbtn.addEventListener('click', () => {
        const columns = document.querySelectorAll('.column');
        columns.forEach(column => column.style.background = 'white');
    })
}
clear()

function woosh() {
    const columns = container.querySelectorAll('.column');
    columns.forEach(column => column.remove());
}

function updateFirst (event) {
    const columns = document.querySelectorAll('.column');
    columns.forEach(column => column.addEventListener('mouseover',() => {
        column.style.background = event.target.value;
    }))
}

function customColor() {
    customColorbtn.addEventListener("input", updateFirst, false);
    customColorbtn.addEventListener("change", updateFirst, false);
    customColorbtn.select();
}
customColor()