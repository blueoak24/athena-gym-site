# Athéna Gym — Site Vitrine Complet

Ceci est le site vitrine complet d'Athéna Gym, un club d'arts martiaux mixtes (MMA) à Brive-la-Gaillarde.

## 📁 Structure du Projet

```
athena-gym-site/
├── index.html              # Page d'accueil (hero, disciplines, avis, CTA)
├── about.html              # Page À Propos (philosophie, valeurs)
├── team.html               # Page Équipe (présentation des coachs)
├── contact.html            # Page Contact (formulaire + infos)
├── legal.html              # Mentions Légales
├── privacy.html            # Politique de Confidentialité
├── css/
│   └── main.css            # Feuille de styles globale (responsive)
├── js/
│   └── main.js             # Interactivité (formulaire, mobile menu)
├── assets/                 # Dossier pour images et logo
│   ├── logo.png            # Logo Athena (à ajouter)
│   ├── hero-cage.jpg       # Image hero
│   ├── tapis.jpg           # Photo galerie
│   └── salle.jpg           # Photo galerie
└── README.md               # Ce fichier
```

## 🎨 Design & Style

- **Typographie** : Bebas Neue (titres) + Roboto (body)
- **Palette couleurs** :
  - Noir dominant (#1A1A1A, #151515, #242424)
  - Blanc (#FFFFFF)
  - Rouge (#E63946) pour CTAs et accents
  - Bleu (#1D3557) pour certains éléments
- **Ambiance** : Sombre, concentration, discipline (martial)
- **Responsive** : Mobile-first, optimisé desktop
- **Accessibilité** : ARIA labels, structure HTML sémantique

## 🚀 À Faire Avant Déploiement

### 1. Ajouter les Assets

**Images manquantes à placer dans `/assets/` :**
- `logo.png` — Logo Athena (déjà fourni)
- `hero-cage.jpg` — Photo cage de combat (photo existante)
- `tapis.jpg` — Photo tapis (photo existante)
- `salle.jpg` — Photo salle (photo existante)

> **Note** : Dans le code, utilise les chemins `assets/nom-fichier.ext`

### 2. Configurer le Formulaire de Contact

Le formulaire utilise **Formspree** (gratuit, backend simple).

**Étapes :**
1. Créer un compte sur formspree.io
2. Ajouter un nouveau formulaire pour le domaine Athena
3. Copier l'ID du formulaire (ex: `f_xyz123`)
4. Remplacer dans `js/main.js` ligne ~47 :
   ```javascript
   fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```
   par :
   ```javascript
   fetch('https://formspree.io/f/XYZ123', {
   ```
5. Les emails seront envoyés directement à l'adresse de contact

> Alternative : Utiliser un autre service (Basin, Formspark) ou un backend custom

### 3. Google Analytics (SEO & Suivi)

Ajouter le script Google Analytics dans le `<head>` d'index.html (avant `</head>`) :

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Remplacer `G-XXXXXXXXXX` par ton ID Google Analytics (à créer sur google.com/analytics)

### 4. Google Business Profile

Créer une fiche Google Business Profile pour Athena :
- Nom : Athéna Gym
- Adresse : 6 impasse Le Clère, 19100 Brive-la-Gaillarde
- Catégorie : Arts martiaux / Salle de sport
- Horaires : Mardi-vendredi 18h-21h (loisirs 18h-19h30, compétition 19h30-21h)
- Photos : Ajouter photos de la salle
- Avis : Importer les avis Google existants

Lien : https://business.google.com/

### 5. SSL/HTTPS

Netlify fournit automatiquement un certificat SSL gratuit via Let's Encrypt. Rien à faire pour la sécurité.

### 6. Mises à Jour Textes

Vérifier et mettre à jour si nécessaire :
- Email : contact@athena-martial-gym.fr (dans contact.html + legal.html)
- Adresse : 6 impasse Le Clère, 19100 Brive-la-Gaillarde
- Téléphone : 06 18 95 86 57
- Horaires : Mardi-vendredi 18h-21h (loisirs 18h-19h30, compétition 19h30-21h)
- Instagram : @athena_martial_gym
- Facebook : Athéna Gym

## 🌐 Déploiement sur Netlify

### Méthode 1 : GitHub + Netlify (Recommandée)

1. **Créer un repo GitHub** :
   - Créer repo "athena-gym-site" sur github.com
   - Pousser les fichiers : `git push`

2. **Connecter Netlify** :
   - Aller sur netlify.com
   - Cliquer "New site from Git"
   - Sélectionner le repo GitHub
   - Netlify détecte automatiquement la structure
   - Déployer (automatic)

3. **Configurer le domaine** :
   - Acheter un domaine (Namecheap, OVH, etc.)
   - Dans Netlify, ajouter le domaine personnalisé
   - Configurer les DNS pour pointer vers Netlify

### Méthode 2 : Upload Direct (Plus Simple pour Début)

1. **Compresser le dossier** :
   ```bash
   zip -r athena-gym-site.zip athena-gym-site/
   ```

2. **Upload sur Netlify** :
   - Aller sur netlify.com
   - Drag & drop le dossier dans "Deploy manually"
   - Netlify génère une URL temporaire

3. **Domaine personnalisé** :
   - Acheter un domaine
   - Configurer les DNS pour pointer vers Netlify

## 📊 SEO Optimisations

Le site inclut déjà :

✅ Meta descriptions appropriées  
✅ Titres HTML pertinents  
✅ Structure sémantique (H1, H2, sections)  
✅ Responsive design (mobile-first)  
✅ HTTPS/SSL automatique  
✅ Open Graph tags (partage réseaux)  
✅ Alt text sur images  

**À faire en plus :**
- Créer un sitemap.xml (Netlify le génère automatiquement)
- Soumettre le site à Google Search Console
- Configurer Google Analytics
- Configurer Google Business Profile
- Ajouter des microdonnées (schema.org)

## 🔧 Maintenance & Mises à Jour

**Pages à mettre à jour régulièrement :**
- contact.html — Vérifier que le formulaire fonctionne
- team.html — Ajouter/modifier infos des coachs
- index.html — Mettre à jour les avis clients

**Fichiers à ne pas toucher :**
- css/main.css — Gestion du responsive, couleurs
- js/main.js — Logique formulaire, animations
- Structure HTML (structure SEO)

## 📝 Notes Important

- Le site est 100% responsive (mobile, tablette, desktop)
- Aucune dépendance externe (jQuery, Bootstrap) — VanillaJS pur
- Formulaire Formspree prend 10 secondes à configurer
- Google Analytics et Google Business Profile sont gratuits
- Netlify offre déploiement gratuit avec domaine personnalisé

## 📧 Support & Questions

Pour questions, contact Athena :
- 06 18 95 86 57
- Instagram : @athena_martial_gym
- Adresse : 6 impasse Le Clère, 19100 Brive-la-Gaillarde

---

**Site créé** : Septembre 2026  
**Prochaine étape** : Déployer sur Netlify + configurer Formspree + Google Analytics
