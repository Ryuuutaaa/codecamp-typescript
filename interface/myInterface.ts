interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId: number;
  startTrail(): string;
  getCouppon(coupponName: string, value: number): number;
}

const hitest: User = {
  dbId: 33,
  email: "rea@gmail",
  userId: 23,
  googleId: 23,
  startTrail: () => {
    return "haii";
  },
  getCouppon(name: "larisacipiont", off: 10) {
    return 34;
  },
};
