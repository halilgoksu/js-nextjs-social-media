import Link from "next/link";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { MdPostAdd } from "react-icons/md";
import { GiAllSeeingEye } from "react-icons/gi";
import { IoIosLogIn } from "react-icons/io";

export default function Nav() {
  const [user, loading] = useAuthState(auth);
  //auth 

  return (
    <nav className="flex flex-col justify-between items-center  bg-indigo-900 p-4   text-purple-400">
      <div className="flex justify-between items-center mx-w:2/3">
      <Link href="/">
        <div className="cursor-pointer flex flex-col items-center text-center p-1 bg-purple-800 m-2
          rounded-lg">
          <GiAllSeeingEye className="text-4xl" />
        </div>
      </Link>
       {/* NextJS in guzelligi Root ile ugrasmana gerek yok Link arasina tikladiginda nereye gideceksen 
       direk href in icine yaz o hallder */}
      <div
        className="empowering items-center  text-center p-2 m-2 w-3/2" >
        <p className="text-xs font-serif italic font-thin">
           Empowering voices, fostering understanding.
        </p>
      </div>

      <div className="flex items-center">
        {!user && (
          <Link href={"/auth/login"}>
            <div
              className="cursor-pointer flex flex-col items-center text-center p-1 bg-purple-800 m-2
              rounded-lg ">
              <IoIosLogIn className="text-4xl" />
            </div>
          </Link>
        )}
        {user && (
          <div
             className="post-logo cursor-pointer flex flex-row items-center text-center p-1 bg-purple-800 m-2
              rounded-lg w-40 ">
            <Link href="/post">
              <div className="cursor-pointer flex flex-col items-center text-center h-full w-full ">
                <MdPostAdd className="text-4xl text-purple-300 border-2 border-purple-700 p-1 rounded-full" />
              </div>
            </Link>

            <Link href="/dashboard">
              <div className="cursor-pointer flex flex-col items-center text-center h-full w-full">
                <img
                  className="h-9 w-9 rounded-full border-2"
                  src={user.photoURL}/>
              </div>
            </Link>
          </div>
        )}
      </div>

     </div>
     <div className="empowerdown items-center  text-center  hidden w-full">
        <p className=" text-xs font-serif italic font-thin">
          Empowering voices, fostering understanding.
        </p>
      </div>
    </nav>
  );
}
