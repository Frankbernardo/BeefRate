document.getElementById("submit").addEventListener("click", function() {
    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    const newReview = {
        name: document.getElementById("input1").value,
        location: document.getElementById("input2").value,
        type: document.getElementById("input3").value,
        value: document.getElementById("input4").value,
        rating: document.getElementById("input5").value
    };
    reviews.push(newReview);
    localStorage.setItem('reviews', JSON.stringify(reviews));
    alert("Review added!");
    document.querySelectorAll("input").forEach(input => input.value = "");
    return false;
});

document.getElementById("clear").addEventListener("click", function() {
    document.querySelectorAll("input").forEach(input => input.value = "");
});
