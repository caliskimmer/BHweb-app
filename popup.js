$(document).ready( function()
{
	var menu = $("#color-menu");
	var color = $("#color");
	var device = $("#device");
	var deviceList = $("#device-list");
	var openMenu = function(e)
	{
		var tar = $(e.target);
		e.preventDefault();
		var targetTab = (tar.attr("id") == undefined) ? tar.parent().attr("id") : tar.attr("id");
		var dashItem = (e.target.id == "color") ? color:device;
		console.log(targetTab);
		/*
		* Check where user clicked and determine what menu items to display
		* and show which tabs are active.
		*/	
		
		if( targetTab == "dpccolor" )
		{
			dashItem = color;
		}
		
		else if( targetTab == "dpcimg" )
		{
			dashItem = device;
			deviceList.removeClass("hidden");
		}
		
		else if( targetTab == "device" )
		{
			deviceList.removeClass("hidden");
		}
		
		else if( targetTab == "color" )
		{
			//temp
		}
		
		if( menu.hasClass("hidden") )
		{
			menu.removeClass("hidden");
			dashItem.addClass("dash-selected");
		}
		
		else
		{
			menu.addClass("hidden");
			dashItem.removeClass("dash-selected");
		}
	}
	
	
	$("#dash-pic-color").click(openMenu);
	$("#dash-pic-device").click(openMenu);
	$("#color").click(openMenu);
	$("#device").click(openMenu)
	$("#menu-close").click( function(e)
	{
		e.preventDefault();
		menu.addClass("hidden");
		if( color.hasClass("dash-selected") )
		{
			color.removeClass("dash-selected");
		}
		
		else
		{
			device.removeClass("dash-selected");
			deviceList.addClass("hidden");
		}
	})
});