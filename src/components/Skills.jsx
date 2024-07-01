import React from "react";

import pic3 from "../../public/tailwind.png";
import pic8 from "../../public/sql.jpeg";
import pic5 from "../../public/leetcode.jpeg";
import pic2 from "../../public/js.png";
import pic1 from "../../public/c++.jpeg";

import pic4 from "../../public/html.jpg";

import pic6 from "../../public/bootsrap.png";

import pic7 from "../../public/blender.jpeg";

function Skills() {
  const cardItem = [
    {
      id: 1,
      logo: pic1,
      name: "C++",
    },
    {
      id: 2,
      logo: pic2,
      name: "JavaScript",
    },
    {
      id: 3,
      logo: pic3,
      name: "Tailwind CSS",
    },
    {
      id: 4,
      logo: pic4,
      name: "HTML",
    },
    {
      id: 5,
      logo: pic5,
      name: "LeetCode",
    },
    {
      id: 6,
      logo: pic6,
      name: "BootStrap",
    },
    {
      id: 7,
      logo: pic7,
      name: "Blender",
    },
    {
      id: 8,
      logo: pic8,
      name: "SQL",
    },
  ];
  return (
    <>
      <div name="Skills" className="max-w-screen  mx-auto px-4 md:px-20 my-16">
        <h1 className="font-bold text-3xl mb-5">Skills</h1>
        <span className=" font-semibold">I have experience in following technologies</span>
        <div className="grid grid-cols-2  md:grid-cols-5 gap-7 my-3 ">
          {cardItem.map(({ id, logo, name, des }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center  rounded-full p-1 cursor-pointer hover:scale-105 duration-300"
            >
              <img
                src={logo}
                className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] p-1 rounded-full border-[2px]  "
              ></img>
              <div>
                <div className="px-2 font-bold text-md mb-1">{name}</div>
                
              </div>
              <div className="px-4 py-4 ">
                <div></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
