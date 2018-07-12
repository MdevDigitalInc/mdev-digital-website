<template>
  <div class="mdev-split flex flex-hor-between flex-vert-center">
    <div class="mdev-split-6">
      <slot name="leftSlot"></slot>
    </div>
    <div class="mdev-split-4">
      <slot name="rightSlot"></slot>
    </div>
  </div>
</template>



<script>

	export default {
	};

</script>

<style lang="scss" scoped>

/*--------------------------------------*/
/* Lean Import for Components           */
/*--------------------------------------*/
.mdev-split-6 {
  width: 60%;
  padding-right: 1vw;

  @media #{$portrait} {
    width: 100%;
    margin-bottom: 25px;
    padding-right: 0;
  }
}

.mdev-split-4 {
  width: 40%;
  padding-left: 1vw;

  @media #{$portrait} {
    width: 100%;
    padding-left: 0;
  }
}
/*--------------------------------------*/
/* Main Component Styles                */
/*--------------------------------------*/
/*--------------------------------------*/

</style>
