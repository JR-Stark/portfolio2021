let contact = {
    // J'initialise mon app
    init: function () {
        contact.formSubmit();
    },
    // Page Login et inscription
    formSubmit: function() {
        const buttonSubmit = document.getElementById('submit'); 
        
        buttonSubmit.addEventListener('submit', () => {
            contact.sendMessage();
        });

    },
    sendMessage: function() {
        const form = document.getElementById('form');
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
    }
};

    document.addEventListener('DOMContentLoaded', contact.init );