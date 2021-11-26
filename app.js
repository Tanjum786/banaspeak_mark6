// var username=prompt("enter name");
// alert("your name is"+username);
var buttentranslator=document.querySelector("#butn-translate");
var textinput=document.querySelector("#text-input");
console.log(textinput);

 function clickEventHandler(){
     console.log("clicked");
     console.log("input",textinput.value);
};
buttentranslator.addEventListener("click",clickEventHandler);
