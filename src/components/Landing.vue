<template>
  <div class="landing">
    <img
      src="https://gravatar.com/avatar/74a5ec816e9fd6b196d1dc8ae4ae6115?s=500"
      class="avatar"
      alt="Adam Siekierski"
    />
    <h1>adam siekierski</h1>
    <vue-typed-js
      :strings="['non-professional fullstack developer']"
      class="subtitle"
      :showCursor="false"
    >
      <span class="typing"></span>
    </vue-typed-js>
    <img src="../img/arrow-down.png" class="arrow-down" v-scroll-to="'.repos'" alt="V" />
  </div>
</template>
<script>
export default {
  name: 'Landing',
};
</script>
<style lang="scss">
.landing {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: black;
  height: 100vh;
  width: 100%;
  padding: 10px;
  overflow: hidden;

  .avatar {
    height: 250px;

    @media screen and (max-width: 700px) {
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

  .subtitle {
    font-size: 25px;
    margin: 0;
    letter-spacing: -2px;
    text-align: center;
    word-wrap: break-word;
    color: white;
  }

  .arrow-down {
    opacity: 1;
    transform: scale(0.8, 0.8);
    margin-top: 30px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }

    @media screen and (max-width: 700px) {
      transform: scale(0.4, 0.4);
    }
  }
}
</style>
