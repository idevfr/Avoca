function HeroSection() {
  return (
    <section className="flex h-[60rem] w-full flex-col md:h-[45rem] md:flex-row lg:h-[50rem]">
      <div className="flex h-full w-full flex-col items-start justify-center gap-3 bg-green-900 px-4 py-4 lg:px-16 lg:pr-72 lg:pb-32">
        <img
          className="h-fit w-fit"
          src="/avoca-images/favicon-light.avif"
          alt="company-icon"
        />
        <h1 className="lg:tracking-wider0 text-5xl font-semibold text-amber-100 brightness-75 lg:text-6xl">
          Premium Avocado Oil from the sun - kissed farms of Mexico
        </h1>
        <p className="text-xl/6 tracking-wider lg:text-3xl/10">
          We've embarked on a journey inspired by nature's richness and the
          incredible benefits of avocado oil. Our brand is a celebration of
          purity, flavor, and well-being.
        </p>
        <button className="mt-4 cursor-pointer border-2 border-gray-200 bg-green-800 px-12 py-2 text-xl font-semibold ring-2 ring-gray-500 transition-all duration-250 ease-in-out hover:bg-linear-to-l hover:from-green-700 hover:to-green-800 active:scale-95 lg:mt-8 lg:px-16 lg:py-3 lg:text-2xl">
          Buy Now
        </button>
      </div>
      <div className="h-full w-full border-none bg-[url(/avoca-images/Avoca-Assets-Web-06.webp)] bg-cover bg-center bg-no-repeat brightness-90"></div>
    </section>
  );
}

export default HeroSection;
