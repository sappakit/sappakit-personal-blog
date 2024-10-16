import "./App.css";

function NavBar() {
  return (
    <nav className="flex justify-between items-center h-20 px-10 border border-b-2 border-[--nav-bar-border-color] lg:px-36">
      <p className="text-2xl font-medium lg:text-3xl">
        hh<span className="text-[--logo-accent-color]">.</span>
      </p>
      <div className="flex gap-2">
        <p className="inline text-2xl lg:hidden">--</p>

        {/* Desktop button */}
        <button
          className="hidden h-11 px-10 rounded-full border border-[--button-border-color] font-semibold text-[--font-primary-accent-color] bg-[--button-neutral-background-color] lg:inline"
          type="button"
        >
          Log in
        </button>
        <button
          className="hidden h-11 px-10 rounded-full text-[--font-secondary-accent-color] bg-[--button-accent-background-color] lg:inline"
          type="button"
        >
          Sign up
        </button>
      </div>
    </nav>
  );
}

function App() {
  return (
    <>
      <NavBar />
    </>
  );
}

export default App;
