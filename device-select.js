$(document).ready(function()
{
	var selected = $("#ipad-menu");
	
	var deviceSelect = function(e)
	{
		var targ = $(e.target);
		var fg = $("#elem-main-foreground");
		var screen = $("#screen");
		
		/*
		* Check target attribute and adjust menu choices for device
		* selection accordingly
		*/
		
		switch( targ.parent().attr("id") )
		{
			case "ipad-menu":
				selected.addClass("unselected");
				selected = $("#ipad-menu");
				selected.removeClass("unselected");
				fg.find("img").attr("src", "res/ipad.png");
				screen.css("width", "246px");
				screen.css("height", "328px");
				screen.css("margin-top", "-369px");
				break;
			
			case "iphone-menu":
				selected.addClass("unselected");
				selected = $("#iphone-menu");
				selected.removeClass("unselected");
				fg.find("img").attr("src", "res/iphone.png");
				screen.css("width", "159px");
				screen.css("height", "283px");
				screen.css("margin-top", "-344px");
				break;
				
			case "android-menu":
				selected.addClass("unselected");
				selected = $("#android-menu");
				selected.removeClass("unselected");
				fg.find("img").attr("src", "res/android.png");
				screen.css("width", "186px");
				screen.css("height", "309px");
				screen.css("margin-top", "-359px");
				break;
			
			default:
				console.log("Something is wrong with selection");
				break;
		}
	}
	
	$("#ipad-menu").click(deviceSelect);
	$("#iphone-menu").click(deviceSelect);
	$("#android-menu").click(deviceSelect);
});

