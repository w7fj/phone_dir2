export class LoginView {
    constructor() {
        this.loginForm = document.querySelector('form');
    }

    bindLogin(handler) {
        this.loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = this.loginForm.querySelector('#email').value;
            const password = this.loginForm.querySelector('#password').value;
            handler(email, password);
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