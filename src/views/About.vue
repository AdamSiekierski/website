<template>
  <div id="aboutmeWrapper">
    <div id="aboutmeText">
      <vue-typer
        :text='["about-me() {"]'
        :repeat='0'
        :shuffle='false'
        initial-action='typing'
        :pre-type-delay='150'
        :type-delay='100'
        :pre-erase-delay='2000'
        :erase-delay='250'
        erase-style='clear'
        :erase-on-complete='false'
        caret-animation='smooth'
        class="aboutmeTitle"
        @typed="isTyped = true"
      ></vue-typer>
      <p v-if="isTyped === true" style="text-align: justify">
        hello world, my name is adam! i'm a hobbyist fullstack developer based in poznań, poland. i'm specialized in javascript, node.js, react, react-native and vue.js. currently, my main goals for the future are mobile development in swift and kotlin, and machine learning in python. you can find me on my instagram (<a href="https://instagram.com/a.siekierski">@a.siekierski</a>), twitter (<a href="https://twitter.com/a_siekierski">@a_siekierski</a>), and I'm planning to
        open a youtube channel. after finishing high school, i would want to start working as a proffesional programmer.
        contact me at <a href="mailto:adam.siekiera@outlook.com">adam.siekiera@outlook.com</a>.
      </p>
      <vue-typer
        :text='["};"]'
        :repeat='0'
        :shuffle='false'
        initial-action='typing'
        :pre-type-delay='300'
        :type-delay='300'
        :pre-erase-delay='2000'
        :erase-delay='250'
        erase-style='clear'
        :erase-on-complete='false'
        caret-animation='smooth'
        class="aboutmeTitle"
        v-if="isTyped === true"
      ></vue-typer>
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
    background-color: #151519;

    #aboutmeText {
      background-color: #eeeeee;
      min-height: 80vh;
      box-shadow: 0 0 20px #000000;
      width: 50vw;
      box-sizing: border-box;
      padding: 20px;
      margin-top: 50px;
      @media screen and (max-width: 1100px) {
        width: 85vw;
      }
      a {
        color: black;
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
