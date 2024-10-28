// src/db.ts
import PouchDB from 'pouchdb-browser';

console.log(`%cJrDb`, `font-size: 14px; color: blue`); // Add this line

//debugger;

// Initialize PouchDB
const db = new PouchDB('my_database');

// Dummy data
const dummyData = [
  { _id: '1', name: 'Item 1', description: 'This is the first item' },
  { _id: '2', name: 'Item 2', description: 'This is the second item' },
  { _id: '3', name: 'Item 3', description: 'This is the third item' },
];

// Function to initialize data if it doesn't exist
async function initializeData() {
  try {
    const result = await db.bulkDocs(dummyData);
    console.log('Data initialized:', result);
  } catch (error) {
    console.error('Error initializing data:', error);
  }
}

// Check if the data is already loaded
async function setupDatabase() {
  const allDocs = await db.allDocs();
  if (allDocs.total_rows === 0) {
    await initializeData();
  } else {
    console.log('Database already initialized.');
  }
}

setupDatabase();

interface ItemDoc {
  _id: string;
  name: string;
  description: string;
}

export { db, PouchDB, ItemDoc };

// Add a log to verify
console.log(`&cJrDb`, `font-size: 14px; color: blue`);
console.log({
  $ctrl: this,
  db: db
});
