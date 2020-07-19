<template>
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
</template>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono:400,700&display=swap');

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Roboto Mono', monospace;
  background-color: #000000;
}

.app {
  overflow: hidden;
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
  mix-blend-mode: difference;

  a {
    color: white;
    text-decoration: none;
    margin: 0 5px;

    &:hover {
      color: #bbb;
      border-color: #bbb;
    }
  }

  .router-link-exact-active {
    border-bottom: 1px solid white;
  }
}

.footer {
  background-color: black;
  color: white;
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
