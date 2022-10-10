console.log("kame house");
const toggle = document.querySelector(".toggle");
const toggleCircle = document.querySelector(".toggle__circle");

let on = true;
const toggleTheme = () => {
    if (on) {
        document.documentElement.setAttribute("data-theme", "light");
        toggle.classList.remove("toggle-bg-gradient");
        toggleCircle.classList.add("toggle__circle-on");

        on = false;
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        toggle.classList.add("toggle-bg-gradient");
        toggleCircle.classList.remove("toggle__circle-on");

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

toggle.addEventListener("mouseover", over, false);
toggle.addEventListener("mouseout", out, false);
