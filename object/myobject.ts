// const user = {
//   name: "rafi",
//   email: "rafi@gmail",
//   isActive: true,
// };

// const createUser = ({ name: string, isPaid: boolean }) => {};

// const newUser = { name: "rafi", isPaid: true };

// createUser(newUser);

// const createCoures = (): { name: string; isPaind: boolean } => {
//   return { name: "rafi", isPaind: true };
// };

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// const createUser = (user: User): User => {
//   return { name: "", email: "", isActive: true };
// };

// createUser({ name: "", email: "", isActive: true });

// type Point = {
//   y: number;
//   x: number;
// };

// const printCood = (pt: Point) => {
//   console.log("print disini", pt.x);
//   console.log("print disini", pt.y);
// };

// printCood({ x: 100, y: 200 });

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  credCardDeatails?: number;
};

let myUser: User = {
  _id: "23232",
  name: "rafi",
  email: "afds@gmail",
  isActive: true,
};

type cardNumber = {
  cardnumber: number;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

myUser.email = "iiii@gmail";

export {};
