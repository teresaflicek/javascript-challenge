// from data.js
var tableData = data;

// console.log the data from data.js
console.log(tableData);

// function for rendering tables
function renderTable(data)


// loop through the data and append the table to the web page
tableData.forEach(function (allsightings) {
    console.log(allsightings);
    var row = d3.select("tbody").append("tr");
    Object.entries(allsightings).forEach(function ([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        // in the tableData object
        var cell = row.append("td");
        cell.text(value);
    });
});

// date form for filter the events by date/time

// select the buttom
var button = d3.select("#filter-btn");

// select the form 
var form = d3.select("form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit", runEnter);

// Create the function to run for both events
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select(".form-control");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // Print the value to the console
    console.log(inputValue);

    //filter the data
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    console.log(filteredData);

    // clear the existing table
    d3.select("tbody").html("")

    // loop through the data and append the table to the web page
    filteredData.forEach(function (filteredsighting) {
        console.log(filteredsighting);
        var row = d3.select("tbody").append("tr");
        Object.entries(filteredsighting).forEach(function ([key, value]) {
            console.log(key, value);
            // Append a cell to the row for each value
            // in the filteredData object
            var cell = row.append("td");
            cell.text(value);
        });
    });

}
