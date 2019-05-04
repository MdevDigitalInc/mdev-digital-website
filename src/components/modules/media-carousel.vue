<template>
  <section class="mdev-media-carousel"
    v-view="(e) => inView = ( this.multiImage ? checkVisibility(e, .3) : false )">
    <!-- Image Loop -->
    <picture
      :aria-hidden="(multiImage && index != desiredIndex)"
      v-for="(images, index) in media"
      :class="{ '--active' : (index == desiredIndex)}">
        <source media="screen" :srcset="loadImage(images.image) + '.webp'" type="image/webp">
        <source media="screen" :srcset="loadImage(images.image)" type="image/png">
        <img :alt="images.imageDesc" :src="loadImage(images.image)">
    </picture>
    <!-- Optional Controls -->
    <div v-if="multiImage"
      :class="{'flex-hor-end' : flip, 'flex-hor-start' : !flip}"
      class="mdev-media-controls flex flex-vert-center">
      <button
        aria-label="View Previous Image"
        class="mdev-media-skip" v-on:click.stop="traverse(-1, $event)">
        <span class="u-screenreader"> Previous </span>
      </button>
      <button
        aria-label="View Next Image"
        class="mdev-media-skip" v-on:click.stop="traverse(1, $event)">
        <span class="u-screenreader"> Next </span>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  // [ Media Carousel Component ]
  // --------------------------------------------------------------
  // This component is used to intelligently load images for the
  // Service Pages of the site. It includes basic logic to display either
  // a single image or a carousel with navigation based on the number
  // of media objects passed from the parent.
  //
  // [ Expected Data Structure ]
  // media: [
  //   {
  //    image: 'relative/path/to/image',
  //    imageDesc: 'a11y description of image'
  //   }
  // [
  //
  name: 'MediaCarousel',

  props: [ 'media', 'flip' ],

  // [ Data ]
  // desiredIndex - Is used to track the current image
  // beind displayed.
  data: function(){
    return{
      desiredIndex: 0,
      intervalTimer: null,
      // Randomize interval so they don't all switch at the same time
      // Sets min / max time in miliseconds
      interval: (Math.random() * (2600 - 2100) + 2100 ),
      inView: false,
      // Timer container for Scolling
      scrollTimer: null,
      // Scrill debounce interval
      scrollTime: 100,
      multiImage: false
    };
  },
  // Created Component
  created: function () {
    // Check length of array to determine if this is
    // a multi image gallery or single imamge
    if (this.media.length > 1) {
      this.multiImage = true;
    }
  },

  // Add automatic interval on mount
  mounted: function() {
    // Only attach listener if there are multiple pictures
    // and the carousel is in view at the time
    if (this.multiImage && this.inView) {
      this.initialize();
    }
    // Event Listener on scroll with debounce
    window.addEventListener('scroll', () => {
      // Clear scroll timer (Debounce)
      clearTimeout(this.scrollTimer);
      // Initiate scroll timer (Bounce)
      this.scrollTimer = setTimeout(this.initialize,this.scrollTime);
    });
  },

  // Remove automatic interval on dismount
  beforeDestroy: function() {
    // Destroy listener if there are multiple pictures
    if (this.multiImage) {
      clearInterval(this.intervalTimer);
    }
  },

  methods: {
    // [ Traverse Function ] - Switches current active image by
    // incrementing or decrementing the desiredIndex. This in turn
    // flips the '.--active' class on the image with corresponding
    // index.
    traverse(direction, e) {
      // inView is updated by a ternary operation on the mdev-media-carousel
      // parent div. Checks to see if the element is within view treshhold
      // and enables the traversal function
      if ( this.inView ) {
        // IF event is fired by the user, stop the timer.
        if ( e ) {
          clearInterval(this.intervalTimer);
        }
        // Needs array length to know the bounds of the array
        // We don't want it to try to load images that do not exist
        let arrayLen = this.media.length - 1;
        // Are we going passed the end of the array?
        if (direction + this.desiredIndex > arrayLen) {
          // Reset to start
          this.desiredIndex = 0;
        }
        // Are we going passed the start of the array?
        else if (direction + this.desiredIndex < 0) {
          // Reset to the end
          this.desiredIndex = arrayLen;
        }
        else {
          // Move as desired
          this.desiredIndex += direction;
        }
      }
    },

    // Simple callback function
    playback() {
      // Traverse forwrad
      this.traverse(1);
    },

    initialize() {
      // If a timer has been set, and it is multiImage carousel and the carousel
      // is inside the viewport, initialize the interval timer.
      if ( !this.intervalTimer && this.multiImage && this.inView) {
        this.intervalTimer = window.setInterval( this.playback, this.interval);
      }
    }
  }
};
</script>

<style lang="scss">
/*-------------------------------------*/
/* BASE TEMPLATE Component Styles
/--------------------------------------*/
$buttonSize: 10px;

.mdev-media-carousel {
  position: relative;
  overflow: visible;
  width: 100%;
  z-index: 1;

  picture {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    transition: opacity .7s;
  }

  picture.--active {
    position: relative;
    opacity: 1;
  }

  &.--shadow picture {
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, .1);
  }

  .mdev-media-controls {
    margin-top: 35px;
    width: 100%;
    position: relative;
    z-index: 2;

    @media #{$portrait} {
      margin: 0;
      padding: 20px;
    }
  }

  .mdev-media-skip {
    appearance: none;
    background: transparent;
    width: 0;
    height: 0;
    border-top: $buttonSize solid transparent;
    border-right: ($buttonSize * 2) solid $black;
    border-left: none;
    border-bottom: $buttonSize solid transparent;
    margin: 0 10px;
    transition: all .4s;
    cursor: pointer;
    outline: none;

    &:hover {
      border-right: ($buttonSize * 2) solid $color-brand-accent;
    }
    &:active {
      border-right: ($buttonSize * 2) solid darken($color-brand-accent, 15%);
    }

    &:nth-child( 2 ) {
      transform: rotate( 180deg );
    }
  }

  .flex-hor-end,
  .flex-hor-start {
    @media #{$portrait} {
      justify-content: flex-end;
    }
  }
}

/*--------------------------------------*/
</style>
