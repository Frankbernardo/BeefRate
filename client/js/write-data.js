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

$('#submit').click(function(){
    var name = $('#input1').val();
    var location = $('#input2').val();
    var type = $('#input3').val();
    var value = $('#input4').val();
    var rating = $('#input5').val();

    var jsonObject = {name : name,
        location: location,
        type: type,
        value: value,
        rating: rating
         };

    $.ajax({
        url:'http://localhost:3000' + "/write-record",
        type: "post",
        data: jsonObject,
        success: function(response){
            var data = JSON.parse(response);
            if(data.msg == "SUCCESS"){
                alert("data successfuly saved")
            }else{
                console.log(data.msg);
            }

        },
        error: function(err) {
            console.log(err);
        }
    })
})