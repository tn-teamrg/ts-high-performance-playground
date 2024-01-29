// * NOTE: factory method pattern
// creating objects without specifying their concrete classes

interface Project {
	operation(): string;
}

interface Product {
	operation(): string
}

// ! Questions:
// * what classes does it consists of?
// * what role do these classes play?
// * in what way the elements of the patterns are related?

abstract class Creator{
	public abstract factoryMethod(): Project;

	public someOperation(): string {
		const product = this.factoryMethod();
		return `Creator: the same creator's code has just worked with ${product.operation()}`;
	}
}

class ConcreateCreator1 extends Creator{
	public factoryMethod(): Project {
		return new ConcreteProduct1();
	}
}

class ConcreteProduct1 implements Product{
	public operation(): string {
		return `{Result of the ConcreteProduct1}`;
	}
}

class ConcreateCreator2 extends Creator{
	public factoryMethod(): Project {
		return new ConcreteProduct2();
	}
}

class ConcreteProduct2 implements Product{
	public operation(): string {
		return `{Result of the ConcreteProduct2}`;
	}
}

function clientCode(creator: ConcreateCreator1) {
	console.info(`[INFO] -- clientCode: creator===${creator}`); // * NOTE: {}
	console.log(`[LOG] -- creator.someOperation()===${creator.someOperation()}`);
}

console.log(`[LOG] -- Factory: Launched with ConcreateCreator1.`);
clientCode(new ConcreateCreator1());
console.log('');

console.log(`[LOG] -- Factory: Launched with ConcreateCreator2.`);
clientCode(new ConcreateCreator2());