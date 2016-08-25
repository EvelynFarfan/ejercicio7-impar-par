var num = prompt("Ingresa un número");

if( num % 2 != 0){
	document.write("Odd!");
	}
else if (num <= 5){
	document.write("Good!")
}
else if (num >= 6 && num <= 20){
	document.write("Great!")
}
else{
	document.write("Perfect!")
}
