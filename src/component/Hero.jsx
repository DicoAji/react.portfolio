import vektor from "./../assets/img/vektor1.svg";
import "./css/Hero.css";
import "./css/Navbar.css";
import pattern1 from "./../assets/img/pattern/ballpatternyellow.svg";
import ballpeternblue from "./../assets/img/pattern/ballpeternblue.svg";
import petternyellow from "./../assets/img/pattern/ballpatternyellow2.svg";

const Hero = () => {
  return (
    <div className="hero relative" id="hero">
      <img
        src={pattern1}
        className="absolute left-0 top-0 -z-0 w-[1503px] -translate-x-[30%] -translate-y-[25%] "
        alt=""
      />
      <div className=" container px-2 sm:px-6 lg:px-8  md:pt-[150px] pt-[80px] relative ">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 max-md:pt-[100px] ">
          <div className="left h-full flex items-center justify-center ">
            <div className="relative ">
              <div className="slide-right">
                <h1 className="uppercase relative md:text-[90px] text-[50px]  hero-text">
                  <span className="z-10 relative ml-0">H</span> <span>e</span>{" "}
                  <span className="relative z-10">l</span> <span>l</span>{" "}
                  <span className="relative z-10">o</span>{" "}
                </h1>
                <img
                  src={vektor}
                  className="absolute top-0 left-0 max-md:left-[25%] max-md:w-[250px] max-sm:-translate-x-1/2  z-0  -translate-y-[10%] "
                  alt=""
                />

                <h1 className="uppercase md:text-[90px] text-[50px] ">
                  Everyone{" "}
                </h1>
                <div className="relative md:h-[150px] h-[80px]  ">
                  <h1 className="uppercase md:text-[90px]  text-[50px] max-md:relative absolute overflow-y-hidden z-20  text_wrap">
                    I Am Dico Aji{" "}
                  </h1>
                </div>
                <p className="text-[22px] about_me max-md:text-[16px]  max-md:mt-[20px] ">
                  Front End Developer, Web Developer, UI/UX Design
                </p>
              </div>
              <div className="mt-[40px] relative">
                <div className="relative">
                  <a href="/">
                    <button className="bn632-hover bn19 text-[16px] text-white cursor-pointer py-[10px] px-[50px] rounded-[50px] border-none  ">
                      Resume
                    </button>
                  </a>
                </div>
                <img
                  src="https://i.ibb.co.com/CHYG7Mg/ball.png"
                  className="absolute left-0 w-[399px] max-sm:hidden -translate-x-[50%] -z-40 -translate-y-[40%]"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="right max-md:pt-[150px] block max-md:hidden ">
            <div className="relative  ">
              <img
                src="https://i.ibb.co.com/M1ZSDHj/vektor1.png"
                className="absolute max-lg:hidden w-[400px] top-[50px] max-md:hidden -translate-x-[20px] -z-[1]"
                alt=""
              />

              <img
                src="https://i.ibb.co.com/M1ZSDHj/vektor1.png"
                className="absolute w-[70px] max-lg:hidden translate-y-[60%] right-[28%] "
                alt=""
              />
              <img
                src="https://i.ibb.co.com/GCrqmsG/myphoto.png"
                className="absolute w-[550px] max-lg:hidden -translate-y-[50px] -translate-x-[70px] top-0 right-0 rounded-[550px] z-20"
                alt=""
              />
            </div>
            <div className="relative">
              <svg
                viewBox="0 0 100 100"
                className="curved-text absolute right-[10px] -top-[20px]"
              >
                <defs>
                  <path
                    id="curve"
                    d="M10,50 A40,40 0 1,1 90,50 A40,40 0 1,1 10,50"
                  />
                </defs>
                <text>
                  <textPath
                    href="#curve"
                    className="text-curve text-white uppercase text-[10.77px]"
                  >
                    🕸 Always in Process 🕸 100% Energy for you
                  </textPath>
                </text>
              </svg>
            </div>
            <div className="relative slide-bottom">
              <p className="vertical-text absolute -right-[10%] text-[18px]">
                Informatics Student
              </p>
            </div>
          </div>
          <div className="md:hidden block max-md:w-[80%] mx-auto mt-[120px] max-md:mt-[150px] relative ">
            <img
              src="https://i.ibb.co.com/M1ZSDHj/vektor1.png"
              className="absolute left-0 top-0 w-[80%] -z-10"
              alt=""
            />
            <img
              src="https://i.ibb.co.com/M1ZSDHj/vektor1.png"
              className="absolute right-[10%] top-[15%] w-[18%] -z-10"
              alt=""
            />

            <svg
              viewBox="0 0 100 100"
              className="curved-text absolute -right-[5%] -top-[15%] rotate z-20"
            >
              <defs>
                <path
                  id="curve"
                  d="M10,50 A40,40 0 1,1 90,50 A40,40 0 1,1 10,50"
                />
              </defs>
              <text>
                <textPath
                  href="#curve"
                  className="text-curve text-white uppercase text-[10.77px] rotate"
                >
                  🕸 Always in Process 🕸 100% Energy for you
                </textPath>
              </text>
            </svg>

            <img
              src="https://i.ibb.co.com/GCrqmsG/myphoto.png"
              className="rounded-[500px] "
              alt=""
            />
          </div>
        </div>
        <img
          src={ballpeternblue}
          className="absolute -right-[40%] top-0 translate-y-[25%] w-[2400px]"
          alt=""
        />
      </div>
      <img
        src={petternyellow}
        className="absolute right-0 top-0 -translate-y-[25%] w-[100vh] -z-10"
        alt=""
      />
    </div>
  );
};

export default Hero;
