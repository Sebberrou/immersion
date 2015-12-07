$(document).ready(function(){

function centrerElement(element){
	var windHeight=$(window).height();
	var windWidth=$(window).width();
	var top =(windHeight / 2) - (element.height() / 2) + $(window).scrollTop();
	var left = (windWidth / 2) - (element.width() / 2) + $(window).scrollLeft();
	element.css({'top':top, 'left': left});
}

	function wAccueil(){
		$content.css("display","block");
		$immersion.css({'display':'none'});
	$content.html("<h2>Bienvenue en MMI</h2><p class='title'>On va vous faire découvrir la programmation web</p>");
	centrerElement($('.content .title'));
	document.cookie="page=Accueil";
	$activ=$accueil;
}
function wDiscover(){
	$content.css("display","none");
	$immersion.css({'display':'block'});
	document.cookie="page=Discover";
	$activ=$discover;
}
function wCours () {
	$content.css("display","block");
	$immersion.css({'display':'none'});
	$content.html("	<h2>Le HTML facile</h2><h3>En fait c'est pas si difficile :</h3><div class='lesson'><p class='learn'>Les bases</p><p>Pour commencer le HTML s'écrit avec des balises de cette forme  &ltp&gt &lt/p&gt <br />Ici le code sert à écrire un texte. Le signe '/'' sert à fermer les balises.<br/>Les principales balises sont : </p>"
		+"<ul ><li>&ltHTML&gt :le début d'un document de type HTML. </li>"
		+"<li>&lthead&gt : Début de la zone d'en-tête (contient des informations destinées au browser). </li>"
		+"<li>&lttitle&gt : Début d'un titre </li>"
		+"<li>&ltp&gt : Permet d'écrire du texte</li></ul></div>"
		+"<div class='lesson'><p class='learn'>Le CSS</p><p>Le CSS permet de mettre en forme son texte écrit en HTML. <br/>Aujourd'hui nous verronts comment habiller un texte grâce à des classes écrites en css.C'est très simple pour cela il suffit d'avoir &ltp class='test'&gt<br/>Ici 'class' permet d'appeller une classe depuis le css. Dans ce cas présent il s'agit de la class ''test''. <br/>Dans les exercices suivants vous aurez à appeler des classes pour voir tout ce qu'on peut faire en CSS. Pour cela cliquez sur le bouton 'Découvrez MMI'</p></div>");
	document.cookie="page=Cours";
	$activ=$cours;
}
function wMore(){
	$content.css("display","block");
	$immersion.css({'display':'none'});
	$content.html("<h2>Tu en veux plus ?</h2><p> On vous conseille cet article du  <span><a href='http://www.lemonde.fr/moocs-docs/article/2015/10/16/sept-sites-et-applications-pour-decouvrir-la-programmation-informatique_4791324_4468700.html?xtmc=codingame&xtcr=1'>monde.fr</a></span><br /> Particulièrement <span><a href='http://codecademy.com'>codecademy.com</a></span> pour apprendre les languages et <span><a href='http://codingame.com'>codingame.com</a></span> pour tester ses capacités");
	document.cookie="page=More";
	$activ=$more;
}

var 
$content=$("div:nth-child(2)"),
$immersion=$(".immersion"),
$accueil=$("ul li:nth-child(1)>button"),
$cours=$("ul li:nth-child(2)>button"),
$discover=$("ul li:nth-child(3)>button"),
$more=$("ul li:nth-child(4)>button"),
$activ;
page_Activ=document.cookie.split('=');
switch(page_Activ[1]){
	case "Cours" :
	$cours.addClass("activ");
	wCours();
	break;
	case "Discover" :
	$discover.addClass("activ");
	wDiscover();
	break;
	case "More" :
	$more.addClass("activ");
	wMore();
	break;
	default:
	activ="Accueil";
	$accueil.addClass("activ");
	wAccueil();
}

$("div:nth-child(1) li button").click(function(){
	$activ.removeClass("activ");
	$activ = $(this);
	$(this).addClass("activ");	
	console.log('activ',$activ,'accueil',$accueil);
switch ($activ.html()){
case $accueil.html():
	wAccueil();
	break;
case $cours.html():
	wCours();
	break;
case $discover.html():
	wDiscover();
	break;
case $more.html():
	wMore();
	break;
default:
$content.html("<h1>ICI C'EST MMI</h1>");
}
});
});
