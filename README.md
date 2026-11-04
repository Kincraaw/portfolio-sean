# Portfolio — Sean

Mon portfolio personnel : présentation, compétences, projets et CV.

Construit avec **Next.js 16**, **React 19**, **TypeScript** et **Tailwind CSS 4**.

## Fonctionnalités

- Version française et anglaise (`/fr`, `/en`), langue détectée automatiquement
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
├── app/[lang]/          # Pages, dans chaque langue (accueil, compétences, projets)
├── i18n/                # Langues : config + textes de l'interface (dictionaries.ts)
├── proxy.ts             # Redirige « / » vers /fr ou /en
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

Ajoute un bloc dans `src/data/projects.ts` (textes en `fr` et `en`) et liste ses
compétences dans `skills` (ex. `["react", "typescript"]`) : il apparaît
automatiquement dans la section Projets et sur la page de chaque compétence.

### Modifier un texte

- Textes de l'interface (titres, boutons…) : `src/i18n/dictionaries.ts`
- Contenu (projets, compétences, parcours) : `src/data/`

### Changer les couleurs

Les couleurs des deux thèmes sont définies dans `src/app/globals.css`.
