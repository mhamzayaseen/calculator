
function getNumber(num){
    
    var input  = document.getElementById("input");
    input.value += num;
}
function clearResult(){
    var input = document.getElementById("input");
    input.value = ""
}
function getResult(){
    var input = document.getElementById("input");
    input.value =eval(input.value)    
}

// function addMessage (){
//     var val = document.getElementById("val");
// var p = document.createElement("p")
// var text = document.createTextNode(val.value)
// p.appendChild(text)
// var messages = document.getElementById("messages");
// messages.appendChild(p)
// val.value = ""
// }