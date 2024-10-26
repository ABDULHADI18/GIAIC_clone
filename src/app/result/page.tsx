export default function Jobs() {
 return (
   <div>
      <div className="border-2 shadow-2xl shadow-black w-[70%] h-[400px] rounded-xl mx-5 md:w-[50%] object-fill transition-all duration-300">  
    <div className="form-container">
      <h2 className="form-title text-sky-950 text-center font-extrabold text-3xl">Grand Entrance Exam Result</h2>
      
          <p className="text-sky-950 text-left text-1xl font-thin">Registration Number *</p>
          <input className="text-center"
            type="text"
            id="registrationNumber"
            placeholder="Registration Number"
            required
          />
          </div>
          <div className="form-group">
          <p className="text-sky-950 text-left text-1xl font-thin">CNIC or B-Form Number *</p>
          <input className="text-center content-center"
            type="text"
            id="cnic"
            placeholder="CNIC or B-Form Number"
            required
          />
         </div>
         <button type="button" className="px-32 sm:px-11 py-4 rounded-3xl text-white bg-sky-950 sm:rounded-lg hover:translate-y-2 transform transition-all duration-300 text-sm sm:text-lg content-center">
            Get Result</button>
            </div>
       </div>

    );
  };
  