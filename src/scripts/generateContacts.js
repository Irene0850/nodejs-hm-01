import { createFakeContact } from '../utils/createFakeContact';
import { writeContacts } from '../utils/writeContacts';
import { readContacts } from '../utils/readContacts';

const generateContacts = async (number) => {
  const contacts = await readContacts();
  for (let i = 0; i < number; i += 1) {
    contacts.push(createFakeContact());
  }
  await writeContacts(contacts);
};

generateContacts(5);
