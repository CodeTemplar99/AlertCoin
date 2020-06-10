function signUpNew() {
    let email = document.querySelector("#inputEmail").value;
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email !== "" && email.match(mailFormat)) {
        console.log("match");
    }
    else {

        console.log("email is empty");
    }

    let password = document.querySelector("#inputPassword").value;
    if (password == "") {
        console.log("password is empty");
    }

    let ref = FIRDatabase.database().reference().root;
    if (email !== "" && password !== "") {
        console.log("email and password not empty");
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });

    } else {
    }
}
document.querySelector("#signUpNow").addEventListener("click", () => {
    signUpNew()
});

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
        var attValues = ["https:www.google.com", "iframe", "100%", "100%"];

        for (var i = 0; i < attributes.length; i++) {
            l1.setAttribute(attributes[i], attValues[i])
        }
        document.querySelector("#web-mail-con").appendChild(l1);
    }
    RealMailView()
    console.log("web mail");
})