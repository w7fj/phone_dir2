import { UserModel } from '../models/UserModel.js';
import { ProfileView } from '../views/ProfileView.js';
import { ContactsModel } from '../models/ContactsModel.js';

export class ProfileController {
    constructor() {
        this.model = new UserModel();
        this.view = new ProfileView();
        this.contactsModel = new ContactsModel();
        this.init();
    }

    init() {
        const user = this.model.getCurrentUser();
        if (!user) {
            window.location.href = '/phone_dir2/html/login.html';
            return;
        }
        const userContacts = this.contactsModel.getContacts().filter(c => c.owner_id === user.id);
        this.view.displayProfile(user, userContacts);

        this.view.bindLogout(this.handleLogout.bind(this));
    }

    handleLogout() {
        this.model.logout();
        window.location.href = '/phone_dir2/html/login.html';
    }
}

new ProfileController();