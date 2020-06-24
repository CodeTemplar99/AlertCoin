// for users
document.querySelector("#users-tab").addEventListener("click", () => {
    $(".views").not("#table-con").hide();
    $("#table-con").css("display", "block")
    console.log("users");
})

// for new users
document.querySelector("#new-users-tab").addEventListener("click", () => {
    $(".views").not("#table-new-con").hide();
    $("#table-new-con").css("display", "block")
    console.log("new view");
})

// for edit
document.querySelector("#edit-tab").addEventListener("click", () => {
    $(".views").not("#edit-detail-con").hide();
    $("#edit-detail-con").css("display", "block")
    console.log("edit view");
})

// for withdrawal
document.querySelector("#withdraw-tab").addEventListener("click", () => {
    $(".views").not("#withdraw-con").hide();
    $("#withdraw-con").css("display", "block")
    console.log("withdrawals");
})

// for web mail
// document.querySelector("#mail_tab").addEventListener("click", () => {
//     $(".views").not("#web-mail-con").hide();
//     $("#web-mail-con").css("display", "block")
//     function RealMailView() {
//         // var superLevel = $("#web-mail-con")
//         var l1 = document.createElement("iframe");
//         var attributes = ["src", "title", "width", "height"];
//         var attValues = ["https:www.google.com", "iframe", "100%", "100%"];

//         for (var i = 0; i < attributes.length; i++) {
//             l1.setAttribute(attributes[i], attValues[i])
//         }
//         document.querySelector("#web-mail-con").appendChild(l1);
//     }
//     RealMailView()
//     console.log("web mail");
// })


        /**Fetch all user  Home Icon 1*/
        var tbody = document.querySelector('tbody');
        // var trs = tbody.querySelectorAll('tr');
        // trs.forEach( function(tr){
        //     var td = tr.querySelectorAll('td');
        //     console.log(td);
        // });
        var i = 1;
var database = firebase.database().ref('users').on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      console.log(childData);
      
        var tr = document.createElement('tr');
        let th = document.createElement('th');
        let text = document.createTextNode(i);
        th.append(i);
        th.setAttribute('scope', 'row');
        tr.append(th);


        for (const key in childData) {
            if (childData.hasOwnProperty(key)) {
                const element = childData[key];
                let td = document.createElement('td');
                let text = document.createTextNode(element);
                td.append(text);
                tr.append(td);
                tbody.append(tr);
            }
        }
        i++;
    });
});

        /**Fetch new user Details User plus icon 2*/

        var database = firebase.database().ref('users').on('value', function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
              var childData = childSnapshot.val();
            //   console.log(childData)
            });
        });


            /**Add Client profit and Investment  This should add/update investment table3a*/
                   
            document.getElementById("client-profit-form").addEventListener("submit", clientData);

            function clientData(e) {
                e.preventDefault();

                let clientID = document.querySelector('#ClientId').value;
                let totalInvestment = document.querySelector('#totalInvestment').value;
                let totalProfit = document.querySelector('#totalProfit').value;
                //send message values
                var investment = {
                    clientID : clientID,
                    totalInvestment : totalInvestment,
                    totalProfit : totalProfit
                }

                try {
                    firebase.database().ref('Invesments/' + clientID).set(investment).then(function (){
                    console.log('investment created')
                    document.getElementById("client-profit-form").reset()
                    })
            
                }catch(error)  {
                    console.log(error.message)
                };

            }
            /**Fetch profit on login client on dashboard page 3b*/

        var database = firebase.database().ref('Investmens/'+ClientId).on('value', function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
              var childData = childSnapshot.val();
            //   console.log(childData)
            });
        });


            /**Client can click Withdraw Investment(this post to withdraws table) A*/


            document.getElementById("client-profit-form").addEventListener("submit", clientData);

            function clientData(e) {
                e.preventDefault();

                let clientID = document.querySelector('#ClientId').value;
                let totalInvestment = document.querySelector('#totalInvestment').value;
                let totalProfit = document.querySelector('#totalProfit').value;
                //send message values
                var investment = {
                    clientID : clientID,
                    totalInvestment : totalInvestment,
                    totalProfit : totalProfit
                }

                try {
                    firebase.database().ref('Invesments/' + clientID).set(investment).then(function (){
                    console.log('investment created')
                    document.getElementById("client-profit-form").reset()
                    })
            
                }catch(error)  {
                    console.log(error.message)
                };

1

            /**Fetch client that seek to withdraw data and paste on the dollar view B*/

            var database = firebase.database().ref('Withdraw/'+ClientId).on('value', function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
              var childData = childSnapshot.val();
            //   console.log(childData)
            });
        });