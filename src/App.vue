<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" id="left" v-scroll-to="'#landingWrapper'">Home</router-link>
      <router-link to="/about" id="right">About</router-link>
    </div>
    <router-view />
    <div id="footer">
      the end. copyright &copy; adam siekierski.
    </div>
  </div>
</template>
<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=VT323');
  body {
    margin: 0 !important;
    font-family: 'VT323', monospace;
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
  #footer {
  background-color: #151519;
  color: #eeeeee;
  text-align: center;
  width: 100%;
  padding: 3px;
  font-size: 20px;
  height: 28px;
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
  /* Hahahaha, that's a comment! */
</style>
