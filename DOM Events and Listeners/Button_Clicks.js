let helloBtn = document.querySelector("#hello");
let gdbBtn = document.querySelector("#goodbye");

helloBtn.addEventListener("click", function(){
    console.log("hello");
});

gdbBtn.addEventListener("click", () => console.log("goodbye"));