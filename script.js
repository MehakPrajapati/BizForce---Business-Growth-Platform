// User name check - header pe name dikhao
const userName = localStorage.getItem('bizforce_user');
if (userName) {
    document.getElementById('login-text').textContent = userName;
}

let menu = document.querySelector("#menu");
let navlinks = document.querySelector("#navlinks");

menu.addEventListener("click", function(){
    navlinks.classList.toggle("active");
});

/* SMOOTH SCROLL */
function scrollPage(){
    window.scrollTo({
        top: document.querySelector("#page2").offsetTop,
        behavior: "smooth"
    });
}

function scrollServices(){
    window.scrollTo({
        top: document.querySelector("#page3").offsetTop,
        behavior: "smooth"
    });
}

function freeTrial(){
    alert("Welcome to BizForce Free Trial 🚀");
}

function watchDemo(){
    document.querySelector("#products-section")
    .scrollIntoView({
        behavior: "smooth"
    });
}

/* TOP BUTTON */
let topbtn = document.querySelector("#topbtn");

window.addEventListener("scroll", function(){
    if(window.scrollY > 400){
        topbtn.style.display = "flex";
    } else {
        topbtn.style.display = "none";
    }
});

topbtn.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});