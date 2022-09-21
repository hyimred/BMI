 function szamitas() {
    let BMI = 0;
    let magassag = 0;
    let testsuly = 0;
    let ideal = "";

    testsuly = parseFloat(document.getElementById("testsuly").value);
    magassag = parseFloat(document.getElementById("magassag").value);
    BMI = Math.round(parseFloat(testsuly / Math.pow((magassag / 100),2))*100)/100;

    console.log(testsuly);
    console.log(magassag);
    console.log(BMI);

    document.getElementById("bmi").textContent = BMI;

    if (BMI <= 18.5) {
        eredmeny = "sovany";
    } else if (BMI <= 24.9) {
        eredmeny = "normal";;
    } else if (BMI <= 29.9) {
        eredmeny = "tulsuly";
    } else if (BMI <= 34.9) {
        eredmeny = "1_foku";
    } else if (BMI <= 39.9) {
        eredmeny = "2_foku";
    } else {
        eredmeny = "3_foku";
    }
    
    document.getElementById("sovany").style.backgroundColor = "white";
    document.getElementById("sovany").style.color = "black";
    document.getElementById("normal").style.backgroundColor = "white";
    document.getElementById("normal").style.color = "black";
    document.getElementById("tulsuly").style.backgroundColor = "white";
    document.getElementById("tulsuly").style.color = "black";
    document.getElementById("1_foku").style.backgroundColor = "white";
    document.getElementById("1_foku").style.color = "black";
    document.getElementById("2_foku").style.backgroundColor = "white";
    document.getElementById("2_foku").style.color = "black";
    document.getElementById("3_foku").style.backgroundColor = "white";
    document.getElementById("3_foku").style.color = "black";

    document.getElementById(eredmeny).style.backgroundColor = "#D86B12";
    document.getElementById(eredmeny).style.color = "white";

    if (magassag <= 140) {
        ideal = "34.9 kg vagy kevesebb";
    } else if (magassag <= 150) {
        ideal = "33.5 - 49.9 kg"
    } else if (magassag <= 160) {
        ideal = "43.1 - 61.6 kg"
    } else if (magassag <= 170) {
        ideal = "53 - 73.9 kg";
    } else if (magassag <= 180) {
        ideal = "63 - 85.7 kg";
    } else if (magassag <= 190) {
        ideal = "72.6 - 98 kg"
    } else if (magassag <= 200) {
        ideal = "82.5 - 109.7 kg"
    } else {
        ideal = "Több mint 85 kg"
    }

    document.getElementById("szelsoertek").textContent = ideal;
    
}

const btn = document.getElementById("szamit");
btn.addEventListener("click", szamitas);
