// Dark Mode
const btnDarkMode = document.querySelector(".fixed-dark-btn");
const btnDarkModeIcon = document.querySelector(".fixed-dark-btn > .fas");
const sectionHeader = Array.from(document.querySelectorAll(".section-header"));
const sectionContent = Array.from(
  document.querySelectorAll(".section-content")
);
let isDarkMode = false;

btnDarkMode.addEventListener("click", darkMode);

function darkMode(e) {
  if (!isDarkMode) {
    document.body.style.backgroundColor = "#212327";
    sectionHeader.forEach((element) => {
      element.classList.add("dark");
    });
    sectionContent.forEach((element) => {
      element.classList.add("dark");
    });
    btnDarkModeIcon.classList.add("fa-sun");
    btnDarkModeIcon.classList.remove("fa-moon");
    isDarkMode = true;
    window.localStorage.setItem("isDarkMode", "true");
  } else {
    isDarkMode = false;
    document.body.style.backgroundColor = "white";
    sectionHeader.forEach((element) => {
      element.classList.remove("dark");
    });
    sectionContent.forEach((element) => {
      element.classList.remove("dark");
    });
    btnDarkModeIcon.classList.add("fa-moon");
    btnDarkModeIcon.classList.remove("fa-sun");
  }
}
