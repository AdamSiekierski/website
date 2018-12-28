<template>
    <div id="wrapper">
        <LandingLabel />
    </div>
</template>
<script>
import LandingLabel from '@/components/LandingLabel.vue';

export default {
  name: 'Home',
  components: {
    LandingLabel,
  },
};
</script>

<style lang="scss" scoped>
#wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
}
</style>
