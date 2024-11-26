document.querySelector('.form button').addEventListener('click', function (e) {
    const emailInput = document.querySelector('.form input[name="email"]');
    const emailValue = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(emailValue)) {
        
        const message = document.createElement('p');
        message.textContent = 'E-mail enviado com sucesso! 🎉';
        message.style.color = 'red';
        document.querySelector('#newsletter').appendChild(message);

        emailInput.value = '';
        setTimeout(() => message.remove(), 3000);
    }
});
