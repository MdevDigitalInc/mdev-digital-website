<template>
  <section class="mdev-main-content">
    <h1> Base Template</h1>
  </section>
</template>

<script>
// Import Data From Flat File
import MdevData       from '../../mdev-data.js';

export default{
  name: 'BaseTemplate',

  data: function(){
    return{
      // SEO
      seo: MdevData.siteSeo
    };
  },

  // Meta SEO Function
  metaInfo() {
    return {
      title: this.seo.services.title,
      meta: [
        { vmid: 'ogtitle', property: 'og:title', content: this.seo.services.title + this.seo.templateAddon },
        { vmid: 'twtitle', name: 'twitter:title', content:  this.seo.services.title + this.seo.templateAddon },
        { vmid: 'desc', name: 'description', content: this.seo.services.desc },
        { vmid: 'twdesc', name: 'twitter:description', content: this.seo.services.desc },
        { vmid: 'ogdesc', property: 'og:description', content: this.seo.services.desc }
      ]
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
