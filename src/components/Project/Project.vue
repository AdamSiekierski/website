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
import Tag from './Tag.vue';

export default {
  setup() {
    return { Tag };
  },
  props: {
    name: String,
    description: String,
    url: String,
    tags: Array,
  },
};
</script>
<style lang="scss" scoped>
@use "../../styles/mixins.scss" as mixins;

.projects-item {
  margin: 15px 0;
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

  @include mixins.themed() using ($theme) {
    border: 4px solid map-get($theme, 'fg');
  }
}
</style>
