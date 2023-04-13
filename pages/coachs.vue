<template>
  <div>
    <div class="heros">
      <img src="@/assets/images/CROSSFIT_AVARIKO-421.jpg" alt="" />
      <h1>Les coachs</h1>
    </div>
    <main>
      <article>
        <h2 data-aos="fade">Présentation des coachs</h2>
        <h3 data-aos="fade">Coach Vince #ohfuck</h3>
        <img id="coachImage" src="@/assets/images/CROSSFIT_AVARIKO-666.jpg" alt="" />
        <ul data-aos="fade">
          <li>Arrivé tout droit du Canada, derrière la communauté AVARIKO Athletics, il y a Coach Vince !</li>
          <li>Un coach solide, à la personnalité atypique que tu vas aimer autant que détester ;)</li>
          <li>
            Joueurs de rugby, il pratique dans sa jeunesse le Hockey sur Glace (of course) et la crosse (sport n°2 au
            Canada).
          </li>
          <li>Titulaire d’un PBJEPPS AGFF, CrossFit level 1 et 2,</li>
          <li>
            Près de 10 ans d’expérience dans la coaching (tout âge et toute condition) il se forme régulièrement pour
            toujours approfondir ses connaissances. Un bon coach a lui-même un coach!
          </li>
        </ul>
        <p data-aos="fade">Sa particularité : Il maitrise à la perfection le Franglais<br /></p>
        <h3 data-aos="fade">Coach Aurélien</h3>
      </article>
    </main>
  </div>
</template>

<script>
export default {
  methods: {
    initAnimation() {
      const cursor = document.querySelector('#coachImage');
      if (cursor) {
        const moveFactor = 0.05;

        let initialX = cursor.offsetLeft;
        let initialY = cursor.offsetTop;
        let targetX = initialX;
        let targetY = initialY;
        let currentX = initialX;
        let currentY = initialY;

        cursor.addEventListener('mouseover', () => {
          cursor.style.zIndex = '2';
          cursor.style.transform = 'translate(-50%, -50%) rotate(0deg) scale(1.1)';
          cursor.style.filter = 'brightness(1)';
        });

        cursor.addEventListener('mouseout', () => {
          cursor.style.zIndex = '0';
          cursor.style.transform = 'translate(-50%, -50%) rotate(5deg) scale(1)';
          cursor.style.filter = 'brightness(0.6)';
        });

        const updatePosition = () => {
          currentX += (targetX - currentX) * 0.1;
          currentY += (targetY - currentY) * 0.1;
          cursor.style.left = currentX + 'px';
          cursor.style.top = currentY + 'px';
          requestAnimationFrame(updatePosition);
        };

        document.addEventListener('mousemove', e => {
          const offsetX = (e.clientX - window.innerWidth / 2) * moveFactor;
          const offsetY = (e.clientY - window.innerHeight / 2) * moveFactor;
          targetX = initialX + offsetX;
          targetY = initialY + offsetY;
        });

        requestAnimationFrame(updatePosition);
      } else {
        setTimeout(() => {
          this.initAnimation();
        }, 200);
      }
    },
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
        this.initAnimation();
        this.initParallax();
      }, 500);
    });
  },
};
</script>

<style lang="scss" scoped>
article {
  position: relative;
  h2,
  h3,
  ul,
  p {
    position: relative;
    z-index: 1;
    pointer-events: none;
  }
  img {
    position: absolute;
    top: 70%;
    left: 60%;
    transform: translate(-50%, -50%) rotate(5deg);
    z-index: 0;
    height: 50%;
    object-fit: cover;
    filter: brightness(0.6);
    transition: transform 0.3s ease, filter 0.3s ease;
  }
}
</style>
