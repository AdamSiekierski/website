<template>
  <section class="contact">
    <div class="contact-content">
      <div class="contact-split">
        <div>
          <h2>#contact-me</h2>
          <i style="font-size: 0.8em">
            Feel free to contact me via this form. You can text me about anything - even how you
            feel today.
          </i>
          <form
            action="https://formspree.io/xpzyoelj"
            method="POST"
            @submit="submitForm"
            class="contact-form"
          >
            <label>
              Your email:
              <input
                type="text"
                name="_replyto"
                :class="email.error ? '--error' : ''"
                v-model="email.value"
                @input="checkForm"
              />
            </label>
            <label>
              Message:
              <textarea
                name="message"
                rows="4"
                :class="message.error ? '--error' : ''"
                v-model="message.value"
                @input="checkForm"
              ></textarea>
            </label>
            <button
              type="submit"
              :disabled="message.error || email.error || !email.value || !message.value || loading"
              :class="message.error || email.error ? '--error' : ''"
            >
              Send
            </button>
          </form>
        </div>
        <div>
          <h2>#find-me</h2>
          <div class="contact-find">
            <Item v-for="site of sites" :site="site" :key="site.name" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import * as yup from 'yup';
import { useToast } from 'vue-toastification';
import { reactive, ref } from 'vue';

import Item from './Item.vue';

import githubLogo from '../../img/websites/github.png';
import twitterLogo from '../../img/websites/twitter.svg';
import instagramLogo from '../../img/websites/instagram.svg';
import linkedinLogo from '../../img/websites/linkedin.svg';
import redditLogo from '../../img/websites/reddit.svg';

const sites = [
  {
    name: 'GitHub',
    link: 'https://github.com/AdamSiekierski',
    icon: githubLogo,
    bgColor: '#24292E',
  },
  {
    name: 'Instagram',
    link: 'https://instagram.com/a.siekierski',
    icon: instagramLogo,
    bgColor: 'linear-gradient(45deg, #EB001E, #6100BF)',
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/a_siekierski',
    icon: twitterLogo,
    bgColor: '#1DA1F2',
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/adam-siekierski-b6b7401b2/',
    icon: linkedinLogo,
    bgColor: '#0077B5',
  },
  {
    name: 'Reddit',
    link: 'https://www.reddit.com/user/adamsiekierski',
    icon: redditLogo,
    bgColor: '#FF4500',
  },
];

const schema = yup.object().shape({
  email: yup
    .string()
    .required()
    .email(),
  message: yup
    .string()
    .required()
    .min(3),
});

export default {
  setup() {
    const toast = useToast();

    const email = reactive({
      email: {
        value: '',
        error: false,
      },
    });

    const message = reactive({
      message: {
        value: '',
        error: false,
      },
    });

    const loading = ref(false);

    function submitForm(e) {
      e.preventDefault();

      loading.value = true;

      schema.isValid({ email: email.value, message: message.value }).then((isValid) => {
        if (isValid) {
          const form = e.target;
          const data = new FormData(form);

          fetch(form.action, {
            method: form.method,
            body: data,
            headers: {
              Accept: 'application/json',
            },
          }).then((res) => {
            loading.value = false;

            if (res.status === 200) {
              toast.success('Successfully sent an email!');
            } else {
              toast.error("Couldn't send the email. Try again later");
            }

            form.reset();
            email.value = '';
            email.error = false;
            message.value = '';
            message.error = false;
          });
        }
      });
    }

    function checkForm() {
      email.error = false;
      message.error = false;

      if (email.value || message.value) {
        schema
          .validate({ email: email.value, message: message.value }, { abortEarly: false })
          .catch((errors) => {
            errors.inner.map((error) => {
              if (error.path === 'email') email.error = true;
              if (error.path === 'message') message.error = true;
            });
          });
      }
    }

    return { email, message, loading, sites, submitForm, checkForm };
  },
  components: {
    Item,
  },
};
</script>
<style lang="scss">
@use "../../styles/mixins.scss" as mixins;

.contact {
  @include mixins.themed() using ($theme) {
    &-content {
      max-width: 800px;
      margin: 0 auto;
      padding: 50px 25px;
    }

    &-split {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      grid-gap: 50px;
    }

    a {
      color: map-get($theme, 'fg');
    }

    &-form {
      input,
      textarea {
        -webkit-appearance: none;
        border-radius: 0;
        display: block;
        font-family: inherit;
        padding: 5px 0;
        font-size: 1em;
        width: 100%;
        background: transparent;
        color: map-get($theme, 'fg');
        outline: none;
        border: none;
        border-bottom: 3px solid map-get($theme, 'fg');
        resize: none;

        transition: border-bottom 0.5s ease;

        &.--error {
          border-bottom: 3px solid red;
        }
      }

      button {
        display: inline-block;
        font-family: inherit;
        padding: 5px;
        font-size: 1em;
        background: transparent;
        color: map-get($theme, 'fg');
        outline: none;
        border: none;
        border-bottom: 3px solid map-get($theme, 'fg');
        cursor: pointer;

        transition: color 0.3s ease, background-color 0.3s ease, border-bottom 0.5s ease;

        &:hover {
          background-color: map-get($theme, 'fg');
          color: map-get($theme, 'bg');
        }

        &:disabled {
          cursor: not-allowed;
          color: map-get($theme, 'fg');

          &:hover {
            background-color: transparent;
            color: map-get($theme, 'fg');
          }
        }

        &.--error {
          border-bottom-color: red;
        }
      }

      label {
        display: block;
        margin: 1em 0;
      }
    }

    &-find {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
    }
  }
}

.Vue-Toastification__toast {
  @include mixins.themed() using ($theme) {
    border-radius: 0;
    background-color: map-get($theme, 'fg');
    color: map-get($theme, 'bg');
    font-family: inherit;

    @media screen and (max-width: 600px) {
      margin-bottom: 0;
    }
  }
}

.Vue-Toastification__toast-body {
  font-size: 15px;
}

.Vue-Toastification__close-button {
  display: none;
  visibility: hidden;
}

.Vue-Toastification__icon {
  display: none;
  visibility: hidden;
}

.Vue-Toastification__toast--error .Vue-Toastification__progress-bar {
  background-color: red;
}

.Vue-Toastification__toast--success .Vue-Toastification__progress-bar {
  background-color: springgreen;
}
</style>
