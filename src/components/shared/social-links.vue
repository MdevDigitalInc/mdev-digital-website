<template>
    <div class="mdev-social-links flex flex-hor-start flex-vert-center" :class="{'--dark-theme':darkTheme}">
      <!-- Facebook -->
      <a href="FACEBOOK" title="Like Us on Facebook!">
        <i class="fab fa-facebook-f"></i>
      </a>
      <!-- Instagram -->
      <a href="INSTAGRAM" title="Follow Us On Instagram">
        <i class="fab fa-instagram"></i>
      </a>
      <!-- Twitter -->
      <a href="TWITTER" title="Follow Us On Twitter">
        <i class="fab fa-twitter"></i>
      </a>
      <!-- LinkedIn -->
      <a href="LinkedIn" title="Follow Us On LinkedIn">
        <i class="fab fa-linkedin"></i>
      </a>
    </div>
</template>



<script>
  export default{
    name: 'Social Links',

    props: ['darkTheme']
  };
</script>



<style lang="scss">

/*-------------------------------------*/
/* MAIN FOOTER Component Styles
/--------------------------------------*/
.mdev-social-links {
  width: 100%;

  a {
    color: $white;
    transition: color .5s, text-shadow .8s;
    text-shadow: 0 0 30px rgba( 187, 251, 236, 0 );

    &:hover,
    &:focus,
    &:active {
      text-shadow: 0 0 30px rgba( 187, 251, 236, .4 );
      color: $color-brand-primary;
    }
  }
}

// Optional Dark Theme
.--dark-theme {

  a {
    color: $color-brand-bkg;
    transition: color .5s, text-shadow .8s;
    text-shadow: 0 0 30px rgba( 0, 0, 0, 0 );

    &:hover,
    &:focus,
    &:active {
      text-shadow: 0 0 30px rgba( 0, 0, 0, .4 );
      color: $color-brand-primary;
    }
  }
}




/*--------------------------------------*/

</style>
