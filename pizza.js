const ingredients = {
	cheese: 'cheese',
	ham: 'ham',
	tomato_sauce: 'tomato sauce',
};
const crust_types = {
	normal: 'normal',
	cheese: 'cheese crust',
};
const crust_thicknesses = {
	thin: 'thin',
	pan: 'pan',
	thick: 'thick'
};
function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}
class pizza {
	name = '';
	ingredients = {};
	crust_thickness = '';
	crust_type = '';
	constructor (name, crust_type, crust_thickness, cheese) {
		this.name = name;
		this.crust_type = crust_type ? crust_type : crust_types.normal;
		this.crust_thickness = crust_thickness ? crust_thickness : crust_thicknesses.thin;
		this.addIngredient(ingredients.tomato_sauce);
		if (cheese) {
			this.addIngredient(ingredients.cheese);
		}
	}
	addIngredient(ingredients) {
		this.ingredients[ingredients] = (this.ingredients[ingredients] || 0) + 1;
		if (this.ingredients[ingredients] > 3) {
			this.ingredients[ingredients] = 3;
			console.log(`${ingredients} cannot be more than tripple!`);
		}
	}
	ingredientsPrint() {
		// example:  double cheese, tripple ham;
		const arr = [];
		for (const d in this.ingredients) {
			let i;
			switch (this.ingredients[d]) {
				case 1:
					i = 'One ';
					break;
				case 2:
					i = 'Double ';
					break;
				case 3:
					i = 'Tripple ';
					break;
			}
			i += `${capitalize(d)}`;
			arr.push(i);
		}
		return arr.join(', ');
	}
	reply() {
		let reply = this.name;
		if (!this.ingredients[ingredients.cheese]) {
			reply += '\nNO CHEESE';
		}
		if (!this.ingredients[ingredients.ham]) {
			reply += '\nVEGETARIAN';
		}
		reply += `\nCrust: ${capitalize(this.crust_type)} | Thickness: ${capitalize(this.crust_thickness)}\nIngredients: ${this.ingredientsPrint()}\n`;
		return reply;
	}
	display() {
		console.log(this.reply());
	}
	apiDisplay() {
		return this;
	}
}
(() => {
	const poop = new pizza('Baby', null, null, false);
	poop.display();
	const mozarella = new pizza('Mozarella');
	mozarella.addIngredient(ingredients.cheese);
	mozarella.display();
	const double_cheese = new pizza('Double cheese', 'Normal', 'Thin', true);
	double_cheese.addIngredient(ingredients.cheese);
	double_cheese.display();
	const capriciosa = new pizza('Capriciosa', crust_types.normal, crust_thicknesses.thin, true);
	capriciosa.addIngredient(ingredients.ham);
	capriciosa.display();
	const test = new pizza('Test');
	test.addIngredient(ingredients.cheese);
	test.addIngredient(ingredients.cheese);
	test.addIngredient(ingredients.cheese);
	test.addIngredient(ingredients.cheese);
	test.addIngredient(ingredients.cheese);
	test.display();
})();