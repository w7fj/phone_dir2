export class ContactsView {
    displayContacts(contacts) {
        const container = document.querySelector('.row-cols-1');
        if (!container) return;

        container.innerHTML = '';
        contacts.forEach((contact, index) => {
            container.innerHTML += `
                <div class="col">
                    <div class="card h-100 contact-card shadow-sm ${contact.category}-contact">
                        <div class="card-header bg-${contact.category} text-white d-flex justify-content-between align-items-center">
                            <span><i class="fas fa-${contact.category === 'family' ? 'user-friends' : contact.category === 'work' ? 'briefcase' : 'user'} me-2"></i> ${contact.category.charAt(0).toUpperCase() + contact.category.slice(1)}</span>
                            <div>
                                <button class="btn btn-sm btn-light me-1 edit-contact" data-index="${index}"><i class="fas fa-edit"></i></button>
                                <button class="btn btn-sm btn-light delete-contact" data-index="${index}"><i class="fas fa-trash"></i></button>
                            </div>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title fw-bold">${contact.name}</h5>
                            <p class="card-text text-muted">${contact.description || ''}</p>
                            <div class="contact-details">
                                <div class="mb-2"><span class="contact-label"><i class="fas fa-phone me-2"></i> Personal:</span> <span>${contact.personalPhone || 'N/A'}</span></div>
                                <div class="mb-2"><span class="contact-label"><i class="fas fa-briefcase me-2"></i> Work:</span> <span>${contact.workPhone || 'N/A'}</span></div>
                                <div class="mb-2"><span class="contact-label"><i class="fas fa-map-marker-alt me-2"></i> Location:</span> <span>${contact.location || 'N/A'}</span></div>
                            </div>
                        </div>
                        <div class="card-footer bg-light">
                            <div class="btn-group w-100">
                                <a href="tel:${contact.personalPhone}" class="btn btn-sm btn-outline-primary"><i class="fas fa-phone"></i> Call</a>
                                <a href="sms:${contact.personalPhone}" class="btn btn-sm btn-outline-primary"><i class="fas fa-sms"></i> Text</a>
                            </div>
                        </div>
                    </div>
                </div>`;
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