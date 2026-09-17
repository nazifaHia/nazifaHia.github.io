(function () {
  const root = document.documentElement;
  const toggleBtn = document.getElementById('theme-toggle');
  const icon = document.getElementById('theme-icon');

  function applyTheme(isDark) {
    root.classList.toggle('dark-mode', isDark);
    if (icon) {
      icon.classList.toggle('fa-sun', !isDark);
      icon.classList.toggle('fa-moon', isDark);
    }
  }

  const saved = localStorage.getItem('theme');
  applyTheme(saved !== 'light');   // dark by default, light only if explicitly chosen

  if (toggleBtn) {
    toggleBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const isDark = !root.classList.contains('dark-mode');
      applyTheme(isDark);
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }
})();