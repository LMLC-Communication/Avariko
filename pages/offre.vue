<template>
  <div>
    <!-- <h1>Notre Offre</h1> -->
    <div class="heros">
      <img src="@/assets/images/CROSSFIT_AVARIKO-020.webp" alt="" />
      <h1>Notre offre</h1>
    </div>
    <main>
      <article id="assessment">
        <div class="gallery">
          <img src="@/assets/images/CROSSFIT_AVARIKO-053.webp" alt="" data-aos="fade-up" />
          <img src="@/assets/images/CROSSFIT_AVARIKO-101.webp" alt="" data-aos="fade-up" />
          <img src="@/assets/images/CROSSFIT_AVARIKO-206.webp" alt="" data-aos="fade-up" />
          <img src="@/assets/images/CROSSFIT_AVARIKO-351.webp" alt="" data-aos="fade-up" />
        </div>
        <h2 data-aos="fade">L’ Assessment : l’évaluation corporelle</h2>
        <p data-aos="fade">
          Parce que chaque client est unique, avec sa propre histoire et sa propre expérience, Coach Vince s’est spécifiquement formé dans « l’assessment »,
          l’évaluation corporelle
        </p>
        <br />
        <p data-aos="fade">
          Il s’agit d’un bilan au cours duquel il prend en considération la personne qu’il rencontre dans sa GLOBALITÉ et tout ce qui peut influencer sur sa
          façon de bouger : son métier, son âge, sa condition physique, ses blessures mais aussi sa personnalité et son état psychologique. Tous ces facteurs
          lui serviront à comprendre comment fonctionne ton corps, quels muscles tu utilises “ trop” ou “pas assez” et de quelle façon tu compenses.
        </p>
        <br />
        <p data-aos="fade">
          La finalité étant de trouver la source d’un potentiel déséquilibre, d’une douleur persistante, et de te montrer comment bouger pour corriger les
          problèmes que tu rencontres et te sentir mieux dans ta vie, au quotidien.
        </p>

        <div class="quotation">
          <button data-aos="fade" data-aos-duration="500" data-aos-anchor-placement="bottom-bottom" @click="$router.push('/contact')">CONTACTEZ-NOUS</button>
        </div>
      </article>
      <article id="programme">
        <div class="gallery">
          <img src="@/assets/images/CROSSFIT_AVARIKO-947.webp" alt="" data-aos="fade-up" />
          <img src="@/assets/images/CROSSFIT_AVARIKO-882.webp" alt="" data-aos="fade-up" />
          <img src="@/assets/images/CROSSFIT_AVARIKO-1069.webp" alt="" data-aos="fade-up" />
          <img src="@/assets/images/CROSSFIT_AVARIKO-003.webp" alt="" data-aos="fade-up" />
        </div>

        <h2 data-aos="fade">Le programme</h2>
        <p data-aos="fade">Chez Avariko Athletics les programmes d’entraînement sont <span>réfléchis, créés et testés</span> EN INTERNE par les coachs.</p>
        <br />
        <p data-aos="fade">
          A l’image d’un chef qui s’inspire de plusieurs techniques et cultures, Vince sélectionne le meilleur de plusieurs disciplines (tels que le Cross
          training, StrongFit, l’Haltérophilie, la gymnastique) tout en s’appuyant sur sa propre expérience de sportif, de père de famille et sa culture
          internationale.
        </p>
        <br />
        <p data-aos="fade">
          Il a développé un programme pyramidale, permettant à TOUS d’acquérir les FONDATIONS, et ainsi de
          <span>progresser et de performer</span> sans se blesser!
        </p>
        <p data-aos="fade">→ REPOUSSE TES LIMITES 3X SEMAINES</p>
        <br />
        <br />
        <div class="programme">
          <img data-aos="flip-up" src="@/assets/images/pyramid.svg" alt="" class="pyramid" />
          <div class="programme_liste">
            <div>
              <h4 data-aos="fade">#4 WOD + SPORT</h4>
              <p data-aos="fade">
                Un vrai <span>test</span> de ton niveau de fitness qui va refléter ton travail au cours des niveaux ci-dessous et révéler tes points faibles
              </p>
            </div>
            <div>
              <h4 data-aos="fade">#3 W101/GYM : la technique</h4>
              <p data-aos="fade">
                W101 : des cours d’haltérophilie spécifique : sntach, clean & jerk <br />
                GYM : des mouvements et exercices avec le poids du corps, pour améliorer tes compétences en gymnastique
              </p>
            </div>
            <div>
              <h4 data-aos="fade">#2 SWEAT : brûle moi ces f***ing calories&nbsp;!</h4>
              <p data-aos="fade">Travaille ton cardio avec 3 machines : row, ski et velo</p>
            </div>
            <div>
              <h4 data-aos="fade">#1 CLAM : la base</h4>
              <p data-aos="fade">
                La fondation de notre gym, un programme constriut pour que tu appréhendes mieux ton corps et ton esprit. On y utilise des sleds, des sacs de
                sebles et des haltères
              </p>
            </div>
          </div>
        </div>
        <div class="quotation">
          <button data-aos="fade" data-aos-duration="500" data-aos-anchor-placement="bottom-bottom" @click="$router.push('/contact')">CONTACTEZ-NOUS</button>
        </div>
      </article>
      <article id="temoignage">
        <div class="gallery">
          <img src="@/assets/images/CROSSFIT_AVARIKO-168.webp" alt="" data-aos="fade-up" />
          <img src="@/assets/images/CROSSFIT_AVARIKO-206.webp" alt="" data-aos="fade-up" />
          <img src="@/assets/images/CROSSFIT_AVARIKO-209.webp" alt="" data-aos="fade-up" />
          <img src="@/assets/images/CROSSFIT_AVARIKO-433.webp" alt="" data-aos="fade-up" />
        </div>
        <h2 data-aos="fade">Témoignage</h2>
        <p data-aos="fade">
          “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus asperiores vero nobis dicta omnis nisi optio unde facere, cupiditate repellat
          voluptatibus, reprehenderit minus repudiandae, quos quaerat aliquid illum illo voluptas?”
        </p>
      </article>
      <article id="seminaire">
        <div class="gallery">
          <img src="@/assets/images/CROSSFIT_AVARIKO-453.webp" alt="" data-aos="fade-up" />
          <img src="@/assets/images/CROSSFIT_AVARIKO-599.webp" alt="" data-aos="fade-up" />
          <img src="@/assets/images/CROSSFIT_AVARIKO-785.webp" alt="" data-aos="fade-up" />
          <img src="@/assets/images/CROSSFIT_AVARIKO-867.webp" alt="" data-aos="fade-up" />
        </div>
        <h2 data-aos="fade">Séminaires et stage</h2>
        <p data-aos="fade">
          Nous proposons régulièrement des séminaires et stages sur différentes thématiques à nos clients (haltérophilie, stages vacances enfants etc).<br /><br /><br />
          Nous accompagnons également des clubs sportifs dans leurs préparation physique : rugby, judo etc…<br /><br /><br />
          Enfin pour les professionnels sprotifs et coachs, nous pouvons vous accueillir si vous souhaitez organiser votre séminaire ou formation chez
          nous&nbsp;!
        </p>
      </article>
    </main>
  </div>
</template>

<script>
useHead({
  title: 'Avariko Athletics - Notre offre',
  meta: [
    {
      name: 'description',
      content:
        "Découvrez notre offre d'Avariko Athletics. Proposant une évaluation corporelle unique, nous offrons un programme d'entraînement interne créé et testé par nos coachs. Nous incluons également des séminaires et des stages variés pour nos clients. Contactez-nous pour en savoir plus.",
    },
  ],
});
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
h4 {
  margin: 0;
  font-size: 1.2rem;
}
p {
  margin: 0;
}

.programme {
  display: flex;
  gap: 20px;
  .pyramid {
    display: block;
    filter: brightness(1);
    height: 400px;
  }
  .programme_liste {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
}

@media screen and (max-width: 768px) {
  .programme {
    flex-direction: column;
    .pyramid {
      width: 100%;
      height: 300px;
    }
    .programme_liste {
      flex-direction: column-reverse;
      gap: 20px;
    }
  }
}
</style>
