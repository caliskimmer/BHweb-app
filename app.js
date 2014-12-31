$(document).ready(function()
{
	var isActive = false;
	$('#elem-right-nav').children().removeClass('active');
	$('#elem-right-nav').children().click( function()
	{
		if(!isActive)
		{
			$(this).removeClass('inactive');
			$(this).addClass('active');
			isActive=true;
		}
		
		else
		{
			$(this).removeClass('active');
			$(this).addClass('inactive');
			isActive=false;
		}
	})
});