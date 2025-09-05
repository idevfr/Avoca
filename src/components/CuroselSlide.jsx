import { useState, useEffect } from "react";
import { CiSquareChevLeft, CiSquareChevRight } from "react-icons/ci";

const CuroselSlide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      image: "/avoca-images/Usage_Images-01.webp",
    },
    {
      id: 2,
      image: "/avoca-images/Usage_Images-02.webp",
    },
    {
      id: 3,
      image: "/avoca-images/Usage_Images-03.webp",
    },
    {
      id: 4,
      image: "/avoca-images/Usage_Images-04.webp",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <div className="z-50 h-full w-full">
        <div className="relative h-[30rem] w-full overflow-hidden shadow-2xl md:h-full lg:h-full">
          {/* Slides Container */}
          <div
            className="flex h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="relative h-full w-full flex-shrink-0"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="group absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-white/20 p-2 backdrop-blur-sm transition-all duration-200 hover:bg-white/30"
          >
            <CiSquareChevLeft className="h-6 w-6 text-white transition-transform group-hover:scale-110" />
          </button>

          <button
            onClick={nextSlide}
            className="group absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-white/20 p-2 backdrop-blur-sm transition-all duration-200 hover:bg-white/30"
          >
            <CiSquareChevRight className="h-6 w-6 text-white transition-transform group-hover:scale-110" />
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 w-3 rounded-full transition-all duration-200 ${
                  currentSlide === index
                    ? "scale-125 bg-white"
                    : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="absolute top-4 right-4 rounded-full bg-black/30 px-3 py-1 text-sm text-white backdrop-blur-sm">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuroselSlide;
