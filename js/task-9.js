// Получи массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
// Избегаем мутации исходного массива: т.к. метод sort изменяет (мутирует) исходный массив,
// то следует сделать копию массива и сортировать уже копию

// Write code under this line
const getNamesSortedByFriendsCount = (array) =>
  [...array]
    .sort(
      (prevFriends, nextFriends) =>
        prevFriends.friends.length - nextFriends.friends.length
    )
    .map(({ name }) => name);

const users = [
  {
    name: "Moore Hensley",
    age: 25,
    friends: 12,
  },
  {
    name: "Sharlene Bush",
    age: 14,
    friends: 3,
  },
  {
    name: "Blackburn Dotson",
    age: 28,
    friends: 14,
  },
];

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
