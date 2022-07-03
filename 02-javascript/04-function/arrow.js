// functionキーワードによる関数式
const plusOne = function (n) {
	return n + 1;
};

// アロー関数式
const addOne = (n) => {
	return n + 1;
};

// アロー関数式、さらに省略記法
const increment = n => n + 1;

console.log(plusOne(1));
console.log(addOne(1));
console.log(increment(1));

// 2
// 2
// 2
