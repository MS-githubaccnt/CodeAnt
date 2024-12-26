import logo from "../assets/logo.png";
import { RepositoryData } from "../data/tileData";
import { ContactData } from "../data/tileData";
import { useState } from "react";
export default function SideBar(){
    const [select,setSelect]= useState(0);
    return(
        <div className="h-full w-[20%] justify-center items-center ">
            <div className="items-center  h-[10%] w-full p-2 flex flex-row overflow-hidden">
                <img className="h-[50%] overflow-hidden" src={logo}></img>
                <p className="text-2xl items-center m-2 truncate">CodeAnt AI</p>
            </div>
            <div className="flex w-full justify-center items-center h-[6%] mt-2">
            <div className="flex flex-row rounded-lg border-2 border-gray-100 h-full w-[80%] justify-between mb-4">
                <p className="h-full truncate">UtkarshDhairyaPathnaya</p>
                <div className="flex h-full w-[15%] items-center justify-center">∨</div>

            </div>
            </div>
            <div className="flex flex-col flex-1 h-[84%] w-full items-center justify-between">
                <div className="flex flex-col h-full w-full items-center ">
                    {
                        RepositoryData.map((tile,index)=>(
                            <div className={`flex p-2 flex-row h-[10%] w-[80%] rounded-lg items-center overflow-hidden mb-4 ${select==index?'bg-blue-600':""}`}
                            onClick={()=>{
                                setSelect(index);
                            }}
                            >
                                {tile.icon}
                                <p className={`ml-4 font-semibold truncate overflow-hidden ${select===index?'text-white':""}`}>{tile.text}</p>

                            </div>
                            
                        ))
                    }

                </div>
                <div className="w-full h-full">
                <div className="flex flex-col h-full w-full items-center justify-end mt-2">
                    {
                        ContactData.map((tile,index)=>(
                            <div className={`flex p-2 flex-row h-[10%] w-[80%] rounded-lg items-center mb-4 overflow-hidden ${select==index+5?'bg-blue-600':""}`}
                            onClick={()=>{
                                setSelect(index+5)

                            }}>
                                {tile.icon}
                                <p className={`ml-4 font-semibold truncate overflow-hidden ${select===index+5?'text-white':""}`}>{tile.text}</p>

                            </div>
                            
                        ))
                    }

                </div>
                </div>

            </div>

        </div>
    )
}