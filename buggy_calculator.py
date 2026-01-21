def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b

def calculate_total(numbers):
    total = 0
    for num in numbers:
        total += num
    return total

def get_user_age():
    age = input("年齢を入力してください: ")
    return int(age)

def process_data(data_list):
    processed = []
    for i in range(len(data_list)):
        processed.append(data_list[i] * 2)
    return processed

if __name__ == "__main__":
    print(f"計算結果: {result}")
    
    print("10 + 5 =", add(10, 5))
    print("10 - 5 =", subtract(10, 5))
    print("4 * 3 =", multiply(4, 3))
    print("10 / 2 =", divide(10, 2))
    print("10 / 0 =", divide(10, 0))
    
    numbers = [1, 2, 3, 4, 5]
    total = calculate_total(numbers)
    print(f"合計: {total}")
    
    result = non_existent_function(42)
