const categorySelect = document.getElementById("category");
const fromUnit = document.getElementById("from-unit");
const toUnit = document.getElementById("to-unit");
const valueInput = document.getElementById("input-value");
const result = document.getElementById("result");
const swapButton = document.getElementById("swap-btn");
const resetButton = document.getElementById("reset-btn");

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

function convertUnits(value, from, to, category) {
    if (category === "length") {
        const meters = {
            Meter: 1,
            Kilometer: 1000,
            Centimeter: 0.01,
            Millimeter: 0.001,
            Mile: 1609.344,
            Foot: 0.3048,
            Inch: 0.0254
        };

        return value * meters[from] / meters[to];
    }

    if (category === "weight") {
    const weights = {
        Kilogram: 1000,
        Gram: 1,
        Milligram: 0.001,
        Pound: 453.59237,
        Ounce: 28.349523125
    };

    return value * weights[from] / weights[to];
}
if (category === "temperature") {
    let celsius;

    if (from === "Celsius") {
        celsius = value;
    } else if (from === "Fahrenheit") {
        celsius = (value - 32) * 5 / 9;
    } else if (from === "Kelvin") {
        celsius = value - 273.15;
    }

    if (to === "Celsius") {
        return celsius;
    } else if (to === "Fahrenheit") {
        return (celsius * 9 / 5) + 32;
    } else if (to === "Kelvin") {
        return celsius + 273.15;
    }
}

}
valueInput.addEventListener("input", updateResult);
fromUnit.addEventListener("change", updateResult);
toUnit.addEventListener("change", updateResult);


function updateResult() {
    const value = Number(valueInput.value);
    const category = categorySelect.value;
    const from = fromUnit.value;
    const to = toUnit.value;
    const resultUnit = document.getElementById("result-unit");
    const message = document.getElementById("message");

    if (valueInput.value === "" || !Number.isFinite(value)) {
        result.textContent = "—";
        resultUnit.textContent = "Your result will appear here";
        message.textContent = "Enter a valid number to get started.";
        return;
    }

    const convertedValue = convertUnits(value, from, to, category);

    if (!Number.isFinite(convertedValue)) {
        result.textContent = "—";
        resultUnit.textContent = "Conversion unavailable";
        message.textContent = "Please check your selected units.";
        return;
    }

    const formattedResult = Number(convertedValue.toFixed(4));

    result.textContent = formattedResult;
    resultUnit.textContent = to;
    message.textContent = `${value} ${from} = ${formattedResult} ${to}`;
}

swapButton.addEventListener("click", function() {
    const previousFrom = fromUnit.value;

    fromUnit.value = toUnit.value;
    toUnit.value = previousFrom;

    updateResult();
});
resetButton.addEventListener("click", function() {
    valueInput.value = "";
    categorySelect.value = "length";

    populateUnits(units.length);

    result.textContent = "—";
    document.getElementById("result-unit").textContent =
        "Your result will appear here";

    document.getElementById("message").textContent =
        "Enter a value to get started.";
});