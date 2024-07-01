import React from "react";

import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
function Footer(){
  return(
    <>
     <hr className="ml-6 mr-6 md:ml-20 md:mr-20" />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <FaFacebookSquare size={24} />
             
              <FaSquareWhatsapp size={24} />
              <FaLinkedin size={24} />
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 Your Company. All rights reserved.
              </p>
             
            </div>
          </div>
        </div>
      </footer>
    

    </>
  )
}

export default Footer;