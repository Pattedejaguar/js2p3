// getElementsByTagName permet de prendre toutes les balises a
showandhide=document.getElementsByTagName('a')
// le 0 et le 1 correspondent aux premières et deuxièmes balise (POUR ROMAIN)
// ajoute l'évènement avec click et les fonctions show and hide
showandhide[0].addEventListener('click',show);
showandhide[1].addEventListener('click',hide);
 // la fonction afficher
function show() {
  document.getElementById('text').style.display='block';
}
// la fonction cacher
function hide() {
  document.getElementById('text').style.display='none';
}
