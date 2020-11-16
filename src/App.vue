<template>
  <div class="theme--light">
    <div class="app">
      <nav class="nav">
        <router-link to="/" active-class="--active">home</router-link>
        <router-link to="/projects">projects</router-link>
        <router-link to="/uses">uses</router-link>
      </nav>
      <router-view />
      <footer class="footer">
        the end. copyright {{ new Date().getFullYear() }} &copy; adam siekierski.
      </footer>
    </div>
  </div>
</template>
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

    a {
      color: map-get($theme, 'fg');
    }
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
  justify-content: flex-end;

  a {
    margin: 0 5px;
    text-decoration: none;
  }

  .router-link-exact-active {
    @include mixins.themed() using ($theme) {
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
  background: white;
  color: black;
}

::-webkit-scrollbar {
  width: 15px;
}

::-webkit-scrollbar-track {
  background: black;
}

::-webkit-scrollbar-thumb {
  background: #333;
}

::-webkit-scrollbar-thumb:hover {
  background: #444;
}
</style>
