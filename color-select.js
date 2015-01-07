$(document).ready(function()
{
	console.log("ran");
	ColorPicker(
		document.getElementById('slide'),
		document.getElementById('picker'),
		function(hex,hsv,rgb)
		{
			var colorInput = document.getElementById("selected-color");
			colorInput.value = "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")";
			document.getElementById("screen").style.background = colorInput.value;
		}
	)
});