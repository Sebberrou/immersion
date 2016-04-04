$(document).ready(function(){

function centrerElement(element){
	var windHeight=$(window).height(),
			windWidth=$(window).width();
	var top =(windHeight / 2) - (element.height() / 2) + $(window).scrollTop(),
			left = (windWidth / 2) - (element.width() / 2) + $(window).scrollLeft();
	element.css({'top':top, 'left': left});
}
var linePath = $('#logo g.line path');
linePath.each(function(key, item)
{
  var long = item.getTotalLength();
  $(item).css("stroke-dasharray", long);
  /*if($(item).attr('class').indexOf("reverse")>0){ long = - long;}*/
  
  $(item).css("stroke-dashoffset", long )
});
});
