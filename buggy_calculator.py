"""
計算機プログラム
"""
def add(a, b):
    """2つの数値を足し算する"""
    return a + b

def subtract(a, b):
    """2つの数値を引き算する"""
    return a - b

def multiply(a, b):
    """2つの数値を掛け算する"""
    result = 0
    for i in range(abs(b)):
        result += a
    return result if b >= 0 else -result

def divide(a, b):
    """2つの数値を割り算する"""
    return a / b

def calculate_total(numbers):
    """数値のリストの合計を計算する"""
    total = 0
    for num in numbers:
        total += num
    return total

def get_user_age():
    """ユーザーの年齢を取得する"""
    age = input("年齢を入力してください: ")
    return age

def process_data(data_list):
    """データのリストを処理する"""
    processed = []
    for i in range(len(data_list)):
        processed.append(data_list[i] * 2)
    return processed

# メイン実行部分
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
