
  // Get the toggle button and the body element
  const toggleButton = document.getElementById('dark-mode-toggle');
  const body = document.body;

  // Check for saved dark mode preference
  if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
  }

  // Toggle dark mode on button click
  toggleButton.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
      localStorage.setItem('dark-mode', 'disabled');
    } else {
      body.classList.add('dark-mode');
      localStorage.setItem('dark-mode', 'enabled');
    }
  });