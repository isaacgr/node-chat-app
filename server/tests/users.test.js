const { Users } = require("../utils/users");
const expect = require("expect");

describe("Users", () => {
  it("should create a new user", () => {
    const users = new Users();
    const user = {
      id: "123",
      name: "Isaac",
      room: "Swag"
    };
    const responseUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });
});
