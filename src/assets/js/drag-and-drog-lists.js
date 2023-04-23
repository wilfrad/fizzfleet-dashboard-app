$(function () {
    $("#product-categories, #categories")
        .sortable({
            connectWith: ".connectedSortable",
        })
        .disableSelection();
});