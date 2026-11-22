# WT-9. Основы Node.js и публикация приложения на Render

Учебный проект выполнен на Node.js без Express и сторонних зависимостей.

## Требования

- Node.js;
- npm;
- Git (для публикации на GitHub).

## Локальный запуск (Windows PowerShell)

```powershell
cd .\wt-lab9-nodejs-denisenko
node --version
npm --version
npm install
npm start
```

Откройте в браузере:

- `http://localhost:3000/` — проверка работы сервера;
- `http://localhost:3000/api/products` — список товаров в JSON;
- `http://localhost:3000/test` — пример неизвестного маршрута (HTTP 404).

## Структура

```text
wt-lab9-nodejs-denisenko/
├── data/
│   └── products.json
├── app.js
├── utils.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Публикация

1. Создайте пустой репозиторий GitHub.
2. В папке проекта выполните:

```powershell
git init
git add .
git commit -m "Create Node.js application"
git branch -M main
git remote add origin https://github.com/ВАШ_ЛОГИН/ИМЯ_РЕПОЗИТОРИЯ.git
git push -u origin main
```

3. В Render создайте **New → Web Service** и подключите этот GitHub-репозиторий.
4. Установите Build Command: `npm install`.
5. Установите Start Command: `npm start`.
6. Тип сервиса: **Web Service**. Дополнительные переменные окружения для этой лабораторной не требуются.
7. После успешного Deploy проверьте публичный URL, `/api/products` и `/test`.

Приложение использует `process.env.PORT` и слушает `0.0.0.0`, поэтому рассчитано на запуск в Render.
# -wt-lab9-9nodejs-ivanov
