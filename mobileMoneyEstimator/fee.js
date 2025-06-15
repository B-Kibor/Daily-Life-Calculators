function calculateMobileFee() {
  // Get the amount input value (add an input field with id="amount" in your HTML)
  const amountInput = document.getElementById('amount');
  const amount = parseFloat(amountInput.value);

  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid number of distance).");
    return;
  }

  const feePercent = 0.015;
  let fee = amount * feePercent;

  if (fee < 10) fee = 10;
  else if (fee > 70) fee = 70;

  const total = amount + fee;

  document.getElementById('mobile-results').innerHTML = `
    Sending: KES ${amount.toFixed(2)}<br>
    Calculated Transaction Fee: KES ${fee.toFixed(2)}<br>
    <span class="total">Total amount to be debited: KES ${total.toFixed(2)}</span><br><br>
    Send Money Securely!
  `;
  document.getElementById('mobile-results').style.display = 'block';
}