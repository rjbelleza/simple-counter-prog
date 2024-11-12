
let defaultNum = 0;
console.log(defaultNum);

document.getElementById("counter").textContent = defaultNum;

document.getElementById("increaser").onclick = function() {
    defaultNum ++;
    document.getElementById("counter").textContent = defaultNum;
    console.log(defaultNum);
}

document.getElementById("decreaser").onclick = function() {
    defaultNum --;
    stop();
    document.getElementById("counter").textContent = defaultNum;
    console.log(defaultNum);
}

document.getElementById("reset").onclick = function() {
    defaultNum = 0;
    document.getElementById("counter").textContent = defaultNum;
}

const stop = () => {
    if (defaultNum <= 0) {
        defaultNum = 0;
    }
}
