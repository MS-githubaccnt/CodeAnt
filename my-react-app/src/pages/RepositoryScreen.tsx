import SideBar from "../components/SideBar";
import { IoIosSearch } from "react-icons/io";
import { FiRefreshCcw } from "react-icons/fi";
import { IoAdd } from "react-icons/io5";
import { RepoData} from "../data/tileData";
import Tab from "../components/Tab";
export default function RepositoryScreen(){
    return(
        <div className="h-full w-full flex flex-row">
            <SideBar/>
            <div className="w-full bg-gray-100">
            <div className="w-90% h-[95%] mt-4 mx-4 bg-white rounded-lg border-2 border-gray overflow-auto">
                <div className="flex flex-row h-[18%] border-b-2 border-gray overflow-hidden">
                    <div className="h-full w-1/2 pl-6">
                    <p className=" text-xl text-left font-semibold mt-4">
                        Repositories
                    </p>
                    <p className="text-gray-600 text-left text-sm" >33 total repositories</p>
                    <div className="flex flex-row mt-4 p-2 border-gray border-2 rounded-lg w-1/2 h-1/3 items-center">
                    <IoIosSearch/>
                    <input className="ml-2 focus:outline-none focus:ring-0 w-full"
                    placeholder="Search Repositories"/>
                    </div>
                    </div>
                    <div className="flex flex-row h-full w-1/2 justify-end ">
                    <div className="flex flex-row h-[30%] w-1/5 border-gray rounded-lg border-2 mt-6 mx-2 items-center">
                    <FiRefreshCcw className="m-2"/>
                    <p className="truncate">Refresh All</p>
                    </div>
                    <div className="flex flex-row h-[30%] w-[26%] border-gray rounded-lg border-2 mt-6 mx-2 bg-blue-600 items-center">
                    <IoAdd className="m-2 text-white"/>
                    <p className="text-white truncate">Add Repository</p>
                    </div>
                    </div>
                </div>
                <div className="w-full h-[84%]">
                    {
                        RepoData.map((repo)=>(
                            <Tab
                           name={repo.name}
                           access={repo.access}
                           languages={repo.languages}
                           size={repo.size}
                           updates={repo.updates}
                           />
                        ))
                    }
                    

                </div>
            </div>
            </div>
            


        </div>
    )
}