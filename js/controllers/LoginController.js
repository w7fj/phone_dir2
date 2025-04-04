import { UserModel } from '../models/UserModel.js';
import { LoginView } from '../views/LoginView.js';

export class LoginController {
    constructor() {
        this.model = new UserModel();
        this.view = new LoginView();

        this.view.bindLogin(this.handleLogin.bind(this));
    }

    handleLogin(email, password) {
        const user = this.model.validateUser(email, password);
        if (user) {
            this.model.setCurrentUser(user);
            this.view.showAlert('Login successful!');
            window.location.href = '/phone_dir2/html/index.html';
        } else {
            this.view.showAlert('Invalid credentials!', 'danger');
        }
    }
}

new LoginController();