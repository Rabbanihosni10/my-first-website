"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getStockStatus = (stock) => {
    if (stock === 0) {
        return "Out of Stock";
    }
    else if (stock > 0 && stock <= 5) {
        return "Almost Sold Out";
    }
    else if (stock >= 6 && stock <= 20) {
        return "Available";
    }
    else {
        return "In Stock";
    }
};
const stock1 = getStockStatus(0);
const stock2 = getStockStatus(3);
const stock3 = getStockStatus(12);
const stock4 = getStockStatus(50);
const stock5 = getStockStatus(5);
const stock6 = getStockStatus(6);
const stock7 = getStockStatus(20);
const stock8 = getStockStatus(21);
console.log(stock1);
console.log(stock2);
console.log(stock3);
console.log(stock4);
console.log(stock5);
console.log(stock6);
console.log(stock7);
console.log(stock8);
//# sourceMappingURL=problem2.js.map