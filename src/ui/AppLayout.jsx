import { Outlet } from "react-router";
import NavBar from "./NavBar";
import FooterSection from "../components/FooterSection";

function AppLayout() {
  return (
    <div className="font-Truculenta bg-orange-100 text-green-50">
      <NavBar />
      <main>
        <Outlet />
      </main>
      <FooterSection />
    </div>
  );
}

export default AppLayout;
