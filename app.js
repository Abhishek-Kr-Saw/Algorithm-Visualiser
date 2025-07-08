const arrayContainer = document.getElementById("array-container");

const generateArray = () => {
    arrayContainer.innerHTML = ""
    for(let i=0;i<30;i++){
        const barHeight = Math.floor(Math.random() * 80) + 20 ;
        const arrayBar = document.createElement("div");
        arrayBar.classList.add("array-bar");
        arrayBar.style.height = `${barHeight}%`;
        arrayContainer.appendChild(arrayBar);
    }
}

const bubbleSort =async () => {
    const bars = document.querySelectorAll(".array-bar");
    for(let i=0;i<bars.length - 1;i++){
        for(let j=0;j<bars.length - i - 1;j++){
            bars[j].style.backgroundColor = "#ff6f61";
            bars[j+1].style.backgroundColor = "#ff6f61";
            if(parseInt(bars[j].style.height) > parseInt(bars[j+1].style.height)){
                await swap(bars[j] , bars[j+1]);
            }
            bars[j].style.backgroundColor = "white"; //reset color after comparision
            bars[j+1].style.backgroundColor = "white";
        }
        bars[bars.length - 1 - i].style.backgroundColor = "green";
    }
}

const swap = (bar1, bar2) =>{
    return new Promise((resolve) => {
        const temp = bar1.style.height;
        bar1.style.height = bar2.style.height;
        bar2.style.height = temp;
        setTimeout( () => {
            resolve();
        } , 300);
    })
}

const insertionSort = async () => {
    const bars = document.querySelectorAll(".array-bar");

    for (let i = 1; i < bars.length; i++) {
        let j = i - 1;
        let keyHeight = bars[i].style.height;

        // Highlight the current bar being compared (key)
        bars[i].style.backgroundColor = "#6a5acd"; // Purple

        // Pause for visualization
        await new Promise(resolve => setTimeout(resolve, 300));

        while (j >= 0 && parseInt(bars[j].style.height) > parseInt(keyHeight)) {
            bars[j + 1].style.height = bars[j].style.height;

            // Highlight the compared bar
            bars[j].style.backgroundColor = "#ff6f61"; // Red
            bars[j + 1].style.backgroundColor = "#ff6f61";

            j--;

            await new Promise(resolve => setTimeout(resolve, 300));

            // Reset color
            for (let k = i; k > j; k--) {
                bars[k].style.backgroundColor = "white";
            }
        }

        bars[j + 1].style.height = keyHeight;

        // Mark sorted so far
        for (let k = 0; k <= i; k++) {
            bars[k].style.backgroundColor = "green";
        }
    }
}



generateArray();

