document.addEventListener('DOMContentLoaded', () => {
    // Navigate to Dashboard
    const dashboardLink = document.querySelector('.dashboard-link');
    if (dashboardLink) {
        dashboardLink.addEventListener('click', () => {
            window.location.href = 'adminhome.html';
        });
    }

    // Navigate to Item Management
    const itemManagementLink = document.querySelector('.itemmanagement-link');
    if (itemManagementLink) {
        itemManagementLink.addEventListener('click', () => {
            window.location.href = 'itemmanagement.html';
        });
    }

    // Logout Confirmation
    const logoutBtn = document.getElementById('logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            const confirmed = confirm('Are you sure you want to log out?');
            if (confirmed) {
                window.location.href = 'index.html'; // or login.html if you have one
            }
        });
    }
});