let colorBtn = document.querySelector(".color-gen");
let body = document.querySelector("body");
let heading = document.querySelector("h3");
body.style.textAlign = "center";

function generateColor(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return "rgb("+r+","+g+","+b+")";
}


colorBtn.addEventListener("click", () => {
    pickedColor = generateColor();
    body.style.backgroundColor = pickedColor;
    heading.textContent = pickedColor;
});