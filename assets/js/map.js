
var map;

function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 21.588261, lng: 105.822443},
        zoom: 18,
        styles: [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "invert_lightness": true
                    },
                    {
                        "saturation": "-9"
                    },
                    {
                        "lightness": "0"
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "all",
                "stylers": [
                    {
                        "weight": "1.00"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "weight": "0.49"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "weight": "0.01"
                    },
                    {
                        "lightness": "-7"
                    },
                    {
                        "saturation": "-35"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            }
        ]

    });
    var marker = new google.maps.Marker({

        position: {lat: 21.588261, lng: 105.8224430},

        map: map,

        title: 'Design Studio "Atlantida"',

        // Укажем свою иконку для маркера
        icon: '../img/Icon_Logo_copy_2.png'
    });
}