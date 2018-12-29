<template>
    <div v-if="fork === false && name !== 'adamsiekierski.github.io'">
        <p>{{ name }}</p>
    </div>
</template>
<script>
export default {
  name: 'GitHubItem',
  props: {
    repository: {
      type: Object,
      reqired: true,
    },
  },
  data() {
    return {
        name: this.repository.name,
        fork: this.repository.fork,
    };
  },
};
</script>
<style lang="scss" scoped></style>
