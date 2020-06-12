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
        })
    }
})
