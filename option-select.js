$(document).ready(function()
{
	var prevElem = null;
	var moneyValue = 0;
	var money = document.getElementById("cost-content").firstChild;s

	$("#elem-organization-box").click(function(e)
	{
		e.target.style.background = "orange";
		var org = document.getElementById("organization-content");
				
		switch(e.target.innerHTML)
		{
			case "School":
				org.style.display = "block";
				org.innerHTML = "Organization: School";
				moneyValue = 1500;
				money.innerHTML = "$" + moneyValue;
				break;
			
			case "Church":
				org.style.display = "block";
				org.innerHTML = "Organization: Church";
				moneyValue = 1500;
				money.innerHTML = "$" + moneyValue;
				break;
				
			case "Small Business":
				org.style.display = "block";
				org.innerHTML = "Organization: Small Business";
				moneyValue = 4500;
				money.innerHTML = "$" + moneyValue;
		}
		
		if( prevElem )
		{
			prevElem.style.background = null;
		}
		
		prevElem = e.target;
	});
	
	/*
	* FIX THIS PART NEXT
	$("#elem-communication-box").click(function(e)
	{
		e.target.style.background = "orange";
		var comm = document.getElementById("communication-content");
		var innerHTML = e.target.innerHTML;
		
		if( innerHTML.indexOf("1 Passkey") > -1 )
		{
			comm.style.display = "block";
			comm.innerHTML = "Push Notification System with 1 Passkey";
		}
		
		else
	});
	*/ 
});