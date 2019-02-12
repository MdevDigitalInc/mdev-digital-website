<template>
  <div
    class="d-divider flex flex-nowrap flex-vert-center --section-space"
    :class="{'--flip' : reverse}">
    <span class="--circle"></span>
    <span class="--bar"></span>
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
export default{
  name: 'CircleBarDecoration',
  props: ['reverse']

};
</script>



<style lang="scss">

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
  }

  // Flips direction & order
  &.--flip {
    justify-content: flex-start;

    .--circle {
      order: 3;
    }
  }
}

/*--------------------------------------*/

</style>
