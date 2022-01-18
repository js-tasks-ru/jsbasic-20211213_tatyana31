function showSalary(users, age) {
  let youngUsers = users.filter(user => user.age <= age);
  let resultStrings = youngUsers.map(user => user.name + ", " + user.balance);
  return resultStrings.join("\n");
}