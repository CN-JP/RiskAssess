const btn = document.getElementById('calculate');

btn.addEventListener('click', function() {

  let probability = document.getElementById('probability').value;
  let impact = document.getElementById('impact').value;

if(probability === '' || impact === ''){
  alert("Please fill out the input field(s)");
  return;
}


let RiskRating = (probability * impact);

RiskRating = RiskRating.toFixed(0);

document.getElementById('result').innerHTML = RiskRating;

let status = '';

if (RiskRating <= 3) {
  status = "Low";
} else if (RiskRating > 3 && RiskRating <= 15) {
  status = "Medium";
} else if (RiskRating > 15 && RiskRating <= 25) {
  status = "High";
} else {
  status = "Out of range. Enter a value according to the guideline.";
}

document.querySelector('.comment').innerHTML = `Result:
Risk Rating is <span id ="comment">${status}</span>`;


// recommendation
let decision = '';

if (status = "Low") {
  decision = "Keep a tab on it!";
} else if (status = "Medium") {
  decision = "Watch closely and ensure adequate controls are present!";
} else if (status = "High") {
  decision = "Urgent measures to be taken to address the risk!";
}

document.querySelector('.recommendation-text').innerHTML = `Recommendation: ${decision}`;


})
