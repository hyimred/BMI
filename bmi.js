 function szamitas() {
    let BMI = 0;
    let magassag = 0;
    let testsuly = 0;

    testsuly = parseFloat(document.getElementById("testsuly").value);
    magassag = parseFloat(document.getElementById("magassag").value);
    BMI = Math.round(parseFloat(testsuly / Math.pow((magassag / 100),2))*100)/100;

    console.log(testsuly);
    console.log(magassag);
    console.log(BMI);

    document.getElementById("bmi").textContent = BMI;

}

function tablazat(params) {
    
}

const btn = document.getElementById("szamit");
btn.addEventListener("click", szamitas);
