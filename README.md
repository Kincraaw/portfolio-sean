# Portfolio — Sean

Mon portfolio personnel : présentation, compétences, projets et CV.

Construit avec **Next.js 16**, **React 19**, **TypeScript** et **Tailwind CSS 4**.

## Fonctionnalités

- Thème clair (lavande) et sombre (noir bleuté), avec transition animée
- Atome animé présentant mes centres d’intérêt
- Une page dédiée par compétence, listant les projets liés
- Aperçu et téléchargement du CV

## Lancer le projet

```bash
npm install
npm run dev      # serveur de développement → http://localhost:3000
npm run build    # build de production
npm run lint     # vérification du code
```

## Structure

```
src/
├── app/                 # Routes Next.js (accueil, /competences/[slug])
├── components/
│   ├── layout/          # Navbar, Footer
│   ├── sections/        # Sections de la page d'accueil
│   └── ui/              # Petits composants réutilisables
└── data/                # Contenu du site (à modifier ici)
    ├── site.ts          # Nom, email, réseaux, chemin du CV
    ├── skills.ts        # Compétences
    ├── projects.ts      # Projets
    └── interests.ts     # Centres d'intérêt
```

### Ajouter un projet

Ajoute un bloc dans `src/data/projects.ts` et liste ses compétences dans `skills`
(ex. `["react", "typescript"]`) : il apparaît automatiquement sur la page de
chaque compétence concernée.

### Changer les couleurs

Les couleurs des deux thèmes sont définies dans `src/app/globals.css`.
