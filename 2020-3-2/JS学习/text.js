var sum = "";
for(var i = 0; i<5;i++) {
	var a = "";
	for(var j = 0;j<5-i;j++) {
		a+=" ";
	}
	var b = "";
	for(var s = 0;s<2*i-1;s++) {
		b+="1";
	}
	sum += a+b+"\n";
	//sum = "";
	//var a = "";
	for(var j = 0;j<=i;j++) {
		a+=" ";
	}
	//var b = "";
	for(var s = 0;s<2*i-1;s++) {
		b+="2";
	}
	sum += a+b+"\n";

}
console.log(sum);