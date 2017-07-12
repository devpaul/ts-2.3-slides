interface Person {
	name?: string;
	age?: number;
	description?: string;
}

function saveUserRecord(person: Person) {
	// save the record
}

const user = {
	firstName: 'Paul',
	lastName: 'Shannon',
	birthDate: new Date()
};

// error TS2559: Type '{ firstName: string; lastName: string; birthDate: Date; }' has no properties in common with type 'Person'.
saveUserRecord(user);
