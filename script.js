// Waits to run script until DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the container element
    const container = document.querySelector('.container');
    const button = document.querySelector('#btn');

    function createGrid(size) {

        container.replaceChildren();
    
    
        // Set up the container styles
        container.style.display = 'flex';
        container.style.flexWrap = 'wrap';
        container.style.width = '960px';
        container.style.height = '960px';

        const squareSize = 960 / size;

        // Loop to create 256 squares
        for (let i = 0; i < size * size; i++) {
            let square = document.createElement('div'); // Create a new square

            // Add the 'square' class to each square for styling
            square.classList.add('square');

            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;

            // Add event listener to cahnge color when hovering
            square.addEventListener('mouseover', function() {
                // Change color to green on hover
                square.style.backgroundColor = getRandomColor();
            });

            // Append the square to the container
            container.appendChild(square);

        }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }    

    }
    createGrid(16);

    button.addEventListener('click', function () {
        let newGrid = prompt("Enter grid size (e.g., 16 for 16x16):");

        newGrid = parseInt(newGrid, 10);

        if (newGrid && newGrid > 0 && newGrid <= 100) {
            createGrid(newGrid);
        } else {
            alert("Please enter a valid number between 1 and 100.");
        }
    });
})

