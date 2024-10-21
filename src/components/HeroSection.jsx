function HeroSection() {
  return (
    <section className="flex flex-col justify-center gap-9 px-6 py-9 lg:flex-row lg:justify-center lg:items-center lg:max-w-screen-2xl lg:p-8 lg:py-20 lg:gap-16 lg:mx-auto">
      <div className="header-text flex flex-col gap-4 lg:w-1/3 lg:gap-8">
        <h1 className="text-[2.65rem] leading-tight font-bold text-center text-[--font-primary-accent-color] lg:text-right lg:text-6xl lg:leading-none">
          Stay <br className="hidden lg:inline" /> Informed, <br /> Stay
          Inspired
        </h1>
        <p className="font-semibold text-center text-[--font-neutral-light-color] lg:text-right">
          Discover a World of Knowledge at Your
          <br className="hidden lg:inline" /> Fingertips. Your Daily Dose of
          Inspiration <br className="hidden lg:inline" /> and Information.
        </p>
      </div>

      <div className="flex justify-center lg:w-1/3">
        <img
          className="h-[30rem] rounded-2xl object-cover md:w-[75%] lg:w-full lg:h-[35rem]"
          src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
          alt="man with a cat"
        />
      </div>

      <div className="flex flex-col gap-4 lg:w-1/3">
        <div className="flex flex-col gap-1">
          <p className="text-[--font-neutral-light-color] text-sm">-Author</p>
          <h2 className="text-[--font-primary-accent-color] text-3xl font-bold">
            Thompson P.
          </h2>
        </div>

        <div className="font-semibold text-[--font-neutral-light-color] flex flex-col gap-4">
          <p>
            I am a pet enthusiast and freelance writer
            <br className="hidden lg:inline" /> who specializes in animal
            behavior and <br className="hidden lg:inline" /> care. With a deep
            love for cats, I enjoy <br className="hidden lg:inline" /> sharing
            insights on feline companionship <br className="hidden lg:inline" />
            and wellness.
          </p>
          <p>
            When i’m not writing, I spends time
            <br className="hidden lg:inline" /> volunteering at my local animal
            shelter, <br className="hidden lg:inline" /> helping cats find
            loving homes.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
