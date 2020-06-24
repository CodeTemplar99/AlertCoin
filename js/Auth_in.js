
() => {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // console.log(cred)
            window.location.href = "./dashboard.html"
        } else {

            window.location.href = "./user_login.html"
        }
    });
}


// sign in
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // get user info
    const email = loginForm['regMail'].value;
    const password = loginForm['password'].value;
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email !== "" && email.match(mailFormat)) {
        console.log("match and not empty");
    }
    else {

        console.log("email is empty");
    }

    if (password == "") {
        console.log("password is empty");
    }

    if (email !== "" && password !== "") {
        console.log("email and password not empty");
        console.log(email);

        // sign in user
        firebase.auth().signInWithEmailAndPassword(email, password).then(cred => {
            // console.log(cred)
            if (firebase.auth().signInWithEmailAndPassword) {
                alert("Log in Successful")
                window.location.href = "../Dashboard.html";
            }

            else {
                alert("Log not in Successful")
            }

            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    // console.log(cred)
                    window.location.href = "../Dashboard.html";
                } else {

                    window.location.href = "../User_login.html";
                }
            });
        })
    }

})