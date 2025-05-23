import React from 'react';

function Footer() {
  return (
    <footer className="py-4 bg-gray-900 text-center">
      <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      <p>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        {' | '}
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </p>
    </footer>
  );
}

export default Footer;