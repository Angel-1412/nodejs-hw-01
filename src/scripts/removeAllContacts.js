import fs from 'fs/promises';
import path from 'path';

const dbPath = path.resolve('src/db/db.json');

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(dbPath, JSON.stringify([]));
    console.log('Усі контакти видалено.');
  } catch (error) {
    console.error('Помилка при видаленні контактів:', error);
  }
};

removeAllContacts();
