/*--------Slider --------*/

var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



  /*--------countdown--------*/

  const counters = document.querySelectorAll('.counter');
  console.log(counters);
  counters.forEach((counter)=>{
      console.log(counter);
      counter.innerHTML = 0;
const updateCounter = () =>{
let targetCount = +counter.getAttribute('data-target')
// console.log(targetCount);
const startingCount = Number(counter.innerHTML);
const incr = targetCount / 100;
if(startingCount< targetCount){
counter.innerHTML = `${Math.round(startingCount+incr)}`;
setTimeout(updateCounter,10);
}
else{
counter.innerHTML = targetCount;
}
}
updateCounter();
  })
