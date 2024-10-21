export function NavBar() {
  return (
    <nav className="flex justify-between items-center h-16 px-10 border border-b-2 border-[--nav-bar-border-color] lg:h-20 lg:px-36 lg:py-5 lg:border-b">
      <p className="text-2xl font-medium lg:text-3xl">
        hh<span className="text-[--logo-accent-color]">.</span>
      </p>
      <div className="flex gap-2 lg:h-full">
        <p className="inline text-2xl lg:hidden">--</p>

        {/* Desktop button */}
        <button
          className="hidden h-full px-10 rounded-full border border-[--button-border-color] font-semibold text-[--font-primary-accent-color] bg-[--button-neutral-background-color] lg:inline"
          type="button"
        >
          Log in
        </button>
        <button
          className="hidden h-full px-10 rounded-full text-[--font-secondary-accent-color] bg-[--button-accent-background-color] lg:inline"
          type="button"
        >
          Sign up
        </button>
      </div>
    </nav>
  );
}
