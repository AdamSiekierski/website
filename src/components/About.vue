<template>
  <div class="about">
    <div class="about-content">
      <h1>#about</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: 'About',
};
</script>
<style lang="scss" scoped>
.about {
  width: 100%;
  min-height: 100vh;
  background-color: white;

  &-content {
    max-width: 800px;
    margin: 0 auto;
    padding: 50px;
  }
}
</style>
