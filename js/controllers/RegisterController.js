import { UserModel } from '../models/UserModel.js';
import { RegisterView } from '../views/RegisterView.js';

export class RegisterController {
    constructor() {
        this.model = new UserModel();
        this.view = new RegisterView();

        this.view.bindRegister(this.handleRegister.bind(this));
    }

    handleRegister(fullName, email, gender, birthdate, password) {
        const user = {
            fullName,
            email,
            gender,
            birthdate,
            password
        };
        this.model.addUser(user);
        this.model.setCurrentUser(user);
        this.view.showAlert('Registration successful!');
        window.location.href = '/html/index.html';
    }
}

new RegisterController();