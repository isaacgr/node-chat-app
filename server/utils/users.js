class Users {
  constructor() {
    this.users = [];
  }
  addUser(id, name, room) {
    const user = { id, name, room };
    this.users.push(user);
    return user;
  }
  removeUser(id) {
    const user = this.getUser(id);
    if (user) {
      this.users = this.users.filter(user => {
        return user.id !== id;
      });
    }
    return user;
  }
  getUser(id) {
    return this.users.filter(user => {
      return user.id === id;
    })[0];
  }
  getUserList(room) {
    const users = this.users.filter(user => {
      return user.room === room;
    });
    const namesArray = users.map(user => {
      return user.name;
    });
    return namesArray;
  }
}

module.exports = { Users };
