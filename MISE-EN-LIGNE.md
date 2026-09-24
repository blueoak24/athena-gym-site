# Checklist de mise en ligne officielle — Athéna Gym

À suivre le jour où le client valide le site. Fichier interne : il renvoie une 404 en ligne (voir `_redirects`).

Astuce : pour retrouver tous les blocs de la maquette, cherche `MAQUETTE-START` dans le projet.

---

## 1. Retirer le mode maquette

- [ ] **Noindex** : supprimer le bloc `MAQUETTE` qui contient `<meta name="robots" content="noindex, nofollow">` dans les 7 pages HTML.
  - ⚠️ Sur `thank-you.html`, **garder** l'ancienne balise `<meta name="robots" content="noindex">`, située hors du bloc : la page merci ne doit jamais être indexée.
- [ ] **Bandeau** « Maquette de démonstration » : supprimer le bloc `MAQUETTE` en haut du `<body>` dans les 7 pages.
- [ ] **CSS** : supprimer le bloc `/* MAQUETTE-START */ … /* MAQUETTE-END */` à la fin de `css/main.css`.
  - Ce bloc contient aussi le positionnement du menu burger mobile (`nav { position: absolute; top: 100%; }`). Ce réglage fonctionne aussi sans le bandeau : il est conseillé de **le garder** en le sortant du bloc, puis de retester le burger sur mobile.
- [ ] **Formulaire** : supprimer la mention de démonstration au-dessus du bouton d'envoi dans `contact.html`.
- [ ] **Page merci** (`thank-you.html`) : dans les 3 blocs `MAQUETTE` (meta description, og:description, titre + sous-titre), remettre le texte d'origine indiqué en commentaire, puis supprimer les blocs.
- [ ] **Mentions légales** : supprimer la phrase « Ce site est une maquette de démonstration réalisée par Baptiste Mege… ».
- [ ] **`_headers`** : supprimer le bloc `/*` avec `X-Robots-Tag: noindex, nofollow`. **Garder** les règles de cache (`/fonts/*`, `/assets/*`, `/css/*`, `/js/*`).
- [ ] Vérifier qu'il ne reste plus aucun `MAQUETTE` dans le projet.

## 2. Domaine définitif

- [ ] Acheter le domaine (ou récupérer celui du client) et le brancher sur Netlify (Domain management), HTTPS compris.
- [ ] Rediriger `athena-gym.netlify.app` vers le domaine définitif (Netlify le fait automatiquement une fois le domaine principal défini).
- [ ] **Canonical** : ajouter une balise `<link rel="canonical" href="https://DOMAINE/…">` dans chaque page, à la place du commentaire laissé dans `index.html`, et l'ajouter aussi dans les autres pages (sauf `thank-you.html`, qui reste en noindex).
- [ ] **og:url** et **og:image** : remplacer `https://athena-gym.netlify.app` par le domaine définitif dans les 7 pages.
- [ ] **JSON-LD** (6 pages) : mettre à jour `"url"` et `"image"` avec le domaine définitif.
- [ ] **`sitemap.xml`** : mettre à jour toutes les `<loc>`.
  - Choisir un seul format d'URL et l'utiliser partout. Aujourd'hui, le sitemap utilise `/about.html` alors que og:url utilise `/about`.
- [ ] **`robots.txt`** : mettre à jour la ligne `Sitemap:` avec le domaine définitif.

## 3. Informations légales au nom du client

- [ ] **Mentions légales** (`legal.html`) : raison sociale exacte, forme juridique, SIRET, nom du responsable ou directeur de la publication (le client, et non plus Baptiste Mege), e-mail de contact.
- [ ] Ajouter si besoin la mention du créateur du site (« Site réalisé par … »), hors bloc maquette.
- [ ] **Politique de confidentialité** (`privacy.html`) : responsable du traitement au nom du client, e-mail pour exercer ses droits, date de mise à jour.
- [ ] Mettre à jour les dates « Dernière mise à jour : septembre 2026 » (mentions légales et confidentialité).

## 4. Formulaire de contact

- [ ] Le formulaire envoie actuellement vers Formspree (`https://formspree.io/f/mwlpkywj`, dans `contact.html` **et** `js/main.js`). Créer un formulaire Formspree relié à l'e-mail du client (ou transférer celui-ci sur son compte), puis remplacer l'identifiant aux deux endroits.
- [ ] Envoyer un message de test et vérifier la réception et la redirection vers `thank-you.html`.
- [ ] Vérifier que les options du menu déroulant (cours proposés) sont toujours à jour.

## 5. Adresse e-mail professionnelle

- [ ] Créer une vraie adresse sur le domaine (ex. `contact@DOMAINE`).
- [ ] L'ajouter dans les mentions légales, la politique de confidentialité, éventuellement la page contact, et dans le JSON-LD (`"email"`).
- [ ] Mettre à jour le `README.md`.

## 6. Nettoyage des fichiers

- [ ] Supprimer `assets/hero-cage.webp`, qui n'est plus utilisée (remplacée par `hero-cage-desktop.webp` et `hero-cage-mobile.webp`).
- [ ] Mettre à jour le `README.md`, qui est en partie obsolète (il mentionne `logo.png`, des images en `.jpg`, un identifiant Formspree `YOUR_FORM_ID`, un sitemap « à créer »…).
- [ ] Mettre à jour le commentaire d'en-tête de `js/main.js` et `css/main.css` (« ATHENA MARTIAL GYM »).
- [ ] Garder `_redirects` pour que les fichiers internes (`README.md`, `MISE-EN-LIGNE.md`…) restent inaccessibles en ligne.
- [ ] Optionnel : créer une page `404.html` aux couleurs du site (Netlify l'utilisera automatiquement, y compris pour les règles de `_redirects`).

## 7. Contenus à faire valider par le client

- [ ] **Équipe** (`team.html`) : noms, spécialités et textes des 3 coachs. Remplacer les emojis (🥋 💪 🛡️) par de vraies photos.
- [ ] **Programme** : descriptions courtes des 6 disciplines et des valeurs « Maîtrise de soi » et « Entraide », rédigées pour la maquette.
- [ ] **Horaires et offre** : mardi–vendredi 18h–21h, créneaux 18h–19h30 / 19h30–21h, « 1 semaine d'essai gratuite ».
- [ ] **Histoire** : « Depuis 2024 » (page À propos).
- [ ] **Avis Google** : les durées « il y a 7 mois / 1 mois » vieillissent ; vérifier aussi la mention « 5 étoiles en moyenne ».
- [ ] **Réseaux sociaux** : vérifier que les liens Instagram (`@athena_martial_gym`) et Facebook (`facebook.com/athena-martial-gym`) pointent vers les bons comptes.
- [ ] **Nom** : confirmer « Athéna Gym » et décider si on garde `"alternateName": "Athena Martial Gym"` dans le JSON-LD.
- [ ] **Tarifs** : le JSON-LD indique `"priceRange": "€"` mais aucun tarif n'est affiché ; ajouter les tarifs ou vérifier que c'est cohérent.

## 8. Référencement et outils

- [ ] Google Search Console : ajouter le domaine, soumettre le sitemap, demander l'indexation de l'accueil.
- [ ] Google Business Profile : ajouter le lien vers le site et vérifier que les horaires sont les mêmes (18h–21h).
- [ ] Bing Webmaster Tools (optionnel).
- [ ] Si Google Analytics (ou un autre outil de mesure) est ajouté : prévoir un bandeau de consentement aux cookies (RGPD) et le mentionner dans la politique de confidentialité.
- [ ] Image de partage : `og:image` utilise le logo sur plusieurs pages, alors que `twitter:card` est en `summary_large_image`. Prévoir une image de partage au format 1200×630.

## 9. Vérifications finales

- [ ] PageSpeed Insights (mobile et ordinateur).
- [ ] Test des résultats enrichis Google (JSON-LD) : https://search.google.com/test/rich-results
- [ ] Aperçu de partage (Facebook Sharing Debugger, LinkedIn Post Inspector).
- [ ] En-têtes en ligne : plus de `X-Robots-Tag: noindex` sur les pages, cache toujours actif sur `/fonts/` et `/assets/`.
- [ ] `https://DOMAINE/README.md` et `https://DOMAINE/MISE-EN-LIGNE.md` renvoient bien une 404.
- [ ] Menu burger, formulaire, liens téléphone et Instagram testés sur un vrai téléphone.
