// DOM elements //
const registerForm = document.getElementById('register-form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

registerForm.addEventListener('submit', registerUser);

async function registerUser(event) {
    event.preventDefault();
    
    const result = await fetch('/api/register', {
        methord : 'POST',
        headers : {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({
            username,
            email,
            password
        })
    }).then( (res) => res.json() );
    
    alert('helldm');
}