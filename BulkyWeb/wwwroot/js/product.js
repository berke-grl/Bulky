$(document).ready(function () {
    loadDataTable();
});

function loadDataTable() {
    dataTable = $('#tblData').DataTable({
        "ajax": { url : '/admin/product/getAll'},
        "columns": [
            { data: 'title', "width": "15%" },
            { data: 'isbn', "width": "10%" },
            { data: 'price', "width": "5%" },
            { data: 'author', "width": "15%" },
            { data: 'category.name', "width": "10%" },
            {
                data: 'id',
                "render": function (data) {
                    return `<div class="w-75 btn-group" role="group">
                    <a href="/admin/Product/Upsert?id=${data}" class="btn btn-sm btn-primary mx-2"> <i class="bi bi-pencil-square"></i> Edit</a>
                    <a href="/admin/Product/Delete?id=${data}" class="btn btn-sm btn-danger mx-2"> <i class="bi bi-trash3"></i> Delete</a>
                    </div>`
                },
                "width": "10%"
            },
        ]
    });
}