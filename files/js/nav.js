
function scrolleffect(){
    
    if(window.scrollY>50){
        document.getElementById("navbar-example2").classList.remove("navdes");
        document.getElementById("navbar-example2").classList.add("navdes2");
    }
    if(window.scrollY==0){
        document.getElementById("navbar-example2").classList.remove("navdes2");
        document.getElementById("navbar-example2").classList.add("navdes");
    }
}


window.addEventListener("scroll",scrolleffect);
window.addEventListener("mousemove",scrolleffect);


