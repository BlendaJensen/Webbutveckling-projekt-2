let betyg1 = document.querySelector("#bsätt1");
let betygText1 = document.querySelector(".b1");
betyg1.addEventListener("change",ändraBetyg1);
function ändraBetyg1(){
betygText1.innerHTML = betyg1.value;
}

let betyg2 = document.querySelector("#bsätt2");
let betygText2 = document.querySelector(".b2");
betyg2.addEventListener("change",ändraBetyg2);
function ändraBetyg2(){
betygText2.innerHTML = betyg2.value;
}

let betyg3 = document.querySelector("#bsätt3");
let betygText3 = document.querySelector(".b3");
betyg3.addEventListener("change",ändraBetyg3);
function ändraBetyg3(){
betygText3.innerHTML = betyg3.value;
}