# Bugbot テスト用サンプルコード

このディレクトリには、CursorのBugbotをテストするための意図的にバグを含むサンプルコードが含まれています。

## ファイル一覧

### 1. `buggy_calculator.py`
Pythonの計算機プログラム。以下のバグが含まれています：
- 引き算関数が実際には足し算を実行している
- ゼロ除算チェックがない
- 未定義変数の使用
- 存在しない関数の呼び出し
- 戻り値がない関数
- 範囲外アクセスの可能性

### 2. `buggy_api.js`
JavaScriptのAPIハンドラー。以下のバグが含まれています：
- 未定義変数の参照
- エラーハンドリングの欠如
- null/undefinedチェックがない
- 存在しないメソッドの呼び出し
- タイポ（consle.log）

### 3. `buggy_typescript.ts`
TypeScriptコード。以下のバグが含まれています：
- 型エラー
- undefinedチェックの欠如
- 型が一致しない戻り値
- 未初期化変数の使用

## 使用方法

各ファイルをBugbotで分析して、バグを検出できるかテストしてください。

```bash
# Pythonファイルのチェック
python buggy_calculator.py

# JavaScriptファイルのチェック
node buggy_api.js

# TypeScriptファイルのチェック
tsc buggy_typescript.ts
```

## 期待される動作

これらのファイルは実行時にエラーを発生させるか、または期待とは異なる動作をします。Bugbotがこれらの問題を検出できるか確認してください。
