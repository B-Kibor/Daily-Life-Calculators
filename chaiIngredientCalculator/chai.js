function calculateChai() {
  const cupsInput = document.getElementById('cups');
  const numberOfCups = parseInt(cupsInput.value);

  if (isNaN(numberOfCups) || numberOfCups <= 0) {
    alert("Please enter a valid positive number.");
    return;
  }

  const water = 200 * numberOfCups;
  const milk = 50 * numberOfCups;
  const tea = numberOfCups;
  const sugar = 2 * numberOfCups;

  document.getElementById('chai-ingredients').innerHTML = `
    Water: ${water} ml<br>
    Milk: ${milk} ml<br>
    Tea Leaves (Majani): ${tea} tablespoons<br>
    Sugar (Sukari): ${sugar} teaspoons
  `;
  document.getElementById('chai-results').style.display = 'block';
}