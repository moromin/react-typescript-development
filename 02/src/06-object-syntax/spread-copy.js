const original = { a:1, b:2, c:3 };

const copy = { ...original };
console.log(copy);
console.log(copy === original);

const assigned = { ...original, ...{d: 4, e: 5, f: 6}, d: 6 };
console.log(assigned);
console.log(original);
