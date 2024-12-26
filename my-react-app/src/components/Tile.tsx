import { SaaSTile } from "../data/tileData"
import { SelfHostedTile } from "../data/tileData"
import { TileProps } from "../types";
export default function Tile({isSaas}:TileProps){
    const data=isSaas?SaaSTile:SelfHostedTile;
    return(
        <div className="flex flex-col h-full w-full items-center " >
            {data.map((tile)=>(
            <div className="flex items-center justify-center flex-row w-1/2  mb-2 h-1/5 border-gray-100 rounded-lg border-2">
            <img src={tile.icon}></img>
            <p className="pl-2 font-semibold">{tile.text}</p>
            </div>))}
        </div>
    );
}