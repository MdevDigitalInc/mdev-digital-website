<template>
  <section class="mdev-main-content">
    <hero-main></hero-main>
    <h1> HOME </h1>
  </section>
</template>




<script>

  //Local Component registration
  import HeroMain       from '../home/hero-main.vue';

  export default{
    name: 'HomePage',
    components: {
      'hero-main'       : HeroMain
    }
  };
</script>



<style lang="scss">

	/*-----/
	Global Main
	/-----*/
	@import '../../assets/styles/component-lean-main.scss';

	/*--------------------------------------*/
	/* Main Component Styles                */
	/*--------------------------------------*/


	/*--------------------------------------*/

</style>
