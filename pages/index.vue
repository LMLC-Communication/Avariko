<template>
  <div>
    <div class="hero">
      <video src="@/assets/videos/intro.mp4" autoplay loop muted></video>
      <div class="hero__content">
        <h4 class="hero__content__subtitle">REJOIGNEZ-NOUS POUR VOUS DÉPASSER</h4>
        <h1 class="hero__content__title">
          <div><span>CROSSFIT</span></div>
          <div><span>AVARIKO</span></div>
        </h1>
        <button>EN SAVOIR PLUS</button>
      </div>
    </div>
    <div class="quotation">
      <h3>Transformez votre corps,<br />dépassez vos limites,<br />atteignez vos objectifs</h3>
      <h4><em>Faites du</em> <span>Crossfit</span></h4>
      <button>EN SAVOIR PLUS</button>
    </div>
    <div class="actualites">
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
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@use 'sass:color';

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
  &:hover {
    border-color: transparent;
    background-color: color.adjust($primary, $alpha: -0.4);

    backdrop-filter: blur(20px);
    // blur background only
  }
}
.hero {
  height: calc(100vh - 120px);
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
</style>
