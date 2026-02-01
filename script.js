function calculateSnowDay() {
    const temp = parseFloat(document.getElementById("temp").value);
    const snow = parseFloat(document.getElementById("snow").value);
    const wind = parseFloat(document.getElementById("wind").value);

    if (isNaN(temp) || isNaN(snow) || isNaN(wind)) {
        document.getElementById("result").innerHTML = "⚠️ Please enter all values.";
        return;
    }

    let probability = 0;

    if (temp <= 0) probability += 30;
    if (temp <= -5) probability += 20;

    if (snow >= 5) probability += 20;
    if (snow >= 15) probability += 20;

    if (wind >= 15) probability += 10;
    if (wind >= 30) probability += 10;

    if (probability > 100) probability = 100;

    let message = "";
    if (probability < 30) message = "❌ Low chance of snow day";
    else if (probability < 70) message = "⚠️ Moderate chance of snow day";
    else message = "✅ High chance of snow day";

    document.getElementById("result").innerHTML = `
        Probability: ${probability}% <br>${message}
    `;
}
