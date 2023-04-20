const dropdownToggles = document.querySelectorAll('.btn_drop-down');
const dropdownMenus = document.querySelectorAll('.dropdown-menu');

dropdownMenus.forEach(function(dropdownMenu, index) {
  const dropdownItems = dropdownMenu.querySelectorAll('.dropdown-item');

  dropdownItems.forEach(function(dropdownItem) {
    dropdownItem.addEventListener('click', function(e) {
      e.preventDefault();
      const value = e.target.textContent;
      dropdownToggles[index].querySelector('.dropdown-toggle').textContent = value;
      dropdownMenus[index].classList.remove('show');
      dropdownToggles[index].classList.remove('show');
    });
  });
});

dropdownToggles.forEach(function(dropdownToggle, index) {
  dropdownToggle.addEventListener('click', function(e) {
    e.preventDefault();
    dropdownMenus[index].classList.toggle('show');
    dropdownToggle.classList.toggle('show');
    e.stopPropagation(); // Prevent the click event from propagating further
  });
});

window.addEventListener('click', function(e) {
  // Close any open dropdowns when the user clicks outside of them
  dropdownMenus.forEach(function(dropdownMenu, index) {
    if (!dropdownMenu.contains(e.target) && !dropdownToggles[index].contains(e.target)) {
      dropdownMenu.classList.remove('show');
      dropdownToggles[index].classList.remove('show');
    }
  });
});

// Get all the datepicker inputs and outputs
const inputs = document.querySelectorAll('.datepicker-input');
const outputs = document.querySelectorAll('.datepicker-output');

// Loop through all the datepicker inputs and attach the event listener to each one
inputs.forEach(function(input, key) {
  input.addEventListener('input', function() {
    // Set the corresponding output element's innerHTML to the input's value
    outputs[key].innerHTML = input.value;
  });
});



(function () {
    const anchors = document.querySelectorAll('a[href*="#"]')
    for (let anchor of anchors) {
        anchor.addEventListener("click", function (e) {
            e.preventDefault()
            const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
            document.querySelector(goto).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    }
})();

const burgerMenu = document.querySelector(".burger__menu");
const headerMenuFirst = document.querySelector(".header_menu__first_back");
const body = document.querySelector("body");

burgerMenu.addEventListener("click", () => {
  headerMenuFirst.classList.toggle("burger__menu--open");
  burgerMenu.classList.toggle('show');
  body.classList.toggle('stop');
});