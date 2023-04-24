function createSquareDivs() {
    // Get Square Div Section
    let squareDivSection = document.querySelector(".square-div-section");

    // Loop 16 x 16 times to create the square divs
    for(let i = 0; i < 16; i++) {
        let squareDivRow = document.createElement('div');
        squareDivRow.classList.add('square-div-row');

        
        for(let j = 0; j < 16; j++) { 
            // Create div
            let square = document.createElement('div');
            square.classList.add('square-div');
            square.textContent = ('|' + i + " "+ j + '|');

            // Add div
            squareDivRow.appendChild(square);
        }

        squareDivSection.appendChild(squareDivRow);
        squareDivSection.appendChild(document.createElement("br"));
        console.log(squareDivRow);

    }
}


createSquareDivs();