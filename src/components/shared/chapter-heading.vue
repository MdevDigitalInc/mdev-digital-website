<template>
  <div class="mdev-chapter-heading">
    <div class="mdev-chapter-content flex flex-hor-start flex-vert-end a-flyin a-flyin-left" v-in-viewport>
      <div class="mdev-chapter-title">
        <span class="u-uppercase u-bold">
          {{ chapterTitle }}
        </span>
        <div class="--bar"></div>
      </div>
      <div class="mdev-chapter-index">
        {{ chapterIndex }}
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'ChapterHeading',

  props: ['chapterTitle', 'chapterIndex'],

  data: function(){
    return{

    };
  },
};
</script>

<style lang="scss">
/*-------------------------------------*/
/* Chapter Headinng Component Styles
/--------------------------------------*/

.mdev-chapter-heading {
  width: 100%;
  padding: 30px 0;

  .mdev-chapter-content {
    width: 30%;

    @media #{$laptop-only} {
      width: 35%;
    }

    @media #{$portrait} {
      width: 85%;
    }
  }

  .mdev-chapter-title {
    width: 100%;

    span {
      width: 100%;
      display: block;
      text-align: right;
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

      @media #{$tablet-up} {
        height: 8px;
      }
    }
  }

  .mdev-chapter-index {
    margin: 0 10px;
    font-size: 35px;
    font-weight: 300;
    line-height: .7;

    @media #{$tablet-up} {
      font-size: 78px;
    }
  }
}

/*--------------------------------------*/
</style>
