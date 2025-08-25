import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/ContactExperience";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="flex-center relative px-5 md:px-0">
      <div className="container max-w-screen-xl mx-auto md:my-40 my-20 w-full h-full">
        <TitleHeader
          title="Contact Me"
          number="04"
          text="Let's collaborate on tailored, sustainable solutions"
        />
        <div className="mt-20">
          <div className="grid grid-cols-12 gap-10">
            <div className="md:col-span-5 col-span-12 md:order-none order-1 relative z-10">
              <ContactForm />
            </div>
            <div className="md:col-span-7 col-span-12 relative">
              {/* Removed absolute positioning, used padding/margin to space */}
              <div className="w-full md:h-full h-96">
                <ContactExperience />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
