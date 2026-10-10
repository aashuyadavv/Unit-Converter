const categorySelect = document.getElementById("category");
const fromUnit = document.getElementById("from-unit");
const toUnit = document.getElementById("to-unit");
const valueInput = document.getElementById("value");
const result = document.getElementById("result");
const swapButton = document.getElementById("swap-btn");

const units = {
    length: ["Meter", "Kilometer", "Centimeter", "Millimeter", "Mile", "Foot", "Inch"],
    weight: ["Kilogram", "Gram", "Milligram", "Pound", "Ounce"],
    temperature: ["Celsius", "Fahrenheit", "Kelvin"]
};

