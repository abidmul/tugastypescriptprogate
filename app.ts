import { addItem, updateItem, deleteItem, listItems } from './operations';
import { InventoryItem } from './interfaces';

// Contoh penggunaan:
const item1: InventoryItem = { id: 1, name: 'Laptop', quantity: 10, price: 1500 };
const item2: InventoryItem = { id: 2, name: 'Mouse', quantity: 50, price: 20 };
const item3: InventoryItem = { id: 3, name: 'buku', quantity: 1500, price: 70 };

// Tambah item
console.log(addItem(item1)); // Output: 'Item added successfully'
console.log(addItem(item2)); // Output: 'Item added successfully'
console.log(addItem(item3)); // Output: 'Item added successfully'

// Daftar semua item
console.log(listItems()); // Output: [{ id: 1, name: 'Laptop', quantity: 10, price: 1500 }, { id: 2, name: 'Mouse', quantity: 50, price: 20 }]

// Update item
console.log(updateItem(1, { quantity: 5 })); // Output: 'Item updated successfully'

// Hapus item
console.log(deleteItem(1)); // Output: 'Item deleted successfully'

// Daftar semua item setelah update dan delete
console.log(listItems()); // Output: [{ id: 1, name: 'Laptop', quantity: 5, price: 1500 }]
