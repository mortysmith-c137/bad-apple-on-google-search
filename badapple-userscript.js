// ==UserScript==
// @name         bad-apple-on-google-search
// @namespace    Morty
// @description  Bad Apple playing directly on the Google Search background.
// @version      1.2
// @match        https://www.google.com/search?q=bad+apple*
// @match        https://www.google.com/search?q=badapple*
// ==/UserScript==

if (!location.href.includes("bad+apple") &&
    !location.href.includes("badapple")) return;

const style = document.createElement("style");

style.textContent = `
    * {
        background: transparent !important;
        background-image: none !important;
        box-shadow: none !important;
    }

    html, body {
        background: transparent !important;
    }
`;

(document.head || document.documentElement).appendChild(style);

const video = document.createElement("video");

video.src = "http://localhost:8000/badapple.mp4";
video.autoplay = true;
video.loop = true;
video.muted = false;

document.addEventListener("click", () => video.play(), { once: true });

Object.assign(video.style, {
    position: "fixed",
    inset: 0,
    width: "100vw",
    height: "100vh",
    objectFit: "cover",
    zIndex: -1,
    pointerEvents: "none"
});

document.body.appendChild(video);
