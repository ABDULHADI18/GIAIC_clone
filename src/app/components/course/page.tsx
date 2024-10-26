import React from "react";
import Courses1 from "../../../../public/programming_fundamentals.jpg";
import Courses2 from "../../../../public/nextjs.jpg";
import Courses3 from "../../../../public/earn_as_your_learn.jpg";
import Image from "next/image";

const Courses = () => {
  return (
    <div className="">
      <h1 className="border-t-[1px] border-black my-6 mx-6 py-10 font-extrabold text-4xl text-left text-sky-950 ">
        Core Courses Sequence
      </h1>
      <div className="mt-10 space-y-40 md:space-y-0 ml-3 md:flex">
        <div className="border-0 shadow-2xl shadow-black w-[50%] h-[320px] rounded-xl mx-5 md:w-[20%] object-fill hover:scale-105 transition-all duration-300">
          <Image
            src={Courses1}
            alt="Courses Iamge"
            className="w-50 h-[200px] object-cover  rounded-xl md:w-[100%] md:h-[150px] "
          ></Image>
          <p className="text-center font-bold text-xl text-stone-700 py-4">
            Programing Fundamentals
          </p>
        </div>
        <div className="border-0 shadow-2xl shadow-black w-[50%] h-[320px] rounded-xl mx-5 md:w-[20%] object-fill hover:scale-105 transition-all duration-300">
          <Image
            src={Courses2}
            alt="Courses Iamge"
            className="w-50 h-[200px] object-cover  rounded-xl md:w-[100%] md:h-[150px] "
          ></Image>
          <p className="text-center font-bold text-xl text-stone-700 py-4">
            Web2 Using Next.js
          </p>
        </div>
        <div className="border-0 shadow-2xl shadow-black w-[50%] h-[320px] rounded-xl mx-5 md:w-[20%] object-fill hover:scale-105 transition-all duration-300">
          <Image
            src={Courses3}
            alt="Courses Iamge"
            className="w-50 h-[200px] object-cover  rounded-xl md:w-[100%] md:h-[150px] "
          ></Image>
          <p className="text-center font-bold text-xl text-stone-700 py-4">
            Earn As You Learn
          </p>
        </div>
      </div>
    </div>
  );
};

export default Courses;