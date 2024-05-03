function addTwo(num: number) {
  return num + 2;
}

function getUser(val: string) {
  return val.toUpperCase();
}

function signUpUser(id: number, name: string, email: string, isPaid: boolean) {}

const isLoggin = (
  id: number,
  name: string,
  email: string,
  isPaid: boolean
) => {};


isLoggin(1, "rafi", "rafi@lv.com", true);
signUpUser(1, "rafi", "rafi@lv.com", true);
getUser("rafi");
addTwo(2);

export {};
