let budgetValue = 0;
let totalExpensesValue = 0;
let balanceColor = "green";

const expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

expenseEntries.forEach((expense) => {
  totalExpensesValue += expense[1];
  console.log("Valor total de los gastos: " + totalExpensesValue);
});

console.log("Gastos totales:", totalExpensesValue);

function calculateAverageExpense() {
  const average = totalExpensesValue / expenseEntries.length;

  expenseEntries.length === 0
    ? (console.log("No hay gastos"), 0)
    : (console.log("Gasto promedio:", average), average);

  return expenseEntries.length === 0 ? 0 : average;
}

const averageExpense = calculateAverageExpense();
console.log("Valor del gasto promedio:", averageExpense);

function calculateBalance() {
  const balance = budgetValue - totalExpensesValue;
  console.log("Saldo calculado:", balance);
  return balance;
}

const currentBalance = calculateBalance();
console.log("Valor del saldo:", currentBalance);

function updateBalanceColor() {
  const balance = calculateBalance();

  balance < 0
    ? ((balanceColor = "red"), console.log("Saldo negativo: red"))
    : budgetValue > 0 && balance < budgetValue * 0.25
      ? ((balanceColor = "orange"),
        console.log("Saldo < 25% presupuesto: orange"))
      : ((balanceColor = "green"), console.log("Saldo normal: green"));

  console.log("Color actualizado:", balanceColor);
  return balanceColor;
}

function calculateCategoryExpenses(category) {
  let categoryTotal = 0;

  for (const expense of expenseEntries) {
    expense[0] === category
      ? ((categoryTotal += expense[1]),
        console.log(`Estadistica por categoria: ${expense[1]}`))
      : null;
  }

  console.log(`Total para "${category}": ${categoryTotal}`);
  return categoryTotal;
}

function calculateLargestCategory() {
  const uniqueCategories = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];
  const categoriesData = [];
  let highestSpend = 0;
  let topCategory = "";

  uniqueCategories.forEach((category) => {
    const categoryTotal = calculateCategoryExpenses(category);
    categoriesData.push([category, categoryTotal]);

    categoryTotal > highestSpend
      ? ((highestSpend = categoryTotal),
        (topCategory = category),
        console.log(`Nueva categoría mayor: ${category} con ${categoryTotal}`))
      : null;
  });

  console.log("Datos completos de categorías:", categoriesData);
  console.log("Categoría más grande:", topCategory, "con", highestSpend);
  return topCategory;
}

function addExpenseEntry(newExpense) {
  expenseEntries.push(newExpense);
  totalExpensesValue += newExpense[1];

  console.log(`Gasto añadido: ${newExpense[0]} - ${newExpense[1]}`);
  console.log(`Total actual: ${totalExpensesValue}`);
  return newExpense;
}
