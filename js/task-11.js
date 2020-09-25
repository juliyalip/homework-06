// Write code under this line
const getSortedUniqueSkills = (array) =>
  array
    .reduce((acc, item) => [...acc, ...item.skills], [])
    .filter((current, index, arr) => arr.indexOf(current) === index)
    .sort();

const users = [
  {
    name: "Moore Hensley",
    age: 25,
    friends: 12,
    skills: "alit",
  },
  {
    name: "Sharlene Bush",
    age: 14,
    friends: 3,
    skills: "tempor",
  },
  {
    name: "Blackburn Dotson",
    age: 28,
    friends: 14,
    skills: "alit",
  },
  {
    name: "Plack Yotson",
    age: 28,
    friends: 14,
    skills: "culpa",
  },
];

console.log(getSortedUniqueSkills(users));
