// scripts.js

document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if(name === '' || email === '' || message === '') {
        alert('All fields are required.');
        return;
    }
    
    if(!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    let formData = new FormData(this);
    try{
        let response = await fetch(this.action, {
            method: "POST",
            body: formData,
            headers: { "Accept": "application/json" }
        });
        if (response.ok) {
            alert('Form submitted successfully!');
            this.reset();
        } else {
            alert('Something went wrong. Please try again.');
        }
    } catch (error) {
        alert('Network error. Please check your connection and try again.');
    }

    
    
    
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,7}$/;
    return re.test(String(email).toLowerCase());
}

document.addEventListener('DOMContentLoaded', (event) => {
    const container = document.querySelector('.project-cards-container');
    let isDown = false;
    let startX;
    let scrollLeft;

    container.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => {
        isDown = false;
    });

    container.addEventListener('mouseup', () => {
        isDown = false;
    });

    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed
        container.scrollLeft = scrollLeft - walk;
    });
});