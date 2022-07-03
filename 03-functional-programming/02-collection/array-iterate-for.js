const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.forEach((n) => {
	if (n % 2 === 0) {
		console.log(`${n} is even`);
	}
});

for (let n of arr) {
	if (n % 2 === 0) {
		console.log(`${n} is even`);
	}
}

// 基本的には、どちらも推奨されない
// 内部にミュータブルな変数が生じないのと、メソッドチェーンで繋げられるという点で、forEach()のほうがマシ
