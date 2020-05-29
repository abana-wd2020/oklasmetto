//--------------------- DESKTOP----------------------

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
} 

//--------------------- MOBILE----------------------

function showSlidesMob(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides_mob");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
   
    slides[slideIndex-1].style.display = "block";
    var text = document.getElementById("text_mob");
    if (slideIndex == 1) {text.innerHTML = "ILLUSTRAZIONI"}
    if (slideIndex == 2) {text.innerHTML = "FUMETTI"}
    if (slideIndex == 3) {text.innerHTML = "FOTOGRAFIE"}
    if (slideIndex == 4) {text.innerHTML = "MOSTRE"}
} 

// Next/previous controls
function plusSlidesMob(n) {
    showSlidesMob(slideIndex += n);
}

// Thumbnail image controls
function currentSlideMob(n) {
    showSlidesMob(slideIndex = n);
}
