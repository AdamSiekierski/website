<template>
  <div id="app">
    <div id="nav">
      <a href="https://adamsiekierski.github.io/blog" id="left">Blog</a>
      <router-link to="/about" id="right" v-if="this.$route.name === 'Home'">About</router-link>
      <router-link to="/" id="right" v-if="this.$route.name === 'About'">Home</router-link>
    </div>
    <router-view />
    <div id="footer">the end. copyright {{ new Date().getFullYear() }} &copy; adam siekierski.</div>
  </div>
</template>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono:400,700&display=swap');

body {
  margin: 0;
  font-family: 'Roboto Mono', monospace;
  background-color: #000000;
}

#nav {
  font-size: 18px;
  padding: 10px;
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  mix-blend-mode: difference;
}
#nav a {
  color: white;
  text-decoration: none;
  border-bottom: 1px solid white;
  transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out;
}
#nav a:hover {
  color: #bbb;
  border-color: #bbb;
}
::selection {
  background: #333;
  color: #bbb;
}
#footer {
  background-color: black;
  color: white;
  text-align: center;
  width: 100%;
  padding: 3px;
  font-size: 14px;
  box-sizing: border-box;
}
.whiteFooter {
  color: black;
  background-color: white;
}
/* width */
::-webkit-scrollbar {
  width: 15px;
}
/* Track */
::-webkit-scrollbar-track {
  background: black;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #333;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #444;
}
</style>
