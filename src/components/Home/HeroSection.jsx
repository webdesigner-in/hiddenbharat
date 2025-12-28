export default function HeroSection() {
  return (
    <section className="mt-24 flex flex-col items-center justify-center ">
      <div className="absolute -z-10 top-10  left-10 md:left-96 rounded-full blur-[150px] w-96 h-96 bg-orange-500"></div>
      <div className="hidden md:block absolute -z-10 top-50  right-10 md:right-96 rounded-full blur-[160px] w-96 h-96 bg-orange-500"></div>
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-semibold ">
          Uncover India's <br /> Hidden Gems
        </h1>
        <p className="max-w-sm text-md my-2  md:max-w-3xl md:text-lg text-gray-500 ">
          A premium marketplace connecting travelers with authentic,
          off-the-beaten-path destinations while empowering local communities
          through sustainable tourism.
        </p>
      </div>
    </section>
  );
}
