const body = document.querySelector('body');
const input = document.querySelector('input');
const div = document.querySelector('div');
const menuBurger = document.querySelector('.menu-burger');

let flag = false;
input.addEventListener('click', () => {
  if(!flag) {
    body.style.backgroundColor = 'green';
    div.classList.add('checked');
    flag = true;
  } else {
    flag = false;
    div.classList.remove('checked');
    body.style.backgroundColor = 'white';
    console.log(flag)
  }
});

menuBurger.addEventListener('click', () => {
if(!flag){
  flag = true;
  menuBurger.classList.add('menu');
} else{
  flag = false;
  menuBurger.classList.remove('menu');
}
});