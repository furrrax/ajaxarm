//MAP

var viewport = {
    width : $(window).width(),
    height : $(window).height()
};
var width = viewport.width;
var height = viewport.height;

if (width > 1100) {
var zoomval = 16;
} else {
var zoomval = 15;
}

ymaps.ready(function () {
    var myMap = new ymaps.Map('mapApi', {
            center: [68.902070, 33.097492],
            zoom: zoomval
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark = new ymaps.Placemark([68.901562, 33.098957], {
            balloonContent: '<strong>Аякс Арм</strong>'
        }, {
            preset: 'islands#dotIcon',
            iconColor: '#e71401'
        });

    myMap.geoObjects
        .add(myPlacemark);

    myMap.controls.remove('searchControl');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.behaviors.disable('scrollZoom');
});