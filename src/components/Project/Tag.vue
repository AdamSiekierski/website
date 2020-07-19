<template>
  <div class="project-tag" :style="{ 'background-color': color }">{{ name }}</div>
</template>
<script>
export default {
  name: 'Tag',
  props: {
    color: String,
    name: String,
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
