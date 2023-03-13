type AnimationItem = {
  name: String;
  path: String;
};

export default function Sidebar() {
  return (
    <>
      <div className="top-0 left-0 z-40 lg:w-1/4 border-slate-900 border-r-2 ">
        <nav className="top-0 left-0 z-40 lg:w-full">
          <header className="font-dancing font-bold text-2xl font-blue-500  mt-5 text-center text-slate-900 border-blue-500 border-dotted border-b-2 mx-2 testing-basics">
            CSS Practice
          </header>
          <div className="testing-basics">Links section</div>
        </nav>
      </div>
    </>
  );
}
