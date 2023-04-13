<template>
  <header>
    <nav>
      <!-- <nuxt-link to="/">
        <img src="~/assets/images/logo_white.svg" alt="Nuxt Logo" />
      </nuxt-link> -->
      <nuxt-link to="/" class="menu_title">
        <img src="@/assets/images/logo_white.svg" alt="Nuxt Logo" class="logo" />
        <span>
          AVARIKO<br />
          ATHLETICS
        </span>
      </nuxt-link>
      <ul>
        <li>
          <nuxt-link to="/">Qui Sommes Nous</nuxt-link>
          <ul>
            <li>
              <nuxt-link to="/#philosophie">Philosophie</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/#mission">Notre mission</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/#qui">Pour qui?</nuxt-link>
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
              <nuxt-link to="/offre#temoignage">Témoignage</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/offre#seminaire">Seminaire</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/offre#programme">Le programme</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/offre#assessment">L’assessment : l’évaluation corporelle</nuxt-link>
            </li>
          </ul>
        </li>
        <li>
          <nuxt-link to="/horaires-et-tarifs">Horaires et tarifs</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact">Contactez nous</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style lang="scss" scoped>
$navbar-height: 90px;
.menu_title {
  font-size: 20px;
  color: white;
  text-decoration: none;
  display: flex;
  padding: 20px 0;
  color: $primary;
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
    width: 140px;
  }
  ul {
    margin-right: 20px;
    display: flex;
    list-style: none;
    > li {
      margin-right: 30px;
      > a {
        color: white;
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
        background-color: black;
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
            color: white;
            display: block;
            text-decoration: none;
            &:hover {
              color: white;
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

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
