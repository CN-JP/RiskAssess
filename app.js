const btn = document.getElementById('calculate');

btn.addEventListener('click', function() {

  let probability = document.querySelector('#probability').value;
  let impact = document.querySelector('#impact').value;

if(probability === '' || impact === ''){
  alert("Please fill out the input field(s)");
  return;
}


let RiskRating = (probability * impact);

RiskRating = RiskRating.toFixed(0);

document.querySelector('#result').innerHTML = RiskRating;

let status = '';

if (RiskRating < 3) {
  status = "Low Risk";
} else if (RiskRating >= 4 && RiskRating < 6) {
  status = "Medium Risk";
} else if (RiskRating >= 6 && RiskRating <= 9) {
  status = "High";
} else if (RiskRating > 9) {
  status = "Out of range. Enter a value according to the guideline.";
}

document.querySelector('.comment').innerHTML = `Result:
Risk Rating is <span id ="comment">${status}</span>`;

})
