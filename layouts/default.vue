<template>
  <div id="page">
    <Navbar />
    <slot />
    <Footer />
  </div>
</template>

<style lang="scss">
@use 'sass:color';
$navbar-height: 90px;

html {
  font-family: 'Blender Pro';
  height: 100%;
  background-color: black;
  scroll-behavior: smooth;
}
a,
button,
textarea,
input {
  font-family: 'Blender Pro';
}
body {
  height: 100%;
  margin: 0;
}
h2 {
  color: white;
}
#nuxt {
  min-height: calc(100vh - #{$navbar-height});
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
#page {
  padding-top: $navbar-height;
}

main.home {
  background: url('/bg.png');
  background-size: cover;
  padding: 50px 0;
}

article {
  margin: auto;
  max-width: 1200px;
  color: white;
  padding-top: 100px;
  margin-bottom: 200px;
  h2 {
    font-family: 'Blender Pro';
    font-style: normal;
    font-weight: 900;
    font-size: 60px;
    line-height: 68px;
    /* identical to box height, or 68% */

    // border: 3px solid #ffffff;
  }
  h3 {
    font-family: 'Blender Pro';
    font-style: normal;
    font-weight: 900;
    font-size: 40px;
    line-height: 68px;
    /* identical to box height, or 68% */

    // border: 3px solid #ffffff;
  }
  p,
  li {
    color: white;
    font-family: 'Blender Pro';
    font-style: italic;
    font-weight: 701;
    font-size: 20px;
    line-height: 100%;
    font-weight: 400;
    /* or 22px */

    // text-transform: uppercase;

    span {
      color: hsla(183, 100%, 31%, 1);
      font-style: normal;
    }
  }
}
.heros {
  position: relative;
  width: 100%;
  height: 70vh;
  overflow: hidden;
  img {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left;
    filter: brightness(0.6);
    transition: filter 0.3s ease;
  }
}

article {
  position: relative;
  padding: 0 20px;
  p {
    z-index: 1;
  }
  > img {
    // position: absolute;
    height: 300px;
    z-index: 0;
    filter: brightness(0.6);
  }
  // > img:first-child {
  //   left: 0;
  //   top: 0;
  //   transform: translate(-50%, 0%);
  // }
  // > img:nth-child(2) {
  //   display: none;
  //   right: 0;
  //   bottom: 0;
  //   transform: translate(50%, 50%);
  // }
}

.heros {
  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    color: white;
    font-family: 'Blender Pro';
    font-style: normal;
    text-transform: uppercase;
    font-size: 70px;
    margin: auto;
  }
}

.gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  width: 100vw;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  &:first-child {
    margin-top: 50px;
  }
  img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
  }
}

nav > ul > li > a.router-link-exact-active {
  color: $primary !important;
}

.quotation {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
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
}

@media screen and (max-width: 768px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
  }
  .hero {
    h1 {
      font-size: 50px;
    }
  }
}
</style>
