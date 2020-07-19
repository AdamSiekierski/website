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
      More of my projects are at my <a href="https://github.com/AdamSiekierski">GitHub</a>. Give 'em
      some <b>stars</b>, and feel free to follow me 😆.
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
} from '../utils/techTags';

export default {
  name: 'Projects',
  components: {
    Project,
  },
  data() {
    return {
      projects: [
        {
          name: 'gatsby-plugin-nodejs',
          description: 'Gatsby plugin for easy integration with Node.js servers.',
          url: 'https://github.com/AdamSiekierski/gatsby-plugin-nodejs',
          tags: [gatsby, react, javascript, nodejs],
        },
        {
          name: 'requirepodcast-studio',
          description:
            "An all-in-one web app for podcast production, made by Require Podcast for Require Podcast. Episode video rendering with ffmpeg, generating promotional images, integration with GitHub's OAuth.",
          url: 'https://github.com/requirepodcast/studio',
          tags: [typescript, nodejs, javascript],
        },
        {
          name: 'writes.',
          description: 'App for sharing ideas for school projects. Coming soon 🔜.',
          url: 'https://github.com/writesapp/website',
          tags: [firebase, react, javascript, nodejs, vuejs],
        },
        {
          name: 'blog',
          description:
            'My blog. I sometimes post something there, so feel free to check it out 😄.',
          url: 'https://github.com/AdamSiekierski/blog',
          tags: [javascript, react, gatsby, graphql],
        },
        {
          name: 'requirepodcast-ios',
          description: "Require Podcast's iOS app. Made with only native iOS's APIs.",
          url: 'https://github.com/requirepodcast/ios',
          tags: [swift],
        },
        {
          name: 'holdmabeer',
          description:
            'Let your app do something important. A simple package with more modern approach at setTimeout 🍺.',
          url: 'https://github.com/AdamSiekierski/holdmabeer',
          tags: [typescript, nodejs],
        },
        {
          name: 'gatsby-pl',
          description: 'Polish translation of Gatsby.js docs.',
          url: 'https://github.com/gatsbyjs/gatsby-pl',
          tags: [gatsby],
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  color: white;
  padding: 50px 25px;
  min-height: 100vh;
  max-width: 800px;
  margin: 0 auto;

  a {
    color: white;

    &:hover {
      color: #ddd;
    }
  }
}
</style>
