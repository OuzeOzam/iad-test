# Retour sur le test

A l'origine, ce test devait être effectué en 2 ou 3 heures. 

Lorsque j'ai parcouru les todo cela ne me semblait pas compliqué, mais j'ai passé plusieurs bonnes heures dessus au final et j'aimerais donc m'exprimer sur les problèmes rencontrés.

## Lancement des tests

J'ai voulu voir tout d'abord les tests qui étaient intégrés et donc ce qui était attendu. Mais tout le long du projet, je n'ai pas réussi à les passer.

Au début, j'ai décidé de ne pas passer à la suite tant que le test ne passait pas, puis après plusieurs heures, j'ai décidé de d'abord implémenter les todos, puis de revenir faire du clean code après. Au final, les tests ne passent toujours pas, il y a des choses que je ne comprends pas et j'ai voulu un minimum jouer le jeu en finissant assez vite.

## Afficher la note moyenne

J'ai d'abord écrit la fonction à côté sur un papier, puis je l'ai testée sur un simple fichier en dehors du projet pour vérifier si elle fonctionnait, je suis habitué au debugger de chrome pour vérifier petit à petit le bon déroulement de la fonction.

Ensuite j'ai cherché s'il existait une manière spécifique de créer une boucle avec Vue, j'ai donc découvert le v-for. J'ai essayé d'adapter ma fonction avec le v-for , mais sans réel succès. J'ai donc cherché un moyen d'écrire ma fonction dans le projet puis de l'importer ensuite.

Cela fonctionne, mais le test me dit que dans ma fonction reviews n'est pas iterable. L'affichage fonctionne pourtant. J'essaye tant bien que mal de corriger mais en vain, je décide alors de passer à la suite.

Au début, le problème venait de mon incapacité à comprendre comment importer les données, en effet, j'y arrivais bien pour les données simples, mais là, il s'agissait de données imbriquées. Au final, j'ai pu comprendre comment cela fonctionnait, mais je n'ai toujours pas réussi à la faire fonctionner avec le v-for.

## Les reviews sur la page restaurant

J'ai passé beaucoup de temps à trouver comment importer les données car ce n'était pas intuitif pour moi. Mais après un peu d'acharnement et d'observation j'ai réussi.

##  Améliorations UX

En termes d'UX cela me tenait à coeur de gérer les affichages "empty" notamment lorsqu'un restaurant n'a pas de reviews, ou alors un petit bouton retour lorsqu'on est sur la page d'un restaurant. Cela m'a permis de réfléchir à l'utilisation des v-if v-else.

## Améliorations UI

En ce qui concerne l'UI j'ai voulu manipuler Vuetify et conserver une harmonie entre les composants. Cela m'a permis de manipuler Vuetify et de gérer le style dans les composants.

## Filtres des reviews

Pour mon plus grand regret, je n'ai pas réussi à implémenter cette feature. J'ai essayé avec la méthode computed, mais cela ne voulais pas fonctionner. J'ai voulu créer une fonctionnalité à part en Vanilla, mais je me suis dit que c'était hors thème et que ce serait le sujet d'un autre projet.

# Conclusion

J'ai pris énormément de plaisir à réaliser ce test, j'y ai mis bien plus que les 3 H prévues, beaucoup de temps a été passé à observer la logique et les pratiques dans le projet existant. C'était un travail de fourmis, mais je suis content du résultat. À la base, je voulais seulement parcourir le code puis faire le test, sauf que je m'y suis pris naturellement et au final je me suis dit que j'allais tout reprendre sur un repo git. Lorsque j'ai repris sur le repo git cela allait beaucoup plus vite concernant les problèmes que j'avais déjà rencontré. Mais c'est un peu ma manière d'apprendre aussi.

Bonne lecture
