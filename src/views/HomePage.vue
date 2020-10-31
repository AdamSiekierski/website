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
    <Technologies />
    <Contact />
  </div>
</template>
<script>
import { ref, onMounted } from 'vue';

import PodcastPopup from '@/components/Podcast/Podcast.vue';
import Landing from '@/components/Landing/Landing.vue';
import About from '@/components/About/About.vue';
import Technologies from '@/components/Technologies/Technologies.vue';
import Contact from '@/components/Contact/Contact.vue';

export default {
  setup() {
    const isPopupOpen = ref(false);

    onMounted(() => {
      if (!localStorage.getItem('podcast-popup-closed')) {
        isPopupOpen.value = true;
      }
    });

    function closePopup(notShow) {
      isPopupOpen.value = false;

      if (notShow) {
        localStorage.setItem('podcast-popup-closed', notShow);
      }
    }

    return { isPopupOpen, closePopup };
  },
  components: {
    PodcastPopup,
    Landing,
    About,
    Technologies,
    Contact,
  },
};
</script>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;

  .podcast-popup {
    transition: transform 0.5s ease;
  }
}

.fade-enter-from {
  opacity: 0.5;

  .podcast-popup {
    transform: translateY(-50px);
  }
}

.fade-leave-to {
  opacity: 0;

  .podcast-popup {
    transform: translateY(50px);
  }
}
</style>
