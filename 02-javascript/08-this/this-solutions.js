class Person {
	constructor(name) {
		this.name = name;
	}

	greet1() {
		const doIt = function() {
			console.log(`Hi, I'm ${this.name}`);
		};
		const bindedDoIt = doIt.bind(this);						// 1. 関数にthisをバインドする
		bindedDoIt();
	}

	greet2() {
		const doIt = function() {
			console.log(`Hi, I'm ${this.name}`);
		};
		doIt.call(this);						// 2. callでthisを指定する
	}

	greet3() {
		const _this = this;   							// 3. 変数 _this に値を移し変える
		const doIt = function() {
			console.log(`Hi, I'm ${_this.name}`);
		};
		doIt();
	}

	greet4() {
		const doIt = () => {   							// 4. アロー関数式で定義する
			console.log(`Hi, I'm ${this.name}`);
		};
		doIt();
	}

	greet5 = () => {
		const doIt = () => {   							// 5. メソッド自身もアロー関数式で定義する
			console.log(`Hi, I'm ${this.name}`);
		};
		doIt();
	}

	greet6() {
		console.log(this.name, this);						// 6. メソッド自身を直接呼び出す
	}
}

const creamy = new Person('Mami');
creamy.greet1();
creamy.greet2();
creamy.greet3();
creamy.greet4();
creamy.greet5();
creamy.greet6();
