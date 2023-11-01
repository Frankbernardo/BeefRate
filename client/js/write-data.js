document.getElementById('submit').addEventListener('click', function(e) {
    e.preventDefault(); 
    let newReview = {
        name: document.getElementById('input1').value,
        location: document.getElementById('input2').value,
        type: document.getElementById('input3').value,
        value: document.getElementById('input4').value,
        rating: document.getElementById('input5').value
    };
    
    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.push(newReview);

    localStorage.setItem('reviews', JSON.stringify(reviews));

    clearForm();
});

document.getElementById('clear').addEventListener('click', function(e) {
    e.preventDefault(); 
    clearForm();
});

function clearForm() {
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    document.getElementById('input3').value = '';
    document.getElementById('input4').value = '';
    document.getElementById('input5').value = '';
}
