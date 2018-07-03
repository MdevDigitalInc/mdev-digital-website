<template>
  <div class="mdev-main-wrapper --section-space">
    <h3 class="u-uppercase u-c-white">{{ $t("homepage.intro.heading") }} </h3>
    <p class="mdev-hero-text">
      {{ $t("homepage.intro.content") }}
    </p>
    <router-link
      title="View Our Services"
      aria-label="View Our Services"
      class="mdev-btn mdev-primary-btn --space-top-sm"
      to="/services">
      {{ $t("homepage.intro.action") }}
    </router-link>
  </div>
</template>


<script>
  export default{
    name: 'HomeServices',
    data: function(){
      return{

      };
    },

    mounted: function(){
      console.log('Element Mounted');
    },

    methods: {
      loadImage(path){
        return require('../../assets/images/' + path);
      },
      // Change Language METHOD
      change () {
        let current = this.$locale.current();
        if (current === 'en') {
          this.$locale.change('pt');
        } else {
          this.$locale.change('en');
        }
      }
    }
  };
</script>



<style lang="scss" scoped>

	/*-------------------------------------*/
	/* HOME SERVICES Component Styles
	/--------------------------------------*/
  .mdev-hero-text {
    margin-top: 25px;
  }

	/*--------------------------------------*/

</style>
