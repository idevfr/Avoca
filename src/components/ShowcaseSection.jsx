import CuroselSlide from "./CuroselSlide";

function ShowcaseSection() {
  return (
    <section className="flex h-auto w-full flex-col-reverse gap-12 bg-green-900 md:flex-row lg:h-[40rem]">
      <div className="mb-16 flex w-full flex-col justify-center gap-4 p-4 lg:pr-[8rem] lg:pl-[4rem]">
        <h1 className="lg:tracking-wider0 text-5xl font-semibold text-amber-100 brightness-75 lg:text-6xl">
          Only the best is good enough
        </h1>
        <p className="text-sm/6 tracking-wider lg:text-xl/8">
          When taking care of your nutrition, only the best should be good
          enough. Here's to guilt-free cooking with Avoca - a versatile and
          nourishing addition to your daily routine.
        </p>
      </div>
      <CuroselSlide />
    </section>
  );
}

export default ShowcaseSection;
