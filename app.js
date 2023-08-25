const expenseNameInput = document.getElementById('expense-name');
const expenseAmountInput = document.getElementById('expense-amount');
const addExpenseButton = document.getElementById('add-expense');
const expenseList = document.getElementById('expense-list');
const totalExpense = document.getElementById('total-expense');

let expenses = [];

addExpenseButton.addEventListener('click', () => {
    const expenseName = expenseNameInput.value;
    const expenseAmount = parseFloat(expenseAmountInput.value);

    if (expenseName && expenseAmount) {
        expenses.push({ name: expenseName, amount: expenseAmount });
        updateExpenseList();
        updateTotalExpense();
        expenseNameInput.value = '';
        expenseAmountInput.value = '';
    }
});

function updateExpenseList() {
    expenseList.innerHTML = '';
    expenses.forEach((expense, index) => {
        const expenseItem = document.createElement('div');
        expenseItem.classList.add('expense-item');
        expenseItem.innerHTML = `
            <span>${expense.name}</span>
            <span>$${expense.amount}</span>
            <button onclick="removeExpense(${index})">Remove</button>
        `;
        expenseList.appendChild(expenseItem);
    });
}

function updateTotalExpense() {
    const total = expenses.reduce((total, expense) => total + expense.amount, 0);
    totalExpense.textContent = `$${total}`;
}

function removeExpense(index) {
    expenses.splice(index, 1);
    updateExpenseList();
    updateTotalExpense();
}

function init() {
    updateExpenseList();
    updateTotalExpense();
}

init();
