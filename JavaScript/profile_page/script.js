let n = document.querySelector("#name");
let d1 = document.querySelector("#ln1");
let d2 = document.querySelector("#ln2");
var request = document.querySelector("#requests");
var connection = document.querySelector("#connect");

function editName(){
    n.innerText = "James Doe";
}
function removeConnection(ele){
    if(ele.id=="b1"){
        d1.remove();
        request.innerText--;
    }
    else {
        d2.remove();
        request.innerText--;
    }
   
}


function addConnection(ele){
    let newDiv = document.createElement("div");
    newDiv.className= "user-line";
    let parentElement = document.querySelector("#cnx");
    const f = document.querySelector(".footer");
    parentElement.insertBefore(newDiv, f);

    let newSpan = document.createElement("span");
    newSpan.className= "start";
    newDiv.appendChild(newSpan);
    if(ele.id == "accept1"){
        const imgElement = document.querySelector("#ln1 > .start > img");
        const spanElement = document.querySelector("#ln1 > .start > span");
        newSpan.appendChild(imgElement);
        newSpan.appendChild(spanElement);
        d1.remove();
        request.innerText--;
        connection.innerText++;
    }
     else {
        const imgElement = document.querySelector("#ln2 > .start > img");
        const spanElement = document.querySelector("#ln2 > .start > span");
        newSpan.appendChild(imgElement);
        newSpan.appendChild(spanElement);
        d2.remove();
        request.innerText--;
        connection.innerText++;
     }

    
}

