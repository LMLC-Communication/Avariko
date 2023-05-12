<template>
  <div>
    <div class="heros">
      <img src="@/assets/images/CROSSFIT_AVARIKO-421_bis.webp" alt="" />
      <h1>Les coachs</h1>
    </div>
    <main>
      <article>
        <h3 data-aos="fade">Coach Vince #ohfuck</h3>
        <img id="coachImage" src="@/assets/images/CROSSFIT_AVARIKO-666.webp" alt="" />
        <ul data-aos="fade">
          <li>Arrivé tout droit du <span>Canada</span>, derrière la communauté AVARIKO Athletics, il y a Coach Vince&nbsp;!</li>
          <li>Un coach <span>solide</span>, à la <span>personnalité atypique</span> que tu vas aimer autant que détester ;)</li>
          <li><span>Joueur de rugby</span>, il pratique dans sa jeunesse le Hockey sur Glace (of course) et la crosse (sport n°2 au Canada).</li>
          <li><span>Titulaire d’un PBJEPS AGFF</span>, CrossFit level 1 et 2,</li>
          <li>
            Près de <span>10 ans d’expérience</span> dans la coaching (tout âge et toute condition) il se forme régulièrement pour toujours approfondir ses
            connaissances. Un bon coach a lui-même un coach&nbsp;!
          </li>
        </ul>
        <p data-aos="fade">Sa particularité : Il maitrise à la perfection le Franglais<br /></p>
      </article>
      <article>
        <h3 data-aos="fade">Coach Aurélien #Pikachu</h3>
        <img id="coachAurelien" src="@/assets/images/coach_aurelien.webp" alt="" />
        <ul data-aos="fade">
          <li>
            Après avoir travaillé <span>6 ans dans le sport automobile</span>, Coach Aurélien à choisi de se reconvertir et de rejoindre Avariko Athletics en
            tant que coach.
          </li>
          <li><span>Rigoureux</span>, <span>perfectionniste</span> et toujours de <span>bonne humeur</span>&nbsp;!</li>
          <li>Il a pratiqué de nombreux sports les principaux : Le basketball, l'athlétisme ainsi que le Trail running.</li>
          <li>
            Titulaire d'un <span>BPJEPS Haltérophilie & Musculation</span>, de brevets d'État d'haltérophilie, de force athlétique et functional training.
            Crossfit Gymnastique
          </li>
          <li>Arrivé en 2021 à Avariko Athletics en tant que coach, il met tout en œuvre pour apprendre davantage et devenir un meilleur coach&nbsp;!</li>
        </ul>
        <p data-aos="fade">Sa particularité : Un des premiers adhérents de la structure et un surnom.... Pikachu&nbsp;!<br /></p>
      </article>
    </main>
  </div>
</template>

<script>
useHead({
  title: 'Avariko Athletics - Les coachs',
  meta: [
    {
      name: 'description',
      content:
        'Rencontrez nos coachs à Avariko Athletics, Coach Vince et Coach Aurélien. Avec leurs expériences variées et leurs approches uniques, ils sont prêts à vous aider à atteindre vos objectifs de fitness. Découvrez leur parcours et leur expertise.',
    },
  ],
});
export default {
  methods: {
    initAnimation(selector) {
      const cursor = document.querySelector(selector);
      if (cursor) {
        const moveFactor = 0.06;

        let initialX = cursor.offsetLeft;
        let initialY = cursor.offsetTop;
        let targetX = initialX;
        let targetY = initialY;
        let currentX = initialX;
        let currentY = initialY;

        cursor.addEventListener('mouseover', () => {
          cursor.style.zIndex = '2';
          cursor.style.transform = 'translate(-50%, -50%) scale(1.1)';
          cursor.style.filter = 'brightness(1)';
        });

        cursor.addEventListener('mouseout', () => {
          cursor.style.zIndex = '0';
          cursor.style.transform = 'translate(-50%, -50%) scale(1)';
          cursor.style.filter = 'brightness(0.6)';
        });

        const updatePosition = () => {
          currentX += (targetX - currentX) * 0.1;
          currentY += (targetY - currentY) * 0.1;
          cursor.style.left = currentX + 'px';
          cursor.style.top = currentY + 'px';
          requestAnimationFrame(updatePosition);
        };

        // Variables constantes déplacées en dehors des gestionnaires d'événements
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const maxDistance = Math.sqrt(Math.pow(window.innerWidth / 2, 2) + Math.pow(window.innerHeight / 2, 2));
        const exponent = 2;

        let mouseX = centerX;
        let mouseY = centerY;

        const updateMousePosition = e => {
          mouseX = e.clientX;
          mouseY = e.clientY;
          requestAnimationFrame(handleMouseMove);
        };

        const handleMouseMove = () => {
          const distanceToCenterX = Math.abs(mouseX - centerX);
          const distanceToCenterY = Math.abs(mouseY - centerY);

          const factorX = 1 + distanceToCenterX / centerX;
          const factorY = 1 + distanceToCenterY / centerY;

          const offsetX = ((mouseX - centerX) / factorX) * moveFactor;
          const offsetY = ((mouseY - centerY) / factorY) * moveFactor;
          targetX = initialX + offsetX;
          targetY = initialY + offsetY;
        };

        document.addEventListener('mousemove', updateMousePosition);
        requestAnimationFrame(updatePosition);
      } else {
        setTimeout(() => {
          this.initAnimation(selector);
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
        this.initAnimation('#coachImage');
        this.initAnimation('#coachAurelien');
        this.initParallax();
      }, 500);
    });
  },
};
</script>

<style lang="scss" scoped>
article {
  position: relative;
  margin-bottom: 100px;
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
    // transform: translate(-50%, -50%) rotate(5deg);
    transform: translate(-50%, -50%);
    z-index: 0;
    height: 200px;
    object-fit: cover;
    filter: brightness(0.6);
    transition: transform 0.3s ease, filter 0.3s ease;
  }
}

@media screen and (max-width: 768px) {
  article {
    img {
      height: auto;
      width: 100vw;
      aspect-ratio: 1 / 1;
      position: relative;
      top: 0 !important;
      left: -20px !important;
      transform: translate(0, 0) !important;
      filter: brightness(1) !important;
    }
  }
  main {
    overflow: hidden;
  }
}

// article:nth-child(2) {
//   img {
//     left: 30%;
//   }
// }
</style>
