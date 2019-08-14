<template>
    <div id="landingWrapper">
        <img src="../img/pixelart-ja.png" id="avatar" alt="Adam Siekierski">
        <h1> Adam Siekierski </h1>
        <vue-typer
        :text='["not-professional front-end \ndeveloper"]'
        :repeat='0'
        :shuffle='false'
        initial-action='typing'
        :pre-type-delay='150'
        :type-delay='100'
        :erase-on-complete='false'
        caret-animation='smooth'
        id="subtitle"
        ></vue-typer>
        <img src="../img/arrow-down.png" id="arrow-down" v-scroll-to="'#githubWrapper'" alt="V">
    </div>
</template>
<script>
export default {
  name: 'LandingLabel',
};
</script>
<style lang="scss">
$max-phone: 700px;
#landingWrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #151519;
  height: 100vh;
  #avatar {
    width: 250px;
    height: 250px;
    box-shadow: 0 0 20px #040408;
    @media screen and (max-width: $max-phone) {
        width: 150px;
        height: 150px;
    }
  }
  h1 {
    font-size: 96px;
    color: #787878;
    margin: 0 0 -20px;
    letter-spacing: 3px;
      text-align: center;
      @media screen and (max-width: $max-phone) {
          font-size: 48px;
          margin-bottom: -10px;
      }
  }
  #subtitle {
    font-size: 48px;
    margin: 0;
    letter-spacing: -2px;
    text-align: center;
    @media screen and (max-width: $max-phone) {
      font-size: 30px;
    }
  }
  .vue-typer {
    white-space: pre;
    .char {
      color: #5c5c5c;
    }
  }
  #arrow-down {
    opacity: 0.6;
    transform: scale(0.8, 0.8);
    transition: opacity 0.3s ease-in-out;
    margin-top: 30px;
    cursor: pointer;
    @media screen and (max-width: 700px) {
        transform: scale(0.4, 0.4);
    }
  }
  #arrow-down:hover {
    opacity: 0.4;
  }
}
</style>
