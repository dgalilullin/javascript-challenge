// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");


var inputField = d3.select("#datetime");

var button = d3.select("#filter-btn");

inputField.on("change", function() {
    var newDate = d3.event.target.value;
    console.log(newDate);
  });
  

function handleClick() {
    console.log("A button was clicked!");
    console.log(d3.event.target);
  }

button.on("click", handleClick);  


button.on("click", function() {
    console.log("Hi, a button was clicked!");
    console.log(d3.event.target);
  });
  

//var selecteddate = '1/1/2010'

var filteredData = tableData.filter(filterdate => filterdate.datetime == inputField);

  console.log(filteredData);


filteredData.forEach((a) => {
  var row = tbody.append("tr");
  Object.entries(a).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});
