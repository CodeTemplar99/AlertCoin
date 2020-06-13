// sign up

const SignUpForm = document.querySelector("#signUp-form");
SignUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // get user info
    const email = SignUpForm['inputEmail'].value;
    const password = SignUpForm['inputPassword'].value;
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email !== "" && email.match(mailFormat)) {
        console.log("11");
    }
    else {

        console.log("00");
    }

    if (password == "") {
        console.log("00");
    }

    if (email !== "" && password !== "") {
        console.log("11 and 11");
        // console.log(email, password);
        // sign up user
        auth.createUserWithEmailAndPassword(email, password).then(cred => {
            console.log(cred)

            if (auth.createUserWithEmailAndPassword(email, password)) {
                window.location.href = "./user_login.html";
            }

            else {
                console.log("account not created")
            }
        })

        var user = firebase.auth().currentUser;

        user.sendEmailVerification().then(function () {
            // Email sent.
        }).catch(function (error) {
            // An error happened.
        });


    }


})
