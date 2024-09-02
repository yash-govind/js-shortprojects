const textBox  = document.querySelector('#textBox');
const output  = document.querySelector("#output");
    textBox.addEventListener("keydown",function(event){
        output.innerHTML = `You pressed the ${event.key}.`;
}) 


const btn = document.querySelector("button");
