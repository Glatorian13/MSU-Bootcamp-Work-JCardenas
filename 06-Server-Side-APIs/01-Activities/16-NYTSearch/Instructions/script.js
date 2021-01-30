var searchTerm = ""
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&facet_fields=source&facet=true" + "&api-key=TQ6WhfCnGwb5qx36RU8R0nB0jgEa2Ly0";
console.log(queryURL);
//call API using AJAX
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){

})