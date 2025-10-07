document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.querySelector('.logout');

    logoutBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const confirmed = confirm('Are you sure you want to log out?');
        if (confirmed) {
            // In a real application, you would handle the logout logic here,
            // such as clearing session data and redirecting to the login page.
            alert('Logging out...');
            // window.location.href = 'login.html';
        }
    });
}); // Wait until page fully loads
document.addEventListener("DOMContentLoaded", () => {
    // Get sidebar links
    const dashboardLink = document.querySelector(".nav-link:nth-child(1)");
    const itemLink = document.querySelector(".nav-link:nth-child(2)");
    const bountyLink = document.querySelector(".nav-link:nth-child(3)");
    const logoutLink = document.querySelector(".logout");

    // Redirect when clicked
    dashboardLink.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "adminhome.html"; // or your dashboard file name
    });

    itemLink.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "itemmanagement.html";
    });

    bountyLink.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "bountymanagement.html";
    });

    logoutLink.addEventListener("click", (e) => {
        e.preventDefault();
        alert("You have logged out!");
        window.location.href = "index.html"; // example logout redirect
    });
});