//Obtain miss using document object model
let miss = document.getElementById("totalmiss");
let button = document.querySelector("button");
let img = document.getElementById("tomImage");

//Load the existing value or start at 0
let missCount = Number(localStorage.getItem("missCount") || 0)

button.addEventListener("click", ()=>{
    missCount++;
    miss.textContent = missCount;

    //Save the updated value to local storage
    localStorage.setItem("missCount", missCount)
    img.src = "./Images/tomImage2.png";
    miss.style.display = "block"
});



