import TitleHeader from "../components/TitleHeader";
import Carousel from "../components/Carousel";
import GradientSpheres from "../components/GradientSpheres";

const Projects = () => {
  return (
    <section
      className="w-full h-full flex-center relative px-5 md:px-20"
      id="projects"
    >
      <GradientSpheres
        sphere1Class="projects-gradient-sphere projects-sphere-1"
        sphere2Class="projects-gradient-sphere projects-sphere-2"
      />

      <div className="w-full max-w-7xl mx-auto md:my-40 my-20 relative z-10">
        <div className="px-5 md:px-0">
          <TitleHeader
            title="My PROJECTS"
            number="03"
            text="Check my recent project below for your Goal"
          />
        </div>
        <div className="md:mt-20 mt-10">
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default Projects;
