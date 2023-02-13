<template>
  <div id="page">
    <Navbar />
    <slot />
    <Footer />
  </div>
</template>

<script></script>

<style lang="scss">
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
  min-height: calc(100vh - 50px);
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
  padding-top: 50px;
}
</style>
