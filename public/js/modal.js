// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//         x.className += " responsive";
//     } else {
//         x.className = "topnav";
//     }
// }

// Modal for Contact - Just for fun!

const open = document.getElementById('open');
const myModal = document.getElementById('myModal');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    myModal.classList.add('show');
});

close.addEventListener('click', () => {
    myModal.classList.remove('show');
});