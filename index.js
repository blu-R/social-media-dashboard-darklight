const toggle = document.querySelector(".toggle");
const hr = document.querySelector(".header__hr");
const toggleCircle = document.querySelector(".toggle__circle");
const currentTheme = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : null;

let on = true;
const toggleTheme = () => {
    if (on) {
        document.documentElement.setAttribute("data-theme", "light");
        toggle.classList.remove("toggle-bg-gradient");
        toggleCircle.classList.add("toggle__circle-on");
        hr.style.opacity = 1;
        localStorage.setItem("theme", "light");

        on = false;
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        toggle.classList.add("toggle-bg-gradient");
        toggleCircle.classList.remove("toggle__circle-on");
        hr.style.opacity = 0.2;
        localStorage.setItem("theme", "dark");

        on = true;
    }
};

const over = () => {
    if (!on) {
        toggle.classList.add("toggle-bg-gradient");
    }
};
const out = () => {
    if (!on) {
        toggle.classList.remove("toggle-bg-gradient");
    }
};

if (currentTheme === "light") {
    toggleTheme();
}

toggle.addEventListener("mouseover", over, false);
toggle.addEventListener("mouseout", out, false);
