// Implement dropdown for animal type selection
/*/ When the user clicks on the button, toggle between hiding and showing the dropdown content */

async function typeAnimalHandler(dropdown) {
    // Stop the browser from submitting the form so we can do so with JavaScript
  dropdown.preventDefault();

  document.getElementById("myDropdown").classList.toggle("show");
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }

  document.querySelector('.typeAnimal-form').addEventLitener('click', signupFormHandler);