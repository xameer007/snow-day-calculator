function calculateSnowDay() {
    const temp = parseFloat(document.getElementById("temp").value);
    const snow = parseFloat(document.getElementById("snow").value);
    const wind = parseFloat(document.getElementById("wind").value);
    const road = parseFloat(document.getElementById("road").value);
  
    if ([temp, snow, wind].some(isNaN)) {
      showResult(0, "⚠️ Please fill in all required fields.");
      return;
    }
  
    let score = 0;
  
    // Temperature impact (max 40)
    if (temp <= 0) score += 15;
    if (temp <= -5) score += 10;
    if (temp <= -10) score += 15;
  
    // Snowfall impact (max 35)
    if (snow >= 5) score += 10;
    if (snow >= 15) score += 15;
    if (snow >= 30) score += 10;
  
    // Wind impact (max 15)
    if (wind >= 15) score += 7;
    if (wind >= 30) score += 8;
  
    // Road conditions (max 10)
    score += road;
  
    if (score > 100) score = 100;
  
    let message = "";
    if (score < 25) message = "❌ Very low chance of a snow day.";
    else if (score < 50) message = "⚠️ Low to moderate chance of a snow day.";
    else if (score < 75) message = "✅ High chance of a snow day.";
    else message = "🔥 Very high chance of a snow day!";
  
    showResult(score, message);
  }
  
  function showResult(score, message) {
    document.getElementById("probability").innerText = score + "%";
    document.getElementById("message").innerText = message;
    document.getElementById("progress-bar").style.width = score + "%";
  }
  
  function resetForm() {
    document.getElementById("temp").value = "";
    document.getElementById("snow").value = "";
    document.getElementById("wind").value = "";
    document.getElementById("road").value = "0";
    showResult(0, "Enter values to calculate snow day probability.");
  }
  