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
  private __course = 1;

  private deleteToken() {
    console.log("Token delete");
  }

  constructor(
    public email: string,
    public name: string // private userId: string
  ) {}

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this.__course;
  }

  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course cound should be more than 1");
    }
    this.__course = courseNum;
  }
}

const hitest = new User("hh@gmail.com", "hitest");
hitest.deleteToken();
