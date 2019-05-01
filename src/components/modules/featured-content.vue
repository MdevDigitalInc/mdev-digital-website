<template>
  <section class="mdev-featured-content">
    <div class="mdev-featured-wrapper flex flex-vert-start"
      :class="{ '--flip-order' : flip, 'flex-hor-center' : media, 'flex-hor-start' : !media }">
      <!-- Media slot for image -->
      <div v-if="media" class="mdev-service-media">
        <slot name="mediaSlot"></slot>
      </div>
      <!-- Content slot for text -->
      <div class="mdev-service-content" :class="{ '--nomedia' : !media }">
        <slot name="contentSlot"></slot>
      </div>
    </div>
    <!-- Optional decorations -->
    <!-- flip changes based on config flag -->
    <circle-bar
      v-if="serviceConfig.showDecoration"
      :reverse="serviceConfig.reverse">
    </circle-bar>
  </section>
</template>

<script>
// serviceConfig contains instructions for decorative elements
// lastChild will only flip true for the final service that has no image
// flip will turn true every second instance

// [ Documentation ] - featured-content-component
// -----------------------------------------
//
// [ Dependencies ]
// CircleBarDecoration - Simple decorative component
// serviceConfig - Data object passed down from parent, contains presentation config
// media - flag passed down by parent to change rendering based on wether there is an image or not
// flip - flag passed down by the parent every time index is an ODD number in the loop
//
// [ Description ]
// This is a versatile component designed primarily for the services page. It has great
// flexibility in terms of presentation. The basics of this component are 2 slots, one
// for media and one for content. As such this element is only concerned with scaffolding.
// Meaning it will keep both slots separate at a 40/60 split with ability to swap between.
//
// These slots can be re-arranged based on the flags passed by the parent. By virtue of
// having slots this element can easily take in different markup and presentation.

import CircleBarDecoration     from '../shared/circle-bar-decoration.vue';
  export default{
    name: 'ServicesTile',
    props: ['serviceConfig', 'media', 'flip'],

    components: {
      'circle-bar' :CircleBarDecoration
    }
  };
</script>

<style lang="scss">
/*-------------------------------------*/
/* Featured-Content Component Styles
/--------------------------------------*/

.mdev-featured-content {
  width: 100%;
  position: relative;

  // Applies to all images
  img {
    width: 100%;
  }

  // Feature wrapper to keep things centered
  .mdev-featured-wrapper {
    width: 85%;
    margin: 0 auto;

    @media #{$portrait} {
      width: 80%;
      flex-wrap: wrap;
    }

    @media #{$phone-only} {
      width: 78%;
    }
  }

  p {
    @media #{$laptop-up} {
      font-size: 18px;
      line-height: 190%;
      font-weight: 500;
    }
  }

  h3 {
    margin-bottom: 15px;
  }

  // Media portion of the split
  // Before pseudo element controls the background green lines
  // They are merely decorative and get overriden often
  .mdev-service-media {
    width: 50%;
    order: 1;
    margin-right: 5vw;
    position: relative;
    z-index: 2;
    margin-top: 70px;

    @media #{$portrait} {
      width: 100%;
      margin: 100px auto;
    }

    @media #{$phone-only} {
      margin: 85px auto 25px;
    }

    // Green decorative background lines
    &:before {
      @include pseudo();
      bottom: 25%;
      left: -50px;
      right: 10%;
      top: -50px;
      z-index: -1;
      border: 4px solid $color-brand-accent;

      @media #{$portrait} {
        top: -50px;
        left: -100px;
        bottom: 15vh;
      }

      @media #{$laptop-only} {
        left: -25px;
        top: -25px;
      }
    }

    img {
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, .1);
    }
  }

  // Content portion of the split
  .mdev-service-content {
    width: 50%;
    order: 2;

    @media #{$portrait} {
      width: 100%;
    }
  }

  // Applies to blocks that have no image associated
  // Overrides a series of internal pieces.
  .--nomedia {
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .mdev-service-index,
    .mdev-service-title {
      width: 100%;
    }

    .mdev-service-desc {
      width: 45%;


      @media #{$portrait} {
        width: 100%;
      }
    }

    .mdev-service-topics {
      width: 35%;
      margin-top: 0;
      margin-left: 5%;
      margin-right: 5%;

      @media #{$portrait} {
        width: 100%;
        margin-top: 25px;
      }
    }
  }
}

// Flips media to the right
// Every other block in this layout is flipped
// Includes provisions to change the background lines
.--flip-order .mdev-service-media {
  margin-left: 5vw;
  margin-right: 0;
  order: 3;

  @media #{$portrait} {
    order: 1;
    margin: 100px auto;
  }

  // Green decorative lines
  &:before {
    right: -50px;
    bottom: -50px;
    top: 50px;
    left: 10%;

    @media #{$portrait} {
      left: -100px;
      right: 15%;
    }

    @media #{$laptop-only} {
      bottom: -25px;
      right: -25px;
    }
  }
}

// Square media -Refers to square images in Desktop presentation
// They have different needs in terms of the backgbround lines
// Since they are centered with the image
.--square-media {
  .mdev-service-media,
  .mdev-service-content {
    width: 50%;

    @media #{$portrait} {
      width: 100%;
    }
  }

  // Overrides media presentation for default and flipped configrations
  // Meaning, this will overrides all.
  .mdev-service-media,
  .--flip-order .mdev-service-media {
    &:before {
      top: -50px;
      bottom: -50px;
      left: 15%;
      right: 15%;

      @media #{$portrait} {
        left: 10%;
        top: -25px;
        bottom: -25px;
        right: 10%;
      }

      @media #{$laptop-only} {
        top: -25px;
        bottom: -25px;
      }
    }
  }
}
/*--------------------------------------*/

</style>
