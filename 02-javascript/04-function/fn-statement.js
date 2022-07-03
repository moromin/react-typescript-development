// 関数宣言文による定義
function double(n) {
	return n * 2;
}

// 関数式による定義
const twice = function (n) {
	return n * 2;
};


console.log(fn());

function fn() {
	return 'foo';
}

// hoisting
function fn() {
	return 'bar';
}
