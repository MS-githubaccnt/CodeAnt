import { TabProps } from "../types";
export default function Tab({name,access,languages,size,updates,}:TabProps){
    return (
        <div className="flex flex-col gap-3  bg-white md:p-5 p-3 transition-all ease-linear duration-50 border-b-2 border-gray hover:bg-[#f5f5f5]">
          <div className="flex flex-row items-center gap-3">
            <p className="text-[1.2rem]">{name}</p>
            <p className="border-[1.2px] border-[#bcd7fd] text-[.8rem] rounded-2xl px-[10px] bg-[#eff8ff]  text-[#5c94e2]">
              {access}
            </p>
          </div>
          <div className="flex flex-row gap-5 md:gap-10">
            <div className="flex flex-row gap-2 items-center">
              <p className="text-gray-500 text-sm">{languages}</p>
              <div className="rounded-[5rem] bg-[#1470ef] w-2 h-2"></div>
            </div>
            <div className="flex gap-2 flex-row items-center">
              <img src="/database.png" alt="" />
              <p>{size}</p>
            </div>
            <p>Updated {updates} days ago</p>
          </div>
        </div>
      );
}