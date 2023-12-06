// const btnPrev = document.querySelector("#btnPrev");
// const btnNext = document.querySelector("#btnNext");
// const sliderItems = document.querySelectorAll(".wrapper__item");
// const slider = document.querySelector(".wrapper")

// slider.innerHTML = sliderItems[0].outerHTML;

// let i = 0;
// btnNext.addEventListener("click", () => {
//     i++;
//     if (i === sliderItems.length) {
//         i = 0;
//     }
    
//     slider.innerHTML = sliderItems[i].outerHTML;
// });

// btnPrev.addEventListener("click", () => {
//     if (i === 0) {
//         i = 2;
//     } else {
//         i--;
//     }
//     slider.innerHTML = sliderItems[i].outerHTML;

// })

// Свойство outerHTML представляет собой свойство DOM (Document Object Model) в браузере JavaScript,
// которое возвращает или устанавливает HTML-код элемента, включая сам элемент и все его дочерние элементы.
// В отличие от свойства innerHTML, которое предоставляет только содержимое элемента без самого элемента,
// outerHTML включает весь HTML-код элемента.