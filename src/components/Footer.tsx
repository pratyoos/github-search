import "../index.css"

function Footer() {
  return (
    <footer className="bg-gray-800 border-t mt-10 py-4 text-center text-sm text-white">
      <p>&copy; {new Date().getFullYear()} GitHub Search   |   Built with ❤️ by <a className="text-blue-500" href="https://www.github.com/pratyoos">Pratyoos</a>.</p>
    </footer>
  );
}

export default Footer;