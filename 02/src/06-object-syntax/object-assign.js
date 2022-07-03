const original = { a:1, b:2, c:3 };

const copy = Object.assign({}, original);
console.log(copy);
console.log(copy === original);

const assigned = Object.assign(original, { d: 4, e: 5 }, { d: 6 });
console.log(assigned);
console.log(original);
