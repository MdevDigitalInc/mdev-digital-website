<template>
  <section class="mdev-the-hood --pos-reference">
    <div class="mdev-hood-content">
      <h2 v-in-viewport class="u-uppercase u-c-white u-bold a-fade-in">
        {{ heading }}
      </h2>
      <p v-in-viewport class="u-c-white a-blur-in">
        {{ text }}
      </p>
    </div>
    <div class="mdev-100-kell" :class="{'--decoration' : decoration}">
      <img :src="loadImage(foreground)" :alt="a11y" class="--landscape"/>
      <img :src="loadImage(foregroundMob)" :alt="a11y" class="--portrait"/>
    </div>
    <div class="mdev-hood-mask --triangle-top-r">
      <img :src="loadImage(background)" class="--rotate-hood" v-in-viewport/>
    </div>
  </section>
</template>

<script>
export default{
  name: 'BaseTemplate',

  props: [
    'background',
    'foreground',
    'foregroundMob',
    'a11y',
    'heading',
    'text',
    'decoration'
  ]
};
</script>

<style lang="scss">

/*-------------------------------------*/
/* BASE TEMPLATE Component Styles
/--------------------------------------*/
.mdev-hood-mask {
  position: absolute;
  width: 100%;
  height: auto;
  top: 0;
  bottom: 0;
  z-index: 1;
  overflow: hidden;
}
$rotate-duration: 930s;

.--rotate-hood.in-viewport,
.--rotate-hood.above-viewport {
  animation: rotate-anim infinite;
  animation-duration: $rotate-duration;
  animation-timing-function: linear;
  z-index: 1;

  @media #{$portrait} {
    animation: rotate-anim-prt infinite;
    animation-duration: $rotate-duration;
    animation-timing-function: linear;
  }

  @media #{$phone-only} {
    animation: rotate-anim-mob infinite;
    animation-duration: $rotate-duration;
    animation-timing-function: linear;
  }

  @media #{$xl-up} {
    animation: rotate-anim-xl infinite;
    animation-duration: $rotate-duration;
    animation-timing-function: linear;
  }
}

.mdev-100-kell {
  z-index: 2;
  position: relative;
  width: 100%;

  img {
    width: 100%;
  }

  @media #{$portrait} {
    margin-top: 400px;
  }

  @media #{$phone-only} {
    margin-top: 320px;
  }

  &:before {
    @include pseudo();
    top: 15%;
    left: 60%;
    right: 20%;
    bottom: 30%;
    border: 4px solid $color-brand-accent;
    z-index: -1;

    @media #{$portrait} {
      top: 25px;
      right: -200%;
    }
  }
}

.mdev-hood-content {
  width: 40vw;
  position: absolute;
  z-index: 3;
  top: 19vw;
  left: 10%;

  @media #{$laptop-only} {
    top: 15vw;
  }

  @media #{$portrait} {
    top: 120px;
    width: 80%;
    @include center(horizontal);

    h2 {
      font-size: 115px;
    }

    p {
      padding-right: 10%;
    }
  }

  @media #{$laptop-only} {
    left: 7%;
  }

  @media #{$tablet-lnd-only} {
    left: 5%;
    top: 150px;
    margin: 0;
    width: 40vw;
  }

  @media #{$phone-only} {
    top: 50px;
    text-align: left;

    h2 {
      font-size: 80px;
    }

    p {
      padding-right: 0;
    }
  }

  @media #{$xl-up} {
    top: 350px;
  }

  p {
    margin-right: 30%;

    @media #{$portrait} {
      margin-right: 10%;
    }
  }
}

// Keyframe Animations for Lines
@keyframes rotate-anim {
  0% {
    transform: rotate(0) scale(1.5);
  }
  50% {
    transform: rotate(180deg) scale(1.9);
  }
  100% {
    transform: rotate(0) scale(1.5);
  }
}

@keyframes rotate-anim-xl {
  0% {
    transform: rotate(0) scale(3.5);
  }
  50% {
    transform: rotate(180deg) scale(4.9);
  }
  100% {
    transform: rotate(0) scale(3.5);
  }
}

@keyframes rotate-anim-prt {
  0% {
    transform: rotate(0) scale(2.5);
  }
  50% {
    transform: rotate(180deg) scale(3.9);
  }
  100% {
    transform: rotate(0) scale(2.5);
  }
}

@keyframes rotate-anim-mob {
  0% {
    transform: rotate(0) scale(4.5);
  }
  50% {
    transform: rotate(180deg) scale(6.9);
  }
  100% {
    transform: rotate(0) scale(4.5);
  }
}
/*--------------------------------------*/
</style>
