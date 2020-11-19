<template>
  <section class="about" id="about">
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
        projects and contributions. All my current projects and work are available on my
        <a href="https://github.com/AdamSiekierski">GitHub</a> - I open source all my work.
      </p>
      <p>
        If you want to take a look at stuff I use at everyday basis, I recommend looking at
        <router-link to="/uses">uses</router-link> 😄.
      </p>
      <p>
        Also, I'm an author of a Polish JavaScript podcast -
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
import { useAge } from '../../hooks/useAge';

export default {
  setup() {
    const age = useAge(2004);

    return {
      age,
    };
  },
};
</script>
<style lang="scss" scoped>
@use '../../styles/mixins.scss';

.about {
  &-content {
    max-width: 800px;
    margin: 0 auto;
    padding: 50px 25px;
    padding-bottom: 0;
  }

  a {
    @include mixins.themed() using ($theme) {
      color: map-get($theme, 'fg');
    }
  }
}
</style>
