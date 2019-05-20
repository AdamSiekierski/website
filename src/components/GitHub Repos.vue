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
import GitHubItem from './GitHub Item.vue';

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
    axios.get(API).then((response) => { // Hahahahahha, here was my password!
      this.results = response.data;
    });
  },
};
</script>
<style lang="scss" scoped>
#githubWrapper {
  background-color: #eeeeee;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  padding-bottom: 20px;
  h1 {
    font-size: 60px;
    color: #151519;
    font-weight: 400;
    margin: 50px 0 0;
    text-align: center;
    width: 100%;
    @media screen and (max-width: 700px) {
      font-size: 38px;
    }
  }
}
#results {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-row-gap: 15px;
  grid-column-gap: 15px;
  margin-top: 20px;
  justify-content: center;
  align-self: center;
  @media screen and (max-width:  1200px){
    grid-template-columns: auto auto;
  }
  @media screen and (max-width:  700px){
    grid-template-columns: auto;
  }
}
</style>
