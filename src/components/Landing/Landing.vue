<template>
  <section class="landing">
    <img src="@/img/avatar.png" class="avatar" alt="Adam Siekierski" />
    <h1>adam siekierski</h1>
    <h3 class="subtitle">
      {{ state.subtitle }}
    </h3>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      focusable="true"
      width="50px"
      height="50px"
      viewBox="0 0 24 24"
      class="arrow-down"
      @click="scrollToAbout"
    >
      <path
        d="M5.843 9.593L11.5 15.25l5.657-5.657l-.707-.707l-4.95 4.95l-4.95-4.95l-.707.707z"
        transform="translate(-11 -11) scale(2)"
      />
    </svg>
  </section>
</template>
<script>
import { reactive } from "vue";

function* subtitleGenerator() {
  const text = "young full-stack developer";

  for (let i = 0; i < text.length; i += 1) {
    yield text.slice(0, i + 1);
  }
}

function scrollToAbout() {
  document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
}

export default {
  setup() {
    const state = reactive({ subtitle: "" });

    const generator = subtitleGenerator();

    const interval = setInterval(() => {
      const i = generator.next();

      if (i.done) {
        clearInterval(interval);
      } else {
        state.subtitle = i.value;
      }
    }, 70);

    return {
      scrollToAbout,
      state
    };
  }
};
</script>
<style lang="scss">
@use '../../styles/mixins.scss' as mixins;

.landing {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
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

  .subtitle {
    margin: 0;
    text-align: center;
    word-wrap: break-word;
    font-weight: normal;
  }

  .arrow-down {
    opacity: 1;
    cursor: pointer;
    margin-top: 1em;

    & > path {
      @include mixins.themed() using ($theme) {
        fill: map-get($theme, "fg");
      }
    }

    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
