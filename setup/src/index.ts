// class User {
//   public email: string;
//   private name: string;
//   private readonly city: string = "bali";

//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

class User {
  constructor(
    public email: string,
    public name: string
  ) // private userId: string
  {}
}

const rafi = new User("ryu@tgmail.com", "ryutaa");
// rafi.city;
