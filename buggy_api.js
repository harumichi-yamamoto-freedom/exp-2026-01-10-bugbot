const apiKey = process.env.API_KEY;
const baseUrl = "https://api.example.com/v1";

async function fetchUserData(userId) {
  const response = await fetch(`${baseUrl}/users/${userId}`);
  const data = await response.json();
  return data;
}

function processUserList(users) {
  const processed = [];
  for (let i = 0; i < users.length; i++) {
    processed.push({
      id: users[i].id,
      name: users[i].name.toUpperCase(),
      email: users[i].email
    });
  }
  return processed;
}

function calculateAverage(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum / numbers.length;
}

function getUserById(users, id) {
  return users.find(u => u.id === id);
}

consle.log("API module loaded");

async function main() {
  try {
    const userData = await fetchUserData(123);
    const users = processUserList(userData.users);
    const avg = calculateAverage([1, 2, 3, 4, 5]);
    
    console.log(result);
    
    const user = getUserById(users, 1);
    user.name;
  } catch (error) {
    console.error('Error in main:', error);
    throw error;
  }
}

main();
