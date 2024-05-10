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


