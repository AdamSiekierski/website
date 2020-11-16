<template>
  <a class="contact-find-item" :style="styles" :href="site.link">
    <img :src="site.icon" :alt="site.name" />
  </a>
</template>
<script>
import { computed } from 'vue';

export default {
  setup(props) {
    const styles = computed(() => ({
      '--bg-color': props.site.bgColor,
    }));

    return { styles };
  },
  props: {
    site: {
      icon: String,
      link: String,
      name: String,
      bgColor: String,
    },
  },
};
</script>
<style lang="scss">
@use '../../styles/mixins.scss' as mixins;

.contact-find-item {
  display: block;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  @include mixins.themed() using ($theme) {
    background: map-get($theme, 'bg');

    &:hover {
      background: var(--bg-color);

      img {
        filter: none;
      }
    }

    img {
      width: 100%;

      @if map-get($theme, 'name') == 'light' {
        filter: invert(1);
      }
    }
  }
}
</style>
