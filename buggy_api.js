/**
 * バグが含まれたAPIハンドラー
 */

// バグ: undefinedの可能性がある変数を参照
const apiKey = process.env.API_KEY;
const baseUrl = "https://api.example.com/v1";

async function fetchUserData(userId) {
  // バグ: エラーハンドリングがない
  const response = await fetch(`${baseUrl}/users/${userId}`);
  const data = await response.json();
  return data;
}

function processUserList(users) {
  const processed = [];
  // バグ: 配列がundefinedの場合にエラーになる
  for (let i = 0; i < users.length; i++) {
    processed.push({
      id: users[i].id,
      name: users[i].name.toUpperCase(), // バグ: nameがundefinedの場合にエラー
      email: users[i].email
    });
  }
  return processed;
}

function calculateAverage(numbers) {
  let sum = 0;
  // バグ: numbersが配列でない場合のチェックがない
  for (let num of numbers) {
    sum += num;
  }
  // バグ: ゼロ除算の可能性
  return sum / numbers.length;
}

function getUserById(users, id) {
  // バグ: 存在しない可能性があるメソッドを使用
  return users.findById(id);
}

// バグ: タイポ - console.logのスペルが間違っている
consle.log("API module loaded");

// メイン処理
async function main() {
  try {
    const userData = await fetchUserData(123);
    const users = processUserList(userData.users);
    const avg = calculateAverage([1, 2, 3, 4, 5]);
    
    // バグ: 未定義の変数を使用
    console.log(result);
    
    // バグ: 存在しないメソッドを呼び出し
    const user = getUserById(users, 1);
    user.getName(); // バグ: getNameメソッドが存在しない可能性
  } catch (error) {
    // バグ: エラーが再スローされない
  }
}

main();
