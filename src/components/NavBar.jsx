import { navItems } from "../constants";

const NavBar = () => {
  return (
    <div className="w-full fixed  z-50 backdrop-blur-md bg-black/40 ">
      <div className="container mx-auto px-4 md:px-8 py-4 md:py-6 flex items-center justify-center">
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative group"
            >
              <a
                href={item.href}
                className="gradient-title text-base md:text-lg font-medium transition-colors duration-300"
              >
                {item.name}
              </a>
              <span
                className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-300 ease-in-out"
              ></span>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
