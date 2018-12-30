<template>
  <div id="githubWrapper">
    <h1> My GitHub Repositories </h1>
    <div id="results">
      <GitHubItem v-for="item in results" :key="item.id" :repository="item"/>
    </div>
    <div style="height: 20px"></div>
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
    axios.get(API, { headers: { Authorization: 'Bearer 12e3f5d7e49efee439162b2a91fa67d77064a66c' } }).then((response) => {
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
  h1 {
    font-size: 60px;
    color: #151519;
    font-weight: 400;
    margin: 0;
    margin-top: 50px;
    text-align: center;
    width: 100%;
    @media screen and (max-width: 700px) {
      font-size: 38px;
    }
  }
}
#results {
  width: 100%;
  height: 100%;
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
