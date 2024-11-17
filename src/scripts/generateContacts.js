import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();

    for (let i = 0; i < number; i += 1) {
      contacts.push(createFakeContact());
    }
    await writeContacts(contacts);
    console.log(
      `${number} contacts have been successfully generated and added.`,
    );
  } catch (error) {
    console.error('Error generating contacts:', error.message);
  }
};

generateContacts(5);
