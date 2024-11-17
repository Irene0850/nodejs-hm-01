import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    const jsonData = JSON.stringify(updatedContacts, null, 2);

    await fs.writeFile(PATH_DB, jsonData, 'utf-8');

    console.log('Contacts have been saved successfully!');
  } catch (error) {
    console.error('Error writing contacts:', error.message);
  }
};
