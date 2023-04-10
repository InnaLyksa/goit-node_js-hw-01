const fs = require("fs/promises");
const path = require("path");
const { v4 } = require("uuid");
const contactsPath = path.join(__dirname, "db/contacts.json");

// TODO: задокументировать каждую функцию
async function listContacts() {
	const res = await fs.readFile(contactsPath);
	const data = JSON.parse(res);
	return data;
}

function getContactById(contactId) {
	// ...твой код
}

function removeContact(contactId) {
	// ...твой код
}

async function addContact(name, email, phone) {
	const data = await listContacts();
	const newContact = { id: v4(), name, email, phone };
	data.push(newContact);
	fs.writeFile(contactsPath, JSON.stringify(data));
	return newContact;
}

module.exports = {
	listContacts,
	getContactById,
	removeContact,
	addContact,
};
