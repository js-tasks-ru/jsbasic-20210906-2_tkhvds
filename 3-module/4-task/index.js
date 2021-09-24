
function showSalary(users, age) {
  return users.filter(item => item.age <= age)
  .map(value => value.name + ', ' + value.balance).join('\n');
}
