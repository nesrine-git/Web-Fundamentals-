var arr =[9, 12, 9]
var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var p3 = document.querySelector("#p3");

function increaseBy1(element){
    if(element.id == "one"){
        arr[0]++;
        p1.innerHTML = arr[0]+ "like(s)"
    }
    else if (element.id == "two"){
        arr[1]++;
        p2.innerHTML = arr[1]+ "like(s)"
    }
    else{
        arr[2]++;
        p3.innerHTML = arr[2]+ "like(s)"
    }
}