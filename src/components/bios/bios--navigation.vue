<template>
  <nav class="mdev-bios-navigation flex flex-hor-between flex-vert-center">
    <div class="mdev-bios-arrow mdev-bios-arrow-left" v-on:click="nextBio(-1)">
        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="9"><defs/><path id="arrow_right" data-name="arrow right" class="cls-1" d="M1096.35
      4885l7.65-4.5-7.65-4.51v3.55H1052v1.91h44.35v3.55z" transform="translate(-1052 -4876)"/></svg>
    </div>

    <div class="mdev-next-bio flex flex-vert-center">
      <span class="u-light">MEET</span>
      <span class="mdev-bios-name u-uppercase u-bold">
        {{ nextBioName }}
      </span>
      <div class="mdev-bios-arrow mded-bios-arrow-right" v-on:click="nextBio(1)">
        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="9"><defs/><path id="arrow_right" data-name="arrow right" class="cls-1" d="M1096.35
      4885l7.65-4.5-7.65-4.51v3.55H1052v1.91h44.35v3.55z" transform="translate(-1052 -4876)"/></svg>
      </div>
    </div>
  </nav>
</template>



<script>
export default{
  name: 'BioRichard',

  props: [ 'nextBioName', 'nextBioRoute' ],

  data: function(){
    return{
      mdevArrow: 'svg/arrows/arrow-black.svg'
    };
  },

  mounted: function(){
    console.log('Element Mounted');
  },

  methods: {
    loadImage(path){
      return require('../../assets/images/' + path);
    },
    // Change Language METHOD
    change () {
      let current = this.$locale.current();
      if (current === 'en') {
        this.$locale.change('pt');
      } else {
        this.$locale.change('en');
      }
    },
    nextBio(direction) {
        if ( direction > 0 ) {
          this.$emit('nextBio');
        }
        else {
          this.$emit('previousBio');
        }
    }
  }
};
</script>



<style lang="scss">

/*-------------------------------------*/
/* ZUCORA TWOP Component Styles
/--------------------------------------*/


// Navigation for Bios
.mdev-bios-navigation {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  color: $white;
  background: $color-brand-bkg;
  padding: 10px;
  z-index: 2;
  user-select: none;

  @media #{$portrait} {
    z-index: 20;
    position: relative;
  }

  .mded-bios-arrow-right {
    margin-left: 20px;
  }

  .mdev-bios-arrow-left {
    transform: scale(-1);
  }

  .mdev-bios-name {
    margin-left: 5px;
  }
}
.mdev-bios-arrow {
  padding: 10px 0;
  cursor: pointer;

  .cls-1 {
    fill: $white;
    transition: fill .8s;
  }

  &:hover {
    .cls-1 {
      fill: $color-brand-accent;
    }
  }
}
/*--------------------------------------*/

</style>
