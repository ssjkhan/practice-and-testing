import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="bg-red-500 h-screen w-full">
        <main className="bg-indigo-500 lg:h-[90%] flex justify-center items-center">
          <div className="lg:w-1/2 lg:h-[90%] bg-slate-900 text-white">
            Animation Area
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
