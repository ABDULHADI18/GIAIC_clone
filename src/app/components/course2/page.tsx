import courses1 from "../../../../public/AI.jpg";
import courses2 from "../../../../public/metaverse.jpg";
import courses3 from "../../../../public/cloudComputing.jpg";
import courses4 from "../../../../public//iot.jpg";
import courses5 from "../../../../public/genomics.jpg";
import courses6 from "../../../../public/automation.jpg"
import Image from "next/image";

const Advance_courses = () => {
  return (
    <div className=" my-40 space-y-40 md:space-y-16">
      <h1 className="border-t-[1px] border-black my-6 mx-6 py-10 font-extrabold text-4xl text-left text-sky-950 ">
        Advanced Courses
      </h1>
      <div className="mt-10 space-y-40 md:space-y-0 ml-3 md:flex">
        <div className="border-0 shadow-2xl shadow-black w-[50%] h-[320px] rounded-xl mx-5 md:w-[20%] object-fill hover:scale-105 transition-all duration-300">
          <Image
            src={courses1}
            alt="Courses Iamge"
            className="w-50 h-[200px] object-cover  rounded-xl md:w-[100%] md:h-[150px] "
          ></Image>
          <p className="text-center font-bold text-xl text-stone-700 py-4">
            Artificial Inteligence
          </p>
        </div>
        <div className="border-0 shadow-2xl shadow-black w-[50%] h-[320px] rounded-xl mx-5 md:w-[20%] object-fill hover:scale-105 transition-all duration-300">
          <Image
            src={courses2}
            alt="Courses Iamge"
            className="w-50 h-[200px] object-cover  rounded-xl md:w-[100%] md:h-[150px] "
          ></Image>
          <p className="text-center font-bold text-xl text-stone-700 py-4">
            Web 3 and Metaverse
          </p>
        </div>
       
        <div className="border-0 shadow-2xl shadow-black w-[50%] h-[320px] rounded-xl mx-5 md:w-[20%] object-fill hover:scale-105 transition-all duration-300">
          <Image
            src={courses3}
            alt="Courses Iamge"
            className="w-50 h-[200px] object-cover  rounded-xl md:w-[100%] md:h-[150px] "
          ></Image>
          <p className="text-center font-bold text-xl text-stone-700 py-4">
            Cloud Native Computing
          </p>
        </div>
      </div>
       <div className="mt-10 space-y-40 md:space-y-0 ml-3 md:flex">
        <div className="border-0 shadow-2xl shadow-black w-[50%] h-[320px] rounded-xl mx-5 md:w-[20%] object-fill hover:scale-105 transition-all duration-300">
          <Image
            src={courses4}
            alt="Courses Iamge"
            className="w-50 h-[200px] object-cover  rounded-xl md:w-[100%] md:h-[150px] "
          ></Image>
          <p className="text-center font-bold text-xl text-stone-700 py-4">
            Ambiant Computing and (IOT)
          </p>
        </div>
        
        <div className="border-0 shadow-2xl shadow-black w-[50%] h-[320px] rounded-xl mx-5 md:w-[20%] object-fill hover:scale-105 transition-all duration-300">
          <Image
            src={courses5}
            alt="Courses Iamge"
            className="w-50 h-[200px] object-cover  rounded-xl md:w-[100%] md:h-[150px] "
          ></Image>
          <p className="text-center font-bold text-xl text-stone-700 py-4">
            Genomics and Bioinformatics
          </p>
        </div>
        <div className="border-0 shadow-2xl shadow-black w-[50%] h-[320px] rounded-xl mx-5 md:w-[20%] object-fill hover:scale-105 transition-all duration-300">
          <Image
            src={courses6}
            alt="Courses Iamge"
            className="w-50 h-[200px] object-cover  rounded-xl md:w-[100%] md:h-[150px] "
          ></Image>
          <p className="text-center font-bold text-xl text-stone-700 py-4">
            Network Programmability and Automation
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advance_courses;