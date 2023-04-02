# Retour sur le test

A l'origine ce test devait être effectué en 2 ou 3 heures. 

Lorsque j'ai parcouru les todo cela ne me semblait pas compliqué mais j'ai passé plusieurs bonnes heures dessus au final et j'aimerai donc m'exprimer sur les problèmes rencontrés.

## Lancement des tests

J'ai voulu voir tout d'abord les tests qui étaient intégré et donc ce qui était attendu. Mais tout le long du projet je n'ai pas réussi à les passer. 

Au début j'ai décidé de ne pas passer à la suite tant que le test ne passait pas, puis après plusieurs heures j'ai décidé de d'abord implémenter les todos, puis de revenir faire du clean code après. Au final les tests ne passent toujours pas il y a des choses que je ne comprend pas et j'ai voulu un minimum jouer le jeu en finissant assez vite.

## Afficher la note moyenne

J'ai d'abord écrit la fonction à côté sur un papier, puis je l'ai testée sur un simple fichier en dehors du projet pour vérifier si elle fonctionnait, je suis habitué au debugger de chrome pour vérifier petit à petit le bon déroulement de la fonction.

Ensuite j'ai cherché s'il existait une manière spécifique de créer une boucle avec Vue, j'ai donc découvert le v-for. J'ai essayé d'adapter ma fonction avec le v-for mais sans réel succès. J'ai donc cherché un moyen d'écrire ma fonction dans le projet puis de l'importer ensuite.

Cela fonctionne mais le test me dit que dans ma fonction reviews n'est pas iterable. L'affichage fonctionne pourtant. J'essaye tant bien que mal de corriger mais en vain, je décide alors de passer à la suite.

Au début le problème venait de mon incapacité à comprendre comment importer les données, en effet j'y arrivais bien pour les données simples mais là il s'agissait de données imbriquées. Au final j'ai pu comprendre comment cela fonctionnait mais je n'ai toujours pas réussi à la faire fonctionner avec le v-for.

## Corriger l'erreur Fetch
## Afficher la note moyenne
## Reviews on restaurant page
