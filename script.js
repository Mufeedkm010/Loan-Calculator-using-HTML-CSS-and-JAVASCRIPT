document.getElementById('loan-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const amount = document.getElementById('amount').value;
    const interest = document.getElementById('interest').value;
    const years = document.getElementById('years').value;

    const principal = parseFloat(amount);
    const calculatedInterest = parseFloat(interest) / 100 / 12;
    const calculatedPayments = parseFloat(years) * 12;

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthlyPayment = (principal * x * calculatedInterest) / (x - 1);

    if (isFinite(monthlyPayment)) {
        document.getElementById('monthly-payment').textContent = monthlyPayment.toFixed(2);
        document.getElementById('total-payment').textContent = (monthlyPayment * calculatedPayments).toFixed(2);
        document.getElementById('total-interest').textContent = ((monthlyPayment * calculatedPayments) - principal).toFixed(2);
    } else {
        alert('Please check your numbers');
    }
});
