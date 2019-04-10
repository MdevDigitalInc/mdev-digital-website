<template>
  <section class="mdev-established">
    <div class="mdev-established-media">
      <img :src="loadImage(image)" :alt="a11y" class="mdev-est-image"/>
      <img :src="loadImage(badge.src)"
        :alt="badge.a11y" class="mdev-est-badge"/>
    </div>
    <div class="--bkg-extend"></div>
    <div class="--parallelogram"></div>
  </section>
</template>

<script>
export default{
  name: 'EstablishedSection',

  props: ['image', 'a11y', 'badge']
};
</script>

<style lang="scss">

/*-------------------------------------*/
/* BASE TEMPLATE Component Styles
/--------------------------------------*/

.mdev-established {
  width: 100%;
  padding: 60px 0;
  position: relative;

  &:before,
  &:after {
    background: $color-brand-primary;
    @include pseudo();
  }

  &:before {
    top: 0;
    right: 0;
    left: 30%;
    bottom: 80%;
  }

  &:after {
    bottom: 0;
    top: 80%;
    left: 0;
    right: 30%;
  }

  .--bkg-extend {
    width: 100%;
    top: 0;
    bottom: 50%;
    background: $color-brand-bkg;
    position: absolute;
    z-index: -1;
  }

  .--parallelogram {
    position: absolute;
    z-index: 3;
    top: -30px;
    bottom: 30px;
    left: -10px;
    right: -10px;
    border: 4px solid $color-brand-accent;
    border-left: 9px solid $color-brand-accent;
    border-right: 9px solid $color-brand-accent;
    transform: skew(66deg);
  }
}

.mdev-established-media {
  width: 100%;
  position: relative;

  .mdev-est-image {
    min-width: 100%;
    position: relative;
    opacity: .95;
    z-index: 1;
    overflow: visible;
  }

  .mdev-est-badge {
    width: 15%;
    position: absolute;
    left: 4vw;
    bottom: 4vw;
    z-index: 2;
  }
}

/*--------------------------------------*/

</style>
