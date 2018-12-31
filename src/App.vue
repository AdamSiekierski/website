<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" id="left">Home</router-link>
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
    background-color: #000000;
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
  $ease-out-quint:cubic-bezier(0.230, 1.000, 0.320, 1.000);
  $ease-in-quint:cubic-bezier(0.755, 0.050, 0.855, 0.060);
  $screen-background:#121010;
  @keyframes flicker{
    $steps:20;
    @for $i from 0 through $steps{
      #{percentage($i*(1/$steps))}{
        opacity:random();
      }
    }
  }
  body{
    background:$screen-background;
    // flicker
    &::after{
      content:" ";
      display:block;
      position:absolute;
      top:0;
      left:0;
      bottom:0;
      right:0;
      background:transparentize($screen-background,0.9);
      opacity:0;
      z-index:2;
      pointer-events:none;
    }
    // scanlines
    &::before{
      content:" ";
      display:block;
      position:absolute;
      top:0;
      left:0;
      bottom:0;
      right:0;
      background:linear-gradient(transparentize($screen-background,1) 50%,
transparentize(darken($screen-background,10),0.75) 50%),
linear-gradient(90deg,transparentize(#ff0000,0.94),
transparentize(#00ff00,0.98),transparentize(#0000ff,0.94));
      z-index:2;
      background-size:100% 2px, 3px 100%;
      pointer-events:none;
    }
  }
  body::after{
    animation:flicker 0.15s infinite;
  }
  @keyframes turn-on{
    0%{
      transform:scale(1,0.8) translate3d(0,0,0);
      -webkit-filter:brightness(30);
      filter:brightness(30);
      opacity:1;
    }
    3.5%{
      transform:scale(1,0.8) translate3d(0,100%,0);
    }
    3.6%{
      transform:scale(1,0.8) translate3d(0,-100%,0);
      opacity:1;
    }
    9%{
      transform:scale(1.3,0.6) translate3d(0,100%,0);
      -webkit-filter:brightness(30);
      filter:brightness(30);
      opacity:0;
    }
    11%{
      transform:scale(1,1) translate3d(0,0,0);
      -webkit-filter:contrast(0) brightness(0) ;
      filter:contrast(0) brightness(0);
      opacity:0;
    }
    100%{
      transform:scale(1,1) translate3d(0,0,0);
      -webkit-filter:contrast(1) brightness(1.2) saturate(1.3);
      filter:contrast(1) brightness(1.2) saturate(1.3);
      opacity:1;
    }
  }
  body{
    animation: turn-on 4s linear;
    animation-fill-mode:forwards;
  }
</style>
