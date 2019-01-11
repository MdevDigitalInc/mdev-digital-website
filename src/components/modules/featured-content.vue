<template>
  <section class="mdev-featured-content --section-space">
    <div class="mdev-featured-wrapper flex flex-vert-center flext-hor-center"
      :class="{ '--flip-order' : flip }">
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

  img {
    width: 100%;
  }

  .mdev-featured-wrapper {
    width: 80%;
    margin: 0 auto;
  }

  .mdev-service-media {
    width: 40%;
    order: 1;
  }

  .mdev-service-content {
    width: 60%;
    order: 2;
  }

  .--flip-order {
    .mdev-service-media {
      order: 3;
    }
  }

  .--nomedia {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    .mdev-service-index,
    .mdev-service-title {
      width: 100%;
    }

    .mdev-service-desc {
      width: 60%;
    }

    .mdev-service-topics {
      width: 40%;
    }
  }
}


/*--------------------------------------*/

</style>
