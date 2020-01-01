<template>
  <div id="app">
    <div id="nav">
      <a href="https://adamsiekierski.github.io/blog" id="left">Blog</a>
      <router-link to="/about" id="right" v-if="this.$route.name === 'Home'">About</router-link>
      <router-link to="/" id="right" v-if="this.$route.name === 'About'">Home</router-link>
    </div>
    <router-view />
    <div id="footer">
      the end. copyright {{ new Date().getFullYear() }} &copy; adam siekierski.
    </div>
  </div>
</template>
<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono:400,700&display=swap');
  body {
    margin: 0 !important;
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
    color: #bbbbbb;
    text-decoration: none;
    border-bottom: 1px solid #bbbbbb;
    transition: color .3s ease-in-out, border-color .3s ease-in-out;
  }
  #nav a:hover {
    color: #a7a7af;
    border-color: #a7a7af;
  }
  ::selection {
    background: #151519;
    color: #999999;
  }
  #footer {
    background-color: #151519;
    color: #eeeeee;
    text-align: center;
    width: 100%;
    padding: 3px;
    font-size: 14px;
    box-sizing: border-box;
  }
  .whiteFooter {
    color: #151519;
    background-color: #eeeeee;
  }
  /* width */
  ::-webkit-scrollbar {
    width: 15px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: #151519;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #27272a;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #242426;
  }
</style>
