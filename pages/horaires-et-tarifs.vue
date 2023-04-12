<template>
  <div>
    <div class="hero">
      <img src="@/assets/images/CROSSFIT AVARIKO-012.jpg" alt="" />
    </div>
    <main>
      <article>
        <!-- <h1>Horaires et localisation</h1> -->
        <h2>HORAIRES :</h2>

        <p>
          Adultes<br />
          Du lundi au Vendredi<br />
          Cours à 9h, 10h, 12h15, 17h30, 18h30 et 19h30<br />
          Samedi <br />
          Cours à 9h, 10h, 11h<br />
          <br />
          Enfants<br />
          Kids (5 à 10 ans)<br />
          Cours le Mercredi et samedi à 9h <br />
          Teens (à partir de 11 ans)<br />
          Cours le mercredi à 17h30 et le samedi à10h<br />
          <br />
          TARIFS <br />
          La séance : 18€ <br />
          Carnet de 10 séances : 160€ <br />
          Abonnements* : <br />
          ➢ 3 mois – 3 séances / semaines : 85€ / mois <br />
          ➢ 3 mois – 4 séances / semaines : 95€ / mois <br />
          ➢ 3 mois – Illimité : 105€ / mois <br />
          Frais de création de compte : 45€ <br />
          Coaching personnel : <br />
          ➢ La séance : 75€ <br />
          ➢ Pack de 4 séances : 200€ <br />
          Kids (5 – 10 ans) : ➢ La séance : 8€ <br />
          ➢ Abonnement : 20€ / mois <br />
          Teens (11 – 16 ans) : ➢ La séance : 12€<br />
          ➢ Abonnement : 45€ / moi<br />
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
