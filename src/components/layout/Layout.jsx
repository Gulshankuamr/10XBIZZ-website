import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import StickyWhatsapp from "../ui/StickyWhatsapp";

export default function Layout() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />

      {/* Sticky WhatsApp */}
      <StickyWhatsapp />
    </>
  );
}