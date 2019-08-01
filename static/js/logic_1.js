function changeActive() {
    document.getElementById('#menu1').className = 'expand';


}

function makeTable(selected_id, data, columns) {
    var table = d3.select(selected_id).append('table')
    var thead = table.append('thead')
    var tbody = table.append('tbody');

    // append the header row
    thead.append('tr')
        .selectAll('th')
        .data(columns).enter()
        .append('th')
        .text(function (column) { return column; });

    // create a row for each object in the data
    var rows = tbody.selectAll('tr')
        .data(data)
        .enter()
        .append('tr');

    // create a cell in each row for each column
    var cells = rows.selectAll('td')
        .data(function (row) {
            return columns.map(function (column) {
                return { column: column, value: row[column] };
            });
        })
        .enter()
        .append('td')
        .text(function (d) { return d.value; })


    return table;

}

function makeColorTable(selected_id, data, columns) {
    var table = d3.select(selected_id).append('table')
    var thead = table.append('thead')
    var tbody = table.append('tbody');

    // append the header row
    thead.append('tr')
        .selectAll('th')
        .data(columns).enter()
        .append('th')
        .text(function (column) { return column; });

    // create a row for each object in the data
    var rows = tbody.selectAll('tr')
        .data(data)
        .enter()
        .append('tr');

    // create a cell in each row for each column
    var cells = rows.selectAll('td')
        .data(function (row) {
            return columns.map(function (column) {
                return { column: column, value: row[column] };
            });
        })
        .enter()
        .append('td')
        .text(function (d) { return d.value; }).attr('class', 'cell_value')

    return table;

}
d3.csv("../static/data/TextReviewOverview.csv", function (data) {
    // var parsedCSV = d3.csvParseRows(data);
    var parsedCSV = data;
    var logRows = [];
    var rfRows = [];
    var nbmRows = [];
    var nbbRows = [];
    var svmRows = [];
    for (i = 0; i < parsedCSV.length; i++) {
        if (parsedCSV[i].Model == "Logistic Regression") {
            logRows.push(parsedCSV[i]);
        }
        if (parsedCSV[i].Model == "Random Forest") {
            rfRows.push(parsedCSV[i]);
        }
        if (parsedCSV[i].Model == "Naive Bayes - Multinomial") {
            nbmRows.push(parsedCSV[i]);
        }
        if (parsedCSV[i].Model == "Naive Bayes - Bernoulli") {
            nbbRows.push(parsedCSV[i]);
        }
        if (parsedCSV[i].Model == "Support Vector Machine") {
            svmRows.push(parsedCSV[i]);
        }
    };
    makeColorTable("#text_review_log", logRows, ['Feature', 'Full_Data', 'Q1_Q2', "Q2_Q3", "Q1", "Q2", "Q3", "Q4"]).attr("id", "table_1");
    makeTable("#text_review_rf", rfRows, ['Feature', 'Full_Data', 'Q1_Q2', "Q2_Q3", "Q1", "Q2", "Q3", "Q4"]).attr("id", "table_2");
    makeTable("#text_review_nbb", nbbRows, ['Feature', 'Full_Data', 'Q1_Q2', "Q2_Q3", "Q1", "Q2", "Q3", "Q4"]).attr("id", "table_3");
    makeTable("#text_review_nbm", nbmRows, ['Feature', 'Full_Data', 'Q1_Q2', "Q2_Q3", "Q1", "Q2", "Q3", "Q4"]).attr("id", "table_4");
    makeTable("#text_review_svm", svmRows, ['Feature', 'Full_Data', 'Q1_Q2', "Q2_Q3", "Q1", "Q2", "Q3", "Q4"]).attr("id", "table_5");


});




d3.csv("../static/data/Whiskey_Advocate_All_scraped_KHupdate-23_Jul_(Team_Style_Defined)_with_descriptions.csv", function (data) {
    makeTable("#data-table_", data, ['Maker', 'Review Score', 'Price', 'Main Style', 'country', 'descriptions']).attr("class", "testing table table-striped table-bordered table-sm").attr("id", "data-table_");

});



function searchDescriptions() {
    var input = document.getElementById("keyWord");
    var filter = input.value.toUpperCase();
    var table = document.getElementById("data-table_");
    var tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td")[5];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    };
}

function searchNames() {
    var input = document.getElementById("keyWord");
    var filter = input.value.toUpperCase();
    var table = document.getElementById("data-table_");
    var tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    };
}


function updateTable() {
    var input = document.getElementById("keyWord");
    var filter = input.value.toUpperCase();
    var table = document.getElementById("data-table_");
    var tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[5];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    };


}

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("ghBtn").style.display = "block";
    } else {
        document.getElementById("ghBtn").style.display = "none";
    }
}

function toggleClass() {
    d3.selectAll(".tabs").attr("class", "tabs");
    d3.selectAll(this).attr("class", "tabs actives");
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


