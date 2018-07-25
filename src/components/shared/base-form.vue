<template>
  <form action="https://formspree.io/mlnakram" method="POST">
    <input type="text" name="_gotcha" style="display: none">
    <div class="flex flex-hor-between flex-vert-center flex-nowrap">
      <!-- First Name -->
      <input
        data-required
        tab-index="0"
        aria-required="true"
        aria-label="First Name"
        type="text"
        placeholder="Your First Name">
      <!-- Last Name -->
      <input
        data-required
        tab-index="0"
        aria-required="true"
        aria-label="First Name"
        type="text"
        placeholder="Your First Name">


    </div>

    <!--
    Dont forget to prevent default and validate...
      your other form fields go here use form.submit();
    -->

      <button type="button" v-on:click.prevent="submitForm">Send</button>
  </form>
</template>




<script>
export default{
  name: 'ErrorPage',
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
    // Validate and Submit form
    submitForm() {
      console.log('submit-form');
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



<style lang="scss">

	/*-------------------------------------*/
	/* 404 Component Styles
	/--------------------------------------*/


	/*--------------------------------------*/

</style>
