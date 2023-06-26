class User {
  constructor() {
    this.name = '';
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
}

const user = new User();
export default user;
