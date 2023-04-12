<template>
  <div>
    <div class="hero">
      <img src="../assets/images/CROSSFIT AVARIKO-146.jpg" alt="" />
    </div>
    <main>
      <article>
        <h2>CONTACT :</h2>

        <p>
          238 AVENUE DE SAINT AMAND 18570 TROUY NORD<br />
          <br />
          0699323213<br />
          <br />
          instagram @AVARIKO_ATHLETICS
        </p>
      </article>
    </main>
  </div>
</template>

<script>
export default {};
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
</style>
