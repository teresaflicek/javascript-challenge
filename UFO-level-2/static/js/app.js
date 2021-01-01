// from data.js
var tableData = data;

// console.log the data from data.js
console.log(tableData);

// function for rendering tables
function renderTable(data) {
    data.forEach(function (sightings) {
        console.log(sightings);
        var row = d3.select("tbody").append("tr");
        Object.entries(sightings).forEach(function ([key, value]) {
            console.log(key, value);
            // Append a cell to the row for each value
            // in the data object
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

// loop through the data and append the table with all sightings to the web page
renderTable(tableData);

// filtering the events by date/time

// select the buttom
var button = d3.select("#filter-btn");

// select the form 
var form = d3.select("form");

// create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit", runEnter);

// create the function to run for both events
function runEnter() {

    // prevent the page from refreshing
    d3.event.preventDefault();

    // select the input element and get the raw HTML node
    var inputElement = d3.select(".form-control");

    // get the value property of the input element
    var inputValue = inputElement.property("value");

    // print the value to the console
    console.log(inputValue);

    // filter the data
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue ||
                                                    sighting.city === inputValue ||
                                                    sighting.state === inputValue ||
                                                    sighting.country === inputValue ||
                                                    sighting.shape === inputValue);

    // print the values to the console
    console.log(filteredData);

    // clear the existing table
    d3.select("tbody").html("")

    // loop through the data and append the table with the filtered sightings to the web page
    renderTable(filteredData);

};
