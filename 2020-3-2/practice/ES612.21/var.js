
//关于var变量提升问题
//var是全局变量
var snack = 'Meow Mix';
function getFood(food) {
	//因为var可以变量提升
	// var snack;
	if(food) {
		var snack = "Friskies";
		return snack;
	}
	return snack;
}
console.log(getFood(false));//if语句条件为false为假
/*因为var是全局变量，所以函数变量中没有声明的变量，也可以使用*/