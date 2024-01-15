document.addEventListener('DOMContentLoaded', ()=>{
    if (document.querySelector('#map-index-location')) {

let center = [55.780365,37.705982];
let mark_home = [55.780070,37.703742];

function init() {
  let map = new ymaps.Map('map-index-location', {
    center: center,
    zoom: 16,
    controls: ['zoomControl']
  }, {
    zoomControlPosition: { right: 50, bottom: 30 },
    zoomControlSize: 'auto'
  });

        objectManager = new ymaps.ObjectManager({
            // Чтобы метки начали кластеризоваться, выставляем опцию.
           clusterize: false,
            // ObjectManager принимает те же опции, что и кластеризатор.
            gridSize: 64,
            // Макет метки кластера pieChart.
            clusterIconLayout: "default#pieChart"
        });
    map.geoObjects.add(objectManager);
	
	


    let placemark_home = new ymaps.Placemark(mark_home, {
      hintContent: 'ЖК ИНТЕЛЛИГЕНТ',
      balloonContent: 'ЖК ИНТЕЛЛИГЕНТ'
    }, {
      iconLayout: "default#image",
      iconImageHref: "./img/location/Mark_home.svg",
      iconImageSize: [24, 24],
      iconImageOffset: [-15, -40]
    });
		

    // Создадим 5 пунктов выпадающего списка.
    var listBoxItems = ['Образование', 'Медицина', 'Спорт', 'Торговые центры', 'Парки', 'Культура', 'Магазины', 'Кафе и рестораны', 'Салоны красоты', 'ПОДРОБНЕЕ']
            .map(function (title) {
                return new ymaps.control.ListBoxItem({
                    data: {
                        content: title,
                    },
                    state: {
                        selected: true
                    }
                })
            }),
        reducer = function (filters, filter) {
            filters[filter.data.get('content')] = filter.isSelected();
            return filters;
        },
        // Теперь создадим список, содержащий 5 пунктов.
        listBoxControl = new ymaps.control.ListBox({
            data: {
                content: 'Фильтр',
                title: 'Фильтр'
            },
            items: listBoxItems,
            state: {
                // Признак, развернут ли список.
                expanded: true,
                filters: listBoxItems.reduce(reducer, {})
            }
        });
    map.controls.add(listBoxControl);

    // Добавим отслеживание изменения признака, выбран ли пункт списка.
    listBoxControl.events.add(['select', 'deselect'], function (e) {
        var listBoxItem = e.get('target');
        var filters = ymaps.util.extend({}, listBoxControl.state.get('filters'));
        filters[listBoxItem.data.get('content')] = listBoxItem.isSelected();
        listBoxControl.state.set('filters', filters);
    });

    var filterMonitor = new ymaps.Monitor(listBoxControl.state);
    filterMonitor.add('filters', function (filters) {
        // Применим фильтр.
        objectManager.setFilter(getFilterFunction(filters));
    });

    function getFilterFunction(categories) {
        return function (obj) {
            var content = obj.properties.balloonContent;
            return categories[content]
        }
    }
	
	    map.geoObjects
        .add(placemark_home);
	
	

    $.ajax({
        url: "./script/data.json"
    }).done(function (data) {
        objectManager.add(data);
    });

    //Кнопка подробнее
    listBoxControl.get(9).events.add('click', function (e) {
        var geoObject = objectManager.objects.getById('54');
        window.open(geoObject.properties.link);       
    });

    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты
}


ymaps.ready(init);

    }
})