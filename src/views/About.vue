<template>
  <div id="aboutmeWrapper">
    <div id="aboutmeText">
      <vue-typed-js
        :strings='["about-me() {"]'
        @onComplete="() => isTyped = true"
        :showCursor="false"
      ><span class="typing aboutmeTitle"></span></vue-typed-js>
      <p v-if="isTyped === true" style="text-align: justify">
        hello world, my name is adam! i'm a hobbyist fullstack developer based in poznań, poland. i'm specialized in javascript, node.js, react, react-native and vue.js. currently, my main goals for the future are mobile development in swift and kotlin, and machine learning in python. you can find me on my instagram (<a href="https://instagram.com/a.siekierski">@a.siekierski</a>), twitter (<a href="https://twitter.com/a_siekierski">@a_siekierski</a>), and I'm planning to
        open a youtube channel. after finishing high school, i would want to start working as a proffesional programmer.
        contact me at <a href="mailto:adam.siekiera@outlook.com">adam.siekiera@outlook.com</a>.
      </p>
      <vue-typed-js
        :strings='["};"]'
        v-if="isTyped"
      ><span class="typing aboutmeTitle"></span></vue-typed-js>
    </div>
  </div>
</template>
<script>
export default {
  name: 'About',
  data() {
    return {
      isTyped: false,
    };
  },
};
</script>
<style lang="scss" scoped>
  #aboutmeWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: black;

    #aboutmeText {
      background-color: black;
      border: 5px solid white;
      min-height: 80vh;
      width: 50vw;
      box-sizing: border-box;
      padding: 20px;
      margin-top: 50px;
      color: white;
      @media screen and (max-width: 1100px) {
        width: 85vw;
      }
      a {
        color: white;
      }
    }

    .aboutmeTitle {
      font-weight: 400;
      font-size: 30px;
      margin: 0;
    }

    p {
      font-size: 18px;
    }
  }
</style>
