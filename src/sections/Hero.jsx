import GradientSpheres from "../components/GradientSpheres";
import HeroExperience from "../components/HeroExperience";

const Hero = () => {
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="w-screen h-dvh overflow-hidden relative text-white-50 md:p-0"
    >
      {/* Gradient background at bottom */}
      <div className="gradient-box w-full h-96 absolute bottom-0 left-0 z-20"></div>

      {/* Animated gradient spheres */}
      <GradientSpheres
        sphere1Class="gradient-sphere sphere-1"
        sphere2Class="gradient-sphere sphere-2"
      />

      {/* Main Content */}
      <div className="w-full h-full flex-center">
        <div className="container relative h-full max-w-screen-xl mx-auto px-4">
          {/* Text Content */}
          <div className="md:mt-40 mt-20">
            <p className="font md:text-2xl text-base">👋 Hey, I&apos;m Here</p>
            <h1 className="font-bold md:text-9xl text-5xl">KRISHNA</h1>
            <h1 className="font-bold md:text-7xl text-5xl">FULLSTACK</h1>
          </div>

          {/* Bottom Explore + Developer Section */}
          <div className="absolute w-full z-30 bottom-20 right-0 px-4">
            <div className="flex justify-between items-end">
              {/* Explore Arrow */}
              <div className="flex flex-col items-center md:gap-5 gap-1">
                <p className="md:text-base text-xs">Explore</p>
                <button onClick={handleScrollToAbout}>
                  <img
                    src="images/arrowdown.svg"
                    alt="arrowdown"
                    className="size-7 animate-bounce cursor-pointer"
                  />
                </button>
              </div>

              {/* Developer Text */}
              <div className="flex flex-col items-end">
                <img src="/images/shape.svg" alt="shape" />
                <h1 className="font-bold md:text-9xl text-5xl">DEVELOPER</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero canvas/3D experience */}
      <div className="w-full h-full absolute top-0 left-0">
        <HeroExperience />
      </div>
    </section>
  );
};

export default Hero;
