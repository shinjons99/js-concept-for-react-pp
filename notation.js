const person = {
    name: 'Lal Nil Holud Mia',
    Profession: 'Traffic Surgeon',
    age: 39,
    25: 'summer',
    'son-name': 'sunny',
    address: 'Dhanmondi'
}

//* dot notation
const prof1 = person.Profession;

//*bracket notation
const prof2 = person['age'];
const pName = 'Profession';
const prof3 = person[pName];
// console.log(prof3);

const season = person[25];
// console.log(season);
const newOne = person['son-name'];
console.log(newOne);