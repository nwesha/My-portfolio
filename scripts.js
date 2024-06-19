// scripts.js

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if(name === '' || email === '' || message === '') {
        alert('All fields are required.');
        return;
    }
    
    if(!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    alert('Form submitted successfully!');
    document.getElementById('contactForm').reset();
    // Here you can add your code to handle the form submission, e.g., sending data to a server
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,7}$/;
    return re.test(String(email).toLowerCase());
}