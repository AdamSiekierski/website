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
  name: 'Card',
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
  cursor: pointer;
  border: 10px solid black;
  color: black;
  background-color: white;
  box-sizing: border-box;
  padding: 5px;
  overflow: auto;
  height: 225px;
  font-size: 14px;

  h2 {
    font-weight: 400;
    margin: 0;
    font-size: 18px;
  }
  a {
    text-decoration: none;
    color: black;
  }
}
/* width */
::-webkit-scrollbar {
  width: 10px;
}
/* Track */
::-webkit-scrollbar-track {
  background: white;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #aaaaaa;
  border: 2.5px solid white;
  border-radius: 5px;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #999;
}
</style>
