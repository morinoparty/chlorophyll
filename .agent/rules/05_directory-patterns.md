## ディレクトリ配置規則

- app/components/に全体で利用するコンポーネントを実装します。
- app/lib/にライブラリを実装します。

各ルート内に以下のディレクトリを配置してください。
-`aaa/bbb/ccc/-components/`
    - ルート内で使用されるUIコンポーネント
-`aaa/bbb/ccc/-api/`
    - ルート内で使用されるAPI通信のためのHooks
    - TanStack QueryなどのAPIはここで使用する
-`aaa/bbb/ccc/-types/`
    - ルート内で使用される型定義
-`aaa/bbb/ccc/-functions/`
    - ルート内で使用される関数
    - 各関数ごとに単体テストを実装する
