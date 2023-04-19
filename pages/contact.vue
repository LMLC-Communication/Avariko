<template>
  <div>
    <div class="heros">
      <img src="@/assets/images/CROSSFIT_AVARIKO-146.jpg" alt="" />
      <h1>Contactez nous</h1>
    </div>
    <main>
      <article>
        <h2 data-aos="fade">CONTACT</h2>

        <p data-aos="fade">
          Nous contacter par téléphone : <a href="tel:+33699323213">0699323213</a><br />
          <br />
          <a href="https://www.instagram.com/avariko_athletics/"
            ><img src="../assets/images/instagram.svg" alt="" /> @AVARIKO_ATHLETICS</a
          >
        </p>
        <OSMMap />
      </article>
    </main>
  </div>
</template>

<script>
// import OSMMap from '~/components/OSMMap.vue';
export default {
  // components: {
  //   OSMMap,
  // },
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
