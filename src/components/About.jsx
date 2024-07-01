import React from "react";
import pic from "../../public/robi.jpeg";
import pic2 from "../../public/strivedigitall_logo.jpeg";

function About() {
  return (
    <>
      <div name="About" className="max-w-screen  mx-auto px-4 md:px-20 my-16">
        <h1 className="font-bold text-3xl">About</h1>
        <p className="mt-2 text-justify">
          My name is Abrar, and I am a recent Computer Science graduate with a
          solid understanding of software development and programming. During my
          studies, I gained experience in various programming languages and
          tools, and I enjoy learning about new technologies.
        </p>
        <br></br>
        <h1 className="font-semibold text-xl text-green-700">
          EDUCATIONAL BACKGROUND
        </h1>
        <div className="flex flex-col space-y-1 justify-between">
          <div className="flex flex-col md:flex-row md:justify-between">
            <span className="mt-2 font-semibold">
              Military Institute of Science & Technology
            </span>

            <span className="mt-2 ">
              Bsc. In Computer Science & Engineering
            </span>

            <span className=" mt-2">
              <i className="text-sm">Year: 2020 - 2024</i>
            </span>

            <span className=" mt-2">
              <i className="text-sm">CGPA: 3.72</i>
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between">
            <span className=" font-semibold">
              Dhaka Residential Model College
            </span>

            <span className=" ">Higher Secondary School Certificate</span>

            <span className=" ">
              <i className="text-sm">Year: 2017 - 2019</i>
            </span>

            <span className="">
              <i className="text-sm">GPA: 5.00</i>
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between">
            <span className=" font-semibold">
              Monipur Uchcha Vidyalaya and College
            </span>

            <span className="">Secondary School Certificate</span>

            <span className=" ">
              <i className="text-sm">Year: 2017</i>
            </span>

            <span className=" ">
              <i className="text-sm">GPA: 5.00</i>
            </span>
          </div>
        </div>

        <br></br>
        {/* <h1 className="font-semibold text-xl text-green-700">SKILLS</h1>
        <div className="flex flex-col space-y-2 justify-between">
          <div className="flex flex-col  justify-between">
            <span className="mt-2 font-semibold">Programming Languages</span>

            <ul class="list-disc pl-5">
              <li>C++| JavaScript</li>
              <li>Familiar with: Python, Matlab</li>
            </ul>
          </div>
          <div className="flex flex-col justify-between">
            <span className="mt-2 font-semibold">Web & App Development</span>

            <ul class="list-disc pl-5">
              <li>HTML| Tailwind CSS| JavaScript</li>
              <li>
                Familiar with: Dart| Flutter| Firebase| Oracle| SQL| React
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-between">
            <span className="mt-2 font-semibold">Others</span>

            <ul class="list-disc pl-5">
              <li>
                Blender | GitHub | Machine Learning | NLP | MS Project | MS
                Excel | Problem Solving
              </li>
            </ul>
          </div>
        </div> */}
        <br></br>
        <h1 className="font-semibold text-xl text-green-700">EXPERIENCE</h1>
        <div className="flex flex-col space-y-1 justify-between">
          <div className="flex flex-col justify-between">
            <div className="flex">
              <img src={pic} className="rounded-full h-10 w-15"></img>
              <span className="mt-2 font-semibold">Robi Axiata Limited</span>
            </div>

            <span className=" ">
              {" "}
              Industrial Attachment, Technology Division
            </span>

            <span className=" ">
              <i className="text-sm"> 01/2023 - 02/2023</i>
            </span>
          </div>
          <div className="flex flex-col  md:justify-between">
            <div className="flex space-x-2">
              <img src={pic2} className="rounded-full h-10 w-10"></img>
              <span className="mt-2 font-semibold">Strive-Digital Ltd</span>
            </div>

            <span className=" ">Data Researcher</span>

            <span className=" ">
              <i className="text-sm">03/2024 - Present</i>
            </span>
          </div>
        </div>
      </div>
      <hr className="ml-6 mr-6 md:ml-20 md:mr-20"></hr>
    </>
  );
}

export default About;
