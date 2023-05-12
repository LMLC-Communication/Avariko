<template>
  <div>
    <div class="heros">
      <img src="@/assets/images/CROSSFIT_AVARIKO-146.webp" alt="" />
      <h1>Contactez nous</h1>
    </div>
    <main>
      <article>
        <h2 data-aos="fade">CONTACT</h2>

        <p data-aos="fade">
          Nous contacter par téléphone : <a href="tel:+33699323213">0699323213</a><br />
          <br />
          <a href="https://www.instagram.com/avariko_athletics/"><img src="../assets/images/instagram.svg" alt="" /> @AVARIKO_ATHLETICS</a>
        </p>
        <iframe ref="dummyframe" name="dummyframe" style="display: none"></iframe>
        <h2>Contactez-nous</h2>
        <form v-if="!sended" action="/api/send_email.php" method="POST" data-aos="fade" target="dummyframe" @submit="submitForm">
          <label for="nom">Nom / Prénom:</label>
          <input type="text" name="nom" id="nom" v-model="formData.nom" required autocomplete="name" aria-autocomplete="list" />
          <br />
          <label for="telephone">Numéro de téléphone:</label>
          <input type="text" name="telephone" id="telephone" v-model="formData.telephone" required autocomplete="tel" aria-autocomplete="list" />
          <br />
          <label for="email">Email:</label>
          <input type="email" name="email" id="email" v-model="formData.email" required autocomplete="email" aria-autocomplete="list" />
          <br />
          <label for="antecedents">Antécédents, blessures, maladies, parcours sportifs, etc.:</label>
          <textarea name="antecedents" id="antecedents" rows="4" v-model="formData.antecedents" required autocomplete="off"></textarea>
          <br />
          <label for="objectifs">Objectifs recherchés:</label>
          <textarea name="objectifs" id="objectifs" rows="4" v-model="formData.objectifs" required autocomplete="off"></textarea>
          <br />
          <input type="hidden" name="recaptcha_response" id="recaptchaResponse" v-model="formData.recaptchaResponse" />
          <input type="submit" value="Envoyer" />
        </form>
        <form v-else>
          <p>Merci pour votre message&nbsp;!</p>
          <p>Nous vous répondrons dans les plus brefs délais.</p>
          <p>A très bientôt&nbsp;!</p>
          <!-- Envoyer un nouveau message -->
          <input type="submit" value="Envoyer un nouveau message" @click="sended = false" />
        </form>
        <!-- Load after 1s -->
        <OSMMap />
      </article>
    </main>
  </div>
</template>

<script>
useHead({
  title: 'Avariko Athletics - Contact',
  meta: [
    {
      name: 'description',
      content:
        'Contactez Avariko Athletics pour toutes vos questions ou pour planifier votre prochaine session. Appelez-nous au 0699323213, suivez-nous sur Instagram ou utilisez notre formulaire de contact en ligne.',
    },
  ],
});
export default {
  data() {
    return {
      formData: {
        nom: '',
        telephone: '',
        email: '',
        antecedents: '',
        objectifs: '',
        recaptchaResponse: '',
      },
      sended: false,
    };
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.initParallax();
        this.initRecaptcha();
      }, 500);
    });
  },
  methods: {
    submitForm() {
      this.$refs.dummyframe.addEventListener(
        'load',
        () => {
          this.sended = true;
          this.resetForm();
        },
        { once: true },
      );
    },
    resetForm() {
      this.formData.nom = '';
      this.formData.telephone = '';
      this.formData.email = '';
      this.formData.antecedents = '';
      this.formData.objectifs = '';
      this.formData.recaptchaResponse = '';
      // disable submit button
      // document.querySelector('input[type="submit"]').disabled = true;
    },
    initRecaptcha() {
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js?render=6LcnDuElAAAAAIooz3XwtiGPHKmKtK9GwSLEuoJt';
      script.onload = () => {
        grecaptcha.ready(() => {
          grecaptcha.execute('6LcnDuElAAAAAIooz3XwtiGPHKmKtK9GwSLEuoJt', { action: 'contact' }).then(token => {
            this.formData.recaptchaResponse = token;
          });
        });
      };
      document.head.appendChild(script);
    },
    // Ajoutez ici les autres méthodes, y compris initParallax
    initParallax() {
      const heroImage = document.querySelector('.heros img');
      if (heroImage) {
        const parallaxFactor = 0.3;
        const smoothingFactor = 0.3; // Augmenter cette valeur pour accélérer l'animation

        let targetOffset = 0;
        let currentOffset = 0;

        const updateParallax = () => {
          currentOffset += (targetOffset - currentOffset) * smoothingFactor;
          heroImage.style.transform = `translateY(-50%) translateY(${currentOffset}px)`;
          requestAnimationFrame(updateParallax);
        };

        window.addEventListener('scroll', () => {
          const scrollPosition = window.pageYOffset;
          targetOffset = scrollPosition * parallaxFactor;
        });

        requestAnimationFrame(updateParallax);
      } else {
        setTimeout(() => {
          this.initParallax();
        }, 200);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.heros {
  position: relative;
  width: 100%;
  height: 70vh;
  overflow: hidden;
  img {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.6);
    transition: filter 0.3s ease;
  }
}
p {
  display: flex;
  flex-direction: column;
}
a {
  color: white;
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  transition: color 0.3s ease;
  margin-right: auto;
  text-transform: lowercase;
  &:hover {
    color: $primary;
  }
  img {
    height: 20px;
  }
}
iframe {
  width: 100%;
  height: 400px;
  border: 0;
}

form {
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 20px;
  margin: 0 0 50px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: black;

  label {
    font-weight: bold;
    margin-bottom: 10px;
    color: #fff;
  }
  input,
  textarea {
    color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 20px;
    background-color: black;
    transition: border-color 0.3s ease;
    &:focus {
      outline: $primary solid 2px;
      border-color: $primary;
    }
    // autocomplete styles display in $primary background and black text
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      -webkit-text-fill-color: white;
      -webkit-box-shadow: 0 0 0px 1000px $primary inset;
      transition: background-color 5000s ease-in-out 0s;
    }
  }
  input[type='submit'] {
    background-color: $primary;
    color: white;
    border: 0;
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    &:not(:disabled):hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
}

h2 {
  margin-bottom: 0px;
  color: #fff;
  transform: translateY(-25%);
}

@media screen and (max-width: 768px) {
  main {
    padding-bottom: 20px;
    padding-top: 20px;
  }
  article {
    margin-bottom: 0;
  }
}
</style>
