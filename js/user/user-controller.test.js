const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test("add user to userController", () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  expect(userController.getUsers()).toContain(user);
});

test("remove user to userController", () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  userController.remove(user);
  expect(userController.users).not.toContain(user);
});

//add usuario que no está en lista
test("add user not previously in the list", () => {
  const user = new User(5678, "Laura", "laura@generation.org");

  userController.add(user);

  expect(userController.getUsers()).toContain(user);
});

//remove usuario que no está en lista
test("remove user not present in the list", () => {
  const user = new User(9999, "Pedro", "pedro@generation.org");

  const usersBefore = [...userController.getUsers()];

  userController.remove(user);

  expect(userController.getUsers()).toEqual(usersBefore);
});

//Pruebas para findByEmail
test("findByEmail() returns the user with a matching email", () => {
  const user = new User(2001, "Ana", "ana@generation.org");

  userController.add(user);

  expect(userController.findByEmail("ana@generation.org")).toEqual(user);
});

test("findByEmail() returns undefined when email does not exist", () => {
  expect(
    userController.findByEmail("inexistente@generation.org"),
  ).toBeUndefined();
});

//Pruebas para findById()
test("findById() returns the user with a matching id", () => {
  const user = new User(3001, "Carlos", "carlos@generation.org");

  userController.add(user);

  expect(userController.findById(3001)).toEqual(user);
});

test("findById() returns undefined when id does not exist", () => {
  expect(userController.findById(99999)).toBeUndefined();
});