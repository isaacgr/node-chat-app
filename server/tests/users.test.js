const { Users } = require("../utils/users");
const expect = require("expect");

describe("Users", () => {
  let users;

  beforeEach(() => {
    users = new Users();
    users.users = [
      {
        id: "1",
        name: "Mike",
        room: "Node Course"
      },
      {
        id: "2",
        name: "Jen",
        room: "React Course"
      },
      {
        id: "3",
        name: "Steve",
        room: "Node Course"
      }
    ];
  });

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

  it("should remove a user", () => {
    const removedUser = users.removeUser("1");
    expect(removedUser.name).toEqual("Mike");
  });

  it("should not remove a user", () => {
    const removedUser = users.removeUser("69");
    expect(removedUser).toBeFalsy;
  });

  it("should find user", () => {
    const user = users.getUser("1");
    expect(user.name).toBe("Mike");
  });

  it("should not find a user", () => {
    const user = users.getUser("69");
    expect(user).toBeFalsy;
  });

  it("should return names for node course", () => {
    const userList = users.getUserList("Node Course");
    expect(userList).toEqual(["Mike", "Steve"]);
  });

  it("should return names for react course", () => {
    const userList = users.getUserList("React Course");
    expect(userList).toEqual(["Jen"]);
  });
});
