function fn(x) {
	var i = 0;
for(var str in x) {
	if(str != " ") {
		var a = i++;
		return a;
	}
} 
}
console.log(fn("123"));