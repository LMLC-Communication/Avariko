<template>
  <div>
    <div class="heros">
      <img src="@/assets/images/CROSSFIT_AVARIKO-146.jpg" alt="" />
      <h1>Contactez nous !</h1>
    </div>
    <main>
      <article>
        <h2>CONTACT</h2>

        <p>
          238 AVENUE DE SAINT AMAND 18570 TROUY NORD<br />
          <br />
          0699323213<br />
          <br />
          <a href="https://instagram.com"><img src="../assets/images/instagram.svg" alt="" /> @AVARIKO_ATHLETICS</a>
        </p>
      </article>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2718.2662281134044!2d2.38386471561143!3d47.05462767915191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fa94219b46cf8d%3A0x20a77c98c948726b!2sAvariko%20Athletics!5e0!3m2!1sfr!2sfr!4v1681315279847!5m2!1sfr!2sfr"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </main>
  </div>
</template>

<script>
export default {
  methods: {
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
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.initParallax();
      }, 500);
    });
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
a {
  color: white;
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  transition: color 0.3s ease;
  &:hover {
    color: blue;
  }
  img {
    height: 20px;
  }
}
</style>
