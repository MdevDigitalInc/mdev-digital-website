<template>
  <section class="mdev-featured-services --section-space">
    <div class="mdev-featured-wrapper flex flex-vert-center"
      :class="{ '--flip-order' : flip, 'flex-hor-start' : flip, 'flex-hor-end' : !flip }">
      <!-- Content slot for text -->
      <div class="mdev-service-content">
        <slot name="contentSlot"></slot>
      </div>
      <!-- Media slot for image -->
      <div class="mdev-service-media">
        <slot name="mediaSlot"></slot>
      </div>
    </div>

    <!-- Circle Link -->
    <circle-link
      v-if="linkData"
      :linkData="linkData"></circle-link>
  </section>
</template>




<script>
// TODO - ADD CIRCLE LINK AND LINK THAT SHIT ALL UP
import CircleLink       from '../shared/circle-bar-link.vue';

export default {
  name: 'ServicesFeatured',
  props: ['flip', 'linkData'],
  components: {
    'circle-link' : CircleLink
  }
};
</script>



<style lang="scss">

/*-------------------------------------*/
/* Featured-Content Component Styles
/--------------------------------------*/
.mdev-featured-services {
  width: 100%;
  position: relative;
  overflow: hidden;

  @media #{$portrait} {
    margin: 100px 0;
  }

  // Applies to all images
  img {
    width: 100%;
  }

  // Feature wrapper to keep things centered
  .mdev-featured-wrapper {
    width: 91%;
    margin: 0 0 0 9%;

    @media #{$portrait} {
      width: 100%;
      flex-wrap: wrap;
      margin: 0;
    }

    @media #{$phone-only} {
      width: 100%;
    }
  }

  .mdev-service-media {
    width: 45%;
    order: 2;
    position: relative;
    z-index: 2;
    margin-left: 5vw;

    @media #{$portrait} {
      width: 100%;
      margin: 0 auto 100px;
    }
  }

  // Content portion of the split
  .mdev-service-content {
    width: 55%;
    order: 1;
    padding-right: 10%;

    @media #{$portrait} {
      width: 100%;
      order: 4;
      padding: 0 10%;
    }

    @media #{$xl-up} {
      width: 42%;
    }

    .--pre-title {
      text-transform: uppercase;
      font-weight: 100;
      font-size: 30px;
      position: relative;
      left: 5px;
    }
  }

  .mdev-service-title {
    position: relative;

    @media #{$tablet-only} {
      width: 80%;
    }

    &:before {
      @include pseudo();
      top: 15%;
      left: -3000px;
      right: 30%;
      bottom: 15%;
      z-index: -1;
      border: 4px solid $color-brand-accent;
    }
  }

  .mdev-service-subtitle {
    margin-bottom: 10px;
  }

  .mdev-service-desc {
    width: 85%;
  }
}

.mdev-featured-services .mdev-featured-wrapper.--flip-order {
  margin: 0 10% 0 0;

  @media #{$portrait} {
    margin: 0 auto;
  }

  .mdev-service-content {
    order: 4;
    padding-right: 0;
    padding-left: 10%;

    @media #{$portrait} {
      margin: 100px auto;
      padding: 0 10%;
    }
  }

  .mdev-service-media {
    margin-right: 5vw;
    margin-left: 0;

    @media #{$portrait} {
      margin: 0;
    }
  }

  // Override decorationn direction
  .mdev-service-title:before {
    right: -3000px;
    left: 20%;
  }
}

.mdev-featured-services.--no-image .mdev-featured-wrapper {
  margin: 0 9%;
  width: auto;

  .mdev-service-title {
    margin: 10% 0;

    &:before {
      left: 20%;
      right: -300px;
      top: -15%;
      bottom: -15%;
    }
  }
}

// Flips media to the right
// Every other block in this layout is flipped
// Includes provisions to change the background lines
/*--------------------------------------*/
</style>
