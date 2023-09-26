const susenka = document.getElementById("susenka");
const counter = document.getElementById("counter");
const clickUpgrade = document.getElementById("clickuUpgrade")
const autoclicker = document.getElementById("autoclicker")

let numberOfCookies = 0;
let costOfClickUpgrade = 20;
let clickUpgradeIncrease = 1;
let autoClickIncrease = 0;
let autoclick;
let autoclickcost = 100;


autoclicker.onclick = () => {
    if (numberOfCookies >= autoclickcost) {

        numberOfCookies -= autoclickcost;
        autoclickcost *=2;
        autoclicker.innerText = "autoclicker cost:" + autoclickcost;
        counter.innerText = "počet orea:" + numberOfCookies;
        autoClickIncrease ++;
        clearInterval(autoclick);
        autoclick = setInterval( () => {
            numberOfCookies += autoClickIncrease
            counter.innerText = "počet orea:" + numberOfCookies;
        },1000)
    }
}

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

cheats();


