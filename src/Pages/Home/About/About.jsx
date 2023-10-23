import parts from "../../../assets/images/about_us/parts.jpg";
import person from "../../../assets/images/about_us/person.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen mt-8 lg:mt-0">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-1/2 absolute right-5 top-1/2 border-white border-8 rounded-lg shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-xl font-medium text-red-500">About Us</h1>
          <h1 className="text-5xl font-bold mt-4">
            We are qualified & of experience in this field
          </h1>
          <p className="mt-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="mt-3">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn mt-3 text-white hover:text-black bg-red-500 border-none">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
