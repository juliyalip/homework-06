//Получи массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений
// и они должны быть отсортированы в алфавитном порядке.
// Не добавленно решение с редюс - нет отдельного массива только с нужным свойством

const getSortedUniqueSkills = (array) =>
  array
    .filter(({ skills }) => skills)
    .sort((a, b) => {
      // параметр а b это объекты перебора из массива
      const result = a.skills[0] > b.skills[0];
      if (result) {
        return 1;
      }
      if (!result) {
        return -1;
      }
    });
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
