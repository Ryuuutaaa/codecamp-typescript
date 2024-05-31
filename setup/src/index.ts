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
  protected __courseCount = 1;

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
    return this.__courseCount;
  }

  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course cound should be more than 1");
    }
    this.__courseCount = courseNum;
  }
}

class SubUser extends User {
  isFamily: boolean = true;
  changeCoureCount() {
    this.__courseCount = 4;
  }
}

const hitest = new User("hh@gmail.com", "hitest");
// hitest.deleteToken();
