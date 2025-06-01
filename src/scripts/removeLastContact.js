import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    if (contacts.length === 0) {
      console.log('Контактів немає для видалення.');
      return;
    }

    contacts.pop();

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log('Останній контакт видалено.');
  } catch (error) {
    console.error('Помилка при видаленні останнього контакту:', error);
  }
};

removeLastContact();
