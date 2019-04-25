<template>
      <!-- Map Container for Maps API -->
      <div class="mdev-g-map" id="map"></div>
</template>

<script>
export default{
  name: 'GoogleMaps',

  props: [ 'mapData', 'initMap' ],

  methods: {
    setupMap() {
      // Pin Location
      let pinLocation = this.mapData.pinLocation;
      // Map Settings
      let mapCenter = this.mapData.mapCenter;
      let zoom = this.mapData.zoomLevel;
      // Get Window Information
      let mainWindow = window;
      let windowHeight = mainWindow.screen.availHeight;
      let windowWidth = mainWindow.screen.availWidth;

      // Check to see if it is Portrait or Landscape
      if ( windowHeight > windowWidth ) {
        // If portrait, center map and pin
        mapCenter = pinLocation;
      }

      let map = new google.maps.Map(document.getElementById('map'), {
        zoom: zoom,
        center: mapCenter,
        mapTypeId: this.mapData.mapStyle,
        zoomControl: this.mapData.zoom,
        mapTypeControl: this.mapData.controls,
        scaleControl: this.mapData.controls,
        rotateControl: this.mapData.controls,
        fullscreenControl: this.mapData.controls,
        scrollwheel: this.mapData.scroll,
        navigationControl: this.mapData.controls,
        mapTypeControl: this.mapData.controls,
        scaleControl: this.mapData.controls,
        draggable: this.mapData.drag,
        disableDoubleClickZoom: this.mapData.zoom,
        panControl: this.mapData.drag,
        streetViewControl: this.mapData.controls,
        keyboardShortcuts: this.mapData.kbShortcuts,

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
        icon: this.mapData.mapIcon
      });

      // Wait for map to load and add active class
      map.addListener('tilesloaded',  () => {
        this.$emit('mapIsLoaded');
      });
    }
  },

  watch: {
    initMap: function(newVal, oldVal) { // watch it
      this.setupMap();
    }
  },
};
</script>
