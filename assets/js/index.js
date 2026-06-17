function toggleMenu() {
    const menuList = document.getElementById('menuList');
    menuList.classList.toggle('show');
}

// Tutup menu saat klik di luar navbar
document.addEventListener('click', function (e) {
    const nav = document.querySelector('nav');
    if (!nav.contains(e.target)) {
        const menuList = document.getElementById('menuList');
        menuList.classList.remove('show');
    }
});

// Tutup menu saat salah satu link diklik
document.querySelectorAll('#menuList a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('menuList').classList.remove('show');
    });
});

// EFEK TEKS
const messages = [
    "Frontend Designer",
    "Fortis Fortuna Adiuvat",
    "Lone Wolf",
    "Artist"
  ];
 
  const el = document.getElementById('line');
  let msgIndex = 0;
  let charIndex = 0;
  let deleting = false;
 
  const TYPE_SPEED = 55;
  const DELETE_SPEED = 30;
  const HOLD_TIME = 1400;
 
  function tick() {
    const current = messages[msgIndex];
 
    if (!deleting) {
      el.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, HOLD_TIME);
        return;
      }
      setTimeout(tick, TYPE_SPEED);
    } else {
      el.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        msgIndex = (msgIndex + 1) % messages.length;
      }
      setTimeout(tick, deleting ? DELETE_SPEED : TYPE_SPEED);
    }
  }
 
  tick();
