# Студия звукозаписи "Sound Studio"
## Веб-приложение на React

В моей студии работает персонал из нескольких человек, включая меня. 
Мы можем предоставлять услуги звукорежиссуры (запись, сведение, мастеринг, продакшн и т.д), 
а так же предоставлять список курсов по звуку (видеоролики интенсивов по сведению, мастерингу, записи и т.д.). 
Мы продаём свои услуги через сайт, где пользователь, зарегистрировавшись, 
добавляет в корзину понравившиеся ему товары (услуги/курсы), после чего оплачивает.

## Структура сайта ./src

### 0. Корневая папка (./src)
- `App.js` - корневой компонент приложения
- `index.js` - файл рендера приложения в корневой элемент

### 1. Страницы (директория `./src/pages`):

### 2. Список компонентов (директория `./src/components`):

### 3. Список статических ресурсов (`./src/assets`)
- `images` - изображения
- `fonts` - шрифты

### 4. Список глобальных стилей (`./src/styles`)
- `style.css` - глобальный css, который может использовать App.js или index.js

### 5. Список файлов с данными. (`./src/data`)
- `JSON`
- `YAML`
- `CSV`

### 6. Список вспомогательных функций и модулей. (`./src/utils`)
- ``

## Запуск проекта
Переходим в директорию проекта и выполняем команду `npm start`