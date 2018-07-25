<template>
      <!-- Map Container for Maps API -->
      <div class="mdev-g-map" id="map"></div>
</template>

<script>
export default{
  name: 'GoogleMaps',

  props: [ 'mapCenter', 'pinLocation', 'mapIcon' ],

  mounted: function() {
    // Pin Location
    let pinLocation = this.pinLocation;
    // Map Settings
    let mapCenter = this.mapCenter;
    let zoom = 17.2;

    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: zoom,
      center: mapCenter,
      mapTypeId: 'hybrid',
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false,
      scrollwheel: false,
      navigationControl: false,
      mapTypeControl: false,
      scaleControl: false,
      draggable: false,
      disableDoubleClickZoom: true,
      panControl: false,
      streetViewControl: false,
      keyboardShortcuts: false,

      styles: [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#bdbdbd"
            }
          ]
        },
        {
          "featureType": "landscape.man_made",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#a0a0a0"
            }
          ]
        },
        {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
        },
        {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
        },
        {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
        },
        {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
          "color": "#9e9e9e"
          }
        ]
        },
        {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
          "color": "#ffffff"
          }
        ]
        },
        {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
          {
          "color": "#cdcdcd"
          }
        ]
        },
        {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
          "color": "#757575"
          }
        ]
        },
        {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
          "color": "#dadada"
          }
        ]
        },
        {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
          "color": "#616161"
          }
        ]
        },
        {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
          "color": "#9e9e9e"
          }
        ]
        },
        {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
          "color": "#e5e5e5"
          }
        ]
        },
        {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
          "color": "#eeeeee"
          }
        ]
        },
        {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
          "color": "#c9c9c9"
          }
        ]
        },
        {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
          "color": "#9e9e9e"
          }
        ]
        }
        ]
    });
    var marker = new google.maps.Marker({
      position: pinLocation,
      map: map,
      icon: this.mapIcon
    });

    // Wait for map to load and add active class
    map.addListener('tilesloaded', function () {
      $('.mdev-g-map').addClass('--map-loaded');
    });
  },

  methods: {
    loadImage(path){
      return require('../../assets/images/' + path);
    },
  }
};
</script>



<style lang="scss">

/*-------------------------------------*/
/* 404 Component Styles
/--------------------------------------*/
/*--------------------------------------*/
</style>
