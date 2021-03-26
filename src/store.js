let id = 0;
function createData(lastName, firstName, nickname, age, country, lastActivity) {
  id += 1;
  return { id, lastName, firstName, nickname, age, country, lastActivity };
}

export let rows = [
  createData('Gamba', 'John', 'Gamv32', 34, 'USA', 'a week ago'),
  createData('Ronnie', 'Kate', 'Katty12', 21, 'Switzerland', 'a minute ago'),
  createData('Smith', 'Anna', 'Ann89', 25, 'Germany', '10 minutes ago'),
  createData(
    'Vanirbon',
    'Andrew',
    'Andr1re1',
    32,
    'Netherlands',
    'an  hour ago'
  ),
  createData('Himos', 'Lulu', 'LuluWie', 20, 'Sweden', '25 minutes ago'),
  createData('Sosaki', 'Marie', 'Nyam18', 22, 'Denmark', '2 hours ago'),
  createData('Monaki', 'Sisi', 'notSisi', 31, 'Latvian', 'online'),
  createData(
    'Ruri',
    'Silvia',
    'SilviaInt21',
    29,
    'Montenegro',
    '15 minutes ago'
  ),
];
