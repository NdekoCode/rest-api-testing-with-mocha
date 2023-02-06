# This dans les controllers

Il n'y a aucun moyen de prendre en charge les "classes ES2015" lors du routage, ceci est au niveau de JavaScript. Lorsque vous appelez une fonction, cela est défini à la valeur laissée par la fonction au moment de l'appel. Dans ce cas, ce sera indéfini. Ce que vous devez faire, c'est éviter d'utiliser ce paramètre lorsque vous n'avez aucun contrôle sur l'endroit où la fonction est exécutée, ou lier vous-même le contexte de la méthode.

## Quelques conseils et astuces sur les tests

Avant de tester, c'est une bonne pratique d'effacer d'abord la base de donnée donc il faut toujours avoir une base de donnée pour les test et une autre pour le developpement et enfin une pour la production et pour cela j'ai utiliser les fonction `before`,`after`, `beforeEach` et `afterEach` de `mocha`

## Ressources utiles

- `npm install` : for installing dependancies
- `npm start` : for running the server at <http://localhost:4000/api/v1>
- `npm test`: for running test
-
- DOCUMENTATION WITH SWAGGER IS: `npm start` : for running the docs link at <http://localhost:4000/api/v1/docs>
