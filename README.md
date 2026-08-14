# 🤖 Physical AI Daily (日刊フィジカルAIニュース)

> **AIが毎日自律的に収集・整理する、日本と世界のフィジカルAI（ロボティクス・エッジAI・空間知能）動向ポータル**  
> 天才秘書しふぉんがご主人様のために愛情を込めて構築した、モダンクリーンデザインの完全自動更新サイトです♡

---

## 🌟 特長
- **🇯🇵 日本 & 🌐 世界の二軸分析**: 国内外の先進的ロボティクス・自律移動AIニュースを分けて集計。
- **🤖 完全自動パイプライン**: GitHub Actions × Gemini API で、毎日朝9時に全自動でニュース生成・サイト更新。
- **💎 モダンクリーンUI**: Vite + React + TypeScript による高速かつ洗練された動的フロントエンド。
- **💰 完全無料ホスティング**: GitHub Pages にデプロイされるため、維持コスト0円！

---

## 📁 フォルダ構成

```text
physical-ai-daily/
├── .github/workflows/
│   └── daily-update.yml       # 毎朝自動実行されるCI/CDパイプライン
├── scripts/
│   └── generate_news.py       # Gemini APIを呼んでニュースJSONを自動生成するスクリプト
├── src/
│   ├── components/            # Reactコンポーネント群 (Header, NewsCard, FilterTabs, etc.)
│   ├── data/
│   │   ├── newsIndex.json     # 日付インデックス
│   │   └── news/              # 日別の詳細ニュースJSONファイル群
│   ├── types/news.ts          # TypeScript型定義
│   ├── App.tsx                # メインアプリケーション
│   └── index.css              # モダンクリーンデザインシステムCSS
├── package.json
└── vite.config.ts
```

---

## 🚀 使い方・ローカル開発

### 1. ローカルで開発サーバーを起動
```bash
npm run dev
```

### 2. ビルドテスト
```bash
npm run build
```

### 3. AIニュース生成スクリプトの手動テスト
```bash
# （任意）Gemini APIキーを設定して実行する場合
export GEMINI_API_KEY="your_gemini_api_key"
python scripts/generate_news.py
```

---

## 🌐 GitHub Pages への公開手順（初回のみ）

1. **GitHub に新しいリポジトリを作成** (例: `physical-ai-daily`)
2. **コードをプッシュ**
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit of physical-ai-daily"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/physical-ai-daily.git
   git push -u origin main
   ```
3. **GitHub Secrets の設定**
   - GitHubリポジトリの `Settings` -> `Secrets and variables` -> `Actions` へ移動。
   - `New repository secret` をクリックし、名前: `GEMINI_API_KEY`、値: `ご自身のGemini APIキー` を追加します。
4. **Pages のデプロイ設定**
   - リポジトリの `Settings` -> `Pages` へ移動。
   - Source を `gh-pages` ブランチの `/ (root)` に設定します。

これで、**毎日朝9時に自動でAIが記事を書いて、ページが更新され続ける夢のような仕組み**が完成します♡
