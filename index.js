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

function populateUnits(unitList) {
    fromUnit.innerHTML = "";
    toUnit.innerHTML = "";

    unitList.forEach(function(unit) {
        const option1 = document.createElement("option");
        option1.value = unit;
        option1.textContent = unit;

        const option2 = option1.cloneNode(true);

        fromUnit.appendChild(option1);
        toUnit.appendChild(option2);
    });
}
populateUnits(units.length);

categorySelect.addEventListener("change", function() {
    const selectedCategory = categorySelect.value;
    populateUnits(units[selectedCategory]);
});
