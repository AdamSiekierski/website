<template>
  <div class="wrapper">
    <h1>/projects</h1>
    <p>Here you can find some of most remarkable projects that I create or contrubute to 👨‍💻:</p>
    <br />
    <Project
      v-for="project in projects"
      :key="project.name"
      :name="project.name"
      :description="project.description"
      :url="project.url"
      :tags="project.tags"
    />
    <p>
      More of my projects are at my
      <a href="https://github.com/AdamSiekierski">GitHub</a>. Give 'em some <b>stars</b>, and feel
      free to follow me 😆.
    </p>
  </div>
</template>
<script>
import Project from '@/components/Project/Project.vue';
import {
  gatsby,
  react,
  javascript,
  nodejs,
  firebase,
  vuejs,
  graphql,
  typescript,
  swift,
  go,
  pkg,
  app,
  cli,
  frontend,
  backend,
  nextjs,
} from '../utils/techTags';

const projects = [
  {
    name: 'requirepodcast-website',
    description:
      "Our podcast's website made with Gatsby.js, with episode archive generated from markdown files.",
    url: 'https://github.com/requirepodcast/website',
    tags: [frontend, javascript, gatsby, react, graphql],
  },
  {
    name: 'requirepodcast-studio',
    description:
      "An all-in-one web app for podcast production, made by Require Podcast for Require Podcast. Episode video rendering with ffmpeg, generating promotional images, link shortener, integration with GitHub's OAuth.",
    url: 'https://github.com/requirepodcast/studio',
    tags: [typescript, nodejs, javascript, backend],
  },
  {
    name: 'requirepodcast-app',
    description:
      'Official mobile app for listening to our podcast. Made with React Native and Firebase',
    url: 'https://github.com/requirepodcast/app',
    tags: [app, react, javascript, firebase],
  },
  {
    name: 'gatsby-plugin-nodejs',
    description: 'Gatsby plugin for easy integration with Node.js servers.',
    url: 'https://github.com/AdamSiekierski/gatsby-plugin-nodejs',
    tags: [gatsby, react, javascript, nodejs, pkg],
  },
  {
    name: 'Gittie',
    description: 'Quickly create .gitignore in your project using one simple command',
    url: 'https://github.com/AdamSiekierski/gittie',
    tags: [go, cli],
  },
  {
    name: 'website',
    description: 'This website. Made with Vue.js 3',
    url: 'https://github.com/AdamSiekierski/blog',
    tags: [javascript, vuejs, frontend],
  },
  {
    name: 'requirepodcast-ios',
    description: "Require Podcast's iOS app. Made with only native iOS's APIs.",
    url: 'https://github.com/requirepodcast/ios',
    tags: [swift, app],
  },
  {
    name: 'requirepodcast-letter',
    description:
      "Require Podcast's newsletter. Made using Next.js, Contentful and Sendgrid. Besides the frontend, has a simple API, that recieves letter drafts from CMS and creates a mail in Sendgrid using our template.",
    url: 'https://github.com/requirepodcast/letter',
    tags: [typescript, react, nextjs, nodejs],
  },
  {
    name: 'holdmabeer',
    description:
      'Let your app do something important. A simple package with more modern approach at setTimeout 🍺.',
    url: 'https://github.com/AdamSiekierski/holdmabeer',
    tags: [typescript, nodejs, pkg],
  },
  {
    name: 'gatsby-pl',
    description: 'Polish translation of Gatsby.js docs.',
    url: 'https://github.com/gatsbyjs/gatsby-pl',
    tags: [gatsby],
  },
];

export default {
  setup() {
    return { projects };
  },
  components: {
    Project,
  },
};
</script>
<style lang="scss" scoped>
@use '../styles/mixins.scss' as mixins;

.wrapper {
  padding: 50px 25px;
  min-height: 100vh;
  max-width: 800px;
  margin: 0 auto;

  a {
    @include mixins.themed() using ($theme) {
      color: map-get($theme, 'fg');
    }
  }
}
</style>
