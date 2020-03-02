function zfx(t,h) {
	var str = "";
	var str1 = "";
	for(var i=0;i<=h;i++){
		str = "";
		for(var j=0;j<=h;j++){
				str += t + " ";
		}
		str1 += str + "\n"; 
	}
	return str1;
}
console.log(zfx("*",2));