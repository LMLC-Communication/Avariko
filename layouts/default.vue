<template>
  <div id="page">
    <Navbar />
    <slot />
    <Footer />
  </div>
</template>

<style lang="scss">
$navbar-height: 90px;

html {
  font-family: 'Blender Pro';
  height: 100%;
  background-color: black;
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

main {
  background: url('/bg.png');
  background-size: cover;
  padding: 50px 0;
}

article {
  margin: auto;
  max-width: 1200px;
  color: white;
  margin-top: 100px;
  margin-bottom: 100px;
  h2 {
    font-family: 'Blender Pro';
    font-style: normal;
    font-weight: 900;
    font-size: 100px;
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
    font-size: 27px;
    line-height: 90%;
    /* or 22px */

    text-transform: uppercase;

    span {
      color: hsla(183, 100%, 31%, 1);
      font-style: normal;
    }
  }
}
</style>
