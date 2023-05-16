const stylesheet = document.documentElement.style;
const toggle = document.querySelector(".switch__input[data-theme-toggle]");
toggle.addEventListener("click", () => {
// get the css variables
const color1 = getComputedStyle(document.documentElement).getPropertyValue(
"--color-1"
);
const color2 = getComputedStyle(document.documentElement).getPropertyValue(
"--color-2"
);
// switching the css variables
stylesheet.setProperty("--color-1", color2);
stylesheet.setProperty("--color-2", color1);
});

//yes