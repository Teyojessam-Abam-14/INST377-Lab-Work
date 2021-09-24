let slidePosition = 0;
const slides = document.querySelectorAll;
const totalSlides = slides.length;

document.querySelector.addEventListener("click", function(){
    moveToPreviousSlide();
   });

document.getElementById("carousel_item--next").addEventListener("click", function(){
    moveToNextSlide();
   });

function updateSlidePosition(){
   for(slide of slides){
     slide.classList.remove('carousel_item--visible');
     slide.classList.add('carousel_item--hidden');
   }

   slides[slidePosition].classList.add('carousel_item--visible');
}

function moveToPreviousSlide(){
 if(slidePosition == 0){
        slidesPosition = totalSlides - 1;
    } else {
        slidesPosition--;
    }
    updateSlidePosition
}

function moveToNextSlide(){
    
    if(slidePosition == totalSlides - 1){
        slidesPosition = 0;
    } else {
        slidesPosition++;
    }
    updateSlidePosition
}