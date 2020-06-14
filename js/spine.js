// side bar
let isOpen = false;

function showSideBar() {
    document.querySelector('#navbarSupportedContent').style.display = isOpen ? "none" : "block"
    isOpen = !isOpen;

}

setInterval(() => {

    // investment
    let items = document.querySelectorAll('.investment-badge');
    items.forEach(function (item) {
        function getRandomInt(min, max) {
            min = Math.ceil(200);
            max = Math.floor(15000);
            fillNum = Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive

        }
        getRandomInt()
        item.innerHTML = "$" + fillNum;
    });

    // random investors
    let investors = document.querySelectorAll('.investors');
    investors.forEach(function (investor) {
        function getRandomInvestors(min, max) {
            min = Math.ceil(0);
            max = Math.floor(3898);
            invNumber = Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive

        }
        getRandomInvestors()
        investor.innerHTML = dummies[invNumber];
    });

    // withdrawal
    let items1 = document.querySelectorAll('.withdrawal-badge');
    items1.forEach(function (item1) {
        function randomWithdraw(min, max) {
            min = Math.ceil(1000);
            max = Math.floor(35000);
            fillWithdraw = Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive

        }


        randomWithdraw()
        item1.innerHTML = "$" + fillWithdraw;
        // console.log(item)
    });
    // random cash out
    let cashOuts = document.querySelectorAll('.cashout');
    cashOuts.forEach(function (cashOut) {
        function getRandomInvestors(min, max) {
            min = Math.ceil(0);
            max = Math.floor(3898);
            cashNumber = Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive

        }
        getRandomInvestors()
        cashOut.innerHTML = dummies[cashNumber];
    });

    // console.log(item)


}, 10000);


// user dash
function openNewInvestmentPage() {
    window.location.href = "./invest.html"
}

function openWithdrawPage() {
    window.location.href = "./withdraw.html"
}

// invest page

$("select")
    .change(function () {
        var str = "";
        $("select option:selected").each(function () {
            str += $(this).text() + " ";
        });
        console.log(str);
    })
    .change();

document.querySelector("#plan-a").addEventListener('click', () => {
    console.log("plan A");
})

// const ivForm = document.querySelector("#invest-form");
// ivForm.addEventListener('submit', (e) => {
//     e.preventDefault();


// })
