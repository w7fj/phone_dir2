export class ContactsModel {
    constructor() {
        this.contacts = JSON.parse(sessionStorage.getItem('contacts')) || [];
    }

    addContact(contact, ownerId) {
        contact.owner_id = ownerId;
        this.contacts.push(contact);
        this.save();
    }

    deleteContact(index) {
        this.contacts.splice(index, 1);
        this.save();
    }

    getContacts() {
        return this.contacts;
    }

    save() {
        sessionStorage.setItem('contacts', JSON.stringify(this.contacts));
    }
}