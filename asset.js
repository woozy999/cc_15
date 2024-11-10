//cc 15

//task 1

//array of assests
export const assets = [
    { id: 1, name: "Apple", type: "stock", price: 150, quantity: 10 },
    { id: 2, name: "Tesla", type: "stock", price: 600, quantity: 5 },
    { id: 3, name: "US Treasury Bond", type: "bond", price: 1000, quantity: 3 }
  ];
  
  export function getAssetById(id) {
    return assets.find(asset => asset.id === id);
  }
  