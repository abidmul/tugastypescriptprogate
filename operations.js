"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addItem = addItem;
exports.updateItem = updateItem;
exports.deleteItem = deleteItem;
exports.listItems = listItems;
// Inventaris menggunakan Record dengan kunci nomor ID dan nilai InventoryItem
let inventory = {};
// Fungsi untuk menambah item ke inventaris
function addItem(item) {
    try {
        if (!isValidItem(item)) {
            return 'Invalid item data';
        }
        if (inventory[item.id]) {
            return 'Item with this ID already exists';
        }
        inventory[item.id] = item;
        return 'Item added successfully';
    }
    catch (error) {
        console.error('Error adding item:', error);
        return 'Error adding item';
    }
}
// Fungsi untuk memperbarui item di inventaris
function updateItem(id, updatedItem) {
    try {
        if (!inventory[id]) {
            return 'Item not found';
        }
        inventory[id] = Object.assign(Object.assign({}, inventory[id]), updatedItem);
        return 'Item updated successfully';
    }
    catch (error) {
        console.error('Error updating item:', error);
        return 'Error updating item';
    }
}
// Fungsi untuk menghapus item dari inventaris
function deleteItem(id) {
    try {
        if (!inventory[id]) {
            return 'Item not found';
        }
        delete inventory[id];
        return 'Item deleted successfully';
    }
    catch (error) {
        console.error('Error deleting item:', error);
        return 'Error deleting item';
    }
}
// Fungsi untuk mendata semua item di inventaris
function listItems() {
    try {
        return Object.values(inventory);
    }
    catch (error) {
        console.error('Error listing items:', error);
        return [];
    }
}
// Fungsi untuk memvalidasi item
function isValidItem(item) {
    try {
        // Periksa tipe data id
        if (typeof item.id !== 'number') {
            return false; // id harus berupa nomor
        }
        // Periksa tipe data name
        else if (typeof item.name !== 'string') {
            return false; // name harus berupa string
        }
        // Periksa tipe data quantity
        else if (typeof item.quantity !== 'number') {
            return false; // quantity harus berupa nomor
        }
        // Periksa tipe data price
        else if (typeof item.price !== 'number') {
            return false; // price harus berupa nomor
        }
        // Jika semua pengecekan berhasil
        return true;
    }
    catch (error) {
        console.error('Error validating item:', error);
        return false; // Jika terjadi kesalahan, anggap item tidak valid
    }
}
