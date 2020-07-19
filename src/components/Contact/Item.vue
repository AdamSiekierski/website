<template>
  <a class="contact-find-item" :style="styles" :href="link">
    <img :src="icon" :alt="name" />
  </a>
</template>
<script>
export default {
  name: 'Item',
  props: {
    icon: String,
    link: String,
    name: String,
    bgColor: String,
  },
  computed: {
    styles() {
      return {
        '--bg-color': this.bgColor,
        '--bg-color-hover': `${this.bgColor}EE`,
      };
    },
  },
};
</script>
<style lang="scss">
.contact-find-item {
  display: block;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-color);

  img {
    width: 32px;
    height: 32px;
  }

  &:hover {
    background-color: var(--bg-color-hover);
  }
}
</style>
