
document.getElementById('order-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const flavor = document.getElementById('flavors').value;

    if (name && email && address && flavor) {
        alert(`Thank you, ${name}! Your order for ${flavor} ice cream will be delivered to ${address}.`);
        document.getElementById('order-form').reset();
    } else {
        alert('Please fill out all fields.');
    }
});
