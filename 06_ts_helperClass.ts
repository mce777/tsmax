class HelpHelp {
	// 'static' makes it available outside without having to instantiate
	static PI: number = 3.14;
	static calcCircumference(diameter: number): number {
		return this.PI * diameter;
	}
}

console.log(2 * HelpHelp.PI);
console.log(HelpHelp.calcCircumference(8));