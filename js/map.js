// Создаем карту, устанавливаем дефолтную точку обзора и дефолтный зум
const map = L.map('map').setView([59.9563220, 30.3101217], 14);

// Устанавливаем маркер на ИТМО
const marker = L.marker([59.9563220, 30.3101217]).addTo(map);

// Биндим поп-ап к маркеру
marker.bindPopup("<b>Вот он...</b>");

// Различные настройки карты
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Поставьте зачет пожалуйста ну...', // Подпись в уголке карты
    maxZoom: 17, // Максимально возможный зум
    id: 'mapbox/streets-v11', // Стиль карты
    tileSize: 512, // Размер одной "плитки" карты
    zoomOffset: -1, // Модификация зума относительно tileSize
    accessToken: 'pk.eyJ1IjoiZWlseXkiLCJhIjoiY2t3ejdyNXdsMHY5bjJvbGExNnRqMnJrdyJ9.8NuTEQxfQUoFhnyAK2CD8A' // api token
}).addTo(map);