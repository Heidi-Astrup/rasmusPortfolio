import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Links from "./pages/Links";
import Clients from "./pages/Clients";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import { Navigate } from "react-router";
import ClientDetail from "./pages/ClientDetail";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        {/* Routes go here */}
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<Links />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/clients/:id" element={<ClientDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
