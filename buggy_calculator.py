"""
バグが含まれた計算機プログラム
"""
def add(a, b):
    """2つの数値を足し算する"""
    return a + b

def subtract(a, b):
    """2つの数値を引き算する"""
    # バグ: 引き算ではなく足し算を返している
    return a + b

def multiply(a, b):
    """2つの数値を掛け算する"""
    result = 0
    for i in range(b):
        result += a
    # バグ: ループの範囲が間違っている（負の数の場合に無限ループになる可能性）
    return result

def divide(a, b):
    """2つの数値を割り算する"""
    # バグ: ゼロ除算チェックが不十分
    return a / b

def calculate_total(numbers):
    """数値のリストの合計を計算する"""
    total = 0
    for num in numbers:
        total += num
    # バグ: return文がない（Noneが返される）
    # return total

def get_user_age():
    """ユーザーの年齢を取得する"""
    age = input("年齢を入力してください: ")
    # バグ: 文字列を整数に変換していない
    return age

def process_data(data_list):
    """データのリストを処理する"""
    processed = []
    for i in range(len(data_list) + 1):  # バグ: 範囲外アクセスの可能性
        processed.append(data_list[i] * 2)
    return processed

# メイン実行部分
if __name__ == "__main__":
    # バグ: 未定義の変数を使用
    print(f"計算結果: {result}")
    
    # テストケース
    print("10 + 5 =", add(10, 5))
    print("10 - 5 =", subtract(10, 5))  # 正しくは5だが、15が返される
    print("4 * 3 =", multiply(4, 3))
    print("10 / 2 =", divide(10, 2))
    print("10 / 0 =", divide(10, 0))  # ゼロ除算エラー
    
    numbers = [1, 2, 3, 4, 5]
    total = calculate_total(numbers)  # Noneが返される
    print(f"合計: {total}")
    
    # バグ: 存在しない関数を呼び出し
    result = non_existent_function(42)
