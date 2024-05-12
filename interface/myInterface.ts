interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId: number;
  startTrail(): string;
  getCouppon(coupponName: string, value: number): number;
}

interface User {
  githubToke: number;
}

interface Admin extends User {
  role: "admin" | "student" | "teacher";
}

// perbedaan menggunakan interface dan type adalah interface bisa menggunakan extends kepada parentnya sedangkan type tidak bisa menggunakan extend

const hitest: Admin = {
  dbId: 33,
  email: "rea@gmail",
  userId: 23,
  role: "admin",
  googleId: 23,
  startTrail: () => {
    return "haii";
  },
  getCouppon(name: "larisacipiont", off: 10) {
    return 34;
  },
  githubToke: 34,
};
