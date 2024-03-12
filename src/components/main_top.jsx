import React from "react";

function Main_top() {
  return (
    <div className=" w-full h-[90vh] bg-slate-100 border-zinc-800 border-b flex items-center px-10">
      <div className=" w-1/2 h-full flex items-center">
      <div className="w-[500px] h-[60%] overflow-hidden bg-red-400/0 rounded-[50%] mt flex items-center justify-center border border-zinc-800 relative">
        <div className="bg-yellow-300/0 z-0 w-[95%] h-[100%] absolute rounded-[50%] flex items-center justify-center border border-zinc-800"></div>
        <div className="bg-yellow-300/0 z-0 w-[90%] h-[100%] absolute rounded-[50%] flex items-center justify-center border border-zinc-800"></div>
        <div className="bg-yellow-300/0 z-0 w-[85%] h-[100%] absolute rounded-[50%] flex items-center justify-center border border-zinc-800"></div>
        <div className="bg-yellow-300/0 z-0 w-[80%] h-[100%] absolute rounded-[50%] flex items-center justify-center border border-zinc-800"></div>
        <div className="bg-yellow-300/0 z-0 w-[74%] h-[100%] absolute rounded-[50%] flex items-center justify-center border border-zinc-800"></div>
        <div className="bg-yellow-300/0 z-0 w-[65%] h-[100%] absolute rounded-[50%] flex items-center justify-center border border-zinc-800"></div>
        <div className="bg-yellow-300/0 z-0 w-[55%] h-[100%] absolute rounded-[50%] flex items-center justify-center border border-zinc-800"></div>
        <div className="bg-yellow-300/0 z-0 w-[45%] h-[100%] absolute rounded-[50%] flex items-center justify-center border border-zinc-800"></div>
        <div className="bg-yellow-300/0 z-0 w-[35%] h-[100%] absolute rounded-[50%] flex items-center justify-center border border-zinc-800"></div>
        <div className="bg-yellow-300/0 z-0 w-[23%] h-[100%] absolute rounded-[50%] flex items-center justify-center border border-zinc-800"></div>
        <div className="bg-yellow-300/0 z-0 w-[7%] h-[100%] absolute rounded-[50%] flex items-center justify-center border border-zinc-800"></div>
        <h1 className=" z-50 absolute text-[12vw] font-bold tracking-tighter w-[50%] break-words leading-[19vh]">PLICK</h1>
      </div>
      </div>
      <div className=" w-1/2 h-fit">
        <h1 className="text-[130px] leading-[15vh] text-end font-bold tracking-tighter">START <br /> YOUR <br /> JOURNEY</h1>
        <p className="text-end mt-2 font-medium tracking-tighter">YOUR BEST WORK DOESN'T DESERVE A SPEED LIMIT.</p>
        <p className="text-end mt-2 font-medium tracking-tighter leading-4 text-[0.9rem]">AS A PROVIDER OF WEB DEVELOPMENT SERVICES TAILORED FOR STUDENTS, OUR <br /> FOCUS IS ON CREATIN CUSTOM SOLUTIONS TO MEET THE UNIQUE NEEDS AND <br /> GOALS OF EDUCTIONAL INSTITUTIONS, STUDENT ORGANIZATIONS, AND INDIVIDUAL STUDENTS.</p>
      <div className=" w-full h-14 border border-zinc-800 mt-9 flex items-center justify-center font-medium hover:bg-zinc-800 hover:text-zinc-100 cursor-pointer">START NOW</div>
      </div>
    </div>
  );
}

export default Main_top;
