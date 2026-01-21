interface User {
  id: number;
  name: string;
  email: string;
}

class UserService {
  private users: User[];

  constructor() {
    this.users = [];
  }

  addUser(user: User): void {
    if (!user.email) {
      throw new Error("Email is required");
    }
    this.users.push(user);
  }

  getUser(id: number): User {
    return this.users.find(u => u.id === id);
  }

  updateUser(id: number, updates: Partial<User>): void {
    const user = this.users.find(u => u.id === id);
    Object.assign(user, updates);
  }

  deleteUser(id: number): boolean {
    const index = this.users.indexOf(this.users.find(u => u.id === id));
    if (index >= 0) {
      this.users.splice(index, 1);
      return true;
    }
    return false;
  }
}

function processNumber(value: string): number {
  return value;
}

function divide(a: number, b: number) {
  if (b === 0) {
    return;
  }
  return a / b;
}

// メイン処理
const service = new UserService();

service.addUser({
  id: 1,
  name: "John Doe"
} as User);

const user = service.getUser(999);
console.log(user.name);

const result = processNumber("123");
const divided = divide(10, 0);
console.log(divided.toFixed(2));
