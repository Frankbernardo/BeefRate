document.addEventListener("DOMContentLoaded", function() {
    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    const table = document.querySelector("table tbody");
    reviews.forEach(review => {
        const row = table.insertRow();
        Object.values(review).forEach(text => {
            const cell = row.insertCell();
            cell.textContent = text;
        });
    });
});
