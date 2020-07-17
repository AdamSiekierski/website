<template>
  <div class="wrapper">
    <transition name="fade">
      <PodcastPopup
        v-if="isPopupOpen"
        v-on:close="closePopup()"
        v-on:close-not-show="closePopup(true)"
      />
    </transition>
    <Landing />
    <About />
  </div>
</template>
<script>
import Landing from '@/components/Landing.vue';
import About from '@/components/About.vue';
import PodcastPopup from '@/components/Podcast.vue';

export default {
  name: 'Home',
  components: {
    Landing,
    PodcastPopup,
    About,
  },
  data() {
    return {
      isPopupOpen: false,
    };
  },
  mounted() {
    if (!localStorage.getItem('podcast-popup-closed')) {
      this.isPopupOpen = true;
    }
  },
  methods: {
    closePopup(notShow) {
      this.isPopupOpen = false;

      if (notShow) {
        localStorage.setItem('podcast-popup-closed', notShow);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-enter {
  opacity: 0.5;
  transform: translateY(-50px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(50px);
}
</style>
