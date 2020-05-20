// side bar
let isOpen = false;

function showSideBar() {
    document.querySelector('#navbarSupportedContent').style.display = isOpen ? "none" : "block"
    isOpen = !isOpen

}


// function increaseDaily() {

//     // let dailyFigure = 3000;
//     let seeDaily = 0;
//     let i = 0;
//     if (i < 3000) {
//         seeDaily = i++;
//         document.getElementById('daily-figure').innerHTML = seeDaily;

//     }
// }
// increaseDaily()

// for (var i = 0; i < countryInfo.length; i += 1) {