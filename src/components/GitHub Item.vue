<!-- eslint-ignore-file -->
<template>
  <div
    v-if="fork === false && name !== 'adamsiekierski.github.io'"
    id="itemContainer"
    v-on:click="redirect"
  >
    <span class="label">name:</span>
    <h2 id="name">{{ name }}</h2>
    <span class="label">description:</span>
    <h2 id="description">{{ desc }}</h2>
    <span class="label" v-if="language != null">technology:</span>
    <h2 id="language">{{ language }}</h2>
  </div>
</template>
<script>
export default {
  name: 'GithubItem',
  props: {
    repository: {
      type: Object,
    },
  },
  data() {
    return {
      name: this.repository.name,
      fork: this.repository.fork,
      language: this.repository.language,
      desc: this.repository.description,
      adress: this.repository.html_url,
    };
  },
  methods: {
    redirect() {
      window.location.href = this.adress;
    },
  },
};
</script>
<style lang="scss" scoped>
#itemContainer {
  width: 30vw;
  min-height: 175px;
  cursor: pointer;
  border: 10px solid #37373b;
  color: #151519;
  background-color: #dfdfdf;
  box-sizing: border-box;
  padding: 5px;
  overflow: auto;
  h2 {
    font-weight: 400;
    margin: 0;
    font-size: 30px;
  }
  @media screen and (max-width: 1200px) {
    width: 45vw;
  }
  @media screen and (max-width: 700px) {
    width: 90vw;
    height: 150px;
  }
  a {
    text-decoration: none;
    color: #151519;
  }
}
/* width */
::-webkit-scrollbar {
  width: 10px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #dfdfdf;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #aaaaaa;
  border: 2.5px solid #dfdfdf;
  border-radius: 5px;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #9f9f9f;
}
</style>
