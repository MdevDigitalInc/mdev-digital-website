<template>
  <nav class="mdev-bios-navigation flex flex-hor-between flex-vert-center">
    <div class="mdev-bios-arrow mdev-bios-arrow-left" v-on:click="nextBio(-1)">
        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="9"><defs/><path id="arrow_right" data-name="arrow right" class="cls-1" d="M1096.35
      4885l7.65-4.5-7.65-4.51v3.55H1052v1.91h44.35v3.55z" transform="translate(-1052 -4876)"/></svg>
    </div>

    <div class="mdev-next-bio flex flex-vert-center" v-on:click="nextBio(1)">
      <div class="u-light u-uppercase">
        {{ $t('teampage.meet') }}
      </div>
      <div class="mdev-bios-name u-pointer u-uppercase u-bold">
        {{ nextBioName }}
      </div>
      <div class="mdev-bios-arrow mdev-bios-arrow-right">
        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="9"><defs/><path id="arrow_right" data-name="arrow right" class="cls-1" d="M1096.35
      4885l7.65-4.5-7.65-4.51v3.55H1052v1.91h44.35v3.55z" transform="translate(-1052 -4876)"/></svg>
      </div>
    </div>
  </nav>
</template>

<script>
export default{
  name: 'BioNavigation',

  props: [ 'nextBioName', 'nextBioRoute' ],

  data: function(){
    return{
      mdevArrow: 'svg/arrows/arrow-black.svg'
    };
  },

  methods: {
    nextBio(direction) {
      if ( direction > 0 ) {
        // Emits event to parent and loads next record
        this.$emit('nextBio');
      }
      else {
        // Emits event to parent and loads prev record
        this.$emit('previousBio');
      }
    }
  }
};
</script>

<style lang="scss">
/*-------------------------------------*/
/* bios--navigation Component Styles
/--------------------------------------*/

// Navigation for Bios
.mdev-bios-navigation {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  color: $white;
  padding: 10px 30px;
  z-index: 10;
  user-select: none;

  @media #{$portrait} {
    padding: 10px 15px;
    z-index: 20;
    background: $color-brand-bkg;
    position: relative;
  }

  .mdev-bios-arrow-right {
    margin-left: 20px;

    @media #{$phone-only} {
      margin-left: 10px;
    }
  }

  .mdev-bios-arrow-left {
    transform: scale(-1);

    &:hover {
      .cls-1 {
        fill: $color-brand-accent;
      }
    }
  }

  .mdev-bios-name {
    margin-left: 5px;

    @media #{$phone-only} {
      font-size: 14.5px;
    }
  }

  .mdev-next-bio {
    transition: all .3s;
    @media #{$phone-only} {
      font-size: 10px;
    }

    &:hover {
      color: $color-brand-accent;
      .cls-1 {
        fill: $color-brand-accent;
      }
    }
  }
}

.mdev-bios-nav-bkg {
  background: $color-brand-bkg;
  height: 60px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: -1;

  @media #{$portrait} {
    display: none;
  }
}

.mdev-bios-arrow {
  padding: 10px 0;
  cursor: pointer;

  .cls-1 {
    fill: $white;
    transition: fill .8s;
  }
}
/*--------------------------------------*/
</style>
