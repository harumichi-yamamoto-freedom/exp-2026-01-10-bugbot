/**
 * TypeScriptのバグが含まれたコード
 */

// バグ: 型定義がない
interface User {
  id: number;
  name: string;
  email: string;
}

class UserService {
  private users: User[];

  constructor() {
    // バグ: 初期化されていない配列を使用
    this.users = [];
  }

  addUser(user: User): void {
    // バグ: 型チェックがない（emailがoptionalなのに必須として扱っている）
    if (!user.email) {
      throw new Error("Email is required");
    }
    this.users.push(user);
  }

  getUser(id: number): User {
    // バグ: 存在しない可能性があるユーザーを返す（undefinedの可能性）
    return this.users.find(u => u.id === id);
  }

  updateUser(id: number, updates: Partial<User>): void {
    // バグ: 型エラー - findがundefinedを返す可能性があるのに、そのまま使用
    const user = this.users.find(u => u.id === id);
    Object.assign(user, updates); // バグ: userがundefinedの場合にエラー
  }

  deleteUser(id: number): boolean {
    // バグ: 型エラー - indexOfの結果を適切にチェックしていない
    const index = this.users.indexOf(this.users.find(u => u.id === id));
    if (index > 0) { // バグ: index === -1の場合を考慮していない（>= 0 とすべき）
      this.users.splice(index, 1);
      return true;
    }
    return false;
  }
}

// バグ: 型が一致しない
function processNumber(value: string): number {
  return value; // バグ: stringをnumberとして返そうとしている
}

// バグ: 戻り値の型が宣言されていないが、undefinedを返す可能性がある
function divide(a: number, b: number) {
  if (b === 0) {
    return; // バグ: numberを返すべきなのにundefinedを返している
  }
  return a / b;
}

// メイン処理
const service = new UserService();

// バグ: 型が一致しない（emailが欠けている）
service.addUser({
  id: 1,
  name: "John Doe"
} as User);

// バグ: undefinedの可能性がある値をそのまま使用
const user = service.getUser(999);
console.log(user.name); // バグ: userがundefinedの場合にエラー

// バグ: 型エラー
const result = processNumber("123");
const divided = divide(10, 0);
console.log(divided.toFixed(2)); // バグ: dividedがundefinedの場合にエラー
