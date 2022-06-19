let btn = document.querySelector('.btn')
let hint = document.querySelector('.hint')
let accBtn = document.getElementsByClassName('acc-items')
let accContent = document.getElementsByClassName('acc-title')
let shadowBtn = document.querySelector('.shadow')
let hideBlock = document.querySelector('.left')
let closeLeft = document.querySelector('.close')
let start = document.querySelector('.start-btn')
let icon1 = document.querySelector('.move-1')
let icon2 = document.querySelector('.move-2')
let icon3 = document.querySelector('.move-3')
let icon4 = document.querySelector('.move-4')

let step = 0

btn.addEventListener('mouseenter', function(){
    hint.classList.add('active')

})

btn.addEventListener('mouseleave', function(){
    hint.classList.remove('active')

})

for (let i = 0; i < accBtn.length; i++) {
    accBtn[i].addEventListener('click', function(){
        accContent[i].classList.toggle('active')
      
    })
    
}

shadowBtn.addEventListener('click', function(){
    hideBlock.classList.add('active')

})

closeLeft.addEventListener('click', function(){
    hideBlock.classList.remove('active')

})

start.addEventListener('click', function(){
    run()
    
})

function run() {
    step++ 
    icon1.style.transform = `translateX(-${step}px)`
    icon2.style.transform = `translateX(${step}px)`

    icon3.style.transform = `translateX(-${step}px)`
    icon4.style.transform = `translateX(${step}px)`

    if(step < 333)
    requestAnimationFrame(run)
    console.log(step);

}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });