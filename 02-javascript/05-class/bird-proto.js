// コンストラクタ関数の正体
// クラス構文はこれらのシンタックスシュガー
function Bird(name) {
	this.name = name;
	this.chirp = function () {
		console.log(`${this.name}が鳴いた`);
	};

	return this;
}

Bird.explain = function (name) {
	console.log(`${name}は翼があり卵を産む`);
};

function FlyableBird(name) {
	Bird.call(this, name);
	this.fly = function () {
		console.log(`${this.name}が飛んだ`);
	};

	return this;
}

FlyableBird.prototype.__proto__ = Bird.prototype;

const penguin = new Bird('ペンギン');
penguin.chirp();
Bird.explain('カラス');

const hawk = new FlyableBird('鷹');
hawk.fly();

