import { createFakeContact } from '../utils/createFakeContact';
import { readContacts } from '../utils/readContacts';
import { writeContacts } from '../utils/writeContacts';

export const addOneContact = async () => {
  const contacts = await readContacts();
  contacts.push(createFakeContact());
  await writeContacts(contacts);
};

addOneContact();
