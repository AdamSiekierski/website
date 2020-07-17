<template>
  <div class="landing">
    <img
      src="https://gravatar.com/avatar/74a5ec816e9fd6b196d1dc8ae4ae6115?s=500"
      class="avatar"
      alt="Adam Siekierski"
    />
    <h1>adam siekierski</h1>
    <h3>
      <vue-typed-js
        :strings="['non-professional fullstack developer']"
        class="subtitle"
        :showCursor="false"
      >
        <span class="typing"></span>
      </vue-typed-js>
    </h3>
    <img src="../img/arrow-down.png" class="arrow-down" v-scroll-to="'.about'" alt="V" />
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
  color: white;
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
    margin: 15px 0 0 0;
    text-align: center;
  }

  h3 {
    margin: 0;
    text-align: center;
    word-wrap: break-word;
    font-weight: normal;
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
