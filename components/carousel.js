const images = document.querySelector('.carousel-imgs');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let index = 0;
let cancelNext = false;

function showImg(i) {
    const total = images.children.length; //Get the total number of available images
    
    index = (i + total) % total;

    images.style.transform = `translateX(-${index * 100}%)`;
}

/*
    Automatically change the displayed photo every certain time
*/
setInterval(() => {
    if(!cancelNext) {
        showImg(index + 1);
    }
    else {
        cancelNext = false;
    }
}, 7000);


/*
    Adds an event handler to the "previous" button, so it changes the image
*/
prevBtn.addEventListener('click', () => {
    showImg(index - 1);
    cancelNext = true;
});

/*
    Adds an event handler to the "next" button, so it changes the image
*/
nextBtn.addEventListener('click', () => {
    showImg(index + 1);
    cancelNext = true;
});


