var tableData = [
    { "Num": "1", "Name": "Kani", "Title": "Hello" },
    { "Num": "2", "Name": "Mani", "Title": "World" },
    { "Num": "3", "Name": "Moni", "Title": "Bye" }
];

var html = "";
html += "<table border='1'>";
html += "<tr><th>Number</th><th>Name</th><th>Titel</th></tr>";
$.each(tableData, function () {
    html += "<tr>";
    html += "<td>" + this['Num'] + "</td>";
    html += "<td>" + this['Name'] + "</td>";
    html += "<td>" + this['Title'] + "</td>";
    html += "</tr>";
});
html += "</table>";
$('#ctlGrid').html(html);