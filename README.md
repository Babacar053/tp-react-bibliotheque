# TP React 2 : Gestion de catalogue de livres

Petite application React (Vite) pour gérer le catalogue d'une bibliothèque universitaire.

Cours : React JS - Mme Aicha DIAGNE

## Ce que fait l'application

- Affiche une liste de livres avec leur titre, leur auteur et leur statut (Disponible / Emprunté)
- Le titre principal indique le nombre de livres disponibles
- Le bouton "Emprunter" / "Rendre" change le statut du livre
- Un formulaire permet d'ajouter un nouveau livre

## Ce que j'ai utilisé

- Composant `BookCard` avec des props (titre, auteur, estDisponible, onClickEmprunt)
- Affichage conditionnel (statut et texte du bouton)
- `.map()` avec `key` pour afficher la liste
- Hook `useState` (liste des livres + champs du formulaire)
- Formulaire avec champs contrôlés et `onSubmit`

## Structure

```
src/
├── components/
│   └── BookCard.jsx
├── App.jsx
└── main.jsx
```

## Lancer le projet

```bash
npm install
npm run dev
```

Puis ouvrir le lien affiché dans le terminal (souvent http://localhost:5173).
