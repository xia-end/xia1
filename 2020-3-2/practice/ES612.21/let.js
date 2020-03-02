let snack = "Meow Mix";
function getFood(food){
	//let为块级作用域
	//不会变量提升
	if(food) {
		let snack = "Friskies";
		return snack;
	}
	return snack
}
console.log(getFood(false));//Meow Mix