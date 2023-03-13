import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
// import Footer from "./Footer";
import Footer2 from "@components/Footer";

export default function Layout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="h-screen w-full">
        <main className="lg:h-[90%] flex justify-center items-center">
          <div className="lg:w-1/2 lg:h-[90%] border border-slate-900">
            <div className="mx-4 my-4">
              <Outlet />
            </div>
          </div>
        </main>
        <Footer2 />
      </div>
    </div>
  );
}
