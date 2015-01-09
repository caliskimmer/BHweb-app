$(document).ready( function()
{
	var screen = $("#mouseover-screen");
	
	$("#preview-img").mouseover( function()
	{
		screen.fadeIn();
	});
	
	$("#preview-img").mouseleave( function()
	{
		screen.fadeOut();
	});
});