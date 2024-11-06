import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar-nav">
        <Link href="/" className="navbar-link">Home</Link>
        <Link href="/about" className="navbar-link">About</Link>
        <Link href="/project" className="navbar-link">Projects</Link>
        <Link href="/contact" className="navbar-link">Contact</Link>
      </nav>
    </div>
  );
};

export default Navbar;
