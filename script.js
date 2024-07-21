function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  if (navLinks.style.display === 'block') {
    navLinks.style.display = 'none';
  } else {
    navLinks.style.display = 'block';
  }
}


document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav ul li a");
  const content = document.getElementById("content");

  links.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      fetchPage(event.target.href);
    });
  });

  function fetchPage(url) {
    fetch(url)
      .then(response => response.text())
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const newContent = doc.getElementById("content").innerHTML;
        content.innerHTML = newContent;
      })
      .catch(error => console.error('Error loading page:', error));
  }
});
