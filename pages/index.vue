<template>
  <div>
    <div class="hero">
      <Navbar />
      <video src="@/assets/videos/intro.mp4" autoplay loop muted></video>
      <div class="hero__content">
        <h2 class="hero__content__subtitle">REJOIGNEZ-NOUS POUR UN ENTRAÎNEMENT</h2>
        <h1 class="hero__content__title">
          <div><span>CROSSFIT</span></div>
          <div><span>AVARIKO</span></div>
        </h1>
        <button>EN SAVOIR PLUS</button>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss">
html {
  font-family: 'Blender Pro';
  height: 100%;
  background-color: black;
}
body {
  height: 100%;
  margin: 0;
}
</style>

<style lang="scss" scoped>
.hero {
  height: 100vh;
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
      cursor: pointer;
      background-color: transparent;
      border: 2px solid #ff0080;
      color: white;
      font-size: 1.6rem;
      padding: 20px 80px;
      border-radius: 200px;
      margin-right: auto;
      transition: border-color 0.1s ease, background-color 0.1s ease;
      animation: fade 2s;
      &:hover {
        border-color: transparent;
        background-color: #ff008066;
        // blur background only
        backdrop-filter: blur(20px);
      }
    }
  }
}
h1 {
  font-size: 10rem;
  color: white;
  margin: 0;
  line-height: 0.9;
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
h2 {
  font-size: 2rem;
  color: white;
  margin: 0;
  animation: fade 2s;
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
    transform: translateY(100px);
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
</style>
