<template>
  <section class="mdev-process u-c-white --triangle-bottom">
    <div class="mdev-process-wrapper u-text-center">
      <h3 class="u-uppercase">
        {{ title }}
      </h3>
      <p>
        {{ body }}
      </p>
      <div class="mdev-process-icons flex flex-hor-center flex-vert-center">
        <object class="mdev-process-icon" v-for="(icon, index) in icons" type="image/svg+xml" :data="loadImage(icon.src)"></object>
      </div>
      <slot name="action"></slot>
    </div>
  </section>
</template>

<script>
export default{
  name: 'CompanyProcess',

  props: ['title', 'body', 'icons']
};
</script>

<style lang="scss">
/*-------------------------------------*/
/* BASE TEMPLATE Component Styles
/--------------------------------------*/
.mdev-process {
  background: $color-brand-primary;
  padding: 230px 0;
  margin-top: -250px;
  z-index: -1;
}

.mdev-process-wrapper {
  width: 70%;
  margin: 0 auto;

  @media #{$portrait} {
    width: 90%;
  }
}

.mdev-process-icons {
  width: 60%;
  margin: 30px auto 0;

  object {
    width: 10%;
    margin: 0 20px;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}
/*--------------------------------------*/
</style>
