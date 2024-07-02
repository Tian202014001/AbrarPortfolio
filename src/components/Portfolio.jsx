import React from "react";
import pic1 from "../../public/agri.jpeg";
import pic2 from "../../public/med.jpeg";
import pic3 from "../../public/routine.jpeg";
import pic4 from "../../public/car.jpeg";
import pic5 from "../../public/hos.jpeg";
import pic6 from "../../public/flutter.png";
import pic7 from "../../public/arduino.jpeg";
import pic8 from "../../public/firebase.png";
import pic9 from "../../public/ml.png";
import pic10 from "../../public/sensor.jpeg";
import pic11 from "../../public/html.jpg";
import pic12 from "../../public/pi.jpeg";
import pic13 from "../../public/bootsrap.png";
import pic14 from "../../public/python.jpg";
import pic15 from "../../public/blender.jpeg";
import pic16 from "../../public/php.jpeg";
import pic17 from "../../public/oracle.jpeg";
import pic18 from "../../public/xampp.png";

function Portfolio() {
  const cardItem = [
    {
      id: 1,
      logo: pic1,
      name: "Farming Assistant",
      des: "An IoT-Based AI-Integrated Device for Farmers with a Recommendation System for Crop Cultivation based on various soil nutrients.",
    },
    {
      id: 2,
      logo: pic2,
      name: "Medicine Assistive System",
      des: "A medicine assistive system with features like medicine box recognition, medicine schedule and alert, and insulin dose prediction.",
    },
    {
      id: 3,
      logo: pic3,
      name: "The Routine",
      des: "3D Animation Project representing monotonus daily life",
    },
    {
      id: 4,
      logo: pic4,
      name: "Car Showroom Management System",
      des: "A website to manage showroom’s Vehicle info, price, customer, employee, etc",
    },
    {
      id: 5,
      logo: pic5,
      name: "HospitalInfo",
      des: "A static website Containing information about various hospitals, locations, doctors, etc",
    },
  ];
  return (
    <>
      <div name="Portfolio" className="max-w-screen  mx-auto px-4 md:px-20 my-16">
        <h1 className="font-bold text-3xl mb-5">Projrcts & Publications</h1>
        <span className="underline font-semibold">Featured Project</span>
        <div className="grid grid-cols-1  md:grid-cols-3  gap-3 my-5 ">
          {cardItem.map(({ id, logo, name, des }) => (
            <div
              key={id}
              className="md:w-[350px] md:h-[350px] border-[2px] rounded-lg p-1 cursor-pointer hover:scale-105 duration-300"
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]  "
              ></img>
              <div>
                <div className="px-2 font-bold text-md mb-1">{name}</div>
                <p className="text-justify px-2 text-gray-700 text-xs">{des}</p>
              </div>
              <div className="px-4 py-4 ">
                <div>
                  {name === "Farming Assistant" ||
                  name === "Medicine Assistive System" ||
                  name === "The Routine" ? (
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-md ">
                      {
                        name ==="Farming Assistant"?<a href="https://www.youtube.com/watch?v=TKntIYIQk2k&ab_channel=JubairAhmed">Video</a> :""
                      }
                      {
                        name ==="Medicine Assistive System"?<a href="https://www.youtube.com/watch?v=CkcPosQ22GE&ab_channel=Abrar">Video</a> :""
                      }
                      {
                        name ==="The Routine"?<a href="https://www.youtube.com/watch?v=CkcPosQ22GE&ab_channel=Abrar">Video</a> :""
                      }
                    
                    </button>
                  ) : (
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-md ">
                      Code
                    </button>
                  )}
                </div>
                {name === "Farming Assistant" ? (
                  <div className=" ">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-semibold text-xs px-2 mt-3 mr-4">
                          Used Tech
                        </p>
                      </div>
                      <div>
                        <a
                          href="https://ieeexplore.ieee.org/document/10534549"
                          className="text-blue-500 font-semibold underline hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 "
                        >
                          <p className="text-end mt-1 ">Publication</p>
                        </a>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <div>
                        <img
                          className="w-[50px] h-[50px] p-1 rounded-full border-[2px]"
                          src={pic6}
                        ></img>
                      </div>
                      <div>
                        <img
                          className="w-[50px] h-[50px] p-1 rounded-full border-[2px]"
                          src={pic7}
                        ></img>
                      </div>
                      <div>
                        <img
                          className="w-[50px] h-[50px] p-1 rounded-full border-[2px]"
                          src={pic8}
                        ></img>
                      </div>
                      <div>
                        <img
                          className="w-[50px] h-[50px] p-1 rounded-full border-[2px]"
                          src={pic9}
                        ></img>
                      </div>
                      <div>
                        <img
                          className="w-[50px] h-[50px] p-1 rounded-full border-[2px]"
                          src={pic10}
                        ></img>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {name === "Medicine Assistive System" ? (
                  <div className="mt-4 ">
                    <p className="font-semibold text-xs  px-2">Used Tech</p>
                    <div className="flex space-x-2">
                      <div>
                        <img
                          className="w-[50px] h-[50px] p-1 rounded-full border-[2px]"
                          src={pic11}
                        ></img>
                      </div>
                      <div>
                        <img
                          className="w-[50px] h-[50px] p-1 rounded-full border-[2px]"
                          src={pic12}
                        ></img>
                      </div>
                      <div>
                        <img
                          className="w-[50px] h-[50px] p-1 rounded-full border-[2px]"
                          src={pic13}
                        ></img>
                      </div>
                      <div>
                        <img
                          className="w-[50px] h-[50px] p-1 rounded-full border-[2px]"
                          src={pic9}
                        ></img>
                      </div>
                      <div>
                        <img
                          className="w-w-[50px] h-[50px] p-1 rounded-full border-[2px]"
                          src={pic10}
                        ></img>
                      </div>
                      <div>
                        <img
                          className="w-w-[50px] h-[50px] p-1 rounded-full border-[2px]"
                          src={pic14}
                        ></img>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {name === "The Routine" ? (
                  <div className="mt-4 ">
                    <p className="font-semibold text-xs  px-2">Used Tech</p>
                    <div className="flex space-x-2">
                      <div>
                        <img
                          className="w-[50px] h-[50px] p-1 rounded-full border-[2px]"
                          src={pic15}
                        ></img>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {name === "Car Showroom Management System" ? (
                  <div className="mt-4 ">
                    <p className="font-semibold text-xs  px-2">Used Tech</p>
                    <div className="flex space-x-2">
                      <div>
                        <img
                          className="w-[50px] h-[50px] p-1 rounded-full border-[2px]"
                          src={pic11}
                        ></img>
                      </div>

                      <div>
                        <img
                          className="w-[50px] h-[50px] p-1 rounded-full border-[2px]"
                          src={pic13}
                        ></img>
                      </div>
                      <div>
                        <img
                          className="w-[50px] h-[50px] p-1 rounded-full border-[2px]"
                          src={pic16}
                        ></img>
                      </div>
                      <div>
                        <img
                          className="w-[50px] h-[50px] p-1 rounded-full border-[2px]"
                          src={pic17}
                        ></img>
                      </div>
                      <div>
                        <img
                          className="w-[50px] h-[50px] p-1 rounded-full border-[2px]"
                          src={pic18}
                        ></img>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {name === "HospitalInfo" ? (
                  <div className="mt-4 ">
                    <p className="font-semibold text-xs  px-2">Used Tech</p>
                    <div className="flex space-x-2">
                      <div>
                        <img
                          className="w-[50px] h-[50px] p-1 rounded-full border-[2px]"
                          src={pic11}
                        ></img>
                      </div>
                      <div>
                        <img
                          className="w-[50px] h-[50px] p-1 rounded-full border-[2px]"
                          src={pic13}
                        ></img>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="ml-6 mr-6 md:ml-20 md:mr-20"></hr>
    </>
  );
}

export default Portfolio;
