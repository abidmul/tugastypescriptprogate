"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const operations_1 = require("./operations");
// Contoh penggunaan:
const item1 = { id: 1, name: 'Laptop', quantity: 10, price: 1500 };
const item2 = { id: 2, name: 'Mouse', quantity: 50, price: 20 };
const item3 = { id: 3, name: 'buku', quantity: 1500, price: 70 };
// Tambah item
console.log((0, operations_1.addItem)(item1)); // Output: 'Item added successfully'
console.log((0, operations_1.addItem)(item2)); // Output: 'Item added successfully'
console.log((0, operations_1.addItem)(item3)); // Output: 'Item added successfully'
// Daftar semua item
console.log((0, operations_1.listItems)()); // Output: [{ id: 1, name: 'Laptop', quantity: 10, price: 1500 }, { id: 2, name: 'Mouse', quantity: 50, price: 20 }]
// Update item
console.log((0, operations_1.updateItem)(1, { quantity: 5 })); // Output: 'Item updated successfully'
// Hapus item
console.log((0, operations_1.deleteItem)(1)); // Output: 'Item deleted successfully'
// Daftar semua item setelah update dan delete
console.log((0, operations_1.listItems)()); // Output: [{ id: 1, name: 'Laptop', quantity: 5, price: 1500 }]
