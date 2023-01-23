<template>
  <nav>
    <nuxt-link to="/">
      <img src="~/assets/images/logo_white.svg" alt="Nuxt Logo" />
    </nuxt-link>
    <ul>
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">About</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style lang="scss" scoped>
nav {
  z-index: 10;
  position: absolute;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  left: 0;
  right: 0;
  top: 0;
  background-color: black;
  a {
    animation: fade 2s;
  }
  > a {
    transition: transform 0.1s ease;
    &:hover {
      transform: scale(1.1);
    }
  }
  img {
    width: 120px;
  }
  ul {
    margin-right: 20px;
    display: flex;
    list-style: none;
    li {
      margin-left: 20px;
      a {
        color: white;
        text-decoration: none;
        font-size: 1.6rem;
        &:hover {
          color: #ff0080;
        }
      }
    }
  }
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
