<template>
  <div>
    <!-- <h1>Notre Offre</h1> -->
    <div class="heros">
      <img src="@/assets/images/CROSSFIT_AVARIKO-020.jpg" alt="" />
    </div>
    <main>
      <article id="temoignage">
        <h2>Témoignage</h2>
        <p>XXXXXXX</p>
      </article>
      <article id="seminaire">
        <h2>Séminaires et stage</h2>
        <p>
          Nous proposons régulièrement des séminaires et stages sur différentes thématiques à nos clients
          (haltérophilie, stages vacances enfants etc).<br /><br /><br />
          Nous accompagnons également des clubs sportifs dans leurs préparation physique : rugby, judo etc…<br /><br /><br />
          Enfin pour les professionnels sprotifs et coachs, nous pouvons vous accueillir si vous souhaitez organiser
          votre séminaire ou formation chez nous !
        </p>
      </article>
      <article id="programme">
        <h2>Le programme</h2>
        <p>
          Chez Avariko Athletics les programmes d’entraînement sont réfléchis, créés et testés EN INTERNE par les
          coachs.
        </p>
        <p>
          A l’image d’un chef qui s’inspire de plusieurs techniques et cultures, Vince sélectionne le meilleur de
          plusieurs disciplines (tels que le Cross training, StrongFit, l’Haltérophilie, la gymnastique) tout en
          s’appuyant sur sa propre expérience de sportif, de père de famille et sa culture internationale.
        </p>
        <p>
          Il a développé un programme pyramidale, permettant à TOUS d’acquérir les FONDATIONS, et ainsi de progresser et
          de performer sans se blesser!
        </p>
        <p>→ REPOUSSE TES LIMITES 3X SEMAINES</p>
        <p>
          #4 WOD + SPORT<br />
          Un vrai test de ton niveau de fitness qui va refléter ton travail au cours des niveaux ci-dessous et révéler
          tes points faibles<br />
          #3 W101/GYM : la technique <br />
          W101 : des cours d’haltérophilie spécifique : sntach, clean & jerk <br />
          GYM : des mouvements et exercices avec le poids du corps, pour améliorer tes compétences en gymnastique <br />
          #2 SWEAT : brûle moi ces f***ing calories !<br />
          Travaille ton cardio avec 3 machines : row, ski et velo <br />
          #1 CLAM : la base<br />
          La fondation de notre gym, un programme constriut pour que tu appréhendes mieux ton corps et ton esprit. On y
          utilise des sleds, des sacs de sebles et des haltères
        </p>
      </article>
      <article id="assessment">
        <h2>L’ Assessment : l’évaluation corporelle</h2>
        <p>
          Parce que chaque client est unique, avec sa propre histoire et sa propre expérience, Coach Vince s’est
          spécifiquement formé dans « l’assessment », l’évaluation corporelle
        </p>
        <p>
          Il s’agit d’un bilan au cours duquel il prend en considération la personne qu’il rencontre dans sa GLOBALITÉ
          et tout ce qui peut influencer sur sa façon de bouger : son métier, son âge, sa condition physique, ses
          blessures mais aussi sa personnalité et son état psychologique. Tous ces facteurs lui serviront à comprendre
          comment fonctionne ton corps, quels muscles tu utilises “ trop” ou “pas assez” et de quelle façon tu
          compenses.
        </p>
        <br />
        <br />
        <br />
        <p>
          La finalité étant de trouver la source d’un potentiel déséquilibre, d’une douleur persistante, et de te
          montrer comment bouger pour corriger les problèmes que tu rencontres et te sentir mieux dans ta vie, au
          quotidien.
        </p>
      </article>
    </main>
  </div>
</template>

<script>
export default {
  methods: {
    initParallax() {
      const heroImage = document.querySelector('.hero img');
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
</style>
