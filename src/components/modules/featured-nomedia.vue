<template>
  <section class="mdev-featured-services --section-space mdev-service">
    <!-- Title -->
    <div class="mdev-service-title" :data-dec="anchor">
      <h2 v-html="title" class="--title u-bold u-uppercase"></h2>
    </div>
    <!-- Content -->
    <div class="mdev-featured-wrapper --margin-mod flex flex-vert-start flex-hor-between flex-wrap">
      <div v-for="(block, index) in content"
        class="mdev-featured-column">
          <h3 class="u-capitalize">
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
              v-for="(topic, index) in block.topics">
            </li>
          </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default{
  name: 'FeatureNomedia',

  props: [ 'title', 'content', 'anchor'],

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
      width: 80%;
      margin: 20px auto;
    }
  }

  h3 {
    @media #{$laptop-only} {
      margin-bottom: 10px;
    }
  }

  h2 {
    line-height: .96;
  }

  p {
    @media #{$laptop-up} {
      font-size: 15px;
      line-height: 190%;
      font-weight: 500;
    }

    @media #{$desktop-up} {
      font-size: 18px;
    }
  }
}

.mdev-service-title {
  width: 70%;
  position: relative;
  padding-left: 5%;

  @media #{$portrait} {
    padding-left: 10%;
  }

  @media #{$xl-up} {
    padding-left: 10%;
  }

  &:before {
    right: 70%;
    top: -50px;
    bottom: 20%;
  }
}
</style>
