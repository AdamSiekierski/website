<template>
  <a class="contact-find-item" :style="styles" :href="site.link">
    <img :src="site.icon" :alt="site.name" />
  </a>
</template>
<script>
export default {
  name: 'Item',
  props: {
    site: {
      icon: String,
      link: String,
      name: String,
      bgColor: String,
    },
  },
  computed: {
    styles() {
      return {
        '--bg-color': this.site.bgColor,
      };
    },
  },
};
</script>
<style lang="scss">
.contact-find-item {
  display: block;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;

  img {
    width: 100%;
  }

  &:hover {
    background: var(--bg-color);
  }
}
</style>
