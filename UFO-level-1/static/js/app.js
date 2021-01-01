// from data.js
var tableData = data;

// console.log the data from data.js
console.log(tableData);

// loop through the data and append the table to the web page
data.forEach(function(tableData) {
  console.log(tableData);
  var row = d3.select("tbody").append("tr");
  Object.entries(tableData).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});







// date form for filter the events by date/time

