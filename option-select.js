$(document).ready(function()
{
	var moneyValue = 0;
	var money = document.getElementById("cost-content").firstChild;
	var orgBox = $("#elem-organization-box");
	orgBox[0].prevElem = null; //contains previously chosen element in box
	orgBox[0].prevMoney = 0;
	var commBox = $("#elem-communication-box");
	commBox[0].prevElem = null; //same as above, but for communication box
	commBox[0].prevMoney = 0;
	var extraBox = $("#elem-extras-box");
	var orgSelected = false;
	var commSelected = false;
	var extra = document.getElementById("extras-content");
	var selectedDevice = document.getElementById("selected-platform").value;

	orgBox.find("li").click(function(e)
	{
		orgSelected = true;
		e.target.style.border = "solid rgb(0,144,255)";
		var org = document.getElementById("organization-content");
		var orgSpan = org.getElementsByTagName("span")[0];
		var completed = document.getElementById("completed-content");
		var completedSpan = completed.getElementsByTagName("span")[0];
		var completedImg = document.getElementById("preview-img");
		
		
		if( orgBox[0].prevElem )
		{
			if( orgBox[0].prevElem != e.target )
			{
				orgBox[0].prevElem.style.border = "none"
			}
				
			orgBox[0].prevMoney = orgBox[0].prevElem.moneyValue;
		}
			
		switch(e.target.innerHTML)
		{
			case "School":
				e.target.moneyValue = 1500;
				org.style.display = "block";
				completed.style.display="block";
				completedSpan.innerHTML = "Your app (hover over!):";
				orgSpan.innerHTML = "Organization: School";
				moneyValue -= orgBox[0].prevMoney;
				moneyValue += 1500;
				money.innerHTML = "$" + moneyValue;
				
				switch(selectedDevice)
				{
					case "iPad":
						completedImg.src = "res/school-ipad-thumbnail.jpg";
						break;
					
					case "iPhone":
						completedImg.src = "res/school-iPhone-thumbnail.jpg";
						break;
					
					case "Android":
						completedImg.src = "res/school-Android-thumbnail.jpg";
						break;
				}
				
				break;
			
			case "Church":
				e.target.moneyValue = 1500;
				org.style.display = "block";
				orgSpan.innerHTML = "Organization: Church";
				moneyValue -= orgBox[0].prevMoney;
				moneyValue += 1500;
				money.innerHTML = "$" + moneyValue;
				
				switch(selectedDevice)
				{
					case "iPad":
						completedImg.src = "res/church-ipad-thumbnail.jpg";
						break;
					
					case "iPhone":
						completedImg.src = "res/church-iPhone-thumbnail.jpg";
						break;
						
					case "Android":
						completedImg.src = "res/church-Android-thumbnail.jpg";
						break;
				}
				break;
				
			case "Small Business":
				e.target.moneyValue = 4500;
				org.style.display = "block";
				orgSpan.innerHTML = "Organization: Small Business";
				moneyValue -= orgBox[0].prevMoney;
				moneyValue += 4500;
				money.innerHTML = "$" + moneyValue;
				
				switch(selectedDevice)
				{
				}
		}

		orgBox[0].prevElem = e.target;
	});
	

	commBox.find("li").click(function(e)
	{	
		if( orgSelected )
		{
			/*
			* if span clicked on, e.target changed to list object	
			*/
			commSelected = true;
			if( e.target.tagName != "LI" )
			{
				e.target = e.target.parentNode;
			}
			
			e.target.style.border = "solid rgb(0,144,255)";
			
			if( commBox[0].prevElem )
			{
				if( commBox[0].prevElem != e.target )
				{
					commBox[0].prevElem.style.border = "none";
				}
				
				if( commBox[0].prevElem.id = "hyperlocal" && e.target.id != "hyperlocal")
				{
					document.getElementById("hyperlocal").style.display = "none";
				}
					
				commBox[0].prevMoney = commBox[0].prevElem.moneyValue;
			}
			
			var comm = document.getElementById("communication-content");
			var commSpan = comm.getElementsByTagName("span")[0];
			
			/*
			* Search for phrases to determine user's choice
			*/
			
			if(new RegExp("1 Passkey").test(e.target.innerHTML))
			{
				e.target.moneyValue = 0;
				comm.style.display = "block";
				commSpan.innerHTML = "1 Passkey";
				moneyValue -= commBox[0].prevMoney;
				money.innerHTML = "$" + moneyValue;
			}
			
			else if(new RegExp("10 Passkeys").test(e.target.innerHTML))
			{
				e.target.moneyValue = 100;
				comm.style.display = "block";
				commSpan.innerHTML = "10 Passkeys";
				moneyValue -= commBox[0].prevMoney;
				moneyValue += 100;
				money.innerHTML = "$" + moneyValue;
			}
			
			else if(new RegExp("unlimited").test(e.target.innerHTML))
			{
				e.target.moneyValue = 0;
				comm.style.display = "block";
				commSpan.innerHTML = "Hyperlocal Network&#174";
				moneyValue -= commBox[0].prevMoney;
				money.innerHTML = "$" + moneyValue;
				document.getElementById("hyperlocal").style.display = "inline-block";
			}
			
			commBox[0].prevElem = e.target;
		}
		
		else
		{
			alert("You must select an organization option first.");
		}
	});
	
	
	/*
	* Next task: Finish and clean extras selection up, calculations, and fix device select bug
	*/
	extraBox.find("li").click(function(e)
	{
		var extraSpan = extra.getElementsByTagName("span")[0];
		if( commSelected )
		{
			/*
			* Keep track of when element is selected or
			* deselected
			*/
			if( e.target.isSelected )
			{
				e.target.isSelected = false;
				e.target.style.border = "none";
			}
			
			else
			{
				e.target.style.border = "solid rgb(0,144,255)";
				e.target.isSelected = true;
			}

			if( new RegExp("App").test(e.target.innerHTML) )
			{
				console.log(moneyValue);
				extra.style.display = "block";
				
				if( !e.target.isSelected)
				{
					if( extraSpan.innerHTML.indexOf("<") > -1 )
					{
						extraSpan.innerHTML = extraSpan.innerHTML.substring(
											extraSpan.innerHTML.indexOf(">") +
											 1,extraSpan.innerHTML.length);
											
					}
					
					else
					{
						extraSpan.innerHTML = "";
					}
					
					moneyValue -= 75;
					money.innerHTML = "$" + moneyValue;
				}
				
				else
				{
					if( extraSpan.innerHTML !== "" )
					{
						extraSpan.innerHTML = "Custom App Background<br />" + extraSpan.innerHTML; 
					}
					
					else
					{
						extraSpan.innerHTML = "Custom App Background";	
					}
					
					moneyValue += 75;
					money.innerHTML = "$" + moneyValue;
				}
			}
			
			if( new RegExp("Full Directory").test(e.target.innerHTML) )
			{
				extra.style.display = "block";
				
				if( !e.target.isSelected)
				{
					if( extraSpan.innerHTML.indexOf("<") > -1 )
					{
						extraSpan.innerHTML = extraSpan.innerHTML.substring(0,
											extraSpan.innerHTML.indexOf("<"));
					}
					
					else
					{
						extraSpan.innerHTML = "";
					}
					moneyValue -= 500;
					money.innerHTML = "$" + moneyValue;
				}
				
				else
				{
					if( extraSpan.innerHTML !== "" )
					{
						extraSpan.innerHTML = extraSpan.innerHTML + "<br />Full Directory"; 
					}
					
					else
					{
						extraSpan.innerHTML = "Full Directory";	
					}
					
					moneyValue += 500;
					money.innerHTML = "$" + moneyValue;
				}
			}
			
			if( extraSpan.innerHTML === "" )
			{
				extra.style.display = "none";
			}
		}
		
		else
		{
			alert("You must select a communication option first.");
		}
	});
	
	$("#elem-right-order-button").click( function()
	{
		if(	orgSelected && commSelected )
		{
			window.location = "http://www.bluehammerapps.com/order";
		}
		
		else
		{
			alert("You must select an organization type and a method of communication before ordering your app.");
		}
	});
});