<template>
  <div class="mdev-split flex flex-hor-between flex-vert-center">
    <div class="mdev-split-5">
      <slot name="leftSlot"></slot>
    </div>
    <div class="mdev-split-5">
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
.mdev-split-5 {
  width: 50%;
  padding-right: 1vw;

  @media #{ $portrait } {
    width: 100%;
    margin-bottom: 25px;
    padding-right: 0;
  }
}

/*--------------------------------------*/
/* Main Component Styles                */
/*--------------------------------------*/
/*--------------------------------------*/

</style>
