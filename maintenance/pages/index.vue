<template>
  <main>
    <!-- <video src="/intro.mp4" muted autoplay loop></video> -->

    <!-- logo -->
    <nav>
      <img src="/mini-logo.svg" alt="" class="mini__logo" />
      <span
        >Salle de
        sport&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;Coaching</span
      >
      <div class="comming">Développement en cours</div>
    </nav>
    <img class="logo" src="/logo.svg" alt="" />
    <h2>
      238 avenue de Saint Amand<br />
      18570 Trouy Nord<br /><br />
      <a href="tel:+33699323213">0699323213</a><br />
      <a href="">
        <img class="instagram" src="/instagram.svg" alt="instagram" />
        @avariko_athletics
      </a>
    </h2>
    <a class="button" href="mailto:contact@kinesis-performance.com"
      >Nous contacter</a
    >
    <h3>Nouveau site, coming soon…</h3>
    <!-- copywright -->
    <p class="copy">©{{ new Date().getFullYear() }}</p>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style lang="scss">
html {
  background-color: black;
}

body {
  margin: 0;
  // background: url('/background.webp') no-repeat center center fixed;
  // background: rgb(54, 54, 54);
  // background: radial-gradient(
  //   circle,
  //   rgb(238, 238, 238) 0%,
  //   rgba(33, 33, 33, 1) 23%,
  //   rgba(0, 0, 0, 1) 100%
  // );
  background: radial-gradient(
      51.49% 47.06% at 59.53% 56.79%,
      #313131 0%,
      #000000 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  color: white;

  font-family: 'Blender Pro';

  font-weight: 900;
  h2 {
    text-transform: uppercase;
  }

  h3 {
    // position: absolute;
    bottom: 20px;
    font-size: 20px;
  }

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    // min-height: 100vh;
    flex-direction: column;
    text-align: center;
    gap: 20px;
    padding-top: 100px;
  }

  h2 {
    img {
      width: 30px;
      margin: 0 10px;
      transform: translate(0, 10px);
    }
    a {
      color: #fff;
      text-decoration: none;
      transition: color 0.1s ease-in-out;
      &:hover {
        color: $primary;
      }
    }
  }

  a.button {
    z-index: 10;
    padding: 20px 30px;
    font-family: 'Blender Pro';
    font-weight: 900;
    font-size: 14px;
    background-color: #fff;
    color: #000;
    border-radius: 4px;
    text-decoration: none;
    transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out;
    &:hover {
      background-color: $primary;
      color: #fff;
    }
  }
}

p {
  z-index: 10;
}

.logo {
  width: 500px;
  max-width: 90%;
  z-index: 10;
}

.copy {
  position: fixed;
  bottom: 20px;
  right: 20px;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  padding: 0;
  margin: 0;
}

nav {
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .mini__logo {
    width: 50px;
  }
  span {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 16px;
    font-weight: 400;
    color: #707070;
    padding: 0;
    margin: 0;
    text-transform: none;
  }
  .comming {
    padding: 20px;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(10px);
    border-radius: 4px;
    font-family: 'Blender Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    text-align: center;
  }
}
video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}

@media (max-width: 768px) {
  nav {
    flex-direction: column;
    gap: 20px;
    .mini__logo {
      width: 30px;
    }
    span {
      position: relative;
      left: 0;
      transform: none;
      font-size: 14px;
    }
  }

  h2 {
    font-size: 14px;
  }

  body h3 {
    bottom: 30px;
  }

  body main {
    padding-top: 180px;
  }
}
</style>
