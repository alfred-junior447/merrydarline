# Merry & LUMËA - Site Vitrine

Site vitrine statique, responsive et moderne pour Merry & LUMËA, spécialiste de la décoration de Noël à Lyon.

## Structure du projet

```
merry-lumea/
├── index.html          # Page principale
├── style.css           # Feuille de style
├── script.js           # JavaScript
├── images/             # Dossier des images
│   ├── logo.png        # Logo principal
│   ├── logo-white.png  # Logo pour footer
│   ├── favicon.png     # Favicon
│   ├── hero-image.jpg  # Image de la section Hero
│   ├── about-image.jpg # Image À Propos
│   ├── product-*.jpg   # Images des produits
│   ├── galerie-*.jpg   # Images de la galerie
│   ├── avatar-*.jpg    # Avatars des témoignages
│   ├── og-image.jpg    # Image Open Graph
│   └── placeholder.jpg # Image de fallback
└── README.md           # Ce fichier
```

## Fonctionnalités implémentées

### Sections
- Header avec logo et menu hamburger (responsive)
- Hero avec titre, sous-titre et boutons CTA
- À Propos avec description et caractéristiques
- Produits (10 exemples) avec filtres par catégorie
- Galerie photos (6 images)
- Témoignages clients (4 avis)
- Contact avec formulaire Netlify Forms
- Footer avec réseaux sociaux

### Fonctionnalités
- Bouton WhatsApp flottant
- Boutons "Commander sur WhatsApp" sur chaque produit
- Bouton "Appeler" visible sur mobile
- Animations discrètes au scroll
- Bouton retour en haut de page
- Menu hamburger responsive
- Lightbox pour la galerie
- Filtres de produits
- Validation du formulaire
- Scroll doux
- Design mobile-first responsive

### SEO & Accessibilité
- Balises meta (description, keywords, author)
- Open Graph pour les réseaux sociaux
- Twitter Card
- Favicon
- Balises alt sur toutes les images
- ARIA attributes
- Navigation clavier
- Focus visible
- Reduced motion support

## Personnalisation

### 1. Modifier le numéro WhatsApp

Le numéro de téléphone WhatsApp est utilisé dans plusieurs endroits :
- Bouton WhatsApp flottant (ligne ~15 dans index.html)
- Boutons "Commander" sur les produits (rechercher wa.me/ dans index.html)
- Lien "Appeler" mobile (ligne ~35 dans index.html)

**Remplacer 33612345678 par votre numéro avec indicatif (ex: 33612345678 pour +33 6 12 34 56 78)**

### 2. Modifier les textes
- Titre et description SEO : lignes 10-15 dans index.html
- Texte du Hero : lignes 50-60 dans index.html
- Texte À Propos : lignes 80-100 dans index.html
- Produits : modifier les sections article class=product-card
- Témoignages : modifier les sections div class=testimonial-card
- Contact : modifier les informations dans la section contact

### 3. Modifier les images

Remplacer les fichiers dans le dossier images/ par vos propres images.

### 4. Modifier les couleurs

Les couleurs sont définies dans les variables CSS (style.css, lignes 10-30).

### 5. Modifier la police

La police utilisée est Poppins (Google Fonts).

### 6. Ajouter plus de produits

Dupliquer un bloc article class=product-card et modifier les attributs.

### 7. Configurer Google Maps

1. Obtenir une clé API Google Maps
2. Remplacer YOUR_GOOGLE_MAPS_API_KEY dans index.html
3. Modifier les coordonnées dans script.js

## Déploiement sur Netlify

### Méthode 1 : Drag & Drop
1. Allez sur https://app.netlify.com/
2. Cliquez sur Add new site -> Deploy manually
3. Glissez-déposez le dossier merry-lumea dans la zone
4. Votre site sera disponible à une URL du type https://votre-site.netlify.app

### Méthode 2 : Via GitHub
1. Créez un dépôt GitHub
2. Poussez le code
3. Sur Netlify, importez le dépôt

### Méthode 3 : Via Netlify CLI
1. Installez Netlify CLI
2. Authentifiez-vous
3. Déployez avec netlify deploy

## Configuration Netlify Forms

Le formulaire de contact est configuré pour Netlify Forms. Après le déploiement, allez dans l'onglet Forms de votre site sur Netlify.

## Technologie utilisée

- HTML5
- CSS3
- JavaScript Vanilla
- Google Fonts (Poppins)
- Font Awesome
- Google Maps API
- Netlify Forms

---

## 🎁 Section « Cadeaux par tranche d'âge » (ajoutée le 12 octobre 2026)

25 produits classés en 5 tranches d'âge : **0-3 ans, 4-7 ans, 8-12 ans, 13-17 ans, 18 ans et +**,
avec onglets de filtrage par âge (même mécanique que les filtres produits).

### Analyse des prix (marché français, octobre 2026)
- **PlayStation 5 (disque)** : 649,99 € — prix conseillé Sony depuis avril 2026
- **PS5 Digital Edition** : 599,99 € — prix conseillé
- **Nintendo Switch 2** : 449,99 € affiché (prix conseillé 499,99 €, prix rue ~419 €)
- Autres produits : prix alignés sur les gammes constatées en boutique (jouets 20-50 €,
  jeux/loisirs 30-80 €, tech 80-160 €)

### Crédits photos (licences libres — Wikimedia Commons)
Voir chaque page de fichier pour l'auteur et la licence exacte :
- PlayStation 5 & DualSense : https://commons.wikimedia.org/wiki/File:PlayStation_5_and_DualSense.jpg
- Nintendo Switch 2 : https://commons.wikimedia.org/wiki/File:Nintendo_Switch_2-Konsole_IL_20250606.png
- PlayStation 5 (vue console) : https://commons.wikimedia.org/wiki/File:Playstation_5.jpg
- Casque audio : https://commons.wikimedia.org/wiki/File:Headphones_1.jpg
- Drone : https://commons.wikimedia.org/wiki/File:Quadcopter_Drone.png
- Skateboard : https://commons.wikimedia.org/wiki/File:Horizontal_Skateboard.jpg
- Échiquier : https://commons.wikimedia.org/wiki/File:ChessSet.jpg
- Enceinte Bluetooth : https://commons.wikimedia.org/wiki/File:Bluetooth_Speaker.jpg

> ⚠️ Les cartes affichant « Photo à venir » utilisent un emplacement illustré temporaire.
> Remplacez-les par des photos de vos propres produits avant la mise en production.
