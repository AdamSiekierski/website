<template>
  <div id="githubWrapper">
    <h1> My GitHub Repositories </h1>
    <div id="results">
      <GitHubItem v-for="item in results" :key="item.id" :repository="item"/>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import GitHubItem from '@/components/GitHub Item.vue';

const API = 'https://api.github.com/users/AdamSiekierski/repos';
export default {
  name: 'GitHubRepos',
  data() {
    return {
      results: [],
    };
  },
  components: {
    GitHubItem,
  },
  created() {
    axios.get(API).then((response) => {
      this.results = response.data;
    });
  },
};
</script>
<style lang="scss" scoped>
#githubWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eeeeee;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 50px;
  h1 {
    font-size: 60px;
    color: #151519;
    font-weight: 400;
    margin: 0;
    text-align: center;
    @media screen and (max-width: 700px) {
      font-size: 38px;
    }
  }
}
</style>
