const arr = [1, 2, 3, 4, 5];

console.log(arr.reduce((n, m) => n + m));          // 15
console.log(arr.sort((n, m) => n > m ? -1 : 1));   // [ 5, 4, 3, 2, 1 ]
console.log(arr); 		// sortは破壊的なメソッド


const lst = [56, 541, 31, 5];

// slice()を挟み、元の配列のシャローコピーをした配列を作成し、sort()を安全に呼び出す
console.log(lst.slice().sort((n, m) => n < m ? -1 : 1));
console.log(lst);
