let heading=document.querySelector("#heading");
let btn=document.querySelector("#btn");
let div=document.querySelector(".color");

btn.addEventListener("click",()=>{
    let red=Math.floor(Math.random()*255 +1);
    let green=Math.floor(Math.random()*255 +1);
    let blue=Math.floor(Math.random()*255 +1);
    let color=(`rgb(${red}, ${green},${blue})`);
    heading.innerText=color;
    div.style.backgroundColor=color;
})