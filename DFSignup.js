/*function name()//A function to direct first name and last name validation accordingly
{
	var fn=document.getElementById("fn");
	var ln=document.getElementById("ln");
	fn.onchange=function(){nameValid(fn.value,0)};
	ln.onchange=function(){nameValid(ln.value,1)};
}*/
function fnameValid()//A function to validate the first name
{
	var fn=document.getElementById("fn");
	checkEmpty(fn,1);
	var namePatt=/^[A-z]*$/;
	if(!namePatt.test(fn.value))
	{
		fn.value="";
		document.getElementById("fne").innerHTML="Only alphabets."
	}
	else
	{
		document.getElementById("fne").innerHTML="";
	}
	checkEmpty(fn,1);
}
function lnameValid()//A function to validate the first name
{
	var ln=document.getElementById("ln");
	checkEmpty(ln,2);
	var namePatt=/^[A-z]*$/;
	if(!namePatt.test(ln.value))
	{
		ln.value="";
		document.getElementById("lne").innerHTML="Only alphabets."
	}
	else
	{
		document.getElementById("lne").innerHTML="";
	}
	checkEmpty(ln,2);
}
function checkEmpty(input,i)
{
	var x=document.getElementsByClassName('e');
	x[i].innerHTML=(input.value==="")?"Fill out":"";
}
function unameValid(uname)
{
	checkEmpty(uname,7);
	var unamePatt=/^[A-z0-9_-]*$/;
	if(uname.value.length>0&&uname.value.length<3)
	{
		uname.value="";
		document.getElementById("une").innerHTML="Too short,minimum 3 charcters.";
	}
	else if(uname.value.length>15)
	{
		uname.value="";
		document.getElementById("une").innerHTML="Too long,maximum 15 characters.";
	}
	else if(!unamePatt.test(uname.value))
	{
		uname.value="";
		document.getElementById("une").innerHTML="Only alphabets,numbers,underscores and hyphens."		
	}
	else
	{
		document.getElementById("une").innerHTML="";
	}
}
function pwordValid(pword)
{
	checkEmpty(pword,8);
	var pwordPatt1=/[0-9]+/;
	var pwordPatt2=/[A-Z]+/;
	var pwordPatt3=/[^A-z0-9]+/;
	var pwordPatt4=/[a-z]*/;
	if(pword.value.length>0&&pword.value.length<4)
	{
		pword.value="";
		document.getElementById("pe").innerHTML="Too short,minimum 4 charcters.";
	}
	else if(pword.value.length>15)
	{
		pword.value="";
		document.getElementById("pe").innerHTML="Too long,maximum 15 charcters.";
	}
	else if(!((pwordPatt1.test(pword.value))&&(pwordPatt2.test(pword.value))&&(pwordPatt3.test(pword.value))&&(pwordPatt4.test(pword.value))))
	{
		pword.value="";
		document.getElementById("pe").innerHTML="The password must contain atleast 1 number,1 uppercase letter and 1 special character.";
	}
	else
	{
		document.getElementById("pe").innerHTML="";
	}
}
function pwordCheck(rpword)
{
	checkEmpty(rpword,9);
	var pword=document.getElementById("pword");
	if(pword.value===rpword.value)
	{
		document.getElementById("rpe").innerHTML="";
	}
	else
	{
		rpword.value="";
		document.getElementById("rpe").innerHTML="Passwords don't match.Enter again.";
	}
	checkEmpty(rpword,9);
}