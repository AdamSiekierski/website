<template>
  <div class="technologies">
    <div class="technologies-content">
      <h1>#technologies</h1>
      <div class="technologies-grid">
        <Item v-for="technology of technologies" :key="technology.name" :technology="technology" />
      </div>
    </div>
  </div>
</template>
<script>
import Item from './Item.vue';

import reactLogo from '../../img/react.svg';
import gatsbyLogo from '../../img/gatsby.svg';
import nodejsLogo from '../../img/nodejs.svg';
import jsLogo from '../../img/js.svg';
import tsLogo from '../../img/ts.svg';
import vueLogo from '../../img/vue.svg';

export default {
  name: 'About',
  computed: {
    age() {
      return new Date().getFullYear() - 2004;
    },
  },
  data() {
    return {
      technologies: [
        {
          name: 'React',
          logo: reactLogo,
          bgColor: '#53C1DE',
          fgColor: '#ffffff',
          website: 'https://reactjs.org',
        },
        {
          name: 'Gatsby',
          logo: gatsbyLogo,
          bgColor: '#663399',
          fgColor: '#ffffff',
          website: 'https://gatsbyjs.org',
        },
        {
          name: 'Node.js',
          logo: nodejsLogo,
          bgColor: '#539E43',
          fgColor: '#ffffff',
          website: 'https://nodejs.org',
        },
        {
          name: 'JavaScript',
          logo: jsLogo,
          bgColor: '#f7df1e',
          fgColor: 'black',
          website: 'https://nodejs.org',
        },
        {
          name: 'TypeScript',
          logo: tsLogo,
          bgColor: '#007acc',
          fgColor: '#ffffff',
          website: 'https://typescriptlang.org',
        },

        {
          name: 'Vue.js',
          logo: vueLogo,
          bgColor: '#42b883',
          fgColor: '#ffffff',
          website: 'https://vuejs.org',
        },
      ],
    };
  },
  components: {
    Item,
  },
};
</script>
<style lang="scss" scoped>
.technologies {
  color: white;
  margin: 1em;

  &-content {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 50px;
  }

  &-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
  }
}
</style>
