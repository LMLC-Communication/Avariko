<template>
  <div>
    <div class="hero">
      <img src="@/assets/images/CROSSFIT_AVARIKO-421.jpg" alt="" />
    </div>
    <main>
      <article>
        <h2>Présentation des coachs</h2>
        <h3>Coach Vince #ohfuck</h3>
        <img id="coachImage" src="@/assets/images/CROSSFIT_AVARIKO-666.jpg" alt="" />
        <ul>
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
        <p>Sa particularité : Il maitrise à la perfection le Franglais<br /></p>
        <h3>Coach Aurélien</h3>
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
        const initialX = cursor.getBoundingClientRect().left;
        const initialY = cursor.getBoundingClientRect().top;
        let targetX = initialX;
        let targetY = initialY;
        let currentX = initialX;
        let currentY = initialY;

        const moveFactor = 0.05; // ajustez cette valeur pour modifier la sensibilité du mouvement de l'image

        // const updatePosition = () => {
        //   currentX += (targetX - currentX) * 0.1;
        //   currentY += (targetY - currentY) * 0.1;
        //   cursor.style.left = currentX + 'px';
        //   cursor.style.top = currentY + 'px';
        //   requestAnimationFrame(updatePosition);
        // };

        // document.addEventListener('mousemove', e => {
        //   const offsetX = (e.pageX - window.innerWidth / 2) * moveFactor;
        //   const offsetY = (e.pageY - window.innerHeight / 2) * moveFactor;
        //   targetX = initialX + offsetX;
        //   targetY = initialY + offsetY;
        // });

        cursor.addEventListener('mouseover', () => {
          cursor.style.zIndex = '2';
          cursor.style.transform = 'rotate(0deg) scale(1.1)';
          cursor.style.filter = 'brightness(1)';
        });

        cursor.addEventListener('mouseout', () => {
          cursor.style.zIndex = '0';
          cursor.style.transform = 'rotate(5deg) scale(1)';
          cursor.style.filter = 'brightness(0.6)';
        });

        requestAnimationFrame(updatePosition);
      } else {
        setTimeout(() => {
          this.initAnimation();
        }, 100);
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.initAnimation();
    });
  },
};
</script>

<style lang="scss" scoped>
.hero {
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
    top: 30%;
    left: 60%;
    transform: rotate(5deg);
    z-index: 0;
    height: 50%;
    object-fit: cover;
    filter: brightness(0.6);
    transition: transform 0.3s ease, filter 0.3s ease;
  }
}
</style>
