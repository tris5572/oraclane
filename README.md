# Oraclane

Oraclane (おらくれーん)は、道路の車線減少・車線分岐を地図上に表示してドライブをサポートする Web アプリです。

https://tris5572.github.io/oraclane/

<img width="510" alt="Oraclaneのスクリーンショット" src="https://github.com/user-attachments/assets/925f6302-1a32-4281-bf1d-74712588726c" />

クルマを運転中、突然2車線から1車線になったり、2車線の片方が右折専用レーンになったりして困った経験はないでしょうか。そのような地点を地図上にプロットし、ドライブの計画段階で要注意箇所を把握できるようにしたのがこのアプリです。

アプリ名は Oracle（神託）と Lane（車線）を合わせた造語です。

## 機能

地図上のアイコン（黄色い車線減少 または 青い分岐）をクリックすると、詳細な情報が表示されます。

## 備考

### 表示内容の方針

「走行してきたレーンに対してどのような車線になるか」を基準に表示しています。交差点内の車線を表示しているわけではありません。したがって下の図のような表示とします。

![分岐時の表示の方針](/docs/images/lane-image-01.svg)

分岐直後に分岐側の車線が減少するケースでは、下の図のように車線減少ではなく分岐として表示します。

![分岐直後の車線減少](/docs/images/lane-image-02.svg)

以下のような場合は基本的にデータに含めず対応しません。

- 当たり前すぎる分岐。2車線がT字路で左右に分かれるなど。
- 登坂車線の終了。

### アプリでやらないこと

主にデータ整備のマンパワーの観点から、以下のことはやりません。

- 全国・全地点の網羅。
- 道路構造変更への即時反映。

## 技術・開発面

### 使用技術

- [TypeScript](https://www.typescriptlang.org/) - プログラミング言語
- [React](https://react.dev/) - フレームワーク
- [MapLibre GL JS](https://maplibre.org/) - 地図描画
- [Jotai](https://jotai.org/) - 状態管理
- [Biome](https://biomejs.dev/) - コードフォーマット・静的解析
- [Vite](https://vitejs.dev/) - ビルドツール
- [pnpm](https://pnpm.io/) - パッケージマネージャー

CI/CD は GitHub Actions で構築しており、アプリ自体を GitHub Pages へデプロイしています。

### 開発時のコマンド

```sh
# ローカル実行
pnpm dev # または pnpm run dev 
# lint
pnpm check
# lint - 修正
pnpm fix
```
