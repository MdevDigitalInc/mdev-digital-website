<template>
  <section class="mdev-full-section">
    <!-- Google Maps Container Mask -->
    <div class="mdev-map-location" v-in-viewport>
      <!-- Map Container for Maps API -->
      <div class="mdev-g-map" id="map"></div>

      <!-- Contact Information -->
      <!-- Phone Number -->
      <div class="mdev-map-info u-c-white u-text-right" data-map-tel >
        <div class="map-info-content u-text-left">
          <!-- Symbol -->
          <span class="info-type u-c-primary">t. </span>
          <!-- Content -->
          <a :href="contact.phoneUrl"
          :title="contact.phoneTitle">
            {{ contact.phoneNumber }}
          </a>
        </div>
      </div>
      <!-- Email -->
      <div class="mdev-map-info u-c-white" data-map-mail >
        <div class="map-info-content u-text-left">
          <!-- Symbol -->
          <span class="info-type u-c-primary">e. </span>
          <!-- Content -->
          <a :href="contact.emailUrl"
          :title="contact.emailTitle">
            {{ contact.email }}
          </a>
        </div>
      </div>
      <!-- Address -->
      <div class="mdev-map-info u-c-white u-text-right" data-map-address >
        <div class="map-info-content u-text-left">
          <!-- Symbol -->
          <span class="info-type u-c-primary">a. </span>
          <!-- Content -->
          <a :href="contact.addressUrl"
          :title="contact.address">
            <!-- City -->
            <span class="map-info-city u-uppercase u-bold">
              {{ contact.city }}
            </span>
            <span class="map-info-street">
              {{ contact.address }}
            </span>
          </a>
        </div>
      </div>
    </div>
    <!-- Decorative Element -->
    <div class="mdev-box-dec a-flyin a-flyin-right" v-in-viewport></div>
    <div class="mdev-frame-dec a-blur-in" v-in-viewport></div>
  </section>
</template>




<script>
export default{
  name: 'ErrorPage',
  data: function(){
    return{
      contact: {
        phoneNumber: '519.860.4261',
        phoneUrl: 'tel:1-519-860-4261',
        phoneTitle: 'Call us today!',
        email: 'hello@mdev.digital',
        emailTitle: 'Lets start something new!',
        emailUrl: 'mailto:hello@mdev.digital',
        city: 'London, Ontario',
        address: '100 Kellogg Lane, N5W 0B4',
        addressUrl: 'http://google.ca',
        addressTitle: 'Come visit our offices!'
      }
    };
  },

  mounted: function() {
    var windowSize = $(window).width();
    var kelloggs = {lat: 42.991934, lng: -81.213673};

    var kelloggscenter = {lat: 42.992844, lng: -81.211459};
    var zoom = 17.2;

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: zoom,
      center: kelloggscenter,
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
      position: kelloggs,
      map: map,
      icon: require('../../assets/images/map/location-ICON.png')
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



<style lang="scss" scoped>

/*-------------------------------------*/
/* 404 Component Styles
/--------------------------------------*/
.mdev-map-location {
  width: 90%;
  position: relative;
  left: 0;
  overflow: hidden;
  height: 90vh;
  z-index: 3;
}

.mdev-g-map {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 1;
  filter: grayscale(1) blur(5px);
  transition: filter 1.4s;

  &:after {
    @include pseudo();
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    box-shadow: inset 0 0 12vw 13vw rgba(0, 0, 0, .95);
    z-index: 2;
  }
}

.--map-loaded {
  filter: grayscale(1) blur(0);
}

.mdev-box-dec {
  width: 72vw;
  height: 60vh;
  right: 0;
  bottom: 75px;
}

.mdev-frame-dec {
  width: 40vw;
  height: 30vh;
  left: 10%;
  top: 0;
}

.mdev-full-section {
  padding-top: 70px;
  margin-top: -70px;
}

// Map Info

.mdev-map-info {
  position: absolute;
  z-index: 3;
  padding: 10px 0;
  line-height: 130%;
  border-bottom: 8px solid $white;
  font-size: 1.8vw;

  .map-info-content,
  a {
    display: inline-block;
  }

  .map-info-city,
  .map-info-street {
    display: block;
  }

  .info-type {
    font-weight: 700;
  }
}

/*--------------------------------------*/

[ data-map-tel ] {
  left: 0;
  top: 10%;
  padding-left: 10%;
}

[ data-map-mail ] {
  right: 0;
  top: 40%;
  padding-right: 5%;
}

[ data-map-address ] {
  left: 0;
  bottom: 10%;
  padding-left: 20%;
}

</style>
