<template>
  <section class="mdev-featured-services --section-space mdev-service">
    <!-- Title -->
    <div class="mdev-service-title">
      <span v-if="preTitle" class="--pre-title u-uppercase">
        {{ preTitle }}
      </span>
      <h2 v-html="title" class="--title u-bold u-uppercase"></h2>
    </div>
    <!-- Content -->
    <div class="mdev-featured-wrapper flex flex-vert-start flex-hor-between flex-wrap">
      <div v-for="(block, index) in content"
        class="mdev-featured-column">
          <h3 class="u-uppercase">
            {{ block.title }}
          </h3>
          <p>
            {{ block.description }}
          </p>
          <!-- Topics Loop -->
          <ul class="mdev-service-topics --space-top-xs a-fade-in" v-in-viewport>
            <li
              v-html="topic"
              class="u-uppercase u-bold"
              v-for="topic in block.topics">
            </li>
          </ul>
      </div>
    </div>
  </section>
</template>




<script>
export default{
  name: 'FeatureNomedia',

  props: [ 'preTitle', 'title', 'content'],

};
</script>



<style lang="scss" scoped>

/*-------------------------------------*/
/* Featured-nomedia Component Styles
/*--------------------------------------*/

.mdev-featured-services {
  padding-top: 50px;
  margin-top: 100px;

  .mdev-featured-column {
    width: 44%;

    @media #{$portrait} {
      width: 100%;
      margin: 20px 0;
    }
  }

  .mdev-featured-wrapper {
    width: 76%;
    margin: 0 auto;
  }

  .--pre-title {
    position: relative;
    left: 15px;
  }
}

.mdev-service-title {
  width: 70%;
  position: relative;
  padding-left: 7%;

  &:before {
    right: 70%;
    top: -15%;
    bottom: 20%;
  }
}

</style>
