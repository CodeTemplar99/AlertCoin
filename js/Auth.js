        //Listern to the form and get the data 1& 1.2
document.getElementById("signUp-form").addEventListener("submit", formData);

function formData(e) {
    e.preventDefault();

    let email = document.querySelector('#inputEmail').value;
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#inputPassword').value;
    let walletID = document.querySelector('#inputAddress').value;
    let country = document.querySelector('#inputCountry').value;

    //send message values
    createNewAccount(email,username,password,walletID,country);
  
}

//Send Message to Firebase(2)
function createNewAccount(email,username,password,walletID,country) {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(data){
        var account = {
            username: username,
            walletID: walletID,
            country: country,
        }
        let userId = data.user.uid
        console.log(userId)
          writeUserData(account,userId)
        }).catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorMessage);
        });
}
  function writeUserData(account,user) {
    try {
      firebase.database().ref('usersaa/' + user).set(account);
      // window.location.href = "../dashboard.html",true;
      console.log('profile created')
    }catch(error)  {
        console.log(error.message)
    };
}