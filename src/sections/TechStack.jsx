import TechIcon from "../components/TechIcon";
import TitleHeader from "../components/TitleHeader";
import { iconsList } from "../constants";

const TechStack = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full md:my-40 my-20 px-5"> {/* Add px-5 here for side padding */}
        <div className="container mx-auto md:p-0">
          <TitleHeader
            title="TECH STACK"
            number="02"
            text="My Go-To Tools for Crafting Solutions"
          />
        </div>
        <div className="md:mt-20 mt-10 relative px-10"> {/* Add px-10 so marquee doesn't touch edges */}
          <div className="tech-stack-gradient-left-box w-36 h-full absolute bottom-0 left-0 z-20 pointer-events-none"></div>
          <div className="tech-stack-gradient-right-box w-36 h-full absolute bottom-0 right-0 z-20 pointer-events-none"></div>
          <div className="marquee h-52 overflow-hidden">
            <div className="marquee-box md:gap-12 gap-5 flex items-center">
              {iconsList.map((icon, index) => (
                <TechIcon key={`first-${index}`} icon={icon} />
              ))}
              {iconsList.map((icon, index) => (
                <TechIcon key={`second-${index}`} icon={icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
