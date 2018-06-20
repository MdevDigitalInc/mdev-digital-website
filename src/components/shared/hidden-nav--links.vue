<template>
  <div class="mdev-nav-links">
    <h1>NAV LINKS GO HERE</h1>
  </div>
</template>



<script>
  export default{
    name: 'HiddenNavLinks',

    props: ['links'],

    mounted: function() {
      console.log(this.links);
    }
  };
</script>



<style lang="scss">

/*-------------------------------------*/
/* MAIN FOOTER Component Styles
/--------------------------------------*/

/*--------------------------------------*/

</style>
