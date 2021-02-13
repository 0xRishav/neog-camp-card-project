const likeBtn = document.querySelector('.like-icon');
const likeCounter = document.querySelector('.like-counter');
let intialCount = 256;

clickHandler = () => {
    intialCount+=1;
    likeCounter.innerHTML=intialCount;
}

// console.log(allH)
likeBtn.addEventListener('click',clickHandler)
