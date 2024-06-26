const slider = document.querySelector('.slider__container')
const sliderImages = document.querySelectorAll('.slider__container > img')
const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')

let index1 = 0,
    index2 = 1;

function updateSliderImages() {
    sliderImages[index1].style.display = 'block';
    sliderImages[index2].style.display = 'block';
}

prevBtn.addEventListener('click', (e) => {
    sliderImages[index1].style.transform = 'translateX(100%)';
    sliderImages[index2].style.display = 'none';

    // sliderImages[index1].style.display = 'none';
    if (index1 === 0) {
        updateSliderImages();
        return;
    }
    index1 = (index1 - 1 + sliderImages.length) % sliderImages.length
    index2 = index2 > 0 ? index2 - 1 : index1;
    updateSliderImages();
});

nextBtn.addEventListener('click', (e) => {
    sliderImages[index1].style.transform = 'translateX(-100%)';

    sliderImages[index2].style.display = 'none';
    if (index2 === 5) {
        updateSliderImages();
        return;
    }
    // sliderImages[index1].style.display = 'none';
    index1 = index2;
    index2 = (index2 + 1) % sliderImages.length;
    updateSliderImages();
});