document.addEventListener('DOMContentLoaded', ()=>{

        // SLIDER INIT
        
        function sliderInit(slider, lowerVal, higherVal, min, max, minStart, maxStart, step ) {
            let sliderVals = [
              document.getElementById(lowerVal),
              document.getElementById(higherVal)
            ]
        
            if(document.getElementById(slider)) {
              noUiSlider.create(document.getElementById(slider), {
                start: [minStart, maxStart],
                connect: true,
                behaviour: "drag",
                step: step,
                range: {
                  min: min,
                  max: max
                },
                format: {
                  from: function (value) {
                    return parseInt(value);
                  },
                  to: function (value) {
                    return parseInt(value)
                  }
                }
              })
          
              document.getElementById(slider).noUiSlider.on('update', function(values, handle){
                sliderVals[handle].innerHTML = values[handle].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
              })
            }
        }



        // sliderInit(slider, lowerVal, higherVal, min, max, minStart, maxStart, step )

        // slider = id слайдера
        // lowerVal = id эелемена с минимальным значением
        // higherVal = id эелемена с максимальным значением
        // min = минимальное значение
        // max = максимальное значение
        // minStart = первое значение на старте
        // maxStart = второе значение на старте
        // step = значение на которое меняется val при перетаскивании

        // example on huindex.html

        // filter sliders

        sliderInit('sectionFilterPriceSlider01','sectionFilterPriceSlider01-lower', 'sectionFilterPriceSlider01-upper', 5000000, 30000000, 8000000, 20000000, 50000 )
        sliderInit('sectionFilterSquareSlider01','sectionFilterSquareSlider01-lower', 'sectionFilterSquareSlider01-upper', 30, 150, 40, 90, 1 )
        sliderInit('sectionFilterFloorSlider01','sectionFilterFloorSlider01-lower', 'sectionFilterFloorSlider01-upper', 2, 28, 3, 18, 1 )

})