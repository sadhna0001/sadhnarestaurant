// Script for handling the contact form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Basic validation
    if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been sent.`);
      document.getElementById('contactForm').reset(); // Clear the form
    } else {
      alert('Please fill in all the fields.');
    }
  });
  const toggleThemeButton = document.getElementById('toggle-theme');

  toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDarkMode = document.body.classList.contains('dark');
    toggleThemeButton.textContent = isDarkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme';
  });
    