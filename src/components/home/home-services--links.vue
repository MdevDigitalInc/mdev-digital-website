<template>
  <section class="mdev-section-links u-c-white">
    <span class="mdev-links-title u-ultralight u-uppercase">
      <span class="mdev-link-index u-transparent" aria-hidden="true">
        00
      </span>
      {{ linksTitle }}
    </span>
    <router-link
      v-for="(link, index) in links"
      :key="index"
      :to="link.route"
      :title="link.linkTitle"
      aria-role="menuitem" >
        <span class="mdev-link-index u-ultralight" aria-hidden="true">
          {{ link.linkIndex }}
        </span>
        <span class="mdev-link-name u-bold u-uppercase">
          {{ link.linkName }}
        </span>
      </router-link>
  </section>
</template>

<script>
  export default{
    name: 'ServiceLinks',
    // Data passed in via Parent
    props: ['links', 'linksTitle']
    // Watch for changes in parent data
  };
</script>

<style lang="scss">
/*-------------------------------------*/
/* HOME-SERVICES--LINKS Component Styles
/--------------------------------------*/

.mdev-links-title {
  font-size: 1.25vw;
  display: block;
  margin-bottom: .7vw;

  @media #{$portrait} {
    font-size: 4.25vw;
    margin-bottom: 2vw;
  }
  @media #{$phone-only} {
    font-size: 5.4vw;
  }
}

/*--------------------------------------*/
</style>
