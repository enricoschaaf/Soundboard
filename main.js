import './style.css'

document.querySelectorAll("button[data-url]").forEach(elem => elem.addEventListener("click", () => new Audio(elem.dataset.url).play()))