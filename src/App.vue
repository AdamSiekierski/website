<template>
  <div :class="`theme--${theme}`">
    <div class="app">
      <nav class="nav">
        <button class="theme-button" @click="toggleTheme">
          <img
            :src="theme === 'dark' ? light : dark"
            alt="theme toggle icon"
            class="theme-button-image"
          />
        </button>
        <div>
          <router-link to="/" active-class="--active">home</router-link>
          <router-link to="/projects">projects</router-link>
          <router-link to="/uses">uses</router-link>
        </div>
      </nav>
      <router-view />
      <footer class="footer">
        the end. copyright {{ new Date().getFullYear() }} &copy; adam siekierski.
      </footer>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
import light from './img/icons/day.svg';
import dark from './img/icons/night.svg';

export default {
  setup() {
    const theme = ref('dark');

    if (localStorage.getItem('theme') === 'light') {
      theme.value = 'light';
    }

    function toggleTheme() {
      const newTheme = theme.value === 'dark' ? 'light' : 'dark';

      localStorage.setItem('theme', newTheme);

      theme.value = newTheme;
    }

    return {
      theme,
      toggleTheme,
      light,
      dark,
    };
  },
};
</script>
<style lang="scss">
@use './styles/mixins.scss' as mixins;

@import url('https://fonts.googleapis.com/css?family=Roboto+Mono:400,700&display=swap');

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Roboto Mono', monospace;
  background-color: black;
}

.app {
  overflow: hidden;
  @include mixins.themed() using ($theme) {
    background-color: map-get($theme, 'bg');
    color: map-get($theme, 'fg');
  }
}

.nav {
  font-size: 18px;
  padding: 10px;
  position: absolute;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .theme-button {
    background: none;
    outline: none;
    appearance: none;
    border: none;
    font-size: inherit;
    vertical-align: middle;
    cursor: pointer;

    &-image {
      height: 100%;
    }
  }

  @include mixins.themed() using ($theme) {
    a {
      margin: 0 5px;
      text-decoration: none;
      color: map-get($theme, 'fg');
    }

    .router-link-exact-active {
      border-bottom: 1px solid map-get($theme, 'fg');
    }
  }
}

.footer {
  text-align: center;
  width: 100%;
  padding: 3px;
  font-size: 14px;
}

::selection {
  @include mixins.themed() using ($theme) {
    background: map-get($theme, 'fg');
    color: map-get($theme, 'bg');
  }
}
</style>
