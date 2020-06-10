// for users
document.querySelector("#users-tab").addEventListener("click", () => {
    $(".views").not("#table-con").hide();
    $("#table-con").css("display", "block")
    console.log("users");
})

// for edit
document.querySelector("#edit-tab").addEventListener("click", () => {
    $(".views").not("#edit-detail-con").hide();
    $("#edit-detail-con").css("display", "block")
    console.log("edit view");
})

// for web mail
document.querySelector("#mail_tab").addEventListener("click", () => {
    $(".views").not("#web-mail-con").hide();
    $("#web-mail-con").css("display", "block")
    function RealMailView() {
        // var superLevel = $("#web-mail-con")

        var l1 = document.createElement("iframe");
        var attributes = ["src", "title", "width", "height"];
        var attValues = ["https://mdn-samples.mozilla.org/snippets/html/iframe-simple-contents.html", "iframe example 1", "100%", "100%"];

        for (var i = 0; i < attributes.length; i++) {
            l1.setAttribute(attributes[i], attValues[i])
        }
        document.querySelector("#web-mail-con").appendChild(l1);
    }
    RealMailView()
    console.log("web mail");
})