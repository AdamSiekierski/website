<template>
<!-- eslint-disable -->
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
            <p v-if="isTyped === true"><b>Hello! </b>My name is Adam, and I'm from Poland (Poznan, exactly). I'm an amateur programmer - programming just for hobby. Mostly JavaScript - Frontend. Favourite framework - Vue.js.</p>
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
            padding: 10px;
            margin-top: 50px;
            @media screen and (max-width: 1100px) {
                width: 85vw;
            }
        }
        .aboutmeTitle {
            font-weight: 400;
            font-size: 70px;
            margin: 0;
            @media screen and (max-width: 800px) {
                font-size: 50px;
            }
        }
        p {
            font-size: 33px;
            @media screen and (max-width: 800px) {
                font-size: 25px;
            }
        }
    }
</style>
