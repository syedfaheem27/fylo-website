const themeToggleButton = document.getElementById("theme-toggle");
const lightIcon = document.getElementById("theme-toggle-light-icon");
const darkIcon = document.getElementById("theme-toggle-dark-icon");

// It's best to inline this in `head` to avoid FOUC (flash of unstyled content) when changing pages or themes
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  lightIcon.classList.remove("hidden");
} else {
  document.documentElement.classList.remove("dark");
  darkIcon.classList.remove("hidden");
}

themeToggleButton.addEventListener("click", toggleTheme);

function toggleTheme() {
  // changeIcon
  lightIcon.classList.toggle("hidden");
  darkIcon.classList.toggle("hidden");
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "dark") {
      //remove dark class on root and local storage
      removeDarkMode();
    } else {
      // add dark class on root
      addDarkMode();
    }
  } else {
    // check if there's a dark class or not on root
    if (document.documentElement.classList.contains("dark")) {
      removeDarkMode();
    } else {
      addDarkMode();
    }
  }
}

//removes dark from root element class and also from local storage key
function removeDarkMode() {
  document.documentElement.classList.remove("dark");
  localStorage.setItem("color-theme", "");
}
//adds dark to root element class and also to the local storage key

function addDarkMode() {
  document.documentElement.classList.add("dark");
  localStorage.setItem("color-theme", "dark");
}
