<template>
  <div>
    {{ teammember }}
  </div>
</template>

<script>
  export default {
   name: "CaseStudiesView",
   props: [ 'teammember' ],
   mounted: function() {console.log('Bios Container');}
  };
</script>

<style lang="scss">

</style>
