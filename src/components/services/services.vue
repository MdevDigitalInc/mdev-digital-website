<template>
    <router-view></router-view>
</template>

<script>
export default {
  name: "ServicesView",

  // Make BKG White
  mounted: function() {
    this.bodyClass('--body-white');
  },

  // Return BKG to stock
  destroyed: function() {
    this.bodyReset('--body-white');
  }
};
</script>
