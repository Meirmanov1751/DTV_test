let btn_1 = document.querySelector('#btn-1');
let btn_2 = document.querySelector('#btn-2');
let btn_3 = document.querySelector('#btn-3');

let images = document.querySelectorAll('#gallery .photos img');

let i = 0;

setInterval(() => {
  images[i].style.display = 'none';
  i++;
  if(i >= images.length){
    i = 0; // переменная i равна 0
  }
  images[i].style.display = 'block';
},10000)

btn_1.onclick = function(){
  images[i].style.display = 'none';
  i=0;
  images[i].style.display = 'block';
}

btn_2.onclick = function(){
  images[i].style.display = 'none';
  i=1;
  images[i].style.display = 'block';
}

btn_3.onclick = function(){
  images[i].style.display = 'none';
  i=2;
  images[i].style.display = 'block';
}
