<template>
  <div class="mdev-full-section --accent-bkg --pull-up-section">
    <div class="mdev-main-wrapper u-text-center">
      <h3 class="u-uppercase u-c-black u-bold">
        {{ $t("homepage.testimonials.heading") }}
      </h3>
      <p class="mdev-testimonial u-c-black --space-top-xs u-light u-italic">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in velit at ex mollis ultrices non eget diam. Integer id velit ac arcu faucibus porttitor et at metus. Nam non odio et tellus
        placerat aliquet. Morbi sem metus, gravida in arcu in, pharetra mattis augue. In hac habitasse platea dictumst.

        <span class="testimonial-name">
          - Aaron Finkenzeller, CTO Zucora Inc.
        </span>
      </p>

      <div class="mdev-testimonial-ctrl flex flex-hor-center flex-vert-center">

      </div>
    </div>
  </div>
</template>



<script>
  export default{
    name: 'HomeTestimonials',
    data: function(){
      return{

      };
    },
  };
</script>



<style lang="scss">

/*-------------------------------------*/
/* Home Testimonials Component Styles
/--------------------------------------*/
.mdev-testimonial {
  width: 80%;
  margin: 0 auto;

  .testimonial-name {
    display: block;
    font-weight: 400;
    margin-top: 10px;
    font-style: normal;
  }
}

/*--------------------------------------*/

</style>
