const persons = [
    { id: 3, name: "Luiz"},
    { id: 2, name: "Maria"},
    { id: 1, name: "Helena"},
]

const newPersons = new Map();

for (const person of persons) {
    const { id } = person;
    newPersons.set(id, { ...person }) ;
}

console.log(newPersons);