import Link from "next/link";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { BsFillPenFill } from "react-icons/bs";
import { GiAllSeeingEye } from "react-icons/gi";
import { IoIosLogIn } from "react-icons/io";

export default function Nav() {
  const [user, loading] = useAuthState(auth);

  return (
    <nav className="flex justify-between items-center  bg-indigo-900 p-4 border-2 ">
      <Link href="/">
        <div
          className="cursor-pointer flex flex-col items-center text-center p-1 bg-purple-800 m-2
        rounded-lg 
        "
        >
          <GiAllSeeingEye className="text-4xl" />
          <h6 className="font-serif text-xs italic font-thin">InsightStream</h6>
        </div>
      </Link>
      {/* NextJS in guzelligi Root ile ugrasmana gerek yok Link arasina tikladiginda nereye gideceksen 
      direk href in icine yaz o hallder */}
      <div
        className=" flex-col items-center  text-center p-2 m-2
        rounded-lg"
      >
        <p className="text-xs font-serif italic font-thin">
          Empowering voices, fostering understanding.
        </p>
      </div>

      <div className="flex items-center">
        {!user && (
          <Link href={"/auth/login"}>
            <div
          className="cursor-pointer flex flex-col items-center text-center p-1 bg-purple-800 m-2
        rounded-lg 
        " >
             
              <IoIosLogIn className="text-4xl" />
              <h6 className="font-serif text-xs italic font-thin ">SingUp</h6>
            </div>
          </Link>
        )}
        {user && (
          <div
            className="cursor-pointer flex flex-row items-center text-center p-2 bg-purple-800 m-2
          rounded-lg h-14"
          >
            <Link href="/post">
              <div className=" border-2 border-purple-300">
                <BsFillPenFill className="text-5xl inline " />
              </div>
            </Link>

            <Link href="/dashboard">
              <div className=" border-2 border-purple-300 ">
                
                <p className="text-xs font-serif italic font-thin">
                  <img className="" src={user.photoURL} /></p>

              </div>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
