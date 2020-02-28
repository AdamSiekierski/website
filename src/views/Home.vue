<template>
  <div id="wrapper">
    <Landing />
    <GitHubRepos />
  </div>
</template>
<script>
import Landing from '@/components/Landing.vue';
import GitHubRepos from '@/components/GitHub Repos.vue';

export default {
  name: 'Home',
  components: {
    Landing,
    GitHubRepos,
  },
};
</script>
<style lang="scss" scoped>
#wrapper {
  min-height: 100%;
}
</style>
