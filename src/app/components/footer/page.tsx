const Footer = () => {
    return (
      <div className="lg:flex px-10 lg:px-0 mt-12 bg-gray-200 w-full h-[600px] lg:h-[400px] justify-evenly py-14 space-y-8">
        <div className="space-y-2 lg:text-lg">
          <h1 className="font-bold xl:text-xl text-gray-800">Core Courses</h1>
          <p className="text-black cursor-pointer w-[300px] h-8 transition-all duration-200">
            Programing Fundamentals
          </p>
          <p className="text-black cursor-pointer w-[300px] h-8 transition-all duration-200">
            Web 2 Using Next.js
          </p>
          <p className="text-black cursor-pointer w-[300px] h-8 transition-all duration-200">
            Earn as You Learn
          </p>
        </div>
        <div className="space-y-2 lg:text-lg">
          <h1 className="font-bold xl:text-xl text-gray-800">Advanced Courses</h1>
          <p className="text-black cursor-pointer w-[300px] h-8 transition-all duration-200">
            Web 3 and Metaverse
          </p>
          <p className="text-black cursor-pointer w-[300px] h-8 transition-all duration-200">
            Cloud Native Computing
          </p>
          <p className="text-black cursor-pointer w-[300px] h-8 transition-all duration-200">
            Artificial Intelligence (AI) 
          </p>
          <p className="text-black cursor-pointer w-[300px] h-8 transition-all duration-200">
            Ambient Computing and (IOT)
          </p>
          <p className="text-black cursor-pointer w-[300px] h-8 transition-all duration-200">
            Genomics and Bioinformatics
          </p>
          <p className="text-black cursor-pointer w-[350px] h-8 transition-all duration-200">
            Network Programmability and Automation
          </p>
        </div>
        <div className="space-y-2 lg:text-lg top-4">
          <h1 className="font-bold xl:text-xl text-gray-800">Social Links</h1>
          <p className="cursor-pointer underline text-blue-600 hover:text-blue-800">
            education@governorsindh.com
          </p>
        </div>
        </div>
      
    );
  };
  
  export default Footer;
