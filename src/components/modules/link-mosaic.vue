<template>
  <div class="mdev-mosaic-link flex flex-wrap">
    <!-- Long Image -->
    <a :href="longImg.route" class="mdev-work-long" title="longImg.title">
      <img :src="loadImage(longImg.src)" :alt="longImg.a11y"/>
    </a>
    <!-- Left Image -->
    <a :href="leftImg.route" class="mdev-work-long" title="leftImg.title">
      <img :src="loadImage(leftImg.src)" :alt="leftImg.a11y"/>
    </a>
    <!-- Right Image -->
    <a :href="rightImg.route" class="mdev-work-long" title="rightImg.title">
      <img :src="loadImage(rightImg.src)" :alt="rightImg.a11y"/>
    </a>
  </div>
</template>




<script>
export default{
  name: 'LinkMosaic',

  props: [ 'longImg', 'leftImg', 'rightImg' ],

  data: function(){
    return{

    };
  }
};
</script>



<style lang="scss">

/*-------------------------------------*/
/* BASE TEMPLATE Component Styles
/--------------------------------------*/


/*--------------------------------------*/

</style>
