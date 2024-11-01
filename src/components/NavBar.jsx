import { Linkedin, Github, Inbox } from "lucide-react";

function ContactIcon({ Icon }) {
  return (
    <div className="flex size-6 items-center justify-center rounded-full bg-[--font-neutral-dark-color]">
      <Icon className="flex size-4 text-[--bar-color]" />
    </div>
  );
}

export function NavBar() {
  return (
    <nav className="flex h-16 items-center justify-between border-b-2 border-[--nav-bar-border-color] px-10 lg:h-20 lg:border-b lg:px-36 lg:py-5">
      <p className="text-2xl font-medium lg:text-3xl">
        hh<span className="text-[--logo-accent-color]">.</span>
      </p>
      <div className="flex gap-2 lg:h-full">
        <p className="inline text-2xl lg:hidden">--</p>

        {/* Desktop button */}
        <button
          className="hidden h-full rounded-full border border-[--button-border-color] bg-[--button-neutral-background-color] px-10 font-semibold text-[--font-primary-accent-color] lg:inline"
          type="button"
        >
          Log in
        </button>
        <button
          className="hidden h-full rounded-full bg-[--button-accent-background-color] px-10 text-[--font-secondary-accent-color] lg:inline"
          type="button"
        >
          Sign up
        </button>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <div className="contact-section flex h-36 w-full flex-col items-center justify-around bg-[--bar-color] px-3 py-5 font-medium text-[--font-neutral-dark-color] lg:h-32 lg:flex-row lg:justify-between lg:px-24">
      <div className="get-in-touch-section flex items-center justify-center gap-5">
        <p>Get in touch</p>

        <div className="contact-logo flex items-center justify-center gap-4">
          <ContactIcon Icon={Linkedin} />
          <ContactIcon Icon={Github} />
          <ContactIcon Icon={Inbox} />
        </div>
      </div>

      <a className="underline" href="">
        Home page
      </a>
    </div>
  );
}
