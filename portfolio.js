//cc 15

//task 2

// import from asset.js
import { assets } from './asset.js';

// calc total portfolio value
export function calculatePortfolioValue() {
  return assets.reduce((total, asset) => total + asset.price * asset.quantity, 0);
}

export function getPortfolioAllocation() {
  const totalValue = calculatePortfolioValue();
  return assets.map(asset => ({
    name: asset.name,
    allocation: ((asset.price * asset.quantity) / totalValue) * 100
  }));
}