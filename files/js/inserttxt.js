var part7 = document.getElementById("part7");
var part8 = document.getElementById("part8");
var part9 = document.getElementById("part9");

var part10 = document.getElementById("part10");
var part11 = document.getElementById("part11");
var part12 = document.getElementById("part12");

part7.addEventListener("mouseenter",()=>{
    console.log(part7.innerHTML);
    part10.innerHTML = '<span class="servfont">FB</span>&nbsp;<i id="part7" class="fa-brands fa-facebook fa-lg icfnt" style="color: #ffffff;"></i>';
    
})
part10.addEventListener("mouseleave",()=>{
    part10.innerHTML = '<i id="part7" class="fa-brands fa-facebook fa-lg icfnt" style="color: #ffffff;"></i>';
})

part8.addEventListener("mouseenter",()=>{
    part11.innerHTML = '<span class="servfont">GIT</span>&nbsp;<i id="part8" class="fa-brands fa-github fa-lg icfnt" style="color: #ffffff;"></i>'
})
part11.addEventListener("mouseleave",()=>{
    part11.innerHTML = '<i id="part8" class="fa-brands fa-github fa-lg icfnt" style="color: #ffffff;"></i>';
})

part9.addEventListener("mouseenter",()=>{
    part12.innerHTML =   '<span class="servfont">YT</span>&nbsp;<i id="part9" class="fa-brands fa-youtube fa-lg icfnt" style="color: #ffffff;"></i>';
})
part12.addEventListener("mouseleave",()=>{
    part12.innerHTML = '<i id="part9" class="fa-brands fa-youtube fa-lg icfnt" style="color: #ffffff;"></i>';
})