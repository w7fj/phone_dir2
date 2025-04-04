import { ContactsModel } from '../models/ContactsModel.js';
import { ContactsView } from '../views/ContactsView.js';
import { UserModel } from '../models/UserModel.js';

export class ContactsController {
    constructor() {
        this.model = new ContactsModel();
        this.view = new ContactsView();
        this.userModel = new UserModel();
        this.init();
    }

    init() {
        const user = this.userModel.getCurrentUser();
        if (!user) {
            window.location.href = '/html/login.html';
            return;
        }
        const userContacts = this.model.getContacts().filter(c => c.owner_id === user.id);
        this.view.displayContacts(userContacts);
        this.setupEventListeners();
    }

    setupEventListeners() {
        const form = document.getElementById('addContactForm');
        form?.addEventListener('submit', (e) => {
            e.preventDefault();
            const user = this.userModel.getCurrentUser();
            const contact = {
                name: document.getElementById('contactName').value,
                description: document.getElementById('contactDescription').value,
                category: document.querySelector('input[name="contactCategory"]:checked').value,
                personalPhone: document.getElementById('personalPhone').value,
                workPhone: document.getElementById('workPhone').value,
                location: document.getElementById('contactLocation').value
            };
            this.model.addContact(contact, user.id);
            this.view.showAlert('Contact added successfully!');
            e.target.reset();
            window.location.href = '/html/index.html';
        });

        document.addEventListener('click', (e) => {
            if (e.target.closest('.delete-contact')) {
                const displayIndex = e.target.closest('.delete-contact').dataset.index;
                const user = this.userModel.getCurrentUser();
                const allContacts = this.model.getContacts();
                const userContacts = allContacts.filter(c => c.owner_id === user.id);

                const contactToDelete = userContacts[displayIndex];
                const globalIndex = allContacts.findIndex(c =>
                    c.owner_id === contactToDelete.owner_id &&
                    c.name === contactToDelete.name &&
                    c.personalPhone === contactToDelete.personalPhone
                );

                if (globalIndex !== -1) {
                    this.model.deleteContact(globalIndex);
                    const updatedUserContacts = this.model.getContacts().filter(c => c.owner_id === user.id);
                    this.view.displayContacts(updatedUserContacts);
                    this.view.showAlert('Contact deleted!');
                }
            }
        });
    }
}

new ContactsController();