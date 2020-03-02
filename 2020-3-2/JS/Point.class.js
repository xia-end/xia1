class Point{
	constructor(x,y) {
		this.x = x;
		this.y = y;
	}
	toString() {
		return "("+this.x+","+this.y+")";
	}

static sayHello(name) {
	this.para = name;
	return "Hello," + name;
	}
}
Point.para = "Allen";
module.exports = Point;

