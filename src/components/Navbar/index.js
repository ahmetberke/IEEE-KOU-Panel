import "./index.scss"
import Logo from "./Logo";
import NavbarElements from "./NavbarElements";

function Navbar() {
  return (
    <div className="Navbar">
        <Logo/>
        <NavbarElements></NavbarElements>
    </div>
  );
}

export default Navbar;
