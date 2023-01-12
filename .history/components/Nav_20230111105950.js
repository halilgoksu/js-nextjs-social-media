import Link from "next/link";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { BsFillPenFill } from "react-icons/bs";
import { GiAllSeeingEye } from "react-icons/gi";

export default function Nav() {
  const [user, loading] = useAuthState(auth);

  return (
    <nav className="flex justify-between  items-center  py-10 bg-blue-900 w-1/2 ">
      <Link href="/" >
        <div className="cursor-pointer flex-col items-center justify-around  text-center p-2 bg-orange-300 m-2">
          <GiAllSeeingEye className="text-5xl inline"/>
          <p className="text-xs font-serif italic font-thin">tell me a secret</p>
        </div>
      </Link>
      {/* NextJS in guzelligi Root ile ugrasmana gerek yok Link arasina tikladiginda nereye gideceksen 
      direk href in icine yaz o hallder */}
    
      <div className="flex items-center">
        {!user && (
          <Link href={"/auth/login"}>
        <div className="cursor-pointer flex-col items-center justify-around  text-center p-2 bg-orange-300 m-2">
            <h2 className="text-xl inline">Join Now</h2>        
            </div>
          </Link>
        )}
        {user && (
          <div
            className="flex items-center gap-2 bg-blue-200  btn btn-blue-500 first-letter 
          text-black font-bold py-2 px-4 border-2 border-red-900"
          >
            <Link href="/post">
              <button
                className="bg-white btn btn-blue-500 hover:bg-blue-400 first-letter 
             text-black font-bold py-2 px-4 rounded text-sm"
              >
              <BsFillPenFill className="" />
              </button>
            </Link>

            <Link href="/dashboard">
              <img
                className="bg-white btn btn-blue-500 hover:bg-blue-400 first-letter 
               text-black h-10  p-1  px-4 rounded m-2 cursor-pointer"
                src={user.photoURL}
              />
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
