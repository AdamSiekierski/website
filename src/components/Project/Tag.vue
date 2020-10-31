<template>
  <div class="project-tag" :style="{ 'background-color': color, color: fg }">{{ name }}</div>
</template>
<script>
export default {
  props: {
    color: String,
    name: String,
    fg: String,
  },
};
</script>
<style lang="scss" scoped>
.project-tag {
  padding: 2px 4px;
  font-size: 0.7em;
  display: inline-block;
  margin: 0 2px;
}
</style>
