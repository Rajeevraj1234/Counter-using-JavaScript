var display =  document.querySelector(".counter-display");
var inc  =  document.querySelector(".incrementer");
var reset  =  document.querySelector(".reset");
var dec  =  document.querySelector(".decrementer");

var counter= 0;
inc.addEventListener("click",()=>{
    counter++;
    display.innerHTML = counter;
})
dec.addEventListener("click",()=>{
    counter--;
    display.innerHTML = counter;
})
reset.addEventListener("click",()=>{
    counter = 0;
    display.innerHTML = counter;
})