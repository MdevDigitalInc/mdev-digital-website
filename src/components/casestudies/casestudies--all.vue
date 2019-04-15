<template>
  <section class="mdev-main-content">
    <h1> CASE STUDIES ALL </h1>
  </section>
</template>




<script>
// Flat Data File
import MdevData           from '../../mdev-data.js';

export default{
  name: 'CaseStudiesAll',

  data: function(){
    return{
      // SEO
      seo: MdevData.siteSeo
    };
  },

  // Meta SEO Function
  metaInfo() {
    return {
      title: this.seo.home.title,
      meta: [
        { vmid: 'ogtitle', property: 'og:title', content: this.seo.home.title + this.seo.templateAddon },
        { vmid: 'twtitle', name: 'twitter:title', content:  this.seo.home.title + this.seo.templateAddon },
        { vmid: 'desc', name: 'description', content: this.seo.home.desc },
        { vmid: 'twdesc', name: 'twitter:description', content: this.seo.home.desc },
        { vmid: 'ogdesc', property: 'og:description', content: this.seo.home.desc }
      ]
    };
  }
};
</script>



<style lang="scss">

/*-------------------------------------*/
/* CASE STUDIES ALL Component Styles
/--------------------------------------*/


/*--------------------------------------*/

</style>
