export class UserModel {
    constructor() {
        this.users = JSON.parse(sessionStorage.getItem('users')) || [];
        this.currentUser = JSON.parse(sessionStorage.getItem('currentUser')) || null;
    }

    addUser(user) {
        user.id = this.users.length === 0 ? 1 : Math.max(...this.users.map(u => u.id)) + 1;
        user.created = new Date().toISOString();
        this.users.push(user);
        sessionStorage.setItem('users', JSON.stringify(this.users));
    }

    validateUser(email, password) {
        return this.users.find(u => u.email === email && u.password === password);
    }

    setCurrentUser(user) {
        this.currentUser = user;
        sessionStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    }

    getCurrentUser() {
        return this.currentUser;
    }

    logout() {
        this.currentUser = null;
        sessionStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    }
}