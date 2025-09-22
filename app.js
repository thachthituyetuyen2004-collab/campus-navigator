// Tạo bản đồ, trung tâm campus
var map = L.map('map').setView([25.0416, 121.4219], 17);

// Thêm layer OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
}).addTo(map);

// Danh sách tòa nhà và tầng
const campusBuildings = [
  {
    name: "Gym",
    lat: 25.041812412955874,
    lng: 121.4213935865065,
    floors: [
      { floor: 1, function: "Văn phòng" },
      { floor: 2, function: "Phòng học" }
    ]
  },
  {
    name: "Thư viện",
    lat: 25.041495630733,
    lng: 121.42251866365939,
    floors: [
      { floor: 1, function: "Sảnh" },
      { floor: 2, function: "Khu đọc sách" }
    ]
  }
];

// Thêm marker và popup hiển thị tầng
campusBuildings.forEach(building => {
  let popupContent = `<b>${building.name}</b><br><ul>`;
  building.floors.forEach(floor => {
    popupContent += `<li>Tầng ${floor.floor}: ${floor.function}</li>`;
  });
  popupContent += `</ul>`;

  L.marker([building.lat, building.lng])
   .addTo(map)
   .bindPopup(popupContent);
});
