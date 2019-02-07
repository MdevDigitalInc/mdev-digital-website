<template>
  <div
    class="d-divider flex flex-nowrap flex-vert-center --section-space"
    :class="{'--flip' : linkData.reverse}">
    <span class="--circle"></span>
    <span class="--bar">
      <span class="--hook">
        {{ linkData.hook }}
      </span>
      <!-- Primary Button -->
      <btn-primary :BtnData="linkData.BtnData" v-in-viewport>
        {{ linkData.action }}
      </btn-primary>
    </span>
  </div>
</template>




<script>
// [ Documentation ] - circle-bar-decoration
// -----------------------------------------
//
// [ Dependencies ]
// reverse - Flag passed by the parent to determine which direction
//           the bar will be oriented in. Left or Right. Default is right.
//
// [ Description ]
// Simple decorative element comprised of a circle and a bar centered vertically.
import BtnPrimary         from '../shared/btn-primary.vue';

export default{
  name: 'CircleBarLink',
  props: ['linkData'],
  components: {
    'btn-primary'   : BtnPrimary
  }

};
</script>



<style lang="scss" scoped>

/*-------------------------------------*/
/* Circle Bar Decoration
/--------------------------------------*/

.d-divider {
  @media #{$portrait} {
    margin: 100px 0 150px;
  }

  .--bar {
    position: relative;

    @media #{$portrait} {
      width: 80%;
    }

    .mdev-btn {
      position: absolute;
      top: 22px;
      left: 0;
    }

    .--hook {
      position: absolute;
      bottom: 20px;
      left: 0;
    }
  }

  // Flips direction & order
  &.--flip {
    justify-content: flex-start;

    .--circle {
      order: 3;
    }

    .--bar .mdev-btn {
      left: auto;
      right: 0;
    }

    .--bar .--hook {
      left: auto;
      right: 0;
    }
  }
}


/*--------------------------------------*/

</style>
