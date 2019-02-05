<template>
  <section class="mdev-featured-services --section-space">
    <div class="mdev-featured-wrapper flex flex-vert-center flex-hor-end"
      :class="{ '--flip-order' : flip }">
      <!-- Content slot for text -->
      <div class="mdev-service-content">
        <slot name="contentSlot"></slot>
      </div>
      <!-- Media slot for image -->
      <div class="mdev-service-media">
        <slot name="mediaSlot"></slot>
      </div>
    </div>
  </section>
</template>




<script>
// TODO - ADD CIRCLE LINK AND LINK THAT SHIT ALL UP
export default {
  name: 'ServicesFeatured',
  props: ['flip']
};
</script>



<style lang="scss">

/*-------------------------------------*/
/* Featured-Content Component Styles
/--------------------------------------*/
.mdev-featured-services {
  width: 100%;
  position: relative;

  // Applies to all images
  img {
    width: 100%;
  }

  // Feature wrapper to keep things centered
  .mdev-featured-wrapper {
    width: 90%;
    margin: 0 0 0 10%;

    @media #{$portrait} {
      width: 80%;
      flex-wrap: wrap;
    }

    @media #{$phone-only} {
      width: 78%;
    }
  }

  // Media portion of the split
  // Before pseudo element controls the background green lines
  // They are merely decorative and get overriden often
  .mdev-service-media {
    width: 30%;
    order: 2;
    position: relative;
    z-index: 2;

    @media #{$portrait} {
      width: 100%;
      margin: 100px auto;
    }
  }

  // Content portion of the split
  .mdev-service-content {
    width: 60%;
    order: 1;

    @media #{$portrait} {
      width: 100%;
    }
  }
}

// Flips media to the right
// Every other block in this layout is flipped
// Includes provisions to change the background lines
.--flip-order .mdev-service-content {
  margin-left: 5vw;
  margin-right: 0;
  order: 4;

  @media #{$portrait} {
    order: 1;
    margin: 100px auto;
  }
}

/*--------------------------------------*/
</style>
