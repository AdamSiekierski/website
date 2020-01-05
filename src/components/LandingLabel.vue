<template>
    <div id="landingWrapper">
        <img src="http://gravatar.com/avatar/74a5ec816e9fd6b196d1dc8ae4ae6115?s=500" id="avatar" alt="Adam Siekierski"> <!-- Gravatar for hash of my email -->
        <h1> Adam Siekierski </h1>
        <vue-typed-js
        :strings='["non-professional fullstack developer"]'
        id="subtitle"
        ><span class="typing"></span></vue-typed-js>
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
  background-color: black;
  height: 100vh;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  overflow: hidden;

  #avatar {
    height: 250px;
    @media screen and (max-width: $max-phone) {
      height: 150px;
    }
  }

  h1 {
    font-size: 40px;
    color: white;
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
    color: white;
  }
  #arrow-down {
    opacity: 1;
    transform: scale(0.8, 0.8);
    transition: opacity 0.3s ease-in-out;
    margin-top: 30px;
    cursor: pointer;
    @media screen and (max-width: 700px) {
        transform: scale(0.4, 0.4);
    }
  }
  #arrow-down:hover {
    opacity: 0.8;
  }
}
</style>
