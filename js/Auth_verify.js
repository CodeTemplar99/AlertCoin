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

            // function resolveAfter2Seconds(x) {
            //     return new Promise(resolve => {
            //         setTimeout(() => {
            //             resolve(x);
            //         }, 2000);
            //     });
            // }

            // async function f1() {
            //     var x = await resolveAfter2Seconds(10);
            //     console.log(x); // 10
            // }
            // f1();


            db.collection(user.uid)
                .doc(user.uid).get

            async function log() {
                await data();
                var user = doc.data().get()
                console.log(user.email); // 10
            }

            log()
            document.querySelector(".dummy-name").innerHTML = user.user;
            document.querySelector(".dummy-mail").innerHTML = user.email;
        }
    });


})
