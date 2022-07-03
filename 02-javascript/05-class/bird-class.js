class Bird {
	constructor(name) {
		this.name = name;
	}

	chirp = () => {
		console.log(`${this.name}が鳴いた`);
	};

	static explain = (name) => {
		console.log(`${name}は翼があり卵を産む`);
	};
}

class FlyableBird extends Bird {
	constructor(name) {
		super(name);
	}

	fly = () => {
		console.log(`${this.name}が飛んだ`);
	};
}


const penguin = new Bird('ペンギン');
penguin.chirp();
Bird.explain('カラス');

const hawk = new FlyableBird('鷹');
hawk.fly();
