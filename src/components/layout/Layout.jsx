import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import StickyContactButton from "../ui/StickyContactButton";
import StickyWhatsapp from "../ui/StickyWhatsapp";
import CTA from "../home/CTA";

export default function Layout() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>
         <CTA/>
      <Footer />

      {/* Sticky WhatsApp */}
      <StickyWhatsapp />
      <StickyContactButton />
    </>
  );
}
