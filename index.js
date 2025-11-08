// index.js - sidebar toggle and initial state handling
console.log("Script running...");

const sidebar = document.querySelector('.sidebar');
const hambBtn = document.getElementById('hambBtn');
const hamI = document.getElementById('hamI');
const crossI = document.getElementById('crossI');
const overlay = document.getElementById('overlay');

function isMobile() {
  return window.matchMedia('(max-width:920px)').matches;
}

function openSidebar() {
  sidebar.classList.remove('hidden');
  sidebar.style.transform = 'translateX(0)';
  sidebar.setAttribute('aria-hidden', 'false');
  hambBtn.setAttribute('aria-expanded', 'true');
  hamI.style.display = 'none';
  crossI.style.display = 'inline';
  overlay.classList.add('show');
  overlay.style.display = 'block';
}

function closeSidebar() {
  if (isMobile()) {
    sidebar.style.transform = 'translateX(calc(-1 * var(--sidebar-width)))';
    sidebar.setAttribute('aria-hidden', 'true');
  } else {
    // On desktop keep sidebar visible; hide hamburger icon if you want
    sidebar.style.transform = 'translateX(0)';
    sidebar.setAttribute('aria-hidden', 'false');
  }
  hambBtn.setAttribute('aria-expanded', 'false');
  hamI.style.display = isMobile() ? 'inline' : 'none';
  crossI.style.display = 'none';
  overlay.classList.remove('show');
  overlay.style.display = 'none';
}

// Toggle handler
hambBtn.addEventListener('click', () => {
  const expanded = hambBtn.getAttribute('aria-expanded') === 'true';
  if (expanded) {
    closeSidebar();
  } else {
    openSidebar();
  }
});

// Clicking overlay closes sidebar
overlay.addEventListener('click', closeSidebar);

// Close sidebar when a link is clicked (only on mobile)
sidebar.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  if (isMobile()) closeSidebar();
}));

// Initialize state on load & resize
function initSidebar() {
  if (isMobile()) {
    // Mobile: hide sidebar by default, show hamburger
    sidebar.style.transform = 'translateX(calc(-1 * var(--sidebar-width)))';
    sidebar.setAttribute('aria-hidden', 'true');
    hambBtn.setAttribute('aria-expanded', 'false');
    hamI.style.display = 'inline';
    crossI.style.display = 'none';
    overlay.style.display = 'none';
  } else {
    // Desktop: show sidebar; optionally hide hamburger icon (we hide it)
    sidebar.style.transform = 'translateX(0)';
    sidebar.setAttribute('aria-hidden', 'false');
    hambBtn.setAttribute('aria-expanded', 'false');
    hamI.style.display = 'none';
    crossI.style.display = 'none';
    overlay.style.display = 'none';
  }
}

window.addEventListener('resize', initSidebar);
document.addEventListener('DOMContentLoaded', initSidebar);
initSidebar();
