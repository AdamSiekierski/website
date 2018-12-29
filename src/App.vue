<template>
  <div id="app">
      <div id="nav">
        <router-link to="/" id="left">Home</router-link>
        <router-link to="/about" id="right">About</router-link>
      </div>
      <router-view />
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=VT323');
  * {
    font-family: 'VT323', monospace;
  }
  body {
    margin: 0 !important;
  }
  #app {
    height: 100vh;
  }
  #nav {
    font-size: 28px;
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
</style>
