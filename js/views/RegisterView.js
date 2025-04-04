export class RegisterView {
    constructor() {
        this.registerForm = document.querySelector('form');
    }

    bindRegister(handler) {
        this.registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const fullName = this.registerForm.querySelector('#fullName').value;
            const email = this.registerForm.querySelector('#email').value;
            const gender = this.registerForm.querySelector('#gender').value;
            const birthdate = this.registerForm.querySelector('#birthdate').value;
            const password = this.registerForm.querySelector('#password').value;
            handler(fullName, email, gender, birthdate, password);
        });
    }

    showAlert(message, type = 'success') {
        const alert = document.createElement('div');
        alert.className = `alert alert-${type} mt-3`;
        alert.textContent = message;
        document.querySelector('main .row')?.prepend(alert);
        setTimeout(() => alert.remove(), 3000);
    }
}