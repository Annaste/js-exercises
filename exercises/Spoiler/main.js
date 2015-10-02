$(document).ready(function(){
	$('.spoilerText').click(function(){
		$(this).toggleClass('opened').toggleClass('closed').next().slideToggle(400);
	});
});