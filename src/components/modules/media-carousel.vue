<template>
  <section class="mdev-media-carousel">
    <!-- Image Loop -->
    <img
      v-for="(images, index) in media"
      :class="{ '--active' : (index == 0)}"
      :data-slider="(media.length > 1)"
      :alt="images.imageDesc" :src="loadImage(images.image)
      ">
    <!-- Optional Controls -->
    <div
      class="mdev-media-controls flex flex-hor-between flex-vert-center"
      v-if="media.length > 1">
      <button class="mdev-media-back" v-on:click.stop="traverse(-1)">
        BACK
      </button>
      <button class="mdev-media-forward" v-on:click.stop="traverse(-1)">
        FORWARD
      </button>
    </div>
  </section>
</template>




<script>
export default{
  name: 'MediaCarousel',
  // TODO - Edit meta Title
  // SEE - https://github.com/ktquez/vue-head

  props: [ 'media' ],

  data: function(){
    return{

    };
  },

  methods: {
    traverse(direction) {
      let arrayLen = this.testimonials.length - 1;

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


/*--------------------------------------*/

</style>
