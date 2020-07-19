<template>
  <section class="technologies">
    <div class="technologies-content">
      <h2>#technologies</h2>
      <div class="technologies-grid">
        <Item v-for="technology of technologies" :key="technology.name" :technology="technology" />
      </div>
    </div>
  </section>
</template>
<script>
import Item from './Item.vue';

import reactLogo from '../../img/technologies/react.svg';
import gatsbyLogo from '../../img/technologies/gatsby.svg';
import nodejsLogo from '../../img/technologies/nodejs.svg';
import jsLogo from '../../img/technologies/js.svg';
import tsLogo from '../../img/technologies/ts.svg';
import vueLogo from '../../img/technologies/vue.svg';
import nextjsLogo from '../../img/technologies/nextjs.svg';
import graphqlLogo from '../../img/technologies/graphql.svg';
import denoLogo from '../../img/technologies/deno.svg';
import swiftLogo from '../../img/technologies/swift.svg';
import firebaseLogo from '../../img/technologies/firebase.svg';

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
          website: 'https://www.typescriptlang.org',
        },
        {
          name: 'JavaScript',
          logo: jsLogo,
          bgColor: '#f7df1e',
          fgColor: '#000000',
          website: 'https://developer.mozilla.org/en-US/docs/Web',
        },
        {
          name: 'React',
          logo: reactLogo,
          bgColor: '#53C1DE',
          fgColor: '#000000',
          website: 'https://reactjs.org',
        },
        {
          name: 'Next.js',
          logo: nextjsLogo,
          bgColor: '#ffffff',
          fgColor: '#000000',
          website: 'https://nextjs.org',
        },
        {
          name: 'React Native',
          logo: reactLogo,
          bgColor: '#53C1DE',
          fgColor: '#000000',
          website: 'https://reactnative.dev',
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
          name: 'Node.js',
          logo: nodejsLogo,
          bgColor: '#539E43',
          fgColor: '#ffffff',
          website: 'https://nodejs.org',
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
          name: 'Deno',
          logo: denoLogo,
          bgColor: '#ffffff',
          fgColor: '#000000',
          website: 'https://deno.land',
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
    padding: 50px 25px;
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
