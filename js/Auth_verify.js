document.addEventListener("DOMContentLoaded", () => {
    firebase.auth().onAuthStateChanged(function (user) {
        if (!user) {
            window.location.href = "./user_login.html"
        }
        else {
            var user = firebase.auth().currentUser;
            const db = firebase.firestore();
            // db.collection('users').doc(user.uid)
            //     .get()
            //     .then
            //     (
            //         // snap => {
            //         // snap.forEach(
            //         doc => {
            //             console.log(doc.data.wallet);
            //             console.log(doc.id);
            //         }
            //         // );
            //         // }
            //     );

            db.collection('users').doc(user.uid)
                .get()
                .then(doc => {
                    // if (doc.exists) {
                    doc.data();
                    console.log(doc.id)
                    console.log(doc.data().wallet)
                    // }
                })

            document.querySelector(".dummy-name").innerHTML = user.user;
            document.querySelector(".dummy-mail").innerHTML = user.email;
        }
    });


})
