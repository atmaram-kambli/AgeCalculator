const yyyy = document.getElementById("yyyy");
console.log(yyyy);
const mm = document.querySelector("#mm");
const dd = document.querySelector("#dd");
function setColor() {
    yyyy.style.color = "blue";
    mm.style.color = "blue";
    dd.style.color = "blue";
}
addEventListener('load', setColor);