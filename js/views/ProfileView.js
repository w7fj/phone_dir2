export class ProfileView {
    constructor() {
        this.profileName = document.querySelector('.card-body.text-center h4');
        this.tableCells = document.querySelectorAll('.table td');
        this.badges = document.querySelectorAll('.badge');
        this.logoutButton = document.getElementById('logoutButton');
    }

    displayProfile(user, contacts) {
        this.profileName.textContent = user.fullName;

        this.tableCells[0].textContent = user.fullName;
        this.tableCells[1].textContent = user.email;
        this.tableCells[2].textContent = user.phone || 'N/A';
        this.tableCells[3].textContent = user.gender;
        this.tableCells[4].textContent = user.birthdate;
        this.tableCells[5].textContent = user.city || 'N/A';
        this.tableCells[6].textContent = new Date(user.created).toLocaleDateString();

        const stats = {
            total: contacts.length,
            family: contacts.filter(c => c.category === 'family').length,
            work: contacts.filter(c => c.category === 'work').length,
            friends: contacts.filter(c => c.category === 'friend').length
        };
        this.badges[0].textContent = stats.total;
        this.badges[1].textContent = stats.family;
        this.badges[2].textContent = stats.work;
        this.badges[3].textContent = stats.friends;
    }

    bindLogout(handler) {
        this.logoutButton.addEventListener('click', (e) => {
            e.preventDefault();
            handler();
        });
    }
}