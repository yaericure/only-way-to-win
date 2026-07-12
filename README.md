# 致勝的唯一方法・教學導讀網站

《The Only Way to Win》(吉姆・洛爾 Jim Loehr 著,Hyperion 出版,英文原著、繁中導讀) 的教學導讀網站。內容為各章重點整理、白話解說與思考題,**並非原書全文或翻譯**;
原文引用僅限每章至多兩句短金句。

## 技術棧

- Vite 7 + React 19(HashRouter,可靜態部署)
- Tailwind CSS v4(class 策略深色模式)+ Lucide React
- react-markdown + remark-gfm + rehype-highlight

## 開發

```bash
npm install
npm run dev      # 開發伺服器
npm run build    # 產出 dist/
```

## 內容編輯

章節內容在 `src/content/NN.md`(00 起連續編號),frontmatter 需含
`title / label / part / order` 四欄(part 為「前言」「結語」時側欄平鋪)。
支援 callout:`> [!TIP]`、`> [!WARNING]`、`> [!NOTE]`、`> [!ADVANCED]`。
新增章節只要加 md 檔,側欄、路由、上下章導覽自動生成。

## 佈局與主題

三欄 docs 佈局(頂欄搜尋/側欄分組/右側 TOC scrollspy);主題色 purple。
GitHub 連結在 `src/components/Navbar.jsx` 的 `GITHUB_URL`。
