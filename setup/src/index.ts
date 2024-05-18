class User {
  email: string;
  name: string;
  readonly city: string = "bali";

  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const rafi = new User("ryu@tgmail.com", "ruy");
// rafi.city = "bali";
