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

  @media #{$phone-only} {
    margin: 40px 0;
  }

  // Applies to all images
  img,
  picture {
    width: 100%;
  }

  .mdev-service-media {
    width: 45%;
    order: 2;
    position: relative;
    overflow: visible;
    z-index: 2;
    margin-left: 5vw;
    margin-top: 70px;

    @media #{$portrait} {
      width: 100%;
      margin: 0 auto 100px;
    }

    @media #{$phone-only} {
      margin: 0 auto 25px;
    }

    @media #{$xl-up} {
      margin-left: 10vw;
    }
  }

  // Content portion of the split
  .mdev-service-content {
    padding-top: 40px;
    width: 52%;
    order: 1;

    @media #{$landscape} {
      margin-right: 5vw;
      margin-left: 0;
    }

    @media #{$portrait} {
      width: 100%;
      order: 4;
      padding: 0 9%;
      margin: 25px 0 50px;
    }

    @media #{$xl-up} {
      width: 33%;
    }

    .--pre-title {
      left: 5px;
    }
  }

  .mdev-service-title {
    line-height: .96;
    position: relative;
    margin-bottom: 30px;

    @media #{$portrait} {
      margin-bottom: 60px;
    }

    @media #{$tablet-only} {
      width: 80%;
    }

    &:before {
      @include pseudo();
      top: -30px;
      left: -3000px;
      right: 30%;
      bottom: 15%;
      z-index: -1;
      border: 4px solid $color-brand-accent;
    }
  }

  .mdev-service-subtitle {
    margin-bottom: 10px;
    text-transform: capitalize;

    @media #{$phone-only} {
      margin-bottom: 0;
    }
  }

  .mdev-service-desc {
    width: 75%;

    @media #{$portrait} {
      width: 100%;
    }
  }

  p {
    @media #{$laptop-up} {
      line-height: 190%;
      font-weight: 500;
    }

    @media #{$desktop-up} {
      font-size: 18px;
    }
  }

  h3 {
    margin-bottom: 10px;

    @media #{$portrait} {
      margin-bottom: 10px;
    }
  }
}

// [ Flip Order override ]
// .--flip-order class gets applied automatically by the parent
// based on wether it is an ODD or EVEN child in the array.
// These CSS styles are needed to flip the presentation order of
// MEDIA and CONTENT div.
.mdev-featured-services .mdev-featured-wrapper.--flip-order {
  margin: 0 9% 0 0;

  @media #{$portrait} {
    margin: 0;
    with: 100%;
  }

  // Move content to last
  // Adjust padding accordingly
  .mdev-service-content {
    order: 4;

    @media #{$landscape} {
      margin-left: 5vw;
      margin-right: 0;
    }

    @media #{$portrait} {
      padding: 0 9%;
    }
  }

  // Adjust padding
  .mdev-service-media {
    margin-right: 5vw;
    margin-left: 0;

    @media #{$portrait} {
      margin: 0;
    }

    @media #{$xl-up} {
      margin-right: 10vw;
    }
  }

  // Override decorationn direction
  .mdev-service-title:before {
    right: -3000px;
    left: 20%;
  }
}

// [ No Image Override ]
// When there is no image to be displayed in this module, it will default
// To having the TITLE replace the MEDIA and have it start with the media
// On the right. This is OPPOSITE to the default where media is always on
// the left first.
.mdev-featured-services.--no-image .mdev-featured-wrapper {
  margin-left: 10%;

  @media #{$portrait} {
    width: 100%;
    margin-left: 0;
  }

  @media #{$laptop-only} {
    margin: 0 5%;
  }

  @media #{$xl-up} {
    margin-right: 20%;
  }

  // Override title margin
  .mdev-service-title {
    margin: 50px 0;

    @media #{$portrait} {
      padding: 0 9%;
    }

    // Override decoration direction
    &:before {
      right: 30%;
      left: -3000px;
      top: -50px;
      bottom: -50px;
    }
  }

  // Default media to the RIGHT
  .mdev-service-media {
    order: 1;
    margin-left: 0;
    margin-right: 5vw;
  }

  .--pre-title {
    left: 5px;
    bottom: -50px;
  }

  // Default content LEFT
  .mdev-service-content {
    order: 2;
  }

  // Flip Order
  &.--flip-order {
    @media #{$xl-up} {
      margin-left: 20%;
    }
    .mdev-service-media {
      order: 2;
    }

    .mdev-service-content {
      margin-left: 0;
      order: 1;

      @media #{$portrait} {
        order: 3;
      }
    }

    .mdev-service-title:before {
      left: 30%;
      right: -3000px;
    }
  }
}
/*--------------------------------------*/
</style>
