const susenka = document.getElementById("susenka");
const count = document.getElementById("counter");

let numberOfCookies = 0;

susenka.onclick = () => {
    console.log("click");
    numberOfCookies++;
    console.log(numberOfCookies);
    counter.innerHTML = "počet orea:" + numberOfCookies;
}
