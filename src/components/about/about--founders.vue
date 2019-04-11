<template>
  <section class="mdev-founders-section --section-space">
    <div class="mdev-founders flex">
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
        <router-link v-for="(founder, index) in founders"
          :to="founder.route"
          :title="founder.linka11y"
          v-in-viewport
          class="mdev-founder --team a-rotate-x">
          <!-- Founder Picture -->
          <img :src="loadImage(founder.image)" :alt="founder.a11y" />
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
}

.mdev-founders {
  width: 85%;
  margin: 0 auto;
  max-width: 1800px;
}

.mdev-founder-content {
  width: 40%;

  .--subheading {
    font-size: 40px;
  }
}

.mdev-founder-media {
  width: 60%;
  padding: 30px;
}

.mdev-founder {
  width: 45%;
  padding: 20px;
  position: relative;
  z-index: 1;

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
