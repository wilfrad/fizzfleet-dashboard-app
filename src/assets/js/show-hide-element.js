$(document).ready(function () {
    // show selected view when a button is clicked, hidden all views
    $(".show-view").click(function () {
        const containerShow = $(this).data("view");
        $(".view").removeClass("show active");
        $("#" + containerShow).addClass("show active");
    });
    // show selected tab when a button is clicked
    var previousShow;
    $(".show-tab").click(function () {
        const container = $(this).data("tab");
        if (container !== previousShow) {
            $("#" + container).show();
            previousShow = container;
            return;
        }
        $("#" + container).hide();
        previousShow = undefined;
    });
});