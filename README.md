# LAB 1
## _Les points à voir :_

- Création d'un projet Angular
- Comprendre l'arborescence du projet 
- Installer les dépendences
- Lancer l'application
- Création d'un composant
- Utilisation de DATABINDING


## Création d'un projet Angular

création d'un projet Angular via Angular CLI. 
**Lancer la commande:**
```sh
ng new angular-formation
```
 
**Installation des dépendences:**
```sh
npm i
```

**Lancer l'application**
```sh
ng serve
```
> Avec cette commande, Angular va lancer l'application sur le port 4200.

**Vous pouvez utiliser un autre port avec cette commande:**
```sh
 ng serve --port 9001
```

**Intégration Semantic UI**
```sh
npm i --save semantic-ui-css
```
> Pour ajouter Semantic UI dans le projet, ouvrir le fichier angular.json et ajouter cette ligne *"node_modules/semantic-ui-css/semantic.min.css"* dans le bloc *styles* 
>
>

**Création d'un nouveau composant**
```sh
ng generate component movie
```

> Voir le code pour l'implémentation
>
>

