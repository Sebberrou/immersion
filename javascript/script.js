$(document).ready(function(){
	function wAccueil(){
		$content.css("display","block");
		$immersion.css({'display':'none'});
	$content.html("<h2>Bienvenue en MMI</h2><p class='title'>On va vous faire découvrir la programmation web</p>");
	document.cookie="page=Accueil";
	$activ=$accueil;
}
function wDiscover(){
	$content.css("display","none");
	$immersion.css({'display':'block'});
	document.cookie="page=Discover";
	$activ=$discover;
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
$discover=$("ul li:nth-child(2)>button"),
$more=$("ul li:nth-child(3)>button"),
$activ;
page_Activ=document.cookie.split('=');
switch(page_Activ[1]){
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
