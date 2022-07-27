const withMultiple = (n) => (m) => n * m;
console.log(withMultiple(2)(3));

const triple = withMultiple(3);
console.log(triple(4));
