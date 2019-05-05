<template>
  <section class="mdev-full-section">
    <!-- Google Maps Container Mask -->
    <div data-map-active class="mdev-map-location">
      <!-- Maps Component -->
      <google-map :initMap="animLoaded" :mapData="mapData" v-on:mapIsLoaded="initPresentation" ></google-map>
      <!-- Contact Information -->
      <!-- Phone Number -->
      <div
        v-in-viewport
        class="mdev-map-info u-c-white u-text-right a-flyin a-flyin-left" data-map-tel >
        <div class="map-info-content u-text-left">
          <!-- Symbol -->
          <span class="info-type u-c-primary">t. </span>
          <!-- Content -->
          <a :href="contact.phoneUrl"
            target="_blank"
            :title="contact.phoneTitle">
            {{ contact.phoneNumber }}
          </a>
        </div>
      </div>
      <!-- Email -->
      <div
        v-in-viewport
        class="mdev-map-info u-c-white a-flyin a-flyin-right" data-map-mail >
        <div class="map-info-content u-text-left">
          <!-- Symbol -->
          <span class="info-type u-c-primary">e. </span>
          <!-- Content -->
          <a :href="contact.emailUrl"
            target="_blank"
            :title="contact.emailTitle">
            {{ contact.email }}
          </a>
        </div>
      </div>
      <!-- Address -->
      <div
        v-in-viewport
        class="mdev-map-info u-c-white u-text-right a-flyin a-flyin-left" data-map-address >
        <div class="map-info-content u-text-left">
          <!-- Symbol -->
          <span class="info-type u-c-primary">a. </span>
          <!-- Content -->
          <a :href="contact.addressUrl"
            target="_blank"
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
    <div data-map-active class="mdev-box-dec a-flyin a-flyin-right" v-in-viewport></div>
    <div data-map-active class="mdev-frame-dec a-blur-in" v-in-viewport></div>
  </section>
</template>

<script>
import googleMap from '../shared/google-map.vue';

export default{
  name: 'ContactMap',
  props: ['animLoaded'],
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
        addressUrl: 'https://www.google.com/maps/place/MDEV+Digital+Inc./@42.992238,-81.2151707,17z/data=!3m1!4b1!4m5!3m4!1s0x882eedc4c74f6a6b:0x4640e8cfca6cbe7e!8m2!3d42.992238!4d-81.212982',
        addressTitle: 'Get Directions to MDEV Digital.',
      },

      mapData: {
        pinLocation:  {lat: 42.991934, lng: -81.213673},
        mapCenter: {lat: 42.992844, lng: -81.211459},
        mapIcon: require('../../assets/images/map/location-ICON.png'),
        mapStyle: 'hybrid',
        zoom: false,
        controls: false,
        kbShortcuts: false,
        scroll: false,
        drag: false,
        zoomLevel: 17.2
      }
    };
  },

  methods: {
    initPresentation() {
      // Emit event for Parent
      var mapObject = document.querySelectorAll('[data-map-active]');
      for ( var i=0; i < mapObject.length; i++ ) {
        this.addClass(mapObject[i], '--map-loaded');
      }
    }
  },

  components: {
    'google-map'  : googleMap
  }
};
</script>



<style lang="scss" scoped>
/*-------------------------------------*/
/* Contact--Map Component Styles
/--------------------------------------*/

.mdev-map-location {
  width: 100%;
  position: relative;
  left: 0;
  overflow: hidden;
  height: 90vh;
  z-index: 3;
  opacity: 0;
  transition: opacity 1.4s;

  @media #{$portrait} {
    width: 100%;
  }
}

.mdev-g-map {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 1;
  filter: grayscale(.2) blur(5px);
  transition: 1s filter 1.4s;

  &:after {
    @include pseudo();
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    box-shadow: inset 0 0 160px 16vw rgba(0, 0, 0, .9);
    z-index: 2;
    @media #{$portrait} {
      box-shadow: inset 0 0 150px 30vw rgba(0, 0, 0, .9);
    }
  }
}

.mdev-full-section {
  padding-top: 70px;
  margin-top: -70px;

  @media #{$portrait} {
    margin-bottom: 30px;
    margin-top: -30px;
  }
}

// Map Info

.mdev-map-info {
  position: absolute;
  z-index: 3;
  padding: 10px 0;
  line-height: 130%;
  border-bottom: 4px solid $color-brand-accent;
  font-size: 1.8vw;
  transition: all .4s;

  @media #{$portrait} {
    font-size: 3.8vw;
  }

  &:hover,
  &:focus,
  &:active {
    border-bottom: 4px solid $white;
    transform: scale(1.05);
  }

  &:nth-child( odd ) {
    transform-origin: right bottom;
  }

  &:nth-child( even ) {
    transform-origin: left bottom;
  }

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

    @media #{$portrait} {
      font-size: 3.8vw;
    }
  }
}

// Decoration Overrides
.mdev-box-dec {
  width: 32vw;
  height: 60vh;
  right: 0;
  bottom: 75px;

  @media #{$portrait} {
    width: 70vw;
    right: 10%;
    bottom: 20px;
  }
}

.mdev-frame-dec {
  width: 44vw;
  left: 10%;
  bottom: 50%;
  height: auto;
  top: 0;
  opacity: 0;
  transition: opacity 1s;

  @media #{$portrait} {
    width: 70vw;
    top: 35px;
  }
}

// Position Element
[ data-map-tel ] {
  left: 0;
  top: 10%;
  padding-left: 10%;

  @media #{$portrait} {
    font-size: 5.8vw;
  }
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


// Active Classes
.--map-loaded {
  opacity: 1;

  .mdev-g-map {
    filter: grayscale(1) blur(0);
  }
}

/*--------------------------------------*/
</style>
