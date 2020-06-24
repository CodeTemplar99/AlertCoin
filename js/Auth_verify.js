document.addEventListener("DOMContentLoaded", () => {
    firebase.auth().onAuthStateChanged(function (user) {
        if (!user) {
            window.location.href = "../User_login.html"
        }
        else {
            var user = firebase.auth().currentUser;
            const db = firebase.firestore();

            // db.collection("users")
            //     .get()
            //     .then(snap => {
            //         snap.forEach(doc => {
            //             console.log(doc.data());
            //             console.log(doc.id);
            //         });
            //     });

            let userDocId = firebase.auth().currentUser.uid;
            db.collection("users")
                .doc(userDocId)
                .get()
                .then(doc => {
                    // console.log(doc.data())
                    console.log(doc.data().username)
                    console.log(doc.data().country)
                    console.log(doc.data().wallet)
                    document.querySelector(".dummy-name").innerHTML = doc.data().username;
                })


            // console.log(hello.id)

            document.querySelector(".dummy-mail").innerHTML = user.email;
        }
    });


})
