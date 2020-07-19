<template>
  <section class="about">
    <div class="about-content">
      <h2>#about</h2>
      <p>
        Hi 👋! Thanks for visiting my site! I'm a {{ age }} year old hobbyist full stack web
        developer, based in Poznań, Poland 🇵🇱.
      </p>
      <p>
        I've started coding about 5 years ago, trying to learn C++. Now my main interests are OSS
        development in JavaScript and TypeScript, creating apps in Swift, and recently I've began
        learning Go. Check out <router-link to="/projects">projects</router-link> for some of my
        projects and contributions. Also go and see my
        <a href="https://blog.siekierski.ml">blog</a> - maybe one day I will start posting more
        often.
      </p>
      <p>
        If you want to take a look at stuff I use at everyday basis, I recommend looking at
        <router-link to="/uses">uses</router-link> 😄.
      </p>
      <p>
        Also, I'm an author of Polish web development podcast -
        <a href="https://require.podcast.gq">Require Podcast</a>. If you can understand this
        difficult language, check it out 🎙.
      </p>
      <p>
        Besides sitting in front of my computer, I really enjoy mountain biking, running, skiing,
        snowboarding and travelling (especially hiking in the mountains).
      </p>
    </div>
  </section>
</template>
<script>
export default {
  name: 'About',
  computed: {
    age() {
      return new Date().getFullYear() - 2004;
    },
  },
};
</script>
<style lang="scss" scoped>
.about {
  color: white;

  &-content {
    max-width: 800px;
    margin: 0 auto;
    padding: 50px;
    padding-bottom: 0;
  }

  a {
    color: white;

    &:hover {
      color: #ddd;
    }
  }
}
</style>
