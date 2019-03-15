<template>
  <section class="mdev-media-carousel">
    <!-- Image Loop -->
    <img
      :aria-hidden="(media.length > 1 && index != desiredIndex)"
      v-for="(images, index) in media"
      :class="{ '--active' : (index == desiredIndex)}"
      :alt="images.imageDesc" :src="loadImage(images.image)">
    <!-- Optional Controls -->
    <div v-if="media.length > 1"
      :class="{'flex-hor-end' : flip, 'flex-hor-start' : !flip}"
      class="mdev-media-controls flex flex-vert-center">
      <button
        aria-label="View Previous Image"
        class="mdev-media-skip" v-on:click.stop="traverse(-1)">
        <span class="u-screenreader"> Previous </span>
      </button>
      <button
        aria-label="View Next Image"
        class="mdev-media-skip" v-on:click.stop="traverse(1)">
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
      desiredIndex: 0
    };
  },

  methods: {
    // [ Traverse Function ] - Switches current active image by
    // incrementing or decrementing the desiredIndex. This in turn
    // flips the '.--active' class on the image with corresponding
    // index.
    traverse(direction) {
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
  width: 100%;
  z-index: 1;

  img {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    transition: opacity .4s;
  }

  img.--active {
    position: relative;
    opacity: 1;
  }

  .mdev-media-controls {
    margin-top: 15px;
    width: 100%;
    position: relative;
    z-index: 2;
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

    &:hover,
    &:focus,
    &:active {
      border-right: ($buttonSize * 2) solid $color-brand-primary;
    }

    &:nth-child( 2 ) {
      transform: rotate( 180deg );
    }
  }
}

/*--------------------------------------*/
</style>
