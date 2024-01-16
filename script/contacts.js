document.addEventListener('DOMContentLoaded', ()=>{
    if (document.querySelector('#map-contacts-office-sale')) {

let center = [55.778071, 37.704556];
let mark_home = [55.778071, 37.704556];

function init() {
  let map = new ymaps.Map('map-contacts-office-sale', {
    center: center,
    zoom: 17,
    controls: ['zoomControl']
  }, {
    zoomControlPosition: { left: 60, bottom: 250 },
    zoomControlSize: 'auto'
  });

	
	


    let placemark_home = new ymaps.Placemark(mark_home, {
      hintContent: 'ОФИС ПРОДАЖ',
      balloonContent: 'ОФИС ПРОДАЖ'
    }, {
      iconLayout: "default#image",
      iconImageHref: "./img/location/Mark_home.svg",
      iconImageSize: [24, 24],
      iconImageOffset: [-15, -40]
    });
		

    
	    map.geoObjects
        .add(placemark_home);
	


    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты
}


ymaps.ready(init);

    }
})

document.addEventListener('DOMContentLoaded', ()=>{
    if (document.querySelector('#map-contacts-hq')) {

let center = [55.766101,37.582511];
let mark_home = [55.766101,37.582511];

function init() {
  let map = new ymaps.Map('map-contacts-hq', {
    center: center,
    zoom: 17,
    controls: ['zoomControl']
  }, {
    zoomControlPosition: { left: 60, bottom: 250 },
    zoomControlSize: 'auto'
  });

	
	


    let placemark_home = new ymaps.Placemark(mark_home, {
      hintContent: 'ЦЕНТРАЛЬНЫЙ ОФИС',
      balloonContent: 'ЦЕНТРАЛЬНЫЙ ОФИС'
    }, {
      iconLayout: "default#image",
      iconImageHref: "./img/location/Mark_home.svg",
      iconImageSize: [24, 24],
      iconImageOffset: [-15, -40]
    });
		

    
	    map.geoObjects
        .add(placemark_home);
	


    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты
}


ymaps.ready(init);

    }
})