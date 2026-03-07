const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){

reveals.forEach((el)=>{

const windowHeight = window.innerHeight;
const elementTop = el.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){

el.classList.add("active");

}
const images = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

images.forEach(img=>{
img.addEventListener("click",()=>{
lightbox.style.display="flex";
lightboxImg.src = img.src;
});
});

lightbox.addEventListener("click",()=>{
lightbox.style.display="none";
});

});

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();