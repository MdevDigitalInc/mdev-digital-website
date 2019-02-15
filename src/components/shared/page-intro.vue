<template>
  <section class="mdev-main-wrapper">
    <h2 v-html="pageIntro.title"></h2>
    <p>
      {{ pageIntro.content }}
    </p>
  </section>
</template>




<script>
export default{
  name: 'pageIntro',

  props: ['pageIntro']
};
</script>



<style lang="scss">

/*-------------------------------------*/
/* BASE TEMPLATE Component Styles
/--------------------------------------*/


/*--------------------------------------*/

</style>
