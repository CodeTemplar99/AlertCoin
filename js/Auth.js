// sign up

const SignUpForm = document.querySelector("#signUp-form");
SignUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // get user info
    const email = SignUpForm['inputEmail'].value;
    const password = SignUpForm['inputPassword'].value;
    const confirm_password = SignUpForm['confirmPassword'].value;
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const username = SignUpForm['username'].value;
    const wallet = SignUpForm['inputAddress'].value;
    const country = SignUpForm['inputCountry'].value;

    if (email !== "" && email.match(mailFormat)) {
        console.log("11");
    }
    else {

        console.log("00");
    }

    if (password == "") {
        console.log("00");
    }

    if (email !== "" && password !== "" & confirm_password === password & wallet !== "" & country !== "") {
        console.log("11 and 11");

        // sign up user
        auth.createUserWithEmailAndPassword(email, password).then(cred => {
            function addUsersToFirestore() {
                var users = {
                    username: username,
                    wallet: wallet,
                    country: country
                };

                const db = firebase.firestore();
                db.collection("users").doc().set(users);
            }
            addUsersToFirestore();

            if (auth.createUserWithEmailAndPassword(email, password)) {

                console.log(cred)
                alert("you have successfully signed up");

                setTimeout(() => {
                    window.location.href = "./user_login.html"

                }, 3000);

            }
            else {

                alert("Sign up not successful try again")
            }
        })
        // send email on sign up

        // var user = firebase.auth().currentUser;
        // user.sendEmailVerification().then(function () {
        //     // Email sent.
        // }).catch(function (error) {
        //     // An error happened.
        // });


    }
})
