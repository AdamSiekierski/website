<template>
    <div id="wrapper">
        <LandingLabel />
        <GitHubRepos />
    </div>
</template>
<script>
import LandingLabel from '@/components/LandingLabel.vue';
import GitHubRepos from '@/components/GitHub Repos.vue';

export default {
  name: 'Home',
  components: {
    LandingLabel,
    GitHubRepos,
  },
};
</script>
<style lang="scss" scoped>
#wrapper {
    min-height: 100%;
}
</style>
