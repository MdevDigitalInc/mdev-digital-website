<template>
  <div class="mdev-nav-links">
    <router-link
      v-for="link in links"
      :to="link.route"
      active-class="--active"
      :title="link.linkTitle"
      aria-role="menuitem" >
        <span class="mdev-link-index u-ultralight">
          {{ link.linkIndex }}
        </span>
        <span class="mdev-link-name u-bold u-uppercase">
          {{ link.linkName }}
        </span>
      </router-link>
  </div>
</template>



<script>
  export default{
    name: 'HiddenNavLinks',

    props: ['links'],

    mounted: function() {
      console.log(this.links);
    },

    methods: {
      linkPressed() {
        console.log('link pressed');
      }
    }
  };
</script>



<style lang="scss">

/*-------------------------------------*/
/* MAIN FOOTER Component Styles
/--------------------------------------*/
.mdev-nav-links {
  position: relative;
  color: $white;
  width: 75%;
  height: 100vh;
  background: transparent;
  padding: 11% 15%;

  a {
    display: block;
    position: relative;
    width: 100%;
    text-align: left;
    font-size: 380%;
    line-height: 190%;
  }

  .mdev-link-index {
    font-size: 60%;
  }

  .--active {
    opacity: .5;
  }
}

/*--------------------------------------*/

</style>
