<template>
  <div class="technologies">
    <div class="technologies-content">
      <h2>#technologies</h2>
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
import nextjsLogo from '../../img/nextjs.svg';
import graphqlLogo from '../../img/graphql.svg';
import denoLogo from '../../img/deno.svg';
import swiftLogo from '../../img/swift.svg';
import firebaseLogo from '../../img/firebase.svg';

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
          name: 'TypeScript',
          logo: tsLogo,
          bgColor: '#007acc',
          fgColor: '#ffffff',
          website: 'https://typescriptlang.org',
        },
        {
          name: 'JavaScript',
          logo: jsLogo,
          bgColor: '#f7df1e',
          fgColor: '#000000',
          website: 'https://nodejs.org',
        },
        {
          name: 'React',
          logo: reactLogo,
          bgColor: '#53C1DE',
          fgColor: '#000000',
          website: 'https://reactjs.org',
        },
        {
          name: 'Node.js',
          logo: nodejsLogo,
          bgColor: '#539E43',
          fgColor: '#ffffff',
          website: 'https://nodejs.org',
        },
        {
          name: 'Deno',
          logo: denoLogo,
          bgColor: '#ffffff',
          fgColor: '#000000',
          website: 'https://deno.land',
        },
        {
          name: 'GraphQL',
          logo: graphqlLogo,
          bgColor: '#E535AB',
          fgColor: '#ffffff',
          website: 'https://graphql.org',
        },
        {
          name: 'Gatsby',
          logo: gatsbyLogo,
          bgColor: '#663399',
          fgColor: '#ffffff',
          website: 'https://gatsbyjs.org',
        },
        {
          name: 'Next.js',
          logo: nextjsLogo,
          bgColor: '#ffffff',
          fgColor: '#000000',
          website: 'https://nextjs.org',
        },
        {
          name: 'Vue.js',
          logo: vueLogo,
          bgColor: '#42b883',
          fgColor: '#ffffff',
          website: 'https://vuejs.org',
        },
        {
          name: 'Swift',
          logo: swiftLogo,
          bgColor: '#f57929',
          fgColor: '#ffffff',
          website: 'https://swift.org/',
        },
        {
          name: 'React Native',
          logo: reactLogo,
          bgColor: '#53C1DE',
          fgColor: '#000000',
          website: 'https://reactnative.dev',
        },
        {
          name: 'Firebase',
          logo: firebaseLogo,
          bgColor: '#039BE5',
          fgColor: '#ffffff',
          website: 'https://firebase.google.com',
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

  &-content {
    max-width: 800px;
    margin: 0 auto;
    padding: 50px;
    padding-bottom: 0;
  }

  &-grid {
    display: grid;
    grid-gap: 15px;
    overflow: auto;

    grid-template-rows: auto auto;
    grid-template-columns: repeat(6, 200px);
  }
}
</style>
