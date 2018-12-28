<template>
    <div id="landingWrapper">
        <img src="../img/pixelart-ja.png" id="avatar">
        <h1> Adam Siekierski </h1>
        <vue-typer
        :text='["amateur open-source developer"]'
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
        id="subtitle"
        ></vue-typer>
    </div>
</template>
<script>
export default {
  name: 'LandingLabel',
};
</script>
<style lang="scss">
#avatar {
    width: 250px;
    height: 250px;
    box-shadow: 0px 0px 20px #000000;
}
h1 {
    font-size: 96px;
    color: #787878;
    margin: 0;
    margin-bottom: -20px;
    letter-spacing: 3px;
}
#subtitle {
    font-size: 48px;
    margin: 0;
    letter-spacing: -2px;
}
.vue-typer {
    .char {
        color: #5c5c5c;
    }
}
#landingWrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
}
</style>
