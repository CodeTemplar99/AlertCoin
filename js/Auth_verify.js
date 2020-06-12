document.addEventListener("DOMContentLoaded", () => {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // console.log(cred)
            window.location.href = "./dashboard.html"
        } else {

            window.location.href = "./user_login.html"
        }
    });
})
