# Projet Avariko - Nuxt 3

Ce README vous guidera à travers l'installation et le lancement du projet Avariko basé sur Nuxt 3 en local.

## Prérequis

- Node.js (>=14)
- Yarn ou npm (Yarn est recommandé)

## Étapes d'Installation

1. **Clonez le dépôt**

   ```sh
   git clone https://github.com/LMLC-Communication/Avariko.git
   cd Avariko
   ```

2. **Installez les dépendances**

   Utilisez Yarn ou npm pour installer les dépendances du projet.

   Avec Yarn:
   
   ```sh
   yarn install
   ```

   Ou avec npm:
   
   ```sh
   npm install
   ```

3. **Configuration de l'environnement**

   Copiez le fichier `.env.example` et renommez-le en `.env`. Mettez à jour les variables d'environnement si nécessaire.

   ```sh
   cp .env.example .env
   ```

## Lancer le Projet

Après avoir installé les dépendances et configuré l'environnement, vous pouvez lancer le projet en mode développement.

Avec Yarn:

```sh
yarn dev
```

Ou avec npm:

```sh
npm run dev
```

Ouvrez votre navigateur et accédez à [http://localhost:3000](http://localhost:3000). Vous devriez voir votre application Avariko s'exécuter.

## Construire pour la Production

Pour construire l'application pour la production, utilisez la commande suivante:

Avec Yarn:

```sh
yarn build
```

Ou avec npm:

```sh
npm run build
```

Après la construction, vous pouvez lancer le serveur de production avec:

Avec Yarn:

```sh
yarn start
```

Ou avec npm:

```sh
npm run start
```

## Conclusion

Vous avez maintenant installé et lancé avec succès le projet Avariko en local. Pour plus d'informations sur Nuxt 3, consultez la [documentation officielle](https://v3.nuxtjs.org/).
