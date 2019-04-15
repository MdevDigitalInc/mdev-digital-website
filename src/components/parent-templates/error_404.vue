<template>
  <section class="mdev-main-content">
    <h1> 404 Page Of Doom </h1>
  </section>
</template>

<script>
// Import Data From Flat File
import MdevData       from '../../mdev-data.js';

export default{
  name: 'ErrorPage',

  data: function(){
    return{
      // SEO
      seo: MdevData.siteSeo
    };
  },

  // Meta SEO Function
  metaInfo() {
    return {
      title: this.seo.error.title,
      meta: [
        { vmid: 'ogtitle', property: 'og:title', content: this.seo.error.title + this.seo.templateAddon },
        { vmid: 'twtitle', name: 'twitter:title', content:  this.seo.error.title + this.seo.templateAddon },
        { vmid: 'desc', name: 'description', content: this.seo.error.desc },
        { vmid: 'twdesc', name: 'twitter:description', content: this.seo.error.desc },
        { vmid: 'ogdesc', property: 'og:description', content: this.seo.error.desc }
      ]
    };
  },

};
</script>

<style lang="scss">

/*-------------------------------------*/
/* 404 Component Styles
/--------------------------------------*/


/*--------------------------------------*/

</style>
