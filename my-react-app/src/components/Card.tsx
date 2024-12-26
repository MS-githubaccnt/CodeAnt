import logo from "../assets/logo.png";
import graph from "../assets/graph.png";
export default function Card(){
    return(
        <div className="relative flex flex-row justify-center items-center h-[80%] w-full">
            <div className="h-full w-[25%]"></div>
    <div className=" flex bg-white flex-col mr-[-26%] -mb-8 overflow-hidden h-[25%] w-1/2 shadow-xl drop-shadow-custom rounded-lg font-inter z-0">
        <div className="px-2 z-0 flex items-center text-left text-l font-semibold bw-full h-[38%] border-b-2 border-gray-300 overflow-hidden ">
       <img src={logo} className="w-[10%] [h-10%]">
       </img> 
       <p className=" p-2 mr-10 z-0 truncate">AI to Detect & Autofix Bad Code</p>
        </div>
       <div className="flex flex-1 w-full z-0 flex-row justify-evenly" >
        <div className="flex flex-1 flex-col justify-center">
            <p className="font-bold">30+</p>
            <p className="text-xs">Language Support</p>

        </div>
        <div className="flex flex-1 flex-col justify-center">
            <p className="font-bold">10K+</p>
            <p className="text-xs">Developers</p>

        </div>
        <div className="flex flex-1 flex-col justify-center">
            <p className="font-bold">100K+</p>
            <p className="text-xs">Hours Saved</p>

        </div>
       </div >
    </div >
    <div className="flex flex-col w-1/2 h-full">
        <div className="w-full h-[63%]"></div>
    <div className=" flex flex-row bg-white  h-1/5 w-[62%] shadow-xl rounded-lg font-inter z-10 mix-blend-normal drop-shadow-custom overflow-hidden">
    <div className="h-full w-[60%] flex flex-col">
        <div className="flex items-center flex-1 ">
            <img className='h-[88%] pl-4 pt-2' src={graph}></img>
        </div>
        <div className="flex flex-col flex-1 items-center justify-evenly">
            <p className="w-full h-[30%]  font-semibold items-center justify-center text-xs">Issues Fixed</p>
            <p className="w-full h-[70%] font-bold  items-center text-xl">500K+</p>
        </div>
    </div>
    <div className="flex flex-1 pt-4 flex-col">
        <p className="text-blue-600 font-bold">↑ 14%</p>
        <p className="text-xs">This week</p>
    </div>
    </div>
    </div>

    </div>
    )
}