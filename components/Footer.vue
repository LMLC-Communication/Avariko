<template>
  <footer>
    <div class="foot">
      <div></div>
      <div>
        &copy;{{ new Date().getFullYear() }}<br />
        <nuxt-link to="mentions-legales">mentions légales</nuxt-link>
      </div>
      <div></div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  background-color: #000;
  color: white;
  text-align: center;
  padding: 2rem;
}
.foot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: white;
    text-decoration: none;
  }
}
</style>
