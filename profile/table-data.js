window.addEventListener("load", function(event) {
    var dataTableRow = document.querySelectorAll(".items-table__data tbody tr");
    var i;
    for (i = 0; i < dataTableRow.length; i++) {
        var deleteButton = document.createElement("td");
        deleteButton.className = "items-table__data_delete";
        dataTableRow[i].appendChild(deleteButton);
    }

    if (localStorage.getItem("table-data") != null) {
        var table = document.querySelector(".items-table__data tbody");
        table.innerHTML = this.localStorage.getItem("table-data");
    } 

    var deleteButtons = document.querySelectorAll(".items-table__data_delete");
    for (i = 0; i < deleteButtons.length; i++) {
        addDeleteFunction(deleteButtons[i]);
    }

}, false)

function addDeleteFunction(item) {
    item.onclick = function() {
        var item = this.parentElement;
        item.remove();
        saveTableState();
    }
}

function saveTableState() {
    var table = document.querySelector(".items-table__data tbody");
    localStorage.setItem("table-data", table.innerHTML);
}

function addItem() {
    var inputId = document.querySelector(".items-table__input").value;
    if (inputId.trim() === "") {
        alert("Write something first!");
        return;
    }

    var entryRow = document.createElement("tr");
    var entryId = document.createElement("td");
    var entryTemplateData = document.createElement("td");
    var entryTemplateDataSecond = document.createElement("td");
    var templateData = document.createTextNode("Template");
    var templateDataSecond = document.createTextNode("Template");
    entryTemplateData.appendChild(templateData);
    entryTemplateDataSecond.appendChild(templateDataSecond);

    var id = document.createTextNode(inputId);
    entryId.appendChild(id);

    var deleteButton = document.createElement("td");
    deleteButton.className = "items-table__data_delete";
    addDeleteFunction(deleteButton);

    entryRow.appendChild(entryId);
    entryRow.appendChild(entryTemplateData);
    entryRow.appendChild(entryTemplateDataSecond);
    entryRow.appendChild(deleteButton);


    document.querySelector(".items-table__data tbody").appendChild(entryRow);
    document.querySelector(".items-table__input").value = "";

    saveTableState();
}

