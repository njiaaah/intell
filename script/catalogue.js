
var floorSwiper = document.querySelector('.floor-select-swiper');

const floors = 28

for (var i = floors; i >= 1; i--) {
    var span = document.createElement("span");
    span.textContent = i;
    span.classList.add('floor-swiper-item');

    if (i==1) {
        span.classList.add('floor-selected-item'); 
    }

    span.addEventListener('click',(evt)=>{
        
        document.querySelector('.floor-selected-item').classList.remove('floor-selected-item')
        evt.target.classList.add('floor-selected-item')

    })

    floorSwiper.appendChild(span);

}

floorSwiper.scrollTo(0,3000)


visualViewport.addEventListener("resize", () => {
    const filterChb = document.getElementById('catalogue-page-filter')

   if( !filterChb.checked && document.documentElement.clientWidth <= 1200) {
    filterChb.checked = true
   }
  });


