document.addEventListener("DOMContentLoaded", () => {
    firebase.auth().onAuthStateChanged(function (user) {
        if (!user) {
            window.location.href = "./user_login.html"
        }
        else {
            var user = firebase.auth().currentUser;
            const db = firebase.firestore();
            db.collection("users")
                .get()
                .then(snap => {
                    snap.forEach(doc => {
                        console.log(doc.data());
                        console.log(doc.id);
                    });
                });
            document.querySelector(".dummy-name").innerHTML = user.user;
            document.querySelector(".dummy-mail").innerHTML = user.email;
        }
    });


})
