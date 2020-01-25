// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");
tbody.html("");

tableData.forEach((a) => {
  var row = tbody.append("tr");
  Object.entries(a).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

var button = d3.select("#filter-btn");

button.on("click", function() {
    d3.event.preventDefault();
    var inputField = d3.select("#datetime");
    var inputValue = inputField.property("value");
    var selectData = tableData.filter(date1=>date1.datetime === inputValue);
    console.log(selectData)

    var tbody = d3.select("tbody");
    tbody.html("");
    selectData.forEach((a) => {
      var row = tbody.append("tr");
      Object.entries(a).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
});

// inputField.on("change", function() {
//     var newDate = d3.event.target.value;
//     console.log(newDate);
//   });
  

// function handleClick() {
//     console.log("A button was clicked!");
//     console.log(d3.event.target);
//   }

// button.on("click", handleClick);  



  


