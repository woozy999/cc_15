//cc 15

//task 3

//import from asset.js
import { assets, getAssetById } from './asset.js';

//transaction class
export class Transaction {
  constructor(assetId, type, quantity) {
    this.asset = getAssetById(assetId);
    this.type = type;
    this.quantity = quantity;

    if (this.type === "buy") {
      this.asset.quantity += quantity;
    } else if (this.type === "sell") {
      if (this.asset.quantity < quantity) {
        throw new Error(`Insufficient quantity for sale of ${this.asset.name}`);
      }
      this.asset.quantity -= quantity;
    }
  }
}