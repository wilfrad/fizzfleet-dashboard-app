$("document").ready(() => {
    $(".cat-select").on("click", function () {
        if ($(this).selected != undefined) {
            $(this).removeAttr("selected");
            return;
        }
        $(this).attr("selected", "selected");
    });
});
const productCategories = $("#product-categories");
const publishCategories = $("#publish-categories");
let pcCount = 0;
let categories = [];
productCategories.change(() => {
    let selected;
    productCategories.children().each(function () {
        if ($(this).prop("selected")) return;
        // filter if not exists selection
        if (categories.filter((cat) => cat === $(this).val())) return;
        selected = $(this).text();
        categories.push($(this).val());
    });
    publishCategories.prepend(`
    <span id="pc-${pcCount}" class="rounded bg-light px-1 mx-1" >
        ${selected}
        <button
        type="button"
        class="btn btn-close"
        onclick="deleteCategory(${pcCount})"
            style="width: 4px; height: 4px;"></button>
    </span>
    `);
    pcCount++;
});
deleteCategory = (id) => {
    $("#pc-" + id).remove();
    console.log("si");
};