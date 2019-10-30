// from data.js
var tableData = data;

// YOUR CODE HERE!
//reference to tbody ???
var tbody = d3.select("tbody");

tbody.html("");
//console logging data ???
console.log(tableData);

// //Loop through data ???
// tableData.forEach(function(alienSighting) {
//     console.log(alienSighting);
// });

// //Appending row to table
// tableData.forEach(function(alienSighting) {
//     console.log(alienSighting);
//     var row = tbody.append("tr");
// });

// //adding object.entries
// tableData.forEach(function(alienSighting) {
//     console.log(alienSighting);
//     var row = tbody.append("tr");
    
//     Object.entries(alienSighting).forEach(function([key, value]) {
//         console.log(key, value);
//          });
//     });

// //using d3 to append 1 cell to alien sightings table
// tableData.forEach(function(alienSighting) {
//     console.log(alienSighting);
//     var row = tbody.append("tr");
        
//     Object.entries(alienSighting).forEach(function([key, value]) {
//         console.log(key, value);
//     // Appending the cell to row for each alien sighting value (date/time, city, state, country, shape, comment)
//         var cell = row.append("td");
//        });
//     });
// //Using d3 to update each cell's text with alien sighting value (date/time, city, state, country, shape, comment)
// tableData.forEach(function(alienSighting) {
//     console.log(alienSighting);
//     var row = tbody.append("tr");
//     Object.entries(alienSighting).forEach(function([key, value]) {
//         console.log(key, value);
// //Append a cell to the row for each value
//     var cell = row.append("td");
//     cell.text(value);
//     });
// });

        
//var myFunction(addingRows) { (tried making this into a function but it would just leave the table empty
//on the website)
  tableData.forEach((alienSighting) => {
    var row = tbody.append("tr");
    Object.entries(alienSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  //});
    
var button = d3.select("#filter-btn");


button.on("click", function() {

    var tbody = d3.select("tbody");
    tbody.html("");

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(sighting => sighting.datetime == inputValue);

    console.log(filteredData);

    //myFunction(addingRows); (non-working function...just empties table completely)

    filteredData.forEach((alienSighting) => {
         var row = tbody.append("tr");
         Object.entries(alienSighting).forEach(([key, value]) => {
             var cell = row.append("td");
             cell.text(value);
         });
         });
});

// function here (my function doesn't work right)