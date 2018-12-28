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
    background-color: #151519;
    margin: 0 !important;
  }
  #app {
    height: 100vh;
  }
  #nav {
    font-size: 28px;
    padding: 5px;
    position: absolute;
    width: 100%;
    box-sizing: border-box;
    display: flex;
  }
  #nav a {
    color: #eeeeee;
    text-decoration: none;
    border-bottom: 1px solid #eeeeee;
  }
</style>
