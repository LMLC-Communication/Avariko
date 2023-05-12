<template>
  <div>
    <div class="heros">
      <img src="@/assets/images/CROSSFIT_AVARIKO-012.webp" alt="" />
      <h1>Horaires et tarifs</h1>
    </div>
    <main>
      <article>
        <!-- <h1>Horaires et localisation</h1> -->
        <h2 data-aos="fade">HORAIRES</h2>
        <div class="card__list">
          <div class="card" data-aos="zoom-in">
            <h4>Cours adultes</h4>
            <p>
              Lundi à vendredi<br />
              9H - 10H - 12H15 - 17H30 - 18H30 - 19H30<br />
              <br />
              Samedi<br />
              9H - 10H - 11H
            </p>
          </div>
          <div class="card" data-aos="zoom-in">
            <h4>Cours Enfants</h4>
            <p>
              KIDS (5 À 10 ANS)<br />
              MERCREDI ET SAMEDI<br />
              9H<br />
              <br />
              TEENS (À PARTIR DE 11 ANS)<br />
              Mercredi - 17H30<br />
              Samedi - 10H
            </p>
          </div>
        </div>
        <h2 data-aos="fade">SÉANCES</h2>
        <div class="card__list">
          <div class="card" data-aos="zoom-in">
            <h5 class="title">1 séance</h5>
            <p><span>18€</span> / séance</p>
          </div>
          <div class="card" data-aos="zoom-in">
            <h5 class="title">10 séances</h5>
            <div class="discount">20€ d'économie</div>
            <p><span>160€</span> / les 10 séances</p>
          </div>
        </div>
        <h2 data-aos="fade">ABONNEMENTS</h2>
        <div class="card__list">
          <div class="card" data-aos="zoom-in">
            <h5 class="title">3 mois - 3 séances par semaine</h5>
            <p><span>85€</span> / mois</p>
          </div>
          <div class="card" data-aos="zoom-in">
            <h5 class="title">3 mois - 4 séances par semaine</h5>
            <p><span>95€</span> / mois</p>
          </div>
          <div class="card" data-aos="zoom-in">
            <h5 class="title">3 mois - illimité</h5>
            <p><span>105€</span> / mois</p>
          </div>
        </div>
        <p data-aos="fade">FRAIS DE CRÉATION DE COMPTE : <span>45€</span></p>
        <h2 data-aos="fade">COACHING PERSONNEL</h2>
        <div class="card__list">
          <div class="card" data-aos="zoom-in">
            <h5 class="title">1 séance</h5>
            <p><span>75€</span> / séance</p>
          </div>
          <div class="card" data-aos="zoom-in">
            <h5 class="title">4 séances</h5>
            <div class="discount">100€ d'économie</div>
            <p><span>200€</span> / les 4 séances</p>
          </div>
        </div>
        <h2 data-aos="fade">KIDS (5 – 10 ANS)</h2>
        <div class="card__list">
          <div class="card" data-aos="zoom-in">
            <h5 class="title">1 séance</h5>
            <p><span>8€</span> / séance</p>
          </div>
          <div class="card" data-aos="zoom-in">
            <h5 class="title">1 mois</h5>
            <p><span>20€</span> / mois</p>
          </div>
        </div>
        <h2 data-aos="fade">TEENS (11 – 16 ANS)</h2>
        <div class="card__list">
          <div class="card" data-aos="zoom-in">
            <h5 class="title">1 séance</h5>
            <p><span>12€</span> / séance</p>
          </div>
          <div class="card" data-aos="zoom-in">
            <h5 class="title">1 mois</h5>
            <p><span>45€</span> / mois</p>
          </div>
        </div>
      </article>
    </main>
  </div>
</template>

<script>
useHead({
  title: 'Avariko Athletics - Horaires et tarifs',
  meta: [
    {
      name: 'description',
      content:
        "Découvrez les horaires et les tarifs d'Avariko Athletics. Nous offrons des cours pour adultes, enfants et adolescents, ainsi que du coaching personnel. Profitez de nos tarifs compétitifs et de nos séances à l'unité ou en abonnement.",
    },
  ],
});
export default {
  methods: {
    initParallax() {
      const heroImage = document.querySelector('.heros img');
      if (heroImage) {
        const parallaxFactor = 0.3;
        const smoothingFactor = 0.3; // Augmenter cette valeur pour accélérer l'animation

        let targetOffset = 0;
        let currentOffset = 0;

        const updateParallax = () => {
          currentOffset += (targetOffset - currentOffset) * smoothingFactor;
          heroImage.style.transform = `translateY(-50%) translateY(${currentOffset}px)`;
          requestAnimationFrame(updateParallax);
        };

        window.addEventListener('scroll', () => {
          const scrollPosition = window.pageYOffset;
          targetOffset = scrollPosition * parallaxFactor;
        });

        requestAnimationFrame(updateParallax);
      } else {
        setTimeout(() => {
          this.initParallax();
        }, 200);
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.initParallax();
      }, 500);
    });
  },
};
</script>

<style lang="scss" scoped>
.heros {
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

.card__list {
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-between;
  gap: 30px;
  margin: 0 -10px;
}
.card {
  background: rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(2px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 10px;
  padding: 30px;
  position: relative;
}
article {
  h2 {
    margin-bottom: 10px;
    font-size: 60px;
  }
  h4 {
    text-transform: uppercase;
    font-size: 28px;
    margin: 0;
  }
  h5 {
    font-size: 14px;
    margin: 0;
    font-style: italic;
  }
  .discount {
    position: absolute;
    top: 30px;
    right: 30px;
    color: $primary;
  }
  .card {
    p {
      font-style: normal;
      font-size: 16px;
      padding-top: 40px;
      margin: 0;
      span {
        font-size: 80px;
        color: #fff;
      }
    }
  }
  > p {
    margin-top: 50px;
    font-size: 16px;
    span {
      color: #fff;
      font-size: 30px;
    }
  }
}

@media screen and (max-width: 768px) {
  article {
    h2 {
      font-size: 40px;
    }
    h4 {
      font-size: 20px;
    }
    h5 {
      font-size: 12px;
    }
    .card {
      p {
        font-size: 14px;
        span {
          font-size: 60px;
        }
      }
    }
    > p {
      font-size: 14px;
      span {
        font-size: 20px;
      }
    }
  }
}
</style>
