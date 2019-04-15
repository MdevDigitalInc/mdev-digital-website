<template>
    <router-view></router-view>
</template>

<script>
export default {
  name: "ServicesView",
  metaInfo: {
    changed (newInfo, addedTags, removedTags) {
      document.dispatchEvent(new Event('spa-rendered'));
      console.log('Meta info was updated!');
      console.log(addedTags);
      console.log(removedTags);
    },
  }
};
</script>
