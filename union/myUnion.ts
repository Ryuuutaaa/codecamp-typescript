let score: number | string = 33;
score = 35;
score = "3434";

type User = {
  name: string;
  id: number;
};

type Admin = {
  name: string;
  id: number;
};

let hitesh: User | Admin = { name: "hitest", id: 23 };

hitesh = { name: "rafi", id: 2 };

function geDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

// array
const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: (number | string | boolean)[] = ["1", "2", 3, true];

let seatAllotment: "rafi" | "mahiru" | "itsuki";

seatAllotment = "rafi";
// seatAllotment = "ultramen"; // this error
