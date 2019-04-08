<template>
  <section class="mdev-main-content">
    <h1> Base Template</h1>
  </section>
</template>

<script>
export default{
  name: 'BaseTemplate',
  // TODO - Edit meta Title
  // SEE - https://github.com/ktquez/vue-head
  head: {
    title: {
      inner: 'Base Template',
      complement: 'MDEV Digital - London, Ontario'
    },
    meta: [
      { property: 'og:title', content: 'Base Template | MDEV Digital - London, Ontario' },
      { name: 'twitter:title', content: 'Base Template | MDEV Digital - London, Ontario' }
    ]
  },

  data: function(){
    return{

    };
  },

  mounted: function(){
    console.log('COMPONENT NAME Mounted');
  }
};
</script>

<style lang="scss">

/*-------------------------------------*/
/* BASE TEMPLATE Component Styles
/--------------------------------------*/


/*--------------------------------------*/

</style>
