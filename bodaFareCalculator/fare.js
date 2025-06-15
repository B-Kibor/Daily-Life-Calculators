function calculateBodaFare() {
  // Get the distance input value (add an input field with id="distance" in your HTML)
  const distanceInput = document.getElementById('distance');
  const distance = parseFloat(distanceInput.value);

  if (isNaN(distance) || distance <= 0) {
    alert("Tafadhali ingiza umbali halali (nambari chanya zaidi ya sifuri).");
    return;
  }

  const baseFare = 50;
  const perKm = 15;
  const distanceFare = distance * perKm;
  const total = baseFare + distanceFare;

  document.getElementById('boda-results').innerHTML = `
    Uko kwote? Io ni: ${distance.toFixed(2)} km<br>
    Ukikalia Pikipiki: KES ${baseFare.toFixed(2)}<br>
    Mpaka Uko: KES ${distanceFare.toFixed(2)}<br>
    <span class="total">Total: KES ${total.toFixed(2)}</span><br><br>
    Panda Pikipiki!
  `;
  document.getElementById('boda-results').style.display = 'block';
}