const countrySelect = document.getElementById("country");
const citiesSelect = document.getElementById("cities");
const selectedInfo = document.getElementById("selectedInfo");

// Об'єкт, що містить міста для кожної країни
const citiesByCountry = {
  ger: ["Berlin", "Munich", "Hamburg"],
  usa: ["New York", "Washington", "Boston", "Chicago"],
  ukr: ["Kyiv", "Lviv", "Kharkiv"],
};

// Функція для оновлення списку міст на основі обраної країни
function updateCities() {
  const selectedCountry = countrySelect.value;
  const cities = citiesByCountry[selectedCountry] || [];

  // Очищаємо список міст
  citiesSelect.innerHTML = "";

  // Додаємо міста до списку
  cities.forEach((city) => {
    const option = document.createElement("option");
    option.value = city;
    option.textContent = city;
    citiesSelect.appendChild(option);
  });

  // Отримуємо обране місто
  const selectedCity = citiesSelect.options[citiesSelect.selectedIndex].text;

  // Виводимо обрану країну та місто
  selectedInfo.textContent = `${
    countrySelect.options[countrySelect.selectedIndex].text
  }, ${selectedCity}`;
}

// Додаємо обробник події "change" до списку країн
countrySelect.addEventListener("change", updateCities);

// Викликаємо функцію для початкового оновлення списку міст та виведення інформації
updateCities();
