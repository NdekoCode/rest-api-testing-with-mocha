# This dans les controllers

Il n'y a aucun moyen de prendre en charge les "classes ES2015" lors du routage, ceci est au niveau de JavaScript. Lorsque vous appelez une fonction, cela est défini à la valeur laissée par la fonction au moment de l'appel. Dans ce cas, ce sera indéfini. Ce que vous devez faire, c'est éviter d'utiliser ce paramètre lorsque vous n'avez aucun contrôle sur l'endroit où la fonction est exécutée, ou lier vous-même le contexte de la méthode.
