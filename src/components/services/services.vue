<template>
    <router-view></router-view>
</template>

<script>
export default {
  name: "ServicesView",
  // TODO - Edit meta Title
  // SEE - https://github.com/ktquez/vue-head
  head: {
    title: {
      inner: 'Our Services',
      complement: 'MDEV Digital - London, Ontario'
    },
    meta: [
      { property: 'og:title', content: 'Our Services | MDEV Digital - London, Ontario' },
      { name: 'twitter:title', content: 'Our Services | MDEV Digital - London, Ontario' }
    ]
  },

};
</script>

<style lang="scss">

</style>
