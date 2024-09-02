const button = document.querySelector("button");


function Randomcolor(colorNumber){
return Math.floor(Math.random ()*(colorNumber+1));
}

button.addEventListener('click',()=>{
const randomColor = `rgb(${Randomcolor(255)} ${Randomcolor(255)} ${Randomcolor(255)})`;
document.body.style.backgroundColor = randomColor;
})