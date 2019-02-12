<template>
    <router-view></router-view>
</template>

<script>
export default {
  name: "CaseStudiesView",
  // SEE - https://github.com/ktquez/vue-head
  head: {
    title: {
      inner: 'Case Studies',
      complement: 'MDEV Digital - London, Ontario'
    },
    meta: [
      { property: 'og:title', content: 'Case Studies | MDEV Digital - London, Ontario' },
      { name: 'twitter:title', content: 'Case Studies | MDEV Digital - London, Ontario' }
    ]
  }
};
</script>

<style lang="scss">

</style>
