import PouchDB from 'pouchdb-browser';

// Initialize PouchDB
const db = new PouchDB('my_database');

interface ItemDoc {
  _id: string;
  name: string;
  description: string;
}

// Mock data
const mockData = [
  { _id: '1', name: 'Item 1', description: 'This is the first item' },
  { _id: '2', name: 'Item 2', description: 'This is the second item' },
  { _id: '3', name: 'Item 3', description: 'This is the third item' },
];

// Function to initialize data if it doesn't exist
async function initializeTableData() {
  try {
    const result = await db.bulkDocs(mockData);
    console.log('MockTableData initialized:', result);
  } catch (error) {
    console.error('Error initializing data:', error);
  }
}

// Check if the data is already loaded
async function setupDatabase() {
  const allDocs = await db.allDocs();
  if (allDocs.total_rows === 0) {
    await initializeTableData();
  } else {
    console.log('Database already initialized.');
  }
}

setupDatabase();

export { db, PouchDB, ItemDoc };
