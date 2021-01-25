// login button event handler
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function() {
    const loginArea = document.getElementById('login-area')
    loginArea.style.display = 'none';
    const trasactionArea = document.getElementById('transaction-area');
    trasactionArea.style.display = 'block';
})

// deposit button event handler
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function() {
    const depositNumber = getInputText('depositAmount');


    updateSpanText('currentDeposit', depositNumber);
    updateSpanText('currentBalance', depositNumber);
    document.getElementById('depositAmount').value = '';
})

// withdraw button event handler
const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click', function() {
    const withdrawNumber = getInputText('withdrawAmount');
})

function getInputText(id) {
    const Amount = document.getElementById(id).value;
    const amountNumber = parseFloat(Amount);
    return amountNumber;
}

function updateSpanText (id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}