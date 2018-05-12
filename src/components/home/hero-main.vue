<template>
  <h1>HERO HEADER</h1>
</template>



<script>

	export default {
    name: 'MainHero',
    data: function() {
      return{
        heroStyles: {
            backgroundColor: "#2f2f2f",
            backgroundSize: 'cover'
        }
      };
    },

    methods:{
      // Get Compiled image Paths

      loadImage(path){
        return require('../../assets/images/' + path);
      }
    }
	};

</script>

<style lang="scss">

  /*--------------------------------------*/
  /* Lean Import for Components           */
  /*--------------------------------------*/
  @import '../../assets/styles/component-lean-main.scss';

  /*--------------------------------------*/
  /* Main Component Styles                */
  /*--------------------------------------*/

  /*--------------------------------------*/

</style>
