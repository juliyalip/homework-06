// Получи массив из объектов, которые состоят только из свойств name и email тех пользователей,
// которые попадают в возрастную категорию от min до max лет(значение свойства age).

const getUsersWithAge = (array, min, max) =>
  array
    .filter(({ age }) => age > min && age < max)
    .map(({ name, email }) => ({ name, email }));

const users = [
  { name: "Ross Vazquez", email: "rossvazquez@xinware.com" },
  { name: "Elma Head", email: "elmahead@omatom.com" },
  { name: "Carey Barr", email: "careybarr@nurali.com" },
];

console.log(getUsersWithAge(users, 20, 30));

// console.log(getUsersWithAge(users, 30, 40));
/* [
    { name: 'Moore Hensley', email: 'moorehensley@indexia.com' },
    { name: 'Sharlene Bush', email: 'sharlenebush@tubesys.com' },
    { name: 'Blackburn Dotson', email: 'blackburndotson@furnigeer.com' },
    { name: 'Sheree Anthony', email: 'shereeanthony@kog.com' }
] */

// console.log(getUsersWithAge(users, 20, 30));
