<template>
  <section class="mdev-founders-section --section-space">
    <div class="mdev-founders flex">
      <div class="mdev-founder-content">
        <span class="--subheading u-light u-uppercase">
          {{ subheading }}
        </span>
        <h2 class="u-uppercase">
          {{ heading }}
        </h2>
        <p>
          {{ text }}
        </p>
      </div>
      <div class="mdev-founder-media flex flex-vert-start flex-hor-center">
        <div v-for="(founder, index) in founders" class="mdev-founder">
          <img :src="loadImage(founder.image)" :alt="founder.a11y" />
          <span class="--name u-uppercase u-bold">
            {{ founder.name }}
          </span>
          <span class="--title u-uppercase u-light u-italic">
            {{ founder.title }}
          </span>
        </div>
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

  span {
    display: block;
  }

  .--name {
    font-size: 28px;
    margin: 20px 0 10px;
    letter-spacing: .56px;
  }

  .--title {
    font-size: 20px;
    letter-spacing: .4px;
  }
}



/*--------------------------------------*/

</style>
