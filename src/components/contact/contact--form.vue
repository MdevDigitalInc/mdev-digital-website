<template>
  <section class="mdev-full-section --section-space-top --accent-bkg --triangle-top">
    <!-- Split Component 60 / 40 Reversed -->
    <split-sixty
      animClassLeft="a-flyin a-flyin-right"
      animClassRight="a-flyin a-flyin-left" :reverse="true">
      <!-- Right Split [reversed:true] -->
      <template slot="leftSlot">
        <base-form></base-form>
      </template>

      <template slot="rightSlot">
        Stuff over on this side
      </template>
    </split-sixty>
  </section>
</template>


<script>
// Imports
import BaseForm from '../shared/base-form.vue';
import SplitSixty from '../modules/sixty-forty.vue';

export default{
  name: 'ContactForm',
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
  },

  components: {
    'base-form' : BaseForm,
    'split-sixty' : SplitSixty
  }
};
</script>



<style lang="scss">

	/*-------------------------------------*/
	/* 404 Component Styles
	/--------------------------------------*/


	/*--------------------------------------*/

</style>
