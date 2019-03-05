<template>
  <div class="mdev-mosaic-link flex flex-wrap">
    <!-- Long Image -->
    <a
      :href="longImg.route"
      class="mdev-work mdev-work-long"
      :style="{ backgroundImage: longImgBkg }"
      :title="longImg.title">
      <span class="u-screenreader">
        {{ longImg.a11y }}
      </span>
    </a>
    <!-- Left Image -->
    <a
      :href="leftImg.route"
      :style="{ backgroundImage: leftImgBkg }"
      class="mdev-work mdev-work-square"
      :title="leftImg.title">
      <span class="u-screenreader">
        {{ leftImg.a11y }}
      </span>
    </a>
    <!-- Right Image -->
    <a
      :href="rightImg.route"
      :style="{ backgroundImage: rightImgBkg }"
      class="mdev-work mdev-work-square"
      :title="rightImg.title">
      <span class="u-screenreader">
        {{ rightImg.a11y }}
      </span>
    </a>
  </div>
</template>




<script>
export default{
  name: 'LinkMosaic',

  props: [ 'longImg', 'leftImg', 'rightImg' ],

  data: function(){
    return{
      longImgBkg: 'url(' + this.loadImage(this.longImg.src) + ')',
      leftImgBkg: 'url(' + this.loadImage(this.leftImg.src) + ')',
      rightImgBkg: 'url(' + this.loadImage(this.rightImg.src) + ')'
    };
  }
};
</script>



<style lang="scss">

/*-------------------------------------*/
/* BASE TEMPLATE Component Styles
/--------------------------------------*/
// Mosaic Link -----------------

// First Child Is the default, Long image on top,
// Two square images on the bottom.
.mdev-mosaic-link {
  width: 33.33%;
  position: relative;
  z-index: 1;

  @media #{$portrait} {
    width: 80%;
    margin: 0 10%;
  }

  &:hover {
    z-index: 2;
  }

  @media #{$portrait} {
    width: 100%;
  }

  .mdev-work {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    transition: all .4s;
    position: relative;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0);
    z-index: 1;

    &:hover,
    &:active,
    &:focus {
      z-index: 2;
      transform: scale(1.05);
      box-shadow: 0 0 70px rgba(0, 0, 0, .8);
    }
  }

  .mdev-work-long {
    width: 100%;
    padding-top: 50%;
  }

  .mdev-work-square {
    width: 50%;
    padding-top: 50%;
  }

  // Second Child - Takes the default layout and
  // Rotates it 90deg and counter rotates the square images
  &:nth-child( 2 ) {
    transform: rotate(-90deg);

    .mdev-work-square {
      transform: rotate( 90deg ) ;
      &:hover,
      &:active,
      &:focus {
        z-index: 2;
        transform: rotate( 90deg ) scale(1.05);
      }
    }
  }

  // Third Child - Takes the default layout and changes
  // The order in flex so the two square images come first
  &:nth-child( 3 ) {
    .mdev-work-square {
      order: 0;
    }

    .mdev-work-long {
      order: 1;
    }
  }
}

/*--------------------------------------*/

</style>
