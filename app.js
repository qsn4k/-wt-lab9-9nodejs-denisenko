'use strict';

const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { getProductCount } = require('./utils');

// Загружаем данные из JSON-файла относительно папки проекта.
const productsFilePath = path.join(__dirname, 'data', 'products.json');
let products;

try {
    const productsFileContent = fs.readFileSync(productsFilePath, 'utf-8');
    products = JSON.parse(productsFileContent);

    if (!Array.isArray(products)) {
        throw new TypeError('Файл products.json должен содержать массив товаров.');
    }
} catch (error) {
    console.error('Не удалось загрузить data/products.json:', error.message);
    process.exit(1);
}

// Демонстрация чтения JSON и работы собственного модуля.
console.log('Загруженные товары:');
console.log(products);
console.log('Количество товаров:', getProductCount(products));

// Создаём HTTP-сервер средствами Node.js, без Express.
const server = http.createServer((req, res) => {
    // Главная страница нужна для быстрой проверки доступности сервера.
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/plain; charset=utf-8'
        });
        res.end('Сервер Node.js работает!');
        return;
    }

    // API возвращает содержимое products.json в формате JSON.
    if (req.method === 'GET' && req.url === '/api/products') {
        res.writeHead(200, {
            'Content-Type': 'application/json; charset=utf-8'
        });
        res.end(JSON.stringify(products));
        return;
    }

    // Для всех неизвестных маршрутов возвращаем HTTP 404 и JSON-ошибку.
    res.writeHead(404, {
        'Content-Type': 'application/json; charset=utf-8'
    });
    res.end(JSON.stringify({ error: 'Маршрут не найден' }));
});

// Render передаёт порт через PORT; локально по умолчанию используется 3000.
const port = Number(process.env.PORT) || 3000;

server.listen(port, '0.0.0.0', () => {
    console.log(`Сервер запущен на порту ${port}`);
});
