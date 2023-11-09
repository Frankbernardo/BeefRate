/*var defaultReviewsData = '[{"name":"Grand tavern","location":"Neptune, NJ","type":"Dine-in","value":"4/5","rating":"9.5/10"},{"name":"Burger King","location":"Wall, NJ","type":"Fast Food","value":"4.3/5","rating":"2/10"},{"name":"Marty\'s Burgers","location":"Jersey City, NJ","type":"Fast Casual","value":"5/5","rating":"8.4/10"},{"name":"Shake Shack","location":"Eatontwon, NJ","type":"Fast Casual","value":"3/5","rating":"7.2/10"},{"name":"Mcdonald\'s","location":"Wall, NJ","type":"Fast Food","value":"5/5","rating":"3.4/10"}]';
var defaultReviews = JSON.parse(defaultReviewsData);*/

// var storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
// var combinedReviews = defaultReviews.concat(storedReviews); 
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

function showTable(reviews){
    var htmlString = "";
    for(var i=0; i<reviews.length; i++) {
        htmlString += "<tr>";
            htmlString += "<td>" + reviews[i].name + "</td>";
            htmlString += "<td>" + reviews[i].location + "</td>";
            htmlString += "<td>" + reviews[i].type + "</td>";
            htmlString += "<td>" + reviews[i].value + "</td>";
            htmlString += "<td>" + reviews[i].rating + "</td>";
        htmlString += "</tr>";
    }

    document.querySelector("#data-table tbody").innerHTML = htmlString;

}
