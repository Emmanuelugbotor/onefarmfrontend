import Navbar from "../navbar/Navbar";
import Footer from "../footer/footer";
import { useEffect, useState } from "react";
export default function Layout({ children }) {
  const [position, setPosition] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setPosition(window.scrollY);
    });
  }, []);
  return (
    <div>
      <Navbar position={position} />
      {children}
      <Footer />
    </div>
  );
}
