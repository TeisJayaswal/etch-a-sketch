function createGrid(x) {

    const grid = document.querySelector('#container') 

    grid.setAttribute('style', 'margin: auto'); 

    for (i = 0; i < x; i++) {
        const row = document.createElement('div'); 
        row.className = "row"; 
        row.setAttribute('style', 'display: block; float: left; width: 100%'); 
            for (j = 0; j < x; j++) {
                const square = document.createElement('div'); 
                    square.className = "square";  
                    square.setAttribute('style', `border: 1px solid black`); 
                    square.style.display = "inline-block";
                    square.style.float = "left"; 
                    // square.style.width = `960/${x}`;
                    const width = `${960/x - 2}px`; // "60"
                    const height = `${960/x - 2}px`; 
                    // const width =  "50px";
                    square.style.width = width;
                    square.style.height = height;
                    // square.style.width = "50px"; 
                    console.log(width);
                    console.log(square.style.width);
                    // square.style.height = `960/${x}`;   

                    row.appendChild(square); 
            }

        grid.appendChild(row); 

    }
    
    
}

createGrid(16); 