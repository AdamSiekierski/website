<template>
  <div class="projects-item">
    <h3>
      {{ name }}
      <a :href="url" :style="{ margin: '0 1ch' }">
        <img class="github-logo" src="../../img/websites/github.png" />
      </a>
    </h3>
    <p>{{ description }}</p>
    <div class="project-item-tags">
      <Tag v-for="tag of tags" :key="tag.name" :name="tag.name" :color="tag.color" :fg="tag.fg" />
    </div>
  </div>
</template>
<script>
import Tag from "./Tag.vue";

export default {
  name: "Projects",
  props: {
    name: String,
    description: String,
    url: String,
    tags: Array,
  },
  data() {
    return { stars: 0 };
  },
  components: {
    Tag,
  },
};
</script>
<style lang="scss" scoped>
.projects-item {
  margin: 15px 0;
  border: 4px solid white;
  padding: 20px;
  position: relative;

  h3 {
    margin-top: 0.5em;
  }

  .github-logo {
    height: 1rem;
    vertical-align: -1px;

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
