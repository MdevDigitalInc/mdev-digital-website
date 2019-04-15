<template>
  <div class="mdev-chapter-link flex flex-hor-end">
    <router-link :to="chapterLink" :title="a11y"
      class="mdev-link-content flex flex-hor-start a-flyin a-flyin-right" v-in-viewport>
      <div class="mdev-link-index">
        {{ chapterIndex }}
      </div>
      <div class="mdev-link-title">
        <div class="flex flex-vert-center">
          <span class="u-uppercase u-bold">
            {{ chapterTitle }}
            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="9"><defs/><path id="arrow_right" data-name="arrow right" class="cls-1" d="M1096.35
          4885l7.65-4.5-7.65-4.51v3.55H1052v1.91h44.35v3.55z" transform="translate(-1052 -4876)"/></svg>
          </span>
        </div>
        <div class="--bar"></div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default{
  name: 'ChapterLink',

  props: ['chapterTitle', 'chapterIndex', 'chapterLink', 'a11y'],

  data: function(){
    return{

    };
  },
};
</script>

<style lang="scss">
/*-------------------------------------*/
/* Chapter Link Component Styles
/--------------------------------------*/

.mdev-chapter-link {
  width: 100%;
  padding: 30px 0 120px;
  overflow-x: hidden;
  overflow-y: visible;

  @media #{$tablet-lnd-only} {
    margin-top: -50px;
    padding-bottom: 60px;
  }

  @media #{$laptop-only} {
    padding-bottom: 80px;
    margin-top: -50px;
  }

  @media #{$portrait} {
    padding-bottom: 50px;
    margin-top: -20px;
  }
  .mdev-link-content {
    transition: all .3s;
    width: 30%;

    @media #{$laptop-only} {
      width: 45%;
    }

    @media #{$desktop-only} {
      width: 40%;
    }

    @media #{$portrait} {
      width: 85%;
    }

    @media #{$tablet-lnd-only} {
      width: 50%;
    }

    // Hover
    &:hover,
    &:active,
    &:focus {
      color: $color-brand-primary;

      .--bar {
        background: $color-brand-primary;
      }

      svg {
        transform: scalex(1.3);
      }

      .cls-1 {
        fill: $color-brand-primary;
      }
    }
  }

  .mdev-link-title {
    width: 100%;

    span {
      width: 100%;
      display: block;
      text-align: left;
      font-size: 11px;
      line-height: 1.82;
      letter-spacing: .4px;

      @media #{$tablet-up} {
        font-size: 22px;
      }
    }

    .--bar {
      width: 100%;
      height: 4px;
      background: $black;
      transition: all .3s;

      @media #{$tablet-up} {
        height: 8px;
      }
    }

    svg {
      margin-left: 10px;
      transition: all .3s;
      transform-origin: left;
    }
  }

  .mdev-link-index {
    margin: 0 10px;
    font-size: 35px;
    font-weight: 300;
    line-height: .7;
    position: relative;
    top: -5px;

    @media #{$tablet-up} {
      font-size: 78px;
    }
  }
}

/*--------------------------------------*/
</style>
