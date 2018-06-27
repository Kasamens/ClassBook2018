function hello(){
	alert("Hello World");
}

function printText(){
	if(document.getElementById("testable").innerHTML=="It Works!!!")
	{
	document.getElementById("testable").innerHTML="";
	}
	
	else
	{
		document.getElementById("testable").innerHTML="It Works!!!";
	}
	
}

function getText(){
	document.open();
	document.write("<h>Hello World</h>");
	document.close();
}
