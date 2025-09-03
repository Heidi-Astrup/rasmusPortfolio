import { NavLink } from "react-router";

export default function Nav() {
  return (
    <nav className={"nav"}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/clients">Clients</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/links">Links</NavLink>
    </nav>
  );
}
