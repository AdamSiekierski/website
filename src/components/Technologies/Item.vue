<template>
  <a :href="technology.website" class="technologies-item" :style="styles">
    <img :src="technology.logo" :alt="technology.name" class="technologies-item-logo" />
    {{ technology.name }}
  </a>
</template>
<script>
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
        '--bg-color-hover': `${this.technology.bgColor}EE`,
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
  background-color: var(--bg-color);
  color: var(--fg-color);
  text-decoration: none;

  &:hover {
    background-color: var(--bg-color-hover);
  }

  &-logo {
    height: 80px;
    margin-bottom: 10px;
  }
}
</style>
