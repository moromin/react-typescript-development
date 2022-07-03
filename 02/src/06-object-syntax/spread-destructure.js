const user = {
	id: 1,
	name: 'Patty Rabbit',
	email: 'patty@maple.com',
	age: 8,
};

const { id, ...userWithoutId } = user;

console.log(id, userWithoutId);
// 1 { name: 'Patty Rabbit', email: 'patty@maple.com', age: 8 }
