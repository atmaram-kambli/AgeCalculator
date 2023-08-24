const today = new Date();

const yyyy = document.getElementById("yyyy");
const mm = document.querySelector("#mm");
const dd = document.querySelector("#dd");
function setColor() {
    yyyy.style.color = "blue";
    mm.style.color = "blue";
    dd.style.color = "blue";
}
addEventListener('load', setColor);

const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const parad = document.getElementById("parad");
const param = document.getElementById("param");
const paray = document.getElementById("paray");
let d, m, y;
var flag = 0;
const getDay = (event) => {
    d = event.target.value;
    if(d < 1 || d > 31) {
        df = 0;
        parad.innerText = "invalid Date";
    }
    else {
        df = 1;
        parad.innerText = "";
    }
}
const getMonth = (event) => {
    m = Number(event.target.value);
    if(m < 1 || m > 12) {
        mf = 0;
        param.innerText = "invalid Month";
    }
    else {
        mf = 1;
        param.innerText = "";
    }
}
const getYear = (event) => {
    y = event.target.value;
    if(y >= today.getFullYear()) {
        yf = 0;
        paray.innerText = "invalid Year";
    }
    else {
        yf = 1;
        paray.innerText = "";
    }
}

day.addEventListener("change", getDay);
month.addEventListener("change", getMonth);
year.addEventListener("change", getYear);

const calculate = document.getElementById("cal");
const ageCalculator = () => {
    // let bTime = new Date(y, m-1, d).getTime();
    // let nTime = new Date().getTime();
    let diff = (Date.now()) - (new Date(y,m-1,d).getTime());
    let newD = new Date(diff) ;

    if(df == 1 && mf == 1 && yf == 1) {
        yyyy.innerText = `${newD.getFullYear() - new Date(0).getFullYear()}`;
        mm.innerText = `${newD.getMonth() - new Date(0).getMonth()}`;
        dd.innerText = `${newD.getDate() - new Date(0).getDate()}`;
    }
}
calculate.addEventListener('click', ageCalculator);