const fn = function mars() {};
console.log(fn.name);
// 'mars'

console.log((function() {}).name);
console.log((() => {}).name);
// ''
