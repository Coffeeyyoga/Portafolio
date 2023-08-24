const logo = document.getElementById("logo");
const sliderIcon = document.getElementById("icon-slider");
const certusIMG = document.getElementById("certus-img");
const preferedColorScheme = window.matchMedia("(prefers-color-scheme: dark)")
  .matches
  ? "dark"
  : "light";

const slider = document.getElementById("slider");
const setTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
};

slider.addEventListener("click", () => {
  let switchToTheme =
    localStorage.getItem("theme") === "dark" ? "light" : "dark";

  if (switchToTheme === "dark") {
    logo.setAttribute("src", "./assets/img/logo-etc/logo-darktheme.svg");
    certusIMG.setAttribute(
      "src",
      "assets/img/formacion-academica/certus-darktheme.svg"
    );
    sliderIcon.className = "fa-solid fa-moon";
  }

  if (switchToTheme === "light") {
    logo.setAttribute("src", "./assets/img/logo-etc/logo.svg");
    certusIMG.setAttribute("src", "assets/img/formacion-academica/certus.svg");
    sliderIcon.className = "fa-solid fa-sun";
  }

  setTheme(switchToTheme);
});

setTheme(localStorage.getItem("theme") || preferedColorScheme);

if (localStorage.getItem("theme") === "dark") {
  sliderIcon.className = "fa-solid fa-moon";
}

if (localStorage.getItem("theme") === "light") {
  sliderIcon.className = "fa-solid fa-sun";
}