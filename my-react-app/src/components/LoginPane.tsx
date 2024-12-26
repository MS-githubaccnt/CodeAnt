import logo from "../assets/logo.png";
import { useState } from "react";
import Tile from "./Tile";

export default function LoginPane(){
    const [isSaas,setIsSaas]=useState(true);
    return(
        <div className="flex justify-center  w-full h-full">
            <div className="mt-[10%] w-[90%] border-gray-100 border-2 h-[70%] rounded-lg bg-white overflow-hidden">
                <div className="w-full h-[40%] border-gray-200 border-b-2 flex flex-col overflow-hidden">
                 <div className="flex w-full h-[30%] justify-center items-center">
                    <img className='mt-4'src={logo}></img>
                    <p className="ml-2 h-full mt-[10%] text-center text-xl ">CodeAnt AI</p>
                 </div>
                 <div className="flex-col w-full h-[70%] overflow-hidden">
                    <p className="pt-4 text-3xl font-semibold truncate mt-2">Welcome to CodeAnt AI</p>
                    <div className="flex items-center justify-center w-full h-[70%] overflow-hidden">
                        <div className="flex flex-row w-[90%] h-1/2 rounded-lg bg-gray-50 border-2 border-gray-100 overflow-hidden" >
                        <div className={`flex w-1/2 font-semibold h-full rounded-lg items-center justify-center ${isSaas===true?"bg-blue-600":""} `}
                        onClick={()=>{
                            setIsSaas(true);
                        }}>
                        <p className={`${isSaas?"text-gray-50":""}`}> SAAS</p>
                        </div>
                        <div className={`flex w-1/2 font-semibold h-full rounded-lg items-center justify-center ${isSaas===false?"bg-blue-600":""} `}
                        onClick={()=>{
                            setIsSaas(false);
                        }}>
                        <p className={`${!isSaas?"text-gray-50":""}`}>Self Hosted</p>
                        </div>

                        </div>
                    </div>

                </div>

                </div>
                <div className="w-full h-[60%] items-center justify-center pt-4 ">{
                 <Tile isSaas={isSaas}></Tile>}
                    
                    </div>

            </div>

        </div>
    )

}