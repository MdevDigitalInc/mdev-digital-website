<template>
  <section class="mdev-section-links" :class="{'u-c-black' : darkMode, 'u-c-white' : !darkMode}">
    <router-link to="/services/overview" title="Service Page" class="mdev-links-title u-ultralight u-uppercase">
      <span class="mdev-link-index u-transparent" aria-hidden="true">
        00
      </span>
      {{ linksTitle }}
    </router-link>
    <router-link
      v-for="(link, index) in links"
      :key="index"
      :to="link.route"
      :title="link.linkTitle"
      aria-role="menuitem" >
        <span class="mdev-link-index u-ultralight" aria-hidden="true">
          {{ link.linkIndex }}
        </span>
        <span class="mdev-link-name u-bold u-uppercase" :class="{'--dark' :  darkMode}">
          {{ link.linkName }}
        </span>
      </router-link>
  </section>
</template>

<script>
  export default{
    name: 'ServiceLinks',
    // Data passed in via Parent
    props: ['links', 'linksTitle', 'darkMode']
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
  transition: all .4s;
  transform-origin: left bottom;

  &:hover {
    transform: scale(1.05);
  }

  @media #{$portrait} {
    font-size: 4.25vw;
    margin-bottom: 2vw;
  }
  @media #{$phone-only} {
    font-size: 5.4vw;
  }
}

.mdev-section-links {
  width: 100%;
  position: relative;

  @media #{$portrait} {
    padding: 60px 0 25px;
  }

  @media #{$phone-only} {
    padding: 40px 0 25px;
  }

  a {
    line-height: 1.1;
    display: block;
    color: $white;
    padding: .5vw 0  0;
    transition: all .3s;
    font-weight: 700;

    @media #{$desktop-up} {
      padding: .3vw 0;
    }

    &:hover,
    &:focus,
    &:active {
      .mdev-link-name {
        border-bottom: 4px solid rgba(255, 255, 255, 1);
      }
      .--dark {
        border-bottom: 4px solid rgba(0, 0, 0, 1);
      }
    }
  }

  .mdev-link-name {
    font-size: 1.6vw;
    border-bottom: 4px solid rgba(255, 255, 255, 0);
    display: inline-block;
    transition: all .6s;
    letter-spacing: 1px;

    @media #{$xl-up} {
      font-size: 1.3vw;
    }

    @media #{$portrait} {
      font-size: 4.6vw;
    }
    @media #{$phone-only} {
      font-size: 6vw;
    }
  }

  .--dark {
    border-bottom: 4px solid rgba(0, 0, 0, 0);
  }

  .mdev-link-index {
    font-size: 1.1vw;
    display: inline-block;
    margin-right: .8vw;

    @media #{$portrait} {
      font-size: 3.5vw;
      margin-right: 2vw;
    }

    @media #{$phone-only} {
      font-size: 5.1vw;
    }
  }
}

.--tab {
  @media #{$portrait} {
    margin-top: 25px;
    margin-bottom: 60px;
  }
}

.mdev-split-6 {
  padding-right: 7vw;

  @media #{$tablet-lnd-only} {
    padding-right: 5.7vw;
  }

  @media #{$portrait} {
    padding-right: 0;
  }
}


/*--------------------------------------*/
</style>
