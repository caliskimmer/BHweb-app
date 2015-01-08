$(document).ready( function()
{
var menu = $("#color-menu");
var color = $("#color");
var device = $("#device");
var deviceList = $("#device-list");
var colorList = $("#color-list");
var openMenu = function(e)
{
e.preventDefault();
var targetTab = (e.target.id === undefined || e.target.id === "") ? e.target.parentNode.id : e.target.id;
var dashItem = (targetTab === "color") ? color:device;
/*
* Check where user clicked and determine what menu items to display
* and show which tabs are active.
*/	
if( targetTab == "dpccolor" )
{
//if user clicks on colorList while deviceList still open, deactivate deviceList
if( deviceList[0].isSelected )
{
device.removeClass("dash-selected");
deviceList.addClass("hidden");
menu.addClass("hidden");
deviceList[0].isSelected = false;
}
dashItem = color;
colorList.removeClass("hidden");
colorList[0].isSelected = true;
}
else if( targetTab === "dpcimg" )
{
//same as above but with deviceList clicked and colorList still open
if( colorList[0].isSelected )
{
	color.removeClass("dash-selected");
	colorList.addClass("hidden");
	menu.addClass("hidden");
	colorList[0].isSelected = false;
}

dashItem = device;
deviceList.removeClass("hidden");
deviceList[0].isSelected = true;
}
else if( targetTab === "device" )
{
if( colorList[0].isSelected )
{
color.removeClass("dash-selected");
colorList.addClass("hidden");
menu.addClass("hidden");
colorList[0].isSelected = false;
}
deviceList.removeClass("hidden");
deviceList[0].isSelected = true;
}
else if( targetTab === "color" )
{
if( deviceList[0].isSelected )
{
device.removeClass("dash-selected")
deviceList.addClass("hidden");
menu.addClass("hidden");
deviceList[0].isSelected = false;
}
colorList.removeClass("hidden");
colorList[0].isSelected = true;
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
colorList.addClass("hidden");
}
else
{
device.removeClass("dash-selected");
deviceList.addClass("hidden");
}
})
});