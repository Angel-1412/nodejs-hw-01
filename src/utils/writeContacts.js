import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (contacts) => {
  try {
    const json = JSON.stringify(contacts, null, 2);
    await fs.writeFile(PATH_DB, json, 'utf-8');
  } catch (error) {
    console.error('Помилка при записі контактів:', error.message);
  }
};
