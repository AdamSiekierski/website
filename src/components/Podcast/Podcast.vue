<template>
  <div class="podcast-popup-wrapper">
    <div class="podcast-popup">
      <div class="podcast-popup-header">
        <div class="podcast-popup-close" @click="$emit('close')"></div>
      </div>
      <div class="podcast-popup-content">
        <p>
          Check out my podcast! I'm a co-host of Require Podcast - a Polish podcast about web
          development!
        </p>
        <p>
          <a href="https://require.podcast.gq">https://require.podcast.gq</a>
        </p>
      </div>
      <div class="podcast-popup-footer">
        <p class="podcast-popup-footer-dont-again" @click="$emit('close-not-show')">
          Don't show this again
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.podcast-popup-wrapper {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
}

.podcast-popup {
  max-width: 600px;
  width: 80%;
  background-color: white;
  color: black;
  padding: 20px;
  text-align: center;

  a {
    color: #ff5370;
  }
}

.podcast-popup-header {
  display: flex;
  justify-content: flex-end;

  .podcast-popup-close {
    position: relative;
    height: 25px;
    width: 25px;
    cursor: pointer;

    &::before,
    &::after {
      content: '';
      position: absolute;
      background-color: black;
      width: 100%;
      height: 2px;
      top: 50%;
      right: 0;
    }

    &::after {
      transform: rotate(45deg);
    }

    &::before {
      transform: rotate(-45deg);
    }

    &:hover {
      opacity: 0.6;
    }
  }
}

.podcast-popup-footer {
  text-align: left;

  &-dont-again {
    display: inline-block;
    margin-bottom: 0;
    margin-top: 1em;
    font-size: 12px;
    border-bottom: 1px solid black;
    cursor: pointer;
  }
}
</style>
