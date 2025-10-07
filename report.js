document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('lostItemForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevents the default form submission

        // Get the values from the form inputs
        const itemName = document.getElementById('itemName').value.trim();
        const category = document.getElementById('category').value;
        const description = document.getElementById('description').value.trim();
        const location = document.getElementById('location').value.trim();
        const dateLost = document.getElementById('dateLost').value;
        const bounty = document.getElementById('bounty').value;

        // Simple validation checks
        if (itemName === '' || category === '' || description === '') {
            alert('Please fill out all required fields (Item Name, Category, and Description).');
            return; // Stop the function if validation fails
        }

        // Create a data object to represent the report
        const reportData = {
            itemName,
            category,
            description,
            location,
            dateLost,
            bounty: bounty ? parseFloat(bounty) : null
        };

        // Here, you would typically send the data to a server
        // using a fetch() API call.
        console.log('Form data ready to be sent:', reportData);
        alert('Report submitted successfully! (This is a simulation)');

        // Reset the form after successful submission
        form.reset();
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const cancelButton = document.querySelector('.cancel-btn');

    cancelButton.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});