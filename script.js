function createSquareDivs(squaresPerSide) {
    // Get Square Div Section
    let squareDivSection = document.querySelector(".square-div-section");

    // Loop 16 x 16 times to create the square divs
    for(let i = 0; i < squaresPerSide; i++) {
        let squareDivRow = document.createElement('div');
        squareDivRow.classList.add('square-div-row');

        
        for(let j = 0; j < squaresPerSide; j++) { 
            // Create div
            let square = document.createElement('div');
            square.classList.add('square-div');
            square.id = "square-div";

            // Reference: https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event
            square.addEventListener("mouseover", (event) => {
                event.target.style.background = "black";
            });

            square.addEventListener("mouseout", (event) => {

                // reset the color after a short delay
                setTimeout(() => {
                    event.target.style.background = "white";
                    }, 1000);

                //event.target.style.background = "white";
            });

            // Add div
            squareDivRow.appendChild(square);
        }

        squareDivSection.appendChild(squareDivRow);
        squareDivSection.appendChild(document.createElement("br"));
    }
}

function setSquareGridSize() {
    let squaresPerSide = prompt("Enter Number of Squares per Side\nMax of 100 and Must be Greater than 0");

    let squareDivSection = document.querySelector(".square-div-section");
    squareDivSection.innerHTML = "";
    // Validate Input (Greater than 100, 100 squares per side, Less than 0, 16 squares per side, Otherwise x squares per side)
    if(squaresPerSide > 100) { 
        createSquareDivs(100); 
    }

    else if(squaresPerSide <= 0) { 
        createSquareDivs(16); 
    }

    else {
        createSquareDivs(squaresPerSide);
    }
    
}
