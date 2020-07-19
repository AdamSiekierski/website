<template>
  <a :href="technology.website" class="technologies-item" :style="styles">
    <img :src="technology.logo" :alt="technology.name" class="technologies-item-logo" />
    {{ technology.name }}
  </a>
</template>
<script>
import { hoverBg } from '@/utils/hoverBg';

export default {
  name: 'Item',
  props: {
    technology: {
      name: String,
      logo: String,
      bgColor: String,
      fgColor: String,
      website: String,
    },
  },
  computed: {
    styles() {
      return {
        '--bg-color': this.technology.bgColor,
        '--bg-color-hover': hoverBg(this.technology.bgColor),
        '--fg-color': this.technology.fgColor,
      };
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
