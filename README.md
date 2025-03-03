# intgartion-web

## Description
**intgartion-web** est un projet web utilisant **Tailwind CSS** pour un design moderne et réactif. Ce projet comprend une configuration personnalisée de Tailwind avec des couleurs, des polices et des tailles adaptées.

## Configuration du projet

### Fichiers principaux :
- **tailwind.config.js** : Configuration de Tailwind CSS avec des couleurs et des polices personnalisées.
- **package.json** : Gestionnaire des dépendances et scripts d'exécution.
- **./src/input.css** : Fichier d'entrée contenant les styles personnalisés.
- **./public/style.css** : Fichier de sortie généré après compilation.

## Installation

1. **Cloner le projet**
```sh
 git clone https://github.com/sakerhajji/IntegartionWeb.git
```

2. **Naviguer dans le dossier du projet**
```sh
 cd intgartion-web
```

3. **Installer les dépendances**
```sh
 npm install
```

## Utilisation

### Génération des styles avec Tailwind CSS

1. **Lancer le build en mode watch** (pour générer automatiquement les styles lors des modifications) :
```sh
 npm run build
```

2. **Vérifier les fichiers générés** :
   - `./public/style.css` contiendra les styles transformés.

### Personnalisation de Tailwind CSS
Vous pouvez modifier `tailwind.config.js` pour :
- Ajouter de nouvelles couleurs dans `extend.colors`
- Changer les polices dans `extend.fontFamily`
- Modifier la taille des polices dans `extend.fontSize`

## Scripts disponibles

- **`npm run build`** : Compile les styles Tailwind CSS en temps réel.
- **`npm test`** : Script par défaut (non configuré pour le moment).

## Technologies utilisées
- **Tailwind CSS**
- **Node.js** & **npm**

## Auteurs
- **Saker Hajji**
- **Sofienne Mrabet**
- **Hachem Dhawadi**
- **Abidi Jasser**
- **Mokhles Benna**

## Licence
Ce projet est sous licence **ISC**.

## Contribution
Les contributions sont les bienvenues ! Vous pouvez ouvrir une issue ou proposer une pull request sur le dépôt GitHub.

---

🚀 **Bon développement !**

