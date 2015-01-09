$(document).ready(function()
{
	var selected = $("#ipad-menu");
	var selectedDevice = $("#selected-platform");
	selectedDevice.val("iPad");
	var selectedOrg = $("#selected-org");
	var previewImg = document.getElementById("screen-content").getElementsByTagName("img")[0];
	var previewImgThumbnail = document.getElementById("preview-img");
	
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
				selectedDevice.val("iPad");
				selected = $("#ipad-menu");
				selected.removeClass("unselected");
				fg.find("img").attr("src", "res/ipad.png");
				screen.css("width", "246px");
				screen.css("height", "328px");
				screen.css("margin-top", "-369px");
				
				switch(selectedOrg.val())
				{
					case "School":
						previewImgThumbnail.src = "res/school-ipad-thumbnail.jpg";
						previewImg.src = "res/school-ipad.jpg";
						break;
						
					case "Church":
						previewImgThumbnail.src = "res/church-ipad-thumbnail.jpg";
						previewImg.src = "res/church-ipad.jpg";
						break;
						
					case "Small Business":
						previewImgThumbnail.src = "res/small-business-ipad-thumbnail.jpg";
						previewImg.src = "res/small-business-ipad.jpg";
						break;
				}
				
				break;
			
			case "iphone-menu":
				selected.addClass("unselected");
				selectedDevice.val("iPhone");
				selected = $("#iphone-menu");
				selected.removeClass("unselected");
				fg.find("img").attr("src", "res/iphone.png");
				screen.css("width", "159px");
				screen.css("height", "283px");
				screen.css("margin-top", "-344px");
				
				switch(selectedOrg.val())
				{
					case "School":
						previewImgThumbnail.src = "res/school-iPhone-thumbnail.jpg";
						previewImg.src = "res/school-iPhone.jpg";
						break;
						
					case "Church":
						previewImgThumbnail.src = "res/church-iPhone-thumbnail.jpg";
						previewImg.src = "res/church-iPhone.jpg";
						break;
						
					case "Small Business":
						previewImgThumbnail.src = "res/small-business-iPhone-thumbnail.jpg";
						previewImg.src = "res/small-business-iPhone.jpg";
						break;
				}
				
				break;
				
			case "android-menu":
				selected.addClass("unselected");
				selected = $("#android-menu");
				selectedDevice.val("Android");
				selected.removeClass("unselected");
				fg.find("img").attr("src", "res/android.png");
				screen.css("width", "186px");
				screen.css("height", "309px");
				screen.css("margin-top", "-359px");
				
				switch(selectedOrg.val())
				{
					case "School":
						previewImgThumbnail.src = "res/school-Android-thumbnail.jpg";
						previewImg.src = "res/school-Android.jpg";
						break;
						
					case "Church":
						previewImgThumbnail.src = "res/church-Android-thumbnail.jpg";
						previewImg.src = "res/church-Android.jpg";
						break;
						
					case "Small Business":
						previewImgThumbnail.src = "res/small-business-Android-thumbnail.jpg";
						previewImg.src = "res/small-business-Android.jpg";
						break;
				}
				
				break;
			
			default:
				console.log("Something is wrong with selection");
				break;
		}
		
		if(selectedDevice.val() === "iPad")
		{
			console.log("rannn");
			previewImg.style.width = "304px";
		}
		
		else
		{
			previewImg.style.width = "225px";
		}
	}
	
	$("#ipad-menu").click(deviceSelect);
	$("#iphone-menu").click(deviceSelect);
	$("#android-menu").click(deviceSelect);
});

