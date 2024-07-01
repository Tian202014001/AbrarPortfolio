import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped, Typed } from "react-typed";
import pic from "../../public/pic.jpeg";
import pic2 from "../../public/abc.png";

function Home() {
  return (
    <>
      <div name="Home" className="max-w-screen  mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-[60%] mt-12 md:mt-24 space-y-2 order-2">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Coder", "Programmer"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br></br>
            <p className="text-sm text-justify md:text-md">
              Enthusiastic BSc graduate passionate about software engineering,
              seeking opportunities to contribute to a dynamic team. Eager to
              apply strong analytical and problem-solving skills to real-world
              challenges. Driven to continuously learn and grow within a
              collaborative environment
            </p>
            <br></br>
            <div className="flex flex-col  md:flex-row justify-between items-center ">
              <div className="space-y-2">
                <h1 className="font-bold">Available On</h1>
                <ul className="flex space-x-3 ">
                  <li>
                    {" "}
                    <a href="https://www.facebook.com/">
                      <FaFacebookSquare
                        className="text-2xl cursor-pointer"
                        target="_blank"
                      />
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="https://web.whatsapp.com/">
                      <FaSquareWhatsapp
                        className="text-2xl cursor-pointer"
                        target="_blank"
                      />
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="https://www.linkedin.com/">
                      <FaLinkedin
                        className="text-2xl cursor-pointer"
                        target="_blank"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h1 className="font-bold text-center md:text-right mt-4">
                  Currently Learning
                </h1>
                <ul className="flex space-x-3 ">
                  <li>
                    {" "}
                    <SiLeetcode className="text-2xl cursor-pointer" />
                  </li>
                  <li>
                    {" "}
                    <RiReactjsLine className="text-2xl cursor-pointer" />
                  </li>
                  <li>
                    {" "}
                    <SiMongodb className="text-2xl cursor-pointer" />
                  </li>
                  <li>
                    {" "}
                    <SiExpress className="text-2xl cursor-pointer" />
                  </li>
                  <li>
                    {" "}
                    <FaNodeJs className="text-2xl cursor-pointer" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="m-auto md:w-1/2 md:ml-20 md:mt-14 order-1">
            <img
              src={pic2}
              className=" h-[350px] w-[350px] mt-4 rounded-full md:w-[350px]   "
              alt=""
            />
          </div>
        </div>
      </div>
      <hr className="ml-6 mr-6 md:ml-20 md:mr-20"></hr>
    </>
  );
}

export default Home;
