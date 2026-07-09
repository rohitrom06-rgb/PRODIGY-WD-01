window.addEventListener("scroll",function(){
const nav=document.getElementById("navbar");
nav.classList.toggle("scrolled",window.scrollY>50);
});