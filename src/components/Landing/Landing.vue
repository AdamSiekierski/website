<template>
  <section class="landing">
    <img
      src="@/img/avatar.jpg"
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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      focusable="true"
      width="50px"
      height="50px"
      viewBox="0 0 24 24"
      class="arrow-down"
      v-scroll-to="'.about'"
    >
      <path
        d="M5.843 9.593L11.5 15.25l5.657-5.657l-.707-.707l-4.95 4.95l-4.95-4.95l-.707.707z"
        fill="#ffffff"
        transform="translate(-11 -11) scale(2)"
      />
    </svg>
  </section>
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
    cursor: pointer;
    margin-top: 1em;

    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
