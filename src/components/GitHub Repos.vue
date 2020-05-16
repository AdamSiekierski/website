<template>
  <div id="githubWrapper">
    <h1>my github repositories</h1>
    <div id="results">
      <Card v-for="item in results" :key="item.id" :repository="item" />
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import Card from './Card.vue';

const API = 'https://api.github.com/users/AdamSiekierski/repos';

export default {
  name: 'GitHubRepos',
  data() {
    return {
      results: [],
    };
  },
  components: {
    Card,
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
  background-color: white;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 20px;

  h1 {
    color: black;
    font-weight: bold;
    margin: 50px 0 0;
    text-align: center;
    width: 100%;
  }
}
#results {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-row-gap: 15px;
  grid-column-gap: 15px;
  padding: 20px;

  @media (max-width: 700px) {
    grid-template-columns: auto;
  }
}
</style>
