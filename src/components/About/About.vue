<template>
  <section class="about" id="about">
    <div class="about-content">
      <h2>#about</h2>
      <p>
        Hi 👋! Thanks for visiting my site! I'm a {{ age }} year old full stack developer, based in
        Poznań, Poland 🇵🇱.
      </p>
      <p>
        My name is Adam and I'm a software developer. I'm a big fan of TypeScript, JavaScript,
        React, Node.js and Vue.js. I'm currently working at
        <a href="https://appunite.com">AppUnite</a> as a frontend developer. I'm open to new
        technologies and solutions, and always willing to learn new things. My main focuses right
        now are broadening my knowledge beyond the JavaScript world, and trying to dive into a
        completely new platform - like iOS.
      </p>
      <p>
        To take a look at the stuff I do open-source, check out my
        <a href="https://github.com/AdamSiekierski">GitHub profile</a>.
      </p>
      <p>
        If you want to take a look at the things I use at everyday basis, I recommend looking at
        <router-link to="/uses">uses</router-link> 😄.
      </p>
      <p>
        Also, I'm an author of a Polish JavaScript podcast -
        <a href="https://require.pl">Require Podcast</a>. If you can understand this
        difficult language, check it out 🎙.
      </p>
      <p>
        Besides sitting in front of my computer, I really enjoy mountain biking, hiking and pretty
        much all the other outdoor activities you can imagine.
      </p>
    </div>
  </section>
</template>
<script>
import { useAge } from "../../hooks/useAge";

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
      color: map-get($theme, "fg");
    }
  }
}
</style>
