<template>
  <div class="contact">
    <div class="contact-content">
      <h2>#contact-me</h2>
      <form action="https://formspree.io/xpzyoelj" method="POST">
        <label>
          Email:
          <input type="text" name="_replyto" />
        </label>
        <label>
          Message:
          <textarea name="message"></textarea>
        </label>
        <vue-recaptcha
          sitekey="6Leb_bIZAAAAAPqbrKtQpdRfwpQPFGCbddGv8Wm1"
          :loadRecaptchaScript="true"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  </div>
</template>
<script>
import VueRecaptcha from 'vue-recaptcha';

export default {
  name: 'Contact',
  components: {
    VueRecaptcha,
  },
};
</script>
<style lang="scss" scoped>
.contact {
  color: white;

  &-content {
    max-width: 800px;
    margin: 0 auto;
    padding: 50px;
  }

  a {
    color: white;

    &:hover {
      color: #ddd;
    }
  }
}
</style>
