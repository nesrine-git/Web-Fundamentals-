var count = 3;
var countElement = document.querySelector("#count");


function increaseBy1(){
    count++;
    countElement.innerHTML = count + " like(s)";
}