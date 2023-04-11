<template>
  <div>
    <div class="hero">
      <video src="@/assets/videos/intro.mp4" autoplay loop muted></video>
      <div class="hero__content">
        <h4 class="hero__content__subtitle">DÉPASSEZ VOS LIMITES</h4>
        <h1 class="hero__content__title">
          <div><span>AVARIKO</span></div>
          <div><span>ATHLETICS</span></div>

          <!-- <img src="~/assets/images/logo_white.svg" alt="Nuxt Logo" class="logo" /> -->
        </h1>
        <button>EN SAVOIR PLUS</button>
      </div>
    </div>
    <div class="quotation">
      <ThreeScene />
      <ThreeSceneMirror class="mirror" />
      <h3 data-aos="fade" data-aos-duration="500" data-aos-anchor-placement="bottom-bottom">
        Transformez votre corps,<br />dépassez vos limites,<br />atteignez vos objectifs
      </h3>
      <h4 data-aos="zoom-in" data-aos-duration="400" data-aos-anchor-placement="bottom-bottom">
        <em>Faites du</em> <span>Crossfit</span>
      </h4>
      <button data-aos="fade" data-aos-duration="500" data-aos-anchor-placement="bottom-bottom">EN SAVOIR PLUS</button>
    </div>
    <main>
      <article>
        <h2 data-aos="fade">Philosophie</h2>
        <p data-aos="fade">
          Avariko Athletics est une <span>salle unique en son genre</span>, qui mélange
          <span>disciplines, cultures, profils</span>, pour proposer un service adapté et <span>sur mesure</span> à tous
          ses clients.
          <br />
          <br />
          <br />
          Nous attachons autant d’importance à <span>la performance</span> dans la vie au quotidien
          <span>« le mieux vivre »</span> qu’à la <span>performance sportive</span>
        </p>
      </article>
      <article>
        <h2 data-aos="fade">Notre Mission</h2>
        <p data-aos="fade">
          Vous aider à devenir la meilleure version de vous-même, physiquement et mentalement, en vous montrant comment
          bouger votre corps correctement et sans blessures.
          <br />
          <br />
          <br />
          Le programme que nous avons développé, accompagnés de coachs reconnus à l’international et de professionnels
          de la santé (ostéopathe, kiné), est unique, testé et approuvé, et s’adapte à tous.
          <br />
          <br />
          <br />
          Nous voulons que nos clients s’épanouissent dans leurs vies personnelles, en dehors de notre salle de sport,
          en atteignant leurs objectifs sportifs mais aussi de vie.
        </p>
      </article>
      <article>
        <h2 data-aos="fade">Pour qui ?</h2>
        <p data-aos="fade">
          Peu importe ton âge, ton expérience sportive, ta condition physique, nous t’accompagnons pour devenir la
          meilleure version de toi!
          <br />
          <br />
          <br />
          Débutants, blessés, sportifs de haut niveau, enfants, grand-parents, hommes et femmes, notre programme
          s’adapte à tous!
        </p>
      </article>
      <article>
        <h2>La salle</h2>
        <p>
          Une superficie d’entrainement de plus de 800m2 Matériel professionnel haut de gamme Vestiaires hommes et
          femmes Grand parking gratuit Skate-park intérieur et espace jeu pour les enfants
        </p>
      </article>
    </main>
    <!-- <div class="actualites">
      <h2>Actualités</h2>
      <ul>
        <li v-for="n in 10" :key="n + 1">
          <nuxt-link :to="`/actualites/${n + 1}`">
            <img src="https://picsum.photos/200/300" alt="image" />
            <h3>Titre de l'article</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptas, quod, quia, voluptates quae
              voluptatibus quibusdam voluptatum quos quidem nemo quas. Quisquam, quae. Quisquam voluptas, quod, quia,
              voluptates quae voluptatibus quibusdam voluptatum quos quidem nemo quas. Quisquam, quae.
            </p>
          </nuxt-link>
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@use 'sass:color';

$navbar-height: 90px;

img.logo {
  width: 160px;
  animation: fade 2s;
  float: left;
}

.hero__content__subtitle {
  margin-bottom: 20px;
}

button {
  cursor: pointer;
  background-color: transparent;
  border: 2px solid $primary;
  color: white;
  font-size: 14px;
  padding: 20px 34px;
  margin-top: 34px;
  border-radius: 200px;
  transition: border-color 0.1s ease, background-color 0.1s ease;
  animation: fade 2s;
  transition: background-color 0.1s;
  &:hover {
    border-color: transparent;
    background-color: color.adjust($primary, $alpha: -0.5);

    backdrop-filter: blur(20px);
    // blur background only
  }
}
.hero {
  height: calc(100vh - #{$navbar-height});
  width: 100%;
  position: relative;
  video {
    z-index: -10;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    animation: fade 5s;
  }
  .hero__content {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 120px 100px 0 100px;
    gap: 20px;
    button {
      margin-right: auto;
    }
  }
}

h1 {
  color: white;
  margin: 0;
  line-height: 0.75em;
  letter-spacing: -1pt;
  font-size: 80px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  > div {
    overflow: hidden;
    padding: 0;
    line-height: 0.6;
  }
  span {
    display: block;
  }
  > div:nth-child(1) span {
    animation: up 1s forwards;
  }
  > div:nth-child(2) span {
    animation: up2 1.25s forwards;
  }
}
h3 {
  color: white;
  font-size: 50px;
  line-height: 0.8em;
  text-transform: uppercase;
  width: 800px;
  text-align: center;
}
h4 {
  font-size: 22px;
  line-height: 0.9em;
  letter-spacing: 1.25pt;
  text-transform: uppercase;
  margin: 2rem 0;
  color: white;
  margin: 0;
  animation: fade 2s;
  > em {
    font-style: italic;
  }
  > span {
    color: $primary;
  }
}
.quotation {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes up {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes up2 {
  0% {
    transform: translateY(100px);
  }
  25% {
    transform: translateY(100px);
  }
  100% {
    transform: translateY(0);
  }
}

.actualites {
  background-color: white;
  h2 {
    color: black;
  }
}

.mirror {
  transform: translate(-540px);
}
</style>
