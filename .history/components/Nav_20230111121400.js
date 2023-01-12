import Link from "next/link";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { BsFillPenFill } from "react-icons/bs";
import { GiAllSeeingEye } from "react-icons/gi";
import { FaCashRegister } from "react-icons/fa";

export default function Nav() {
  const [user, loading] = useAuthState(auth);

  return (
    <nav className="flex justify-between items-center  bg-indigo-900 p-4 border-2 ">
      <Link href="/">
        <div
          className="cursor-pointer flex-col items-center text-center p-2 bg-purple-800 m-2
        rounded-lg h-14
        "
        >
          <GiAllSeeingEye className="inline h-full" />
          <p className="text-xs font-serif italic font-thin">InsightStream</p>
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
              className="cursor-pointer flex flex-col items-center  text-center p-2 bg-purple-800 m-2
            rounded-lg"
            >
              <FaCashRegister className="text-5xl inline " />
              <p className=" text-xs font-serif italic font-thin">Join Now</p>
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
