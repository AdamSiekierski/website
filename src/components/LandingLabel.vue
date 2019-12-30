<template>
    <div id="landingWrapper">
        <img src="http://gravatar.com/avatar/74a5ec816e9fd6b196d1dc8ae4ae6115?s=500" id="avatar" alt="Adam Siekierski"> <!-- Gravatar for hash of my email -->
        <h1> Adam Siekierski </h1>
        <vue-typer
        :text='["non-professional fullstack developer"]'
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
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  overflow: hidden;

  #avatar {
    height: 250px;
    box-shadow: 0px 0px 41px -8px black;
    @media screen and (max-width: $max-phone) {
      height: 150px;
    }
  }

  h1 {
    font-size: 40px;
    color: #787878;
    margin: 15px 0 0 0;
    letter-spacing: 3px;
    text-align: center;
  }
  #subtitle {
    font-size: 25px;
    margin: 0;
    letter-spacing: -2px;
    text-align: center;
    word-wrap: break-word;
  }
  .vue-typer {
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
