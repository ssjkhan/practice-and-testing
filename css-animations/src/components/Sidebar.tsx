import Footer from "./Footer";

type AnimationItem = {
  name: String;
  path: String;
};

export default function Sidebar() {
  return (
    <>
      <div className="top-0 left-0 z-40 lg:w-1/4">
        <nav className="top-0 left-0 z-40 lg:w-1/4">
          <header className="text-2xl font-blue-500 ">
            SSJKHAN CSS Animation Study
          </header>
          <div>Links section</div>
        </nav>
      </div>
    </>
  );
}
