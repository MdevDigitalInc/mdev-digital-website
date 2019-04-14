<template>
  <section class="mdev-main-content">
    <h1> Base Template</h1>
  </section>
</template>

<script>
export default{
  name: 'BaseTemplate',
  // TODO - Edit meta Title
  metaInfo: {
    title: 'Process-Driven Development',
    meta: [
      { property: 'og:title', content: 'Process-Driven Development | MDEV Digital | London, Toronto, Montreal' },
      { name: 'twitter:title', content: 'Process-Driven Development | MDEV Digital | London, Toronto, Montreal' },
      { name: 'description', content: 'We are a London-based hybrid digital agency offering process-driven branding, website development, software architecture, and business technology solutions', id:'desc'},
      { name: 'twitter:description', content: 'We are a London-based hybrid digital agency offering process-driven branding, website development, software architecture, and business technology solutions'},
      { property: 'og:description', content: 'We are a London-based hybrid digital agency offering process-driven branding, website development, software architecture, and business technology solutions'}
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
