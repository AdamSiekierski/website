<template>
  <div class="contact">
    <div class="contact-content">
      <div class="contact-split">
        <div>
          <h2>#contact-me</h2>
          <form
            action="https://formspree.io/xpzyoelj"
            method="POST"
            @submit="submitForm"
            class="contact-form"
          >
            <label>
              Email:
              <input
                type="text"
                name="_replyto"
                :class="email.error && '--error'"
                v-model="email.value"
                @input="checkForm"
              />
            </label>
            <label>
              Message:
              <textarea
                name="message"
                rows="4"
                :class="message.error && '--error'"
                v-model="message.value"
                @input="checkForm"
              ></textarea>
            </label>
            <button
              type="submit"
              :disabled="message.error || email.error || !email.value || !message.value"
              :class="(message.error || email.error) && '--error'"
            >
              Send
            </button>
          </form>
        </div>
        <div>
          <h2>#find-me</h2>
          <div class="contact-find"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as yup from 'yup';

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
  name: 'Contact',
  data() {
    return {
      email: {
        value: '',
        error: false,
      },
      message: {
        value: '',
        error: false,
      },
    };
  },
  methods: {
    submitForm(e) {
      e.preventDefault();

      schema.isValid({ email: this.email.value, message: this.message.value }).then((isValid) => {
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
            if (res.status === 200) {
              this.$toast.success('Successfully sent an email!');
            } else {
              this.$toast.error("Couldn't send the email. Try again later");
            }
          });

          form.reset();
        }
      });
    },
    checkForm() {
      this.email.error = false;
      this.message.error = false;

      if (this.email.value || this.message.value) {
        schema
          .validate({ email: this.email.value, message: this.message.value }, { abortEarly: false })
          .catch((errors) => {
            errors.inner.map((error) => {
              if (error.path === 'email') this.email.error = true;
              if (error.path === 'message') this.message.error = true;
            });
          });
      }
    },
  },
};
</script>
<style lang="scss">
.contact {
  color: white;

  &-content {
    max-width: 800px;
    margin: 0 auto;
    padding: 50px;
  }

  &-split {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 50px;
  }

  a {
    color: white;

    &:hover {
      color: #ddd;
    }
  }

  &-form {
    input,
    textarea {
      display: block;
      font-family: inherit;
      padding: 5px 0;
      font-size: 1em;
      width: 100%;
      background: transparent;
      color: white;
      outline: none;
      border: none;
      border-bottom: 3px solid white;

      transition: border-bottom 0.5s ease;

      &.--error {
        border-bottom-color: red;
      }
    }

    button {
      display: inline-block;
      font-family: inherit;
      padding: 5px;
      font-size: 1em;
      background: transparent;
      color: white;
      outline: none;
      border: none;
      border-bottom: 3px solid white;
      cursor: pointer;

      transition: color 0.3s ease, background-color 0.3s ease, border-bottom 0.5s ease;

      &:hover {
        background-color: white;
        color: black;
      }

      &:disabled {
        cursor: not-allowed;
        color: white;

        &:hover {
          background-color: transparent;
          color: white;
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
}

.Vue-Toastification__toast {
  border-radius: 0;
  background-color: white;
  color: black;
  font-family: inherit;

  @media screen and (max-width: 600px) {
    margin-bottom: 0;
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
