import React from "react";
import Chart from "./Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "jan", value: 0 },
    { label: "feb", value: 0 },
    { label: "mar", value: 0 },
    { label: "abr", value: 0 },
    { label: "mai", value: 0 },
    { label: "jun", value: 0 },
    { label: "jul", value: 0 },
    { label: "aug", value: 0 },
    { label: "set", value: 0 },
    { label: "out", value: 0 },
    { label: "nov", value: 0 },
    { label: "dez", value: 0 },
  ];

  for (const expense of props.expenses) {
    // Obtem o id do mês
    const expenseData = expense.date.getMonth(); // Staring at 0 => jan === 0

    // Afeta o valor do array para o mês
    chartDataPoints[expenseData].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
