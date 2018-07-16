<template>
  <div class="mdev-full-section --accent-bkg --pull-up-section --reduce-bottom">
    <div class="mdev-main-wrapper u-text-center">
      <h3 class="u-uppercase u-c-black u-bold">
        {{ $t("homepage.testimonials.heading") }}
      </h3>
      <!-- Testimonial Loop -->
      <p v-for="( testimonial, index ) in testimonials"
        v-if=" index == desiredIndex "
        class="mdev-testimonial u-c-black --space-top-xs u-light u-italic">
          {{ testimonial.content }}
        <span class="testimonial-name">
          - {{ testimonial.name }}
        </span>
      </p>
      <!-- Carousel Controls -->
      <div class="mdev-testimonial-ctrl flex flex-hor-center flex-vert-center --space-top-sm">
        <!-- Arrow W/ embedded SVG- Moves Array Backwards -->
        <div class="ctrl-arrow --left flex flex-vert-center"
          v-on:click.stop=" traverse(-1) "
          aria-role="button"
          aria-label="Click to view the previous Testimonial">
          <svg xmlns="http://www.w3.org/2000/svg" width="52" height="9"><defs/><path id="arrow_right" data-name="arrow right" class="cls-1" d="M1096.35
        4885l7.65-4.5-7.65-4.51v3.55H1052v1.91h44.35v3.55z" transform="translate(-1052 -4876)"/></svg>
        </div>
        <!-- Position Marker -->
        <div class="ctrl-position u-light">
          <span>0{{ desiredIndex + 1 }}</span>
          <span class="u-italic">of</span>
          <span>0{{ testimonials.length }}</span>
        </div>
        <!-- Arrow W/ embedded SVG - Moves Array Forward -->
        <div
          class="ctrl-arrow --right flex flex-vert-center"
          v-on:click.stop=" traverse(1) "
          aria-role="button"
          aria-label="Click to view the next Testimonial">
          <svg xmlns="http://www.w3.org/2000/svg" width="52" height="9"><defs/><path id="arrow_right" data-name="arrow right" class="cls-1" d="M1096.35
        4885l7.65-4.5-7.65-4.51v3.55H1052v1.91h44.35v3.55z" transform="translate(-1052 -4876)"/></svg>
        </div>
      </div>
    </div>
    <!-- Sexy Lines -->
    <div class="mdev-sexy-line --sexy-green" data-line-one></div>
    <div class="mdev-sexy-line --sexy-green" data-line-two></div>
    <div class="mdev-sexy-line --sexy-green" data-line-three></div>
  </div>
</template>



<script>
  export default{
    name: 'HomeTestimonials',

    props: [ 'testimonials' ],

    data: function(){
      return{
        arrow: 'svg/arrows/arrow-black.svg',
        desiredIndex: 0
      };
    },

    methods: {
      loadImage(path){
        return require('../../assets/images/' + path);
      },
      traverse(direction) {
        let arrayLen = this.testimonials.length - 1;

        // Are we going passed the end of the array?
        if (direction + this.desiredIndex > arrayLen) {
          // Reset to start
          this.desiredIndex = 0;
        }
        // Are we going passed the start of the array?
        else if (direction + this.desiredIndex < 0) {
          // Reset to the end
          this.desiredIndex = arrayLen;
        }
        else {
          // Move as desired
          this.desiredIndex += direction;
        }
      }

    }
  };
</script>



<style lang="scss">

/*-------------------------------------*/
/* Home Testimonials Component Styles
/--------------------------------------*/

@import '../../assets/styles/keyframes/lines-anim.scss';
@import '../../assets/styles/mixins.scss';
// Overrides default padding but that is fine
// because of scoped styles
.--reduce-bottom {
  padding-bottom: 75px;
}

.mdev-testimonial {
  width: 80%;
  margin: 0 auto;

  @media #{$phone-only} {
    width: 100%;
  }

  .testimonial-name {
    display: block;
    font-weight: 400;
    margin-top: 10px;
    font-style: normal;
  }
}

.mdev-testimonial-ctrl {
  font-size: 1.55vw;

  @media #{$portrait} {
    font-size: 3.25vw;
  }

  .u-italic {
    padding-right: 8px;
  }

  .--left {
    transform: rotate(180deg);
  }

  /* SVG  Arrow Fill */
  .cls-1 {
    fill: $black;
    fill-rule: evenodd;
    transition: all .5s;
  }
}


.ctrl-arrow {
  width: auto;
  margin: 0 20px;
  cursor: pointer;
  padding: 15px 0;

  @media #{ $portrait } {
    margin: 0 40px;
  }

  &:hover,
  &:active,
  &:focus {
    /* SVG  Arrow Fill Hover */
    .cls-1 {
      fill: $color-brand-primary;
    }
  }
}

// Line Starting Positions
// Because of rotation Y coordinate is actually X when translating
[ data-line-one ] {
  transform: rotate(60deg) translate3d(0, -37vw, 0);
  animation: line-one-anim;
  @include arrow-anim-rules(11s);
}

// Line Two is not rotated and therefore X is X and Y is Y
[ data-line-two ] {
  transform: rotate(0) translate3d(0, -50px, 0);
  animation: line-two-anim;
  @include arrow-anim-rules(22s);
}

// Because of rotation Y coordinate is actually X when translating
[ data-line-three ] {
  transform: rotate(-60deg) translate3d(0, -37vw, 0);
  animation: line-three-anim;
  @include arrow-anim-rules(17s);
}

/*--------------------------------------*/

</style>
