<template>
    <router-view></router-view>
</template>

<script>
export default {
  name: "CaseStudiesView",
  // SEO Meta Information
  metaInfo: {
    changed (newInfo, addedTags, removedTags) {
      // Dispatch Prerenderer event
      document.dispatchEvent(new Event('spa-rendered'));
    },

    title: 'Process-Driven Development',
    meta: [
      { vmid: 'ogtitle', property: 'og:title', content: 'Process-Driven Development | MDEV Digital | London, Toronto, Montreal' },
      { vmid: 'twtitle', name: 'twitter:title', content: 'Process-Driven Development | MDEV Digital | London, Toronto, Montreal' },
      { vmid: 'desc', name: 'description', content: 'We are a London-based hybrid digital agency offering process-driven branding, website development, software architecture, and business technology solutions'},
      { vmid: 'twdesc', name: 'twitter:description', content: 'We are a London-based hybrid digital agency offering process-driven branding, website development, software architecture, and business technology solutions'},
      { vmid: 'ogdesc', property: 'og:description', content: 'We are a London-based hybrid digital agency offering process-driven branding, website development, software architecture, and business technology solutions'}
    ]
  },

};
</script>

<style lang="scss">

</style>
