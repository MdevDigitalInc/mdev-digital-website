<template>
  <section class="mdev-media-carousel">
    <!-- Image Loop -->
    <img
      :aria-hidden="(media.length > 1 && index != desiredIndex)"
      v-for="(images, index) in media"
      :class="{ '--active' : (index == desiredIndex)}"
      :alt="images.imageDesc" :src="loadImage(images.image)
      ">
    <!-- Optional Controls -->
    <div
      class="mdev-media-controls flex flex-hor-end flex-vert-center"
      v-if="media.length > 1">
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
export default{
  name: 'MediaCarousel',

  props: [ 'media' ],

  data: function(){
    return{
      desiredIndex: 0
    };
  },

  methods: {
    traverse(direction) {
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

  .mdev-media-ontrols {
    width: 100%;
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

/*--------------------------------------*/

</style>
