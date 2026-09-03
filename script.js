// Small bits of interactivity — the same kind of JS a Squarespace page ships.

// 1. Current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// 2. Mobile nav toggle
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
toggle.addEventListener("click", () => links.classList.toggle("open"));

// Close the mobile menu after clicking a link
links.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => links.classList.remove("open"))
);

// 3. Deployment / hosting status indicator
// Confirms the page loaded and JS is executing on the host.
const status = document.getElementById("hostStatus");
window.addEventListener("load", () => {
  const host = location.hostname || "local file";
  const proto = location.protocol.replace(":", "");
  status.textContent = `Deployed & live — served over ${proto} from ${host}`;
  status.classList.add("ok");
});

// 4. Contact form (front-end only demo — no backend needed for host testing)
const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  note.hidden = false;
  note.textContent = "Thanks! This is a test form — no message was actually sent.";
  form.reset();
});
