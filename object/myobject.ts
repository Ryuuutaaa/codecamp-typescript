const user = {
  name: "rafi",
  email: "rafi@gmail",
  isActive: true,
};

const createUser = ({ name: string, isPaid: boolean }) => {};

const newUser = { name: "rafi", isPaid: true };

createUser(newUser);

const createCoures = (): { name: string; isPaind: boolean } => {
  return { name: "rafi", isPaind: true };
};
