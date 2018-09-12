var topics = ["smile", "siamese cat", "dancing", "laugh", "feel", "giggle", "party"]

//loops through array and creates buttons for each item
for (var i = 0; i < topics.length; i++) {
    var gifButton = $("<button>").text(topics[i])
    $("#gif-list").append(gifButton)
}


//function event that adds new buttons based on input
$("#submit-search").on("click", function(event){
    event.preventDefault();
    newButtonValue = $("#gif-search").val();
    generateButton = $("<button>").text(newButtonValue)
    $("#gif-list").append(generateButton)
});

// click even fires AJAX requests
$("button").on("click", function(){
    
    var clickedButton = $(this).text().trim();
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + clickedButton + "&api_key=nfP5ZEBKqSO1ktD3emBG9zdtttbtCiWM&limit=10"
    

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        //reads response from AJAX
        .then(function(response){
           
            var results = response.data

            // loops through and pushes images to page
            for (var i = 0; i < 10; i++){
                
                var gifSpan = $("<div>").addClass("grid-item")
                var para = $("<p>").text("Rating: " + results[i].rating)
                var newImg = $("<img>")
                
                newImg.attr("src", results[i].images.fixed_height.url).addClass("listed-gif")
                
                gifSpan.append(para)
                gifSpan.append(newImg)

                $("#gifs-here").append(gifSpan)
            }


         });
});