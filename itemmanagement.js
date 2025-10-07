document.addEventListener('DOMContentLoaded', function() {
    // Cancel button
    const cancelButton = document.querySelector('.cancel-btn');
    if (cancelButton) {
        cancelButton.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }

    // Dashboard button
    const dashboardLink = document.querySelector('.nav-link.dashboard-link');
    if (dashboardLink) {
        dashboardLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'adminhome.html';
        });
    }

    // Logout button
    const logoutBtn = document.querySelector('.logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(event) {
            event.preventDefault();
            const confirmed = confirm('Are you sure you want to log out?');
            if (confirmed) {
                // Replace this with actual logout logic
                alert('Logging out...');
                // e.g., window.location.href = 'login.html';
                window.location.href = 'index.html';
            }
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Bounty Management redirect
    const bountyLink = document.querySelector('.bounty-link');
    if (bountyLink) {
        bountyLink.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default "#" behavior
            window.location.href = 'bountymanagement.html';
        });
    }
});