const textSlide = document.querySelector(".text-slide");
const text = textSlide.querySelectorAll("p.carousel-text");

// const prev = document.querySelector(".prev");
// const next = document.querySelector(".next");

let counter = 1;
// const size = text[0].clientWidth;
const size = "100";
const timeInterval = 1500;

//to set the slide one as the first slide instead of the clone
textSlide.style.transform = `translateX(-${size * counter})`;

//looping the slider every 2s
setInterval(() => {
    if (counter >= text.length - 1) return;
    console.log(counter);
    textSlide.style.transition = `transform 0.8s ease`;
    counter++;
    textSlide.style.transform = `translateX(-${size * counter}%)`;

}, timeInterval);

textSlide.addEventListener('transitionend', () => {
    if (text[counter].id === 'lastClone') {
        textSlide.style.transition = `none`;
        counter = text.length - 2;
        textSlide.style.transform = `translateX(-${size * counter}%)`;
    }

    if (text[counter].id === 'firstClone') {
        textSlide.style.transition = `none`;
        counter = text.length - counter;
        textSlide.style.transform = `translateX(-${size * counter}%)`;
    }
});