function foo(){
	var a = 5;

	$('body').bind('myEvent',function(){
		alert("Event triggered");
		a=8;
	}

	return {
		"b":a;
	}
}

var f = foo();

f.b; //5

$('body').tigger('myEvent');

f.b;  //5

//I want value to be 8, to solve this use below code

function foo(){
	var a = 5;

	$('body').bind('myEvent',function(){
		alert("Event triggered");
		a=8;
	}

	return {
		b : function(){
			return a;
		}
	}
}


var f = foo();

f.b; //5

$('body').tigger('myEvent');

f.b;  //8. Hurray
