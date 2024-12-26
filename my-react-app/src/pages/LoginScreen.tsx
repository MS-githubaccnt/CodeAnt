import Subtract from '../assets/Subtract.png';
import Card from '../components/Card.tsx'
import LoginPane from '../components/LoginPane.tsx';

export default function LoginScreen(){
    return(
        <div className="flex flex-row w-full h-full bg-white">
            <div className=" relative flex-1 ">
            <Card >
            </Card>
                <div className="absolute bottom-0 left-0 h-1/3 w-2/5">
                <img  src={Subtract} className='w-full h-full object-contain'/>
                </div>
            </div>
            <div className="flex-1 bg-zinc-50" >
                <LoginPane></LoginPane>
            </div>
        </div>
    )

}