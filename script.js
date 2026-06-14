```javascript
window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.style.background = "#020617";
    }else{
        navbar.style.background = "rgba(15,23,42,.85)";
    }

});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if(scrollY >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href").includes(current)){
            link.classList.add("active");
        }

    });

});

const revealItems = document.querySelectorAll(
".about,.property-card,.agent-card,.gallery-grid img,.contact"
);

revealItems.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "all .8s ease";

});

function revealOnScroll(){

    revealItems.forEach(item => {

        const top = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if(top < windowHeight - 100){
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

console.log("Real Estate Website Loaded");
```
