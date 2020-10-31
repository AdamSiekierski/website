<template>
  <a :href="technology.website" class="technologies-item" :style="styles">
    <img :src="technology.logo" :alt="technology.name" class="technologies-item-logo" />
    {{ technology.name }}
  </a>
</template>
<script>
import { hoverBg } from '@/utils/hoverBg';
import { computed } from 'vue';

export default {
  setup(props) {
    const styles = computed(() => ({
      '--bg-color': props.technology.bgColor,
      '--bg-color-hover': hoverBg(props.technology.bgColor),
      '--fg-color': props.technology.fgColor,
    }));

    return { styles };
  },
  props: {
    technology: {
      name: String,
      logo: String,
      bgColor: String,
      fgColor: String,
      website: String,
    },
  },
};
</script>
<style lang="scss" scoped>
.technologies-item {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  background: var(--bg-color);
  color: var(--fg-color);
  text-decoration: none;

  &:hover {
    background: var(--bg-color-hover);
  }

  &-logo {
    height: 70px;
    margin-bottom: 10px;
  }
}
</style>
