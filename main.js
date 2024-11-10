//cc 15

//task 4

// import functions
import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';

// display init portfolio value
console.log("Initial Portfolio Value:", calculatePortfolioValue());

console.log("Portfolio Allocation:");
getPortfolioAllocation().forEach(allocation => {
  console.log(`${allocation.name}: ${allocation.allocation.toFixed(2)}%`);
});

// create and display transactions
try {
  const buyApple = new Transaction(1, "buy", 5);
  const sellTesla = new Transaction(2, "sell", 2);

  console.log("Transaction Details:");
  console.log("Bought 5 Apple stocks.");
  console.log("Sold 2 Tesla stocks.");
} catch (error) {
  console.error(error.message);
}

//display updated portfolio
console.log("Updated Portfolio Value:", calculatePortfolioValue());
console.log("Updated Portfolio Allocation:");
getPortfolioAllocation().forEach(allocation => {
  console.log(`${allocation.name}: ${allocation.allocation.toFixed(2)}%`);
});