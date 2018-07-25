<template>
  <section class="mdev-full-section">
    <!-- Google Maps Container Mask -->
    <div class="mdev-map-location" v-in-viewport>
      <!-- Maps Component -->
      <google-map
        :mapCenter="mapCenter"
        :pinLocation="pinLocation"
        :mapIcon="mapIcon" ></google-map>
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
import googleMap from '../shared/google-map.vue';

export default{
  name: 'ContactMap',
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
        addressTitle: 'Come visit our offices!',
      },

      pinLocation:  {lat: 42.991934, lng: -81.213673},
      mapCenter: {lat: 42.992844, lng: -81.211459},
      mapIcon: require('../../assets/images/map/location-ICON.png')
    };
  },

  methods: {
    loadImage(path){
      return require('../../assets/images/' + path);
    }
  },

  components: {
    'google-map'  : googleMap
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
  filter: grayscale(.5) blur(5px);
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

// Active Classes
.--map-loaded {
  filter: grayscale(.5) blur(0);
}

// Decoration Overrides
.mdev-box-dec {
  width: 72vw;
  height: 60vh;
  right: 0;
  bottom: 75px;
}

.mdev-frame-dec {
  width: 40vw;
  height: 10vh;
  left: 10%;
  top: 0;
}

// Position Element
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

/*--------------------------------------*/
</style>
