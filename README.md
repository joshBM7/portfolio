# Modern Portfolio

Un portfolio professionnel moderne avec une sidebar, un thème sombre, et des animations fluides. Développé avec React, TypeScript, Tailwind CSS et Framer Motion.

## 🚀 Fonctionnalités

- **Design Moderne** : Interface élégante avec thème sombre
- **Responsive** : Adapté à tous les appareils
- **Animations Fluides** : Animations avec Framer Motion
- **Multilingue** : Support français et anglais
- **Téléchargement CV** : Possibilité de télécharger le CV directement
- **Navigation Intuitive** : Sidebar pour une navigation facile
- **Projets Présentés** : Section dédiée aux projets avec descriptions détaillées

## 🛠️ Technologies Utilisées

- **Frontend** : React 18, TypeScript
- **Styling** : Tailwind CSS
- **Animations** : Framer Motion
- **Build Tool** : Vite
- **Icons** : Lucide React
- **Linting** : ESLint

## 📦 Installation

1. Clonez le repository :
```bash
git clone https://github.com/joshBM7/modern-portfolio.git
cd modern-portfolio
```

2. Installez les dépendances :
```bash
pnpm install
```

3. Lancez le serveur de développement :
```bash
pnpm dev
```

4. Ouvrez votre navigateur à l'adresse `http://localhost:5173`

## 📜 Scripts Disponibles

- `pnpm dev` : Lance le serveur de développement
- `pnpm build` : Construit l'application pour la production
- `pnpm preview` : Prévisualise la version de production
- `pnpm lint` : Vérifie le code avec ESLint

## 📁 Structure du Projet

```
src/
├── components/          # Composants React
│   ├── About.tsx       # Section À propos
│   ├── Contact.tsx     # Formulaire de contact
│   ├── Education.tsx   # Parcours éducatif
│   ├── Home.tsx        # Page d'accueil
│   ├── Projects.tsx    # Section projets
│   ├── Skills.tsx      # Compétences
│   ├── Sidebar.tsx     # Navigation latérale
│   └── ThemeToggle.tsx # Basculement thème
├── context/            # Contextes React
│   ├── LanguageContext.tsx
│   └── ThemeContext.tsx
├── lib/               # Utilitaires
└── main.tsx          # Point d'entrée
```

## 🎨 Personnalisation

### Thèmes
Le portfolio supporte le mode sombre par défaut. Vous pouvez modifier les couleurs dans `tailwind.config.js`.

### Langues
Le portfolio est disponible en français et anglais. Les traductions sont gérées dans `src/context/LanguageContext.tsx`.

### Contenu
- Modifiez les informations personnelles dans les composants appropriés
- Ajoutez vos projets dans `src/components/Projects.tsx`
- Mettez à jour vos compétences dans `src/components/Skills.tsx`
- Remplacez le CV dans le répertoire racine

## 📄 Licence

Ce projet est sous licence MIT.

## 👤 Auteur

**Joshua Bayonne**
- GitHub: [@joshBM7](https://github.com/joshBM7)
- LinkedIn: [Joshua Bayonne](https://www.linkedin.com/in/joshua-bayonne/)
- Email: joshuabayonne738@gmail.com

---

⭐ Si ce projet vous plaît, n'hésitez pas à lui donner une étoile !
