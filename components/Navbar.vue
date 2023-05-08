<template>
  <header>
    <nav>
      <!-- <nuxt-link to="/">
        <img src="~/assets/images/logo_$white.svg" alt="Nuxt Logo" />
      </nuxt-link> -->
      <nuxt-link to="/" class="menu_title">
        <img src="@/assets/images/logo.svg" alt="Nuxt Logo" class="logo" />
        <span>
          AVARIKO<br />
          ATHLETICS
        </span>
      </nuxt-link>
      <ul v-if="menuOpen || innerWidth > 768" class="menu" @click="toggleMenu">
        <li>
          <nuxt-link to="/">Qui sommes-nous</nuxt-link>
          <ul>
            <li>
              <nuxt-link to="/#philosophie">Philosophie</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/#mission">Notre mission</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/#qui">Pour qui ?</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/#salle">La salle</nuxt-link>
            </li>
          </ul>
        </li>
        <li>
          <nuxt-link to="/coachs">Les coachs</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/offre">Notre offre</nuxt-link>
          <ul>
            <li>
              <nuxt-link to="/offre#assessment">L’assessment : l’évaluation corporelle</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/offre#programme">Le programme</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/offre#temoignage">Témoignage</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/offre#seminaire">Seminaire</nuxt-link>
            </li>
          </ul>
        </li>
        <li>
          <nuxt-link to="/horaires-et-tarifs">Horaires et tarifs</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact">Contactez-nous</nuxt-link>
        </li>
      </ul>
      <div class="burger" @click="toggleMenu">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      menuOpen: false,
      innerWidth: 0,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
  mounted() {
    this.innerWidth = window.innerWidth;
    window.addEventListener('resize', () => {
      this.innerWidth = window.innerWidth;
      if (this.innerWidth > 768) {
        this.menuOpen = false;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
$navbar-height: 90px;
$white: #fff;
$black: #000;

.menu_title {
  font-size: 20px;
  color: $white;
  text-decoration: none;
  display: flex;
  padding: 20px 0;
  // color: $primary;
  img {
    height: 50px;
    width: 90px;
  }
  span {
    display: block;
    text-align: center;
  }
}
header {
  z-index: 10;
  display: inline-block;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
nav {
  display: flex;
  align-items: center;
  padding: 0 20px;
  background-color: $black;
  max-width: 100vw;
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
    width: 140px;
  }
  ul {
    margin-right: 20px;
    display: flex;
    list-style: none;
    > li {
      margin-right: 30px;
      > a {
        color: $white;
        text-decoration: none;
        font-size: 16px;
        &:hover {
          color: $primary;
        }
      }
      position: relative;
      > ul {
        border-radius: 20px;
        z-index: 100;
        position: absolute;
        top: 100%;
        left: -20px;
        padding: 33px 0 0 0;
        pointer-events: none;
        opacity: 0;
        list-style: none;
        background-color: $black;
        transition: opacity 0.2s ease;
        display: flex;
        flex-direction: column;
        width: max-content;
        > li {
          margin: 0;
          width: 100%;
          &:last-child > a {
            padding-bottom: 10px;
            border-radius: 0 0 20px 20px;
          }
          > a {
            padding: 8px 20px;
            color: $white;
            display: block;
            text-decoration: none;
            &:hover {
              color: $white;
            }
          }
        }
      }
      &:hover {
        > ul {
          opacity: 1;
          pointer-events: auto;
          > li a {
            transition: background-color 0.2s ease;
          }
          > li a:hover {
            background-color: $primary;
          }
        }
      }
    }
  }
}

.burger {
  display: none;
  cursor: pointer;
  div {
    width: 30px;
    height: 3px;
    background-color: $white;
    margin: 6px 0;
    transition: 0.4s;
  }
}

@media screen and (max-width: 768px) {
  // .menu_title {
  //   span {
  //     font-size: 20px;
  //   }
  // }
  nav {
    justify-content: space-between;
    > ul.menu {
      padding: 0;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      height: 100vh;
      width: 100vw;
      background-color: $black;
      z-index: 100000000;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
      text-align: center;
      margin: 0;
      font-weight: bold;
      > li {
        padding: 0;
        margin-top: 10px;
        margin-right: 0;
        > a {
          font-size: 20px;
        }
        ul {
          padding: 0;
          margin: 0 auto;
          position: static;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0;
          opacity: 1;
          text-align: center;
          font-weight: normal;
        }
      }
    }
  }
  ul ul {
    display: none !important;
  }
  .burger {
    display: block;
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
