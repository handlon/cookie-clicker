const susenka = document.getElementById("susenka");
const counter = document.getElementById("counter");
const clickUpgrade = document.getElementById("clickuUpgrade")

let numberOfCookies = 0;
let costOfClickUpgrade = 20;
let clickUpgradeIncrease = 1;

susenka.onclick = () => {
    console.log("click");
    numberOfCookies+= clickUpgradeIncrease;
    console.log(numberOfCookies);
    counter.innerHTML = "počet orea:" + numberOfCookies;
}

function cheats() {
    console.log("cheats on!")
    numberOfCookies += 100000000000;
    counter.innerText = "počet orea:" + numberOfCookies;
}


const cheatsTwo = () => {
    numberOfCookies *= 100000000000;
   counter.innerText = "počet orea:" + numberOfCookies;
}

const clickUpgradeFunction = () => {
    if (numberOfCookies >= costOfClickUpgrade) {
        numberOfCookies -= costOfClickUpgrade;
        counter.innerText = "počet orea:" + numberOfCookies;
        clickUpgradeIncrease ++;
    }
}
clickUpgrade.onclick = clickUpgradeFunction
