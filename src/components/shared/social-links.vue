<template>
    <div class="mdev-social-links flex flex-hor-start flex-vert-center" :class="{'--dark-theme':darkTheme}">
      <!-- Social Link Loop -->
      <a v-for="(link, index) in linkContent"
        :href="link.linkUrl"
        :aria-label="link.accessibility"
        aria-haspopup="true"
        :target="link.target"
        :tabindex="(showLinks ? 1 : -1)"
        :title="link.accessibility">
        <i class="fab" :class="link.linkClass"></i>
      </a>
    </div>
</template>

<script>
  export default{
    name: 'SocialLinks',
    // Data passed in via Parent
    props: ['darkTheme', 'showLinks', 'linkContent']
  };
</script>

<style lang="scss">
/*-------------------------------------*/
/* SOCIAL LINKS Component Styles
/--------------------------------------*/

.mdev-social-links {
  width: 100%;

  a {
    color: $white;
    transition: color .5s, text-shadow .8s;

    &:hover,
    &:focus,
    &:active {
      color: $color-brand-primary;
    }
  }

  .fa-facebook-f {
    font-size: 88%;
  }
}

// Optional Dark Theme
.--dark-theme {

  a {
    color: $color-brand-bkg;
    transition: color .5s, text-shadow .8s, transform .5s;

    &:hover,
    &:focus,
    &:active {
      color: $color-brand-bkg;
      transform: scale( 1.2);
    }
  }
}
.--teal-hover {

  a {

    &:hover,
    &:focus,
    &:active {
      color: $color-brand-primary;
    }
  }
}
/*--------------------------------------*/
</style>
