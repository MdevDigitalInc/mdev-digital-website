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
  width: 100%;
  position: relative;
  justify-content: flex-end;

  .--circle {
    order: 1;
    width: 50px;
    height: 50px;
    background: transparent;
    border-radius: 100%;
    border: 8px solid $black;
    margin: 0 15px;
  }

  .--bar {
    order: 2;
    width: 50%;
    min-width: 250px;
    height: 8px;
    background: $black;
    position: relative;

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
