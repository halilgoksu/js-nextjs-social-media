import Link from "next/link";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { BsFillPenFill } from "react-icons/bs";
import { GiAllSeeingEye } from "react-icons/gi";
import { FaCashRegister } from "react-icons/fa";

export default function Nav() {
  const [user, loading] = useAuthState(auth);

  return (
    <nav className="flex justify-between items-center  bg-indigo-900 p-4">
      <Link href="/">
        <div
          className="cursor-pointer flex-col items-center text-center p-2 bg-purple-800 m-2
        rounded-lg
        "
        >
          <GiAllSeeingEye className="text-5xl inline " />
          <p className="text-xs font-serif italic font-thin">InsightStream</p>
        </div>
      </Link>
      {/* NextJS in guzelligi Root ile ugrasmana gerek yok Link arasina tikladiginda nereye gideceksen 
      direk href in icine yaz o hallder */}
      <div
        className=" flex-col items-center  text-center p-2 m-2
        rounded-lg">
        <p className="text-xs font-serif italic font-thin">
          Empowering voices, fostering understanding.
        </p>
      </div>

      <div className="flex items-center">
        {!user && (
          <Link href={"/auth/login"}>
            <div className="cursor-pointer flex-col items-center  text-center p-2 bg-purple-800 m-2
            rounded-lg
            "
            >
              <FaCashRegister className="text-5xl inline " />
              <p className=" text-xs font-serif italic font-thin">Join Now</p>
            </div>
          </Link>
        )}
        {user && (
          <div className="cursor-pointer flex-row items-center text-center p-2 bg-purple-800 m-2
          rounded-lg "
          >
            <Link href="/post">
              <div className="rounded-full border-2 border-purple-300 p-2">
              <BsFillPenFill className="text-lg inline border-2 " />
              </div>
            </Link>

            <Link href="/dashboard" >
              <img className="flex rounded-full "
                src={user.photoURL}
              />
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
