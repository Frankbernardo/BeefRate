retrieveData();
function retrieveData(){
    //ajax to get data from server
    $.ajax({
        url: 'http://localhost:3000/get-records',
        type: 'get',
        success : function(response){
            console.log(response)
            var data = JSON.parse(response);
            if(data.msg == "SUCCUSS"){
                
                showTable(data.reviews);
            }else{
                console.log(data.msg);
            }

        },
        error: function(err) {
            console.log(err)
        }
       
    })
}

// main();

function main () {
    showTable(combinedReviews);
}


function showTable(reviews) {
    var htmlString = "";
    for (var i = 0; i < reviews.length; i++) {
        htmlString += "<tr>";
        htmlString += "<td>" + reviews[i].name + "</td>";
        htmlString += "<td>" + reviews[i].location + "</td>";
        htmlString += "<td>" + reviews[i].type + "</td>";
        htmlString += "<td>" + reviews[i].value + "</td>";
        htmlString += "<td>" + reviews[i].rating + "</td>";
        
            htmlString += "<td><button class='delete-btn' data-id='" + reviews[i].id + "'>Delete</button></td>";
        htmlString += "</tr>";
    }
    $("#data-table tbody").html(htmlString);
}


function activateDeleteButtons() {
    $('#data-table').off('click').on('click', '.delete-btn', function() {
        var deleteID = $(this).data('id');
        deleteRecord(deleteID);
    });
}

function deleteRecord(deleteID) {
    $.ajax({
        url: 'http://localhost:3000/delete-record',
        type: 'DELETE',
        data: { id: deleteID },
        success: function(response) {
            console.log('Record deleted:', response);
            retrieveData(); 
        },
        error: function(error) {
            console.error('Error deleting record:', error);
        }
    });
}




