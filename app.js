const likeBtn = document.querySelector('.like-icon');
const likeCounter = document.querySelector('.like-counter');


var darkModeBtn = document.querySelector('.icon-wrapper');
var htmlClass = document.querySelector('html');
var img = document.querySelector('img');
var iconContainer = document.querySelector('.icon-container');

//like btn function

let intialCount = 256;

clickHandler = () => {
    intialCount+=1;
    likeCounter.innerHTML=intialCount;
}


likeBtn.addEventListener('click',clickHandler)


//dark mode function
function darkMode(){
    if(darkModeBtn.classList.contains('active')){
        var html = `<div class="icon-container"><i class="fas fa-moon fa-2x icon"></i></div>`;
        htmlClass.style.filter = "invert(1) hue-rotate(180deg)";
        img.style.filter = "invert(1) hue-rotate(180deg)";
    }else{
        var html = `<div class="icon-container"><i class="fas fa-sun fa-2x icon"></i></div>`;
        htmlClass.style.filter = "invert(0) hue-rotate(0deg)";
        img.style.filter = "invert(0) hue-rotate(0deg)";
    }
    // var html = `<div class="icon-container"><i class="fas fa-moon fa-2x icon"></i></div>`;
    darkModeBtn.innerHTML = html;
    // htmlClass.style.filter = "invert(1) hue-rotate(180deg)";
    darkModeBtn.classList.toggle("active");
}

darkModeBtn.addEventListener('click',darkMode);