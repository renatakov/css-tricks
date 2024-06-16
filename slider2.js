const slider = document.querySelector('.slider__container')
const sliderImages = document.querySelectorAll('.slider__container > img')
const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')

let index1 = 0,
    index2 = 1;

prevBtn.addEventListener('click', (e) => {
    sliderImages[index1].style.display = 'none';
    sliderImages[index2].style.display = 'none';
    if(index1 === 0) {
        sliderImages[index1].style.display = 'block';
        sliderImages[index2].style.display = 'block';
        return;
    }
    index1 = (index1 - 1 + sliderImages.length) % sliderImages.length
    index2 = index2 > 0 ? index2 - 1 : index1;
    sliderImages[index1].style.display = 'block';
    sliderImages[index2].style.display = 'block';
});

nextBtn.addEventListener('click', (e) => {
    sliderImages[index1].style.display = 'none';
    sliderImages[index2].style.display = 'none';
    if(index2 === 5) {
        sliderImages[index1].style.display = 'block';
        sliderImages[index2].style.display = 'block';
        return;
    }
    index1 = index2;
    index2 = (index2 + 1) % sliderImages.length;

    sliderImages[index1].style.display = 'block';
    sliderImages[index2].style.display = 'block';
});


