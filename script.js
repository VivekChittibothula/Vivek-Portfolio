const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const root = document.documentElement;
const header = $("#site-header");
const menuToggle = $("#menu-toggle");
const navLinks = $("#nav-links");
const themeToggle = $("#theme-toggle");
const themeLabel = $(".theme-label");
const themeIcon = $(".theme-icon");
const soundToggle = $("#sound-toggle");
const soundLabel = $(".sound-label");

const storage = {
    get(key) {
        try { return localStorage.getItem(key); } catch { return null; }
    },
    set(key, value) {
        try { localStorage.setItem(key, value); } catch { /* Storage may be blocked. */ }
    }
};

const savedTheme = storage.get("portfolio-theme");
if (savedTheme === "light" || savedTheme === "dark") root.dataset.theme = savedTheme;

const updateThemeButton = () => {
    const light = root.dataset.theme === "light";
    themeToggle.setAttribute("aria-pressed", String(light));
    themeToggle.setAttribute("aria-label", light ? "Switch to dark mode" : "Switch to light mode");
    themeLabel.textContent = light ? "Dark mode" : "Light mode";
    themeIcon.textContent = light ? "☾" : "☼";
};
updateThemeButton();

themeToggle.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
    storage.set("portfolio-theme", root.dataset.theme);
    updateThemeButton();
});

menuToggle.addEventListener("click", () => {
    const open = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!open));
    navLinks.classList.toggle("is-open", !open);
});

$$('#nav-links a').forEach((link) => link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    navLinks.classList.remove("is-open");
}));

let scrollFrame = null;
window.addEventListener("scroll", () => {
    if (scrollFrame !== null) return;
    scrollFrame = requestAnimationFrame(() => {
        header.classList.toggle("is-scrolled", window.scrollY > 8);
        scrollFrame = null;
    });
}, { passive: true });

const revealItems = $$(".reveal:not(.is-visible)");
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
    const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -8% 0px" });
    revealItems.forEach((item) => observer.observe(item));
}

if (!window.matchMedia("(pointer: coarse)").matches) {
    const hero = $(".hero");
    hero.addEventListener("pointermove", (event) => {
        const bounds = hero.getBoundingClientRect();
        const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 22;
        const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 22;
        hero.style.setProperty("--mx", `${x.toFixed(1)}px`);
        hero.style.setProperty("--my", `${y.toFixed(1)}px`);
    }, { passive: true });
    hero.addEventListener("pointerleave", () => {
        hero.style.setProperty("--mx", "0px");
        hero.style.setProperty("--my", "0px");
    });
}

const effectSources = {
    click: "./assets/click.mp3",
    hover: "./assets/hover.mp3",
    transition: "./assets/transition.mp3"
};
const effectPools = { click: [], hover: [], transition: [] };
let soundEnabled = false;
let lastHoverAt = 0;

const playEffect = (type, volume = 0.22) => {
    if (!soundEnabled || document.visibilityState !== "visible") return;
    const pool = effectPools[type];
    let audio = pool.find((item) => item.paused || item.ended);
    if (!audio) {
        audio = new Audio(effectSources[type]);
        audio.preload = "auto";
        pool.push(audio);
    }
    audio.volume = volume;
    audio.currentTime = 0;
    audio.play().catch(() => {});
};

soundToggle.addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    soundToggle.classList.toggle("is-on", soundEnabled);
    soundToggle.setAttribute("aria-pressed", String(soundEnabled));
    soundToggle.setAttribute("aria-label", soundEnabled ? "Turn sound effects off" : "Turn sound effects on");
    soundLabel.textContent = soundEnabled ? "Sound on" : "Sound off";
    if (soundEnabled) playEffect("click", 0.18);
});

document.addEventListener("pointerover", (event) => {
    const target = event.target instanceof Element ? event.target.closest("a, button, .work-item") : null;
    if (!target || target.id === "sound-toggle" || (event.relatedTarget instanceof Node && target.contains(event.relatedTarget))) return;
    const now = performance.now();
    if (now - lastHoverAt > 140) {
        playEffect("hover", 0.12);
        lastHoverAt = now;
    }
});

document.addEventListener("click", (event) => {
    const target = event.target instanceof Element ? event.target.closest("a, button, .work-item") : null;
    if (!target || target.id === "sound-toggle") return;
    playEffect(target.matches('a[href^="#"]') ? "transition" : "click", 0.2);
});
