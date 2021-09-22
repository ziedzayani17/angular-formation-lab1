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

**Modifier MovieComponent pour ajouter les attributs d'un film**

<br>

```js
  //votes: number;
  upVote: number;
  downVote: number;
  name: string;
  pays: string;
  category: string;
  description: string;
  releaseDate: Date;

  constructor() { 
    this.upVote = 4;
    this.downVote = 2;
    this.name = "The Matrix";
    this.pays = "US";
    this.category = "SF/Action"
    this.description = "Programmeur anonyme dans un service administratif le jour, Thomas Anderson devient Neo la nuit venue. Sous ce pseudonyme, il est l'un des pirates les plus recherchés du cyber-espace";
    this.releaseDate = new Date("1999-03-31");
  }

  voteUp() {
    this.upVote += 1;
  }
    
  voteDown() {
   this.downVote += 1;
  }

```


**Utiliser les attributs pour afficher les détails + événement pour modifier les attributs**

<br>

```html
<div style="    margin-top: 20px;margin-left: auto;margin-right: auto;width: 50%;"class="ui teal segment">
    <a class="ui red ribbon label">{{name}}</a>
    <span><strong>{{ category }} </strong></span>
<div  class="four wide column center aligned votes">
    <div style="margin: 2em;" class="ui teal circular segment">
        <div class="value">
            {{ upVote - downVote }}
        </div>
        <div class="label">
            Points
        </div>
    </div>
    
<div class="twelve wide column">
    <span class="ui large header">
      Description :   
    </span><p>{{ description }}</p>
    <h5 class="ui header">Date sortie : {{releaseDate}}</h5> 


    <div style="float: right;">
        <div  class="ui labeled button" tabindex="0">
            <div class="ui primary button" (click)="voteUp()" >
            <i class="hand point up icon"></i> J'aime
            </div>
            <a class="ui basic label">
            {{ upVote }}
            </a>
        </div>

        <div class="ui labeled button" tabindex="0">
            <div class="ui secondary button" (click)="voteDown()">
            <i class="hand point down icon"></i> Je n'aime pas
            </div>
            <a class="ui basic label">
            <p [textContent]="downVote"></p>
            </a>
        </div>
    </div>

</div>
</div>
```


