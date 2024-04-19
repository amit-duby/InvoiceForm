import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowDown } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
function Heros() {
  return (
    <>
      <div
        className="mt-14 p-15 bg-violet-700 
    px-40 py-20 grid grid-cols-1 
    md:grid-cols-2 text-slate-50 "
      >
        <div className="flex flex-col space-y-8 items-start">
          <h2 className="text-3xl md:text-3xl font-bold ">
            Invoice Generator - Free Online Invoice Maker
          </h2>
          <p className="text-base md:text-2xl">
            Use Invoice Templates to Create Invoices Online Download, Print,
            Email Invoice with Invoice Generator
          </p>
          <Link
            to="/invoicnew"
            //   type="button"
            className="focus:outline-none text-white w-50 p-3
           bg-red-600 hover:bg-rose-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700
           dark:focus:ring-red-900 flex items-center"
          >
            Create Your First Invoice
            <span className="ml-2">
              {" "}
              <AiOutlineArrowDown />
            </span>
          </Link>
        </div>
        <div className="">
          <div className="ratio ratio-21x9 w-50 mt-3 ml-40 h-100 ">
            <iframe
              src="https://www.youtube.com/watch?v=HFwayPaLTGY"
              title="YouTube video"
              style={{ borderRadius: "30px " }}
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="flex items-center bg-gray-100 w-full h-14">
        <h2 style={{ marginLeft: "30em" }}>
          Our Users Rate Refrens Invoice⭐ 4.8/5 based on 11700+ Ratings
        </h2>
      </div>
      <div
        className="py-20 md:py-20 px-20 md:px-18
       bg-slate-50 flex items-center justify-center"
      >
        <div className="">
          <h2 className="text-2xl md:text-4xl font-semibold mb-6">
            Create Your Invoice in Less than 2 Minutes
          </h2>
          <div className="flex items-center ml-20 flex-col md:flex-row">
            <div className="flex items-center gap-3 mb-4 md:mb-o">
              <p
                className="border-2 rounded-full p-1 h-8 w-8 flex items-center 
              justify-center border-gray-400"
              >
                1
              </p>
              <p>Invoice Details</p>
              <BsChevronRight size={25} />
            </div>

            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <p
                className="border-2 rounded-full p-1 h-8 w-8 flex items-center 
              justify-center border-gray-400"
              >
                3
              </p>
              <p>
                Select Design & Colors <br />
                (Download or Email Invoice)
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Heros;
