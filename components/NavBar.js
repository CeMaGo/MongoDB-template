import Link from "next/link";

const NavBar = () => (
  <NavBar className="navbar">
    <Link href="/" className="navbar-brand">
      Note App
    </Link>
    <Link href="/new" className="create">
      Create Note
    </Link>
  </NavBar>
);

export default NavBar;
