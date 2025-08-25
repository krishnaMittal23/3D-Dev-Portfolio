import { useState, useRef, useEffect } from "react";
import { slides } from "../constants";
import gsap from "gsap";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const slideCount = slides.length;

  // Handlers to cycle through slides properly
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  };

  // GSAP animation triggered on currentSlide change
  useEffect(() => {
    if (!sliderRef.current) return;

    gsap.to(sliderRef.current, {
      x: `-${currentSlide * 63}vw`,
      duration: 1,
      ease: "power2.inOut",
    });
  }, [currentSlide]);

  return (
    <div className="relative overflow-hidden">
      {/* Carousel Container */}
      <div className="relative lg:h-[60vh] md:h-[40vh] h-[60vh]">
        {/* Gradient overlays */}
        <div className="carousel-gradient-left-box md:w-52 w-16 h-full absolute bottom-0 left-0 z-20 pointer-events-none"></div>
        <div className="carousel-gradient-right-box md:w-52 w-16 h-full absolute bottom-0 right-0 z-20 pointer-events-none"></div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex items-center gap-[3vw] transition-transform will-change-transform"
          style={{ width: `${slideCount * 63}vw` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="slider-item w-[60vw] h-full flex-shrink-0 relative rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-[60vh] object-cover object-center"
              />
              {/* Slide info overlay */}
              <div className="absolute bottom-0 left-0 w-full h-20 bg-black bg-opacity-80 px-5 flex justify-between items-center text-white select-none">
                <div className="flex items-center gap-2 font-semibold text-lg md:text-2xl opacity-90">
                  <span>{index + 1}.</span>
                  <span>{slide.title}</span>
                </div>
                <div className="flex items-center gap-3 cursor-pointer opacity-90 hover:opacity-100 transition-opacity">
                  <span className="hidden md:block text-lg font-medium">
                    Preview Project
                  </span>
                  <img
                    src="/images/arrowupright.svg"
                    alt="Preview arrow"
                    className="w-6 h-6 md:w-8 md:h-8"
                    draggable={false}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="mt-10 flex justify-end gap-5">
        <button
          aria-label="Previous Slide"
          onClick={prevSlide}
          className="rounded-full bg-blue-50 hover:bg-pink-100 active:scale-90 transition-transform w-12 h-12 flex-center shadow-md"
          type="button"
        >
          <img
            src="/images/CaretLeft.svg"
            alt="Previous"
            className="w-5 h-5 pointer-events-none"
            draggable={false}
          />
        </button>
        <button
          aria-label="Next Slide"
          onClick={nextSlide}
          className="rounded-full bg-blue-50 hover:bg-pink-100 active:scale-90 transition-transform w-12 h-12 flex-center shadow-md"
          type="button"
        >
          <img
            src="/images/CaretRight.svg"
            alt="Next"
            className="w-5 h-5 pointer-events-none"
            draggable={false}
          />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
