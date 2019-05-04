<template>
  <section class="mdev-founders-section --section-space">
    <div class="mdev-main-wrapper mdev-founders flex">
      <!-- Founder Content -->
      <div class="mdev-founder-content">
        <span v-in-viewport class="--subheading u-light u-uppercase a-fade-in-full">
          {{ subheading }}
        </span>
        <h2 v-in-viewport class="u-uppercase a-fade-in-full">
          {{ heading }}
        </h2>
        <p v-in-viewport class="a-fade-in-full">
          {{ text }}
        </p>
      </div>
      <!-- Founder -->
      <div class="mdev-founder-media flex flex-vert-start flex-hor-center">
        <router-link v-for="(founder, key, index) in founders"
          :key="founder.id"
          :to="founder.route"
          :title="founder.linka11y"
          v-in-viewport
          class="mdev-founder --team a-rotate-x">
          <!-- Founder Picture -->
          <picture>
            <source media="screen" :srcset="loadImage(founder.image) + '.webp'" type="image/webp">
            <source media="screen" :srcset="loadImage(founder.image)" type="image/png">
            <img :src="loadImage(founder.image)" :alt="founder.a11y" />
          </picture>
          <span class="--name u-uppercase u-bold">
            {{ founder.name }}
          </span>
          <span class="--title u-uppercase u-light u-italic">
            {{ founder.title }}
          </span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default{
  name: 'FounderSection',

  props: [ 'heading', 'subheading', 'text', 'founders' ]
};
</script>

<style lang="scss">
/*-------------------------------------*/
/* BASE TEMPLATE Component Styles
/--------------------------------------*/
.mdev-founders-section {
  width: 100%;
  position: relative;
  overflow: hidden;

  &.--section-space {
    margin: 150px 0 75px;

    @media #{$portrait} {
      margin: 100px 0 50px;
    }
  }
}

.mdev-founders {
  @media #{$portrait} {
    flex-wrap: wrap;
  }
}

.mdev-founder-content {
  width: 40%;

  @media #{$portrait} {
    width: 100%;
    padding: 0 20px;
  }

  @media #{$phone-only} {
    padding: 0 20px;

    h2 {
      font-size: 45px;
    }
  }

  .--subheading {
    font-size: 30px;

    @media #{$desktop-up} {
      margin-bottom: 10px;
    }

    @media #{$tablet-up} {
      font-size: 40px;
    }
  }
}

.mdev-founder-media {
  width: 60%;
  padding: 30px;

  @media #{$portrait} {
    width: 100%;
    padding: 0;
    margin-top: 20px;
  }
  @media #{$phone-only} {
    flex-wrap: wrap;
  }
}

.mdev-founder {
  width: 100%;
  position: relative;
  z-index: 1;

  &:first-child {
    @media #{$phone-only} {
      margin-bottom: 20px;
    }
  }

  @media #{$portrait} {
    padding: 0;
  }
  @media #{$tablet-up} {
    padding: 20px;
    width: 45%;
  }
  @media #{$phone-only} {
    padding: 20px;
  }

  &:hover,
  &:active,
  &:focus {
    transform: scale(1.05);
  }

  // Green Decorative frame
  &:before {
    @include pseudo();
    bottom: 110px;
    border: 4px solid $color-brand-accent;
    z-index: -1;
  }
  // First Founder
  &:first-child:before {
    top: 80px;
    left: 5%;
    right: 20%;
  }
  // Second Founder
  &:nth-child( 2 ):before {
    top: 70px;
    left: 5%;
    right: 20%;
  }
}
/*--------------------------------------*/
</style>
